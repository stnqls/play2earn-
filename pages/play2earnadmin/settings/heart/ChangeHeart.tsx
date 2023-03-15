import axios from "axios";
import { useEffect, useState } from "react";
import { refreshToken } from "../../../../lib/refreshToken";

import "./ChangeHeart.scss";

const ChangeHeart = () => {
  const [time, setTime] = useState();
  const [chTime, setChTime] = useState("");
  let changeMin = Number(time) / 60;

  function getTimeInfo() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/settings/heart",
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setTime(res.data.hcharge_interval);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getTimeInfo);
          }
        }
      });
  }

  function changeTime() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "PATCH",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/settings/heart",
      headers,
      data: {
        hcharge_interval: Number(chTime) * 60,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("하트 충전시간이 변경되었습니다.");
          setTime(res.data.hcharge_interval);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(changeTime);
          }
        }
      });
  }

  useEffect(() => {
    getTimeInfo();
  }, []);

  return (
    <div className="admin-change-heart">
      <div className="admin-change-heart__show">
        <div className="admin-change-heart__show__title">
          현재 하트 충전시간
        </div>
        <div className="admin-change-heart__show__time">
          충전 시간 : {changeMin}분
        </div>
      </div>
      <div className="admin-change-heart__change">
        <div className="admin-change-heart__change__title">
          변경 하트 충전시간
        </div>
        <div className="admin-change-heart__change__time">
          충전 시간 :
          <input
            type="number"
            onChange={(e) => {
              setChTime(e.target.value);
            }}
          />
        </div>
        <div className="admin-change-heart__change__info">
          * 분단위로 입력해주세요.
        </div>
        <button
          type="button"
          className="admin-change-heart__change__btn"
          onClick={() => {
            changeTime();
          }}
        >
          변경하기
        </button>
      </div>
    </div>
  );
};

export default ChangeHeart;

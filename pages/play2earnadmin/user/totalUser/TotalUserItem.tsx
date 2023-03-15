import React, { useState } from "react";
import axios from "axios";
import { refreshToken } from "../../../../lib/refreshToken";
import router from "next/router";

const TotalUserItem = (props: any) => {
  const [edit, setEdit] = useState(false);
  const [point, setPoint]: any = useState(props.point);
  const [heart, setHeart]: any = useState(props.heart);

  function modifyInfo() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "PATCH",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/users/${props.user_code}`,
      headers,
      data: {
        point: point,
        heart: heart,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("정보가 수정되었습니다.");
          setTimeout(() => {
            setEdit(false);
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(modifyInfo);
          }
        }
      });
  }

  function changeRole() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "PATCH",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/users/${props.user_code}/change`,
      headers,
      data: {
        kinds: 1,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          alert("정보가 수정되었습니다.");
          router.reload();
        }
      })
      .catch((err) => {
        if (err.response.data.errCode === 101) {
          refreshToken(changeRole);
        } else if (err.response.data.errCode === 702) {
          window.alert("추천인이 존재해 변경이 불가능합니다.");
        }
      });
  }

  return (
    <tr className="admin-total-user__tbody__tr">
      <td>
        {edit ? (
          <button
            type="button"
            onClick={() => {
              modifyInfo();
            }}
          >
            수정완료
          </button>
        ) : (
          <img
            src="/images/icons/icon_edit.png"
            alt="edit"
            onClick={() => {
              setEdit(true);
              props.setUserCode(props.user_code);
            }}
          />
        )}
        {props.user_code}
      </td>
      <td>{props.email}</td>
      <td>
        {edit ? (
          <input
            type="text"
            value={point}
            onChange={(e) => {
              setPoint(e.target.value);
            }}
          />
        ) : (
          point
        )}
      </td>
      <td>
        {edit ? (
          <input
            type="text"
            value={heart}
            onChange={(e) => {
              setHeart(e.target.value);
            }}
          />
        ) : (
          heart
        )}
      </td>

      <td>
        <button
          type="button"
          onClick={() => {
            props.setModal(true);
            props.setUserCode(props.user_code);
          }}
        >
          초대내역
        </button>
        <button
          type="button"
          onClick={() => {
            props.setPointModal(true);
            props.setUserCode(props.user_code);
            props.setPoint(point);
          }}
        >
          포인트내역
        </button>
      </td>
      <td>{props.created}</td>

      <td>
        {props.kinds === 2 && (
          <button
            type="button"
            onClick={() => {
              changeRole();
            }}
          >
            총판전환
          </button>
        )}
      </td>
    </tr>
  );
};

export default TotalUserItem;

import axios from "axios";
import { useEffect, useState } from "react";
import { refreshToken } from "../../../../lib/refreshToken";

import "./ChangePoint.scss";

const ChangePoint = () => {
  const [adPoint, setAdPoint]: any = useState();
  const [rfAdPoint, setRfAdPoint]: any = useState();
  const [rtAdPoint, setRtAdPoint]: any = useState();
  const [recoPoint, setRecoPoint]: any = useState();
  const [rtRecoPoint, setRtRecoPoint]: any = useState();
  const [refPoint, setRefPoint]: any = useState();

  const [chAdPoint, setCHAdPoint]: any = useState();
  const [chRfAdPoint, setChRfAdPoint]: any = useState();
  const [chRtAdPoint, setChRtAdPoint]: any = useState();
  const [chRecoPoint, setChRecoPoint]: any = useState();
  const [chRtRecoPoint, setChRtRecoPoint]: any = useState();
  const [chRefPoint, setChRefPoint]: any = useState();

  function getPoint() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/settings/point",
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setAdPoint(res.data.advt_point);
          setRfAdPoint(res.data.rf_ad_point);
          setRtAdPoint(res.data.rt_ad_point);
          setRecoPoint(res.data.reco_point);
          setRtRecoPoint(res.data.rt_reco_point);
          setRefPoint(res.data.ref_point);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getPoint);
          }
        }
      });
  }

  function changePoint() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "PATCH",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/settings/point",
      headers,
      data: {
        advt_point: chAdPoint === "" ? adPoint : chAdPoint,
        reco_point: chRecoPoint === "" ? recoPoint : chRecoPoint,
        ref_point: chRefPoint === "" ? refPoint : chRefPoint,
        rt_reco_point: chRtRecoPoint === "" ? rtRecoPoint : chRtRecoPoint,
        rf_ad_point: chRfAdPoint === "" ? rfAdPoint : chRfAdPoint,
        rt_ad_point: chRtAdPoint === "" ? rtAdPoint : chRtAdPoint,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("변경이 완료되었습니다.");
          if (res.data.advt_point) {
            setAdPoint(res.data.advt_point);
          }
          if (res.data.reco_point) {
            setRecoPoint(res.data.reco_point);
          }
          if (res.data.ref_point) {
            setRefPoint(res.data.ref_point);
          }
          if (res.data.rt_reco_point) {
            setRtRecoPoint(res.data.rt_reco_point);
          }
          if (res.data.rf_ad_point) {
            setRfAdPoint(res.data.rf_ad_point);
          }
          if (res.data.rt_ad_point) {
            setRtAdPoint(res.data.rt_ad_point);
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getPoint);
          }
        }
      });
  }

  useEffect(() => {
    getPoint();
  }, []);

  return (
    <div className="admin-change-point">
      <div className="admin-change-point__show">
        <div className="admin-change-point__show__title">현재 지급 포인트</div>
        <ul className="admin-change-point__show__list">
          <li className="admin-change-point__show__list__item">
            회원가입 포인트 : {recoPoint}P
          </li>
          <li className="admin-change-point__show__list__item">
            광고시청 포인트(총판) : {rtAdPoint}P
          </li>
          <li className="admin-change-point__show__list__item">
            광고시청 포인트(추천인) : {rfAdPoint}P
          </li>
          <li className="admin-change-point__show__list__item">
            광고시청 포인트 : {adPoint}P
          </li>
          <li className="admin-change-point__show__list__item">
            추천인 포인트(총판) : {rtRecoPoint}P
          </li>
          <li className="admin-change-point__show__list__item">
            추천인 포인트 : {refPoint}P
          </li>
        </ul>
      </div>

      <div className="admin-change-point__change">
        <div className="admin-change-point__change__title">변경 포인트</div>
        <ul className="admin-change-point__change__list">
          <li className="admin-change-point__change__list__item">
            회원가입 포인트 :
            <input
              type="number"
              defaultValue={recoPoint}
              onChange={(e) => {
                setChRecoPoint(e.target.value);
              }}
            />
          </li>
          <li className="admin-change-point__change__list__item">
            광고시청 포인트(총판) :
            <input
              type="number"
              defaultValue={rtAdPoint}
              onChange={(e) => {
                setChRtAdPoint(e.target.value);
              }}
            />
          </li>
          <li className="admin-change-point__change__list__item">
            광고시청 포인트(추천인) :
            <input
              type="number"
              defaultValue={rfAdPoint}
              onChange={(e) => {
                setChRfAdPoint(e.target.value);
              }}
            />
          </li>
          <li className="admin-change-point__change__list__item">
            광고시청 포인트 :
            <input
              type="number"
              defaultValue={adPoint}
              onChange={(e) => {
                setCHAdPoint(e.target.value);
              }}
            />
          </li>
          <li className="admin-change-point__change__list__item">
            추천인 포인트(총판) :
            <input
              type="number"
              defaultValue={rtRecoPoint}
              onChange={(e) => {
                setChRtRecoPoint(e.target.value);
              }}
            />
          </li>
          <li className="admin-change-point__change__list__item">
            추천인 포인트 :
            <input
              type="number"
              defaultValue={refPoint}
              onChange={(e) => {
                setChRefPoint(e.target.value);
              }}
            />
          </li>
        </ul>
        <button
          type="button"
          className="admin-change-point__change__btn"
          onClick={() => {
            changePoint();
          }}
        >
          변경하기
        </button>
      </div>
    </div>
  );
};

export default ChangePoint;

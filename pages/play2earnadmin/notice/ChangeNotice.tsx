import axios from "axios";
import { useEffect, useState } from "react";
import { refreshToken } from "../../../lib/refreshToken";

import "./ChangeNotice.scss";

const ChangeNotice = () => {
  const [isChecked, setIsChecked] = useState("");
  const [notice, setNotice] = useState("");
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");

  const [chTitle, setChTitle] = useState("");
  const [chContent, setChContent] = useState("");

  function getNoticeInfo() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/settings/notice",
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          let isShow: string = res.data.notice_status === "Y" ? "보임" : "숨김";
          setIsChecked(isShow);
          setNotice(res.data.notice_status);
          setTitle(res.data.notice_title);
          setContent(res.data.notice);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getNoticeInfo);
          }
        }
      });
  }

  function changeNotice() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "PATCH",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/settings/notice",
      headers,
      data: {
        notice_status: isChecked === "보임" ? "Y" : "N",
        notice_title: chTitle,
        notice: chContent,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("공지사항 내용이 변경되었습니다.");
          // let isShow: string = res.data.notice_status === "Y" ? "보임" : "숨김";
          setNotice(res.data.notice_status);
          setTitle(res.data.notice_title);
          setContent(res.data.notice);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(changeNotice);
          }
        }
      });
  }

  function createMarkup() {
    return { __html: content };
  }

  useEffect(() => {
    getNoticeInfo();
  }, []);

  return (
    <div className="admin-change-notice">
      <div className="admin-change-notice__show">
        <div className="admin-change-notice__show__title">현재 공지사항</div>
        <div className="admin-change-notice__show__content">
          <div className="admin-change-notice__show__content__chb">
            공지사항 보이기/숨기기 : {notice === "Y" ? "보임" : "숨김"}
          </div>
          <div className="admin-change-notice__show__content__title">
            제목 : {title}
          </div>
          <span>내용 </span>
          <div
            className="admin-change-notice__show__content__text"
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
        </div>
      </div>

      <div className="admin-change-notice__change">
        <div className="admin-change-notice__change__title">변경 공지사항</div>
        <div className="admin-change-notice__change__content">
          <div className="admin-change-notice__change__content__chb">
            공지사항 보이기/숨기기 :
            <input
              type="checkbox"
              id="showChb"
              onChange={(e) => {
                if (e.target.checked) {
                  setIsChecked("보임");
                } else {
                  setIsChecked("숨김");
                }
              }}
              checked={isChecked === "보임"}
            />
            <label htmlFor="showChb">{isChecked}</label>
          </div>
          <div className="admin-change-notice__change__content__title">
            제목
            <input
              type="text"
              maxLength={20}
              onChange={(e) => {
                setChTitle(e.target.value);
              }}
            />
          </div>
          <div className="admin-change-notice__change__content__text">
            내용
            <textarea
              onChange={(e) => {
                setChContent(e.target.value);
              }}
              maxLength={180}
            ></textarea>
          </div>
        </div>
        <button
          className="admin-change-notice__change__btn"
          onClick={() => {
            changeNotice();
          }}
        >
          변경하기
        </button>
      </div>
    </div>
  );
};

export default ChangeNotice;

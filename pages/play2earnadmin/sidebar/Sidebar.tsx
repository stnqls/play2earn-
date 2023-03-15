import React, { useState } from "react";
// import down from "./arrow-down.png";
// import up from "./arrow-up.png";
import Link from "next/link";
import "./Sidebar.scss";

function Sidebar() {
  const [toggle, setToggle] = useState([true, true, true, true, true]);

  const toggleChange = (index: any) => {
    setToggle((prestate) => ({
      ...prestate,
      [index]: !prestate[index],
    }));
  };

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list__top">
          <Link href="/play2earnadmin">
            <span className="sidebar__list__top__span">
              이웃사천
              <br />
              관리자시스템
            </span>
          </Link>
        </li>
        <li className="sidebar__list__item">
          <div
            className="sidebar__list__item__title"
            onClick={() => toggleChange(0)}
          >
            <span className="sidebar__list__item__title__span">회원관리</span>
          </div>
          <ul
            className={`sidebar__list__item__sublist ${
              toggle[0] ? "show" : ""
            }`}
          >
            <Link href="/play2earnadmin?page=userList">
              <li className="sidebar__list__item__sublist__subitem">
                회원 목록
              </li>
            </Link>
          </ul>
        </li>
        <li className="sidebar__list__item">
          <div
            className="sidebar__list__item__title"
            onClick={() => toggleChange(1)}
          >
            <span className="sidebar__list__item__title__span">출금관리</span>
          </div>
          <ul
            className={`sidebar__list__item__sublist ${
              toggle[1] ? "show" : ""
            }`}
          >
            <Link href="/play2earnadmin?page=currency">
              <li className="sidebar__list__item__sublist__subitem">
                원화 출금관리
              </li>
            </Link>
            <Link href="/play2earnadmin?page=coin">
              <li className="sidebar__list__item__sublist__subitem">
                코인 출금관리
              </li>
            </Link>
          </ul>
        </li>
        <li className="sidebar__list__item">
          <div
            className="sidebar__list__item__title"
            onClick={() => toggleChange(2)}
          >
            <span className="sidebar__list__item__title__span">설정</span>
          </div>
          <ul
            className={`sidebar__list__item__sublist ${
              toggle[2] ? "show" : ""
            }`}
          >
            <Link href="/play2earnadmin?page=changeSetting">
              <li className="sidebar__list__item__sublist__subitem">
                게임설정
              </li>
            </Link>
            <Link href="/play2earnadmin?page=changeNotice">
              <li className="sidebar__list__item__sublist__subitem">
                공지사항설정
              </li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

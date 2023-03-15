import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";

function Header(props: any) {
  function logout() {
    window.sessionStorage.clear();
    alert("정상적으로 로그아웃 되었습니다.");
    location.href = "/";
  }

  return (
    <div className="admin-header">
      <div className="admin-header__title">{props.title}</div>
      <div className="admin-header__info">
        <div className="admin-header__info__user">
          <div className="admin-header__info__user__name">
            <span> 관리자님</span>
            <span onClick={logout}>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

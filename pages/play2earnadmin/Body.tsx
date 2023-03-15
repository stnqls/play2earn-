import React from "react";
import { useRouter } from "next/router";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import CurrencyWithdrawal from "./withdrawal/currency/CurrencyWithdrawal";
import CoinWithdrawal from "./withdrawal/coin/CoinWithdrawal";
import AdminUserList from "./user/AdminUserList";

import "./Body.scss";
import ChangeSetting from "./settings/ChangeSetting";
import ChangeNotice from "./notice/ChangeNotice";

function Body() {
  const router = useRouter();
  const page = router.query.page;

  let title;

  if (page === "userList") {
    title = "회원 목록";
  } else if (page === "currency") {
    title = "원화 출금관리";
  } else if (page === "coin") {
    title = "코인 출금관리";
  } else if (page === "changeSetting") {
    title = "게임 설정 변경";
  } else if (page === "changeNotice") {
    title = "공지사항 변경";
  } else {
    title = "관리자 페이지";
  }

  return (
    <div className="body">
      <div className="body__sidebar">
        <Header title={title} />
        <Sidebar />
      </div>
      <div className="body__content">
        {page === "currency" && <CurrencyWithdrawal />}
        {page === "coin" && <CoinWithdrawal />}
        {page === "userList" && <AdminUserList />}
        {page === "changeSetting" && <ChangeSetting />}
        {page === "changeNotice" && <ChangeNotice />}
      </div>
    </div>
  );
}

export default Body;

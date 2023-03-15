import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { refreshToken } from "../lib/refreshToken";
import CoinHistory from "../components/History/Coin/CoinHistory";
import CurrencyHistory from "../components/History/Currency/CurrencyHistory";

import "../styles/pages/History.scss";

const History = () => {
  const [menu, setMenu] = useState(0);
  const [type, setType] = useState("krw");
  const [data, setData] = useState([]);
  const [coinData, setCoinData] = useState([]);

  function getData() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal?type=${type}`,
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          if (type === "krw") {
            setData(res.data);
          } else if (type === "trx") {
            setCoinData(res.data);
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getData);
          }
        }
      });
  }

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="history">
      <div className="history__content">
        <div className="history__content__title">
          출금내역
          <Link href="/main">
            <img
              src="/images/icons/close-black.png"
              alt="close"
              className="history__content__close"
            />
          </Link>
        </div>
        <ul className="history__content__menu">
          <li
            className={
              menu === 0
                ? "history__content__menu__list--click"
                : "history__content__menu__list"
            }
            onClick={() => {
              setMenu(0);
              setType("krw");
            }}
          >
            원화
          </li>
          <li
            className={
              menu === 1
                ? "history__content__menu__list--click"
                : "history__content__menu__list"
            }
            onClick={() => {
              setMenu(1);
              setType("trx");
            }}
          >
            코인
          </li>
        </ul>
        <div className="history__content__body">
          {menu === 0 && <CurrencyHistory data={data} />}
          {menu === 1 && <CoinHistory data={coinData} />}
        </div>
      </div>
    </div>
  );
};

export default History;

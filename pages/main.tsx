import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { refreshToken } from "../lib/refreshToken";
import { addComma } from "../lib/comma";

import "../styles/pages/main.scss";

const Main = () => {
  const [email, setEmail]: any = useState("");
  const [point, setPoint]: any = useState();
  const [login, setLogin] = useState(false);
  const [role, setRole] = useState();

  function getUserInfo() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/users`,
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setEmail(res.data.email);
          setPoint(res.data.point);
          setRole(res.data.kinds);
          window.sessionStorage.setItem("point", res.data.point);
          window.sessionStorage.setItem("email", res.data.email);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getUserInfo);
          }
        }
      });
  }

  function logout() {
    window.sessionStorage.clear();
    alert("정상적으로 로그아웃 되었습니다.");
    setLogin(false);
    location.href = "/";
  }

  useEffect(() => {
    if (window.sessionStorage.getItem("point")) {
      let point = window.sessionStorage.getItem("point");
      setPoint(point);
      setEmail(window.sessionStorage.getItem("email"));
    }
    getUserInfo();
  }, []);

  return (
    <div className="main">
      <div className="main__contents">
        <div className="main__contents__user">
          <ul className="main__contents__user__info">
            <li className="main__contents__user__info__point">
              {addComma(point)}
              <span>P</span>
            </li>
            <li className="main__contents__user__info__email">
              {email} {role === 1 && "(총판)"}
            </li>
            {/* <li className="main__contents__user__info__link">
              <span>초대 링크 : </span>
            </li> */}
          </ul>
          <img
            src="/images/icons/logout_black.png"
            alt="logout"
            className="main__contents__user__logout"
            onClick={() => {
              logout();
            }}
          />
        </div>

        <div className="main__contents__menu">
          <ul className="main__contents__menu__list">
            <Link
              href={{ pathname: "/CurrencyWithdraw", query: { point: point } }}
            >
              <li className="main__contents__menu__list__item">
                <img src="/images/currency.png" alt="won" />
                <div className="main__contents__menu__list__item__text">
                  원화출금
                </div>
              </li>
            </Link>
            <Link href="/CoinWithdraw">
              <li className="main__contents__menu__list__item">
                <img src="/images/coin.png" alt="won" />
                <div className="main__contents__menu__list__item__text">
                  코인출금
                </div>
              </li>
            </Link>
            <Link href="/History">
              <li className="main__contents__menu__list__item">
                <img src="/images/withdraw.png" alt="won" />
                <div className="main__contents__menu__list__item__text">
                  출금내역
                </div>
              </li>
            </Link>
            <Link href="/pointList">
              <li className="main__contents__menu__list__item">
                <img src="/images/pointList.png" alt="won" />
                <div className="main__contents__menu__list__item__text">
                  포인트내역
                </div>
              </li>
            </Link>
            <Link href="/Invitation">
              <li className="main__contents__menu__list__item">
                <img src="/images/invitation.png" alt="won" />
                <div className="main__contents__menu__list__item__text">
                  초대내역
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;

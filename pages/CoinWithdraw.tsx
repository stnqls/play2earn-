import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { refreshToken } from "../lib/refreshToken";
import { addComma } from "../lib/comma";

import "../styles/pages/CoinWithdraw.scss";

const CoinWithdraw = () => {
  const [address, setAddress]: any = useState("");
  const [point, setPoint]: any = useState("");
  const [myPoint, setMyPoint]: any = useState("");
  let [trx, setTrx] = useState("");
  let [expect, setExpect]: any = useState("");

  function withdrawalTRX() {
    const inputPoint = point.replace(/,/g, "");
    if (address.length < 34) {
      alert("주소를 다시 확인해주세요");
    } else {
      if (inputPoint < 100000) {
        alert("100,000이상부터 가능합니다.");
      } else if (Number(inputPoint) > Number(myPoint)) {
        alert("보유포인트를 확인해주세요");
      } else {
        const headers: any = {
          authorization: window.sessionStorage.getItem("accessToken"),
        };
        axios({
          method: "POST",
          url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal",
          headers,
          data: {
            type: "trx",
            point: inputPoint,
            address: address,
          },
        })
          .then(() => {
            alert("출금신청이 완료되었습니다.");
            setMyPoint(myPoint - inputPoint);
            setAddress("");
            setPoint("");
            setExpect("");
          })
          .catch((err) => {
            if (err.response.data.errCode === 101) {
              refreshToken(withdrawalTRX);
            } else {
              alert("오류가 발생했습니다.");
            }
          });
      }
    }
  }

  function getTRX() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal/trx_price",
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setTrx(res.data.trx_price);
        }
      })
      .catch((err) => {
        alert("오류가 발생했습니다.");
        console.log(err);
      });
  }

  function expectedTRX(point: any, trx: any) {
    point = point.replace(/,/g, "");
    point = Number(point);
    trx = Number(trx);
    let result = point / trx;
    result.toFixed(2);
    setExpect(Number(result));
  }

  const inputPriceFormat = (str: any) => {
    const comma = (str: any) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str: any) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  useEffect(() => {
    let point = window.sessionStorage.getItem("point");
    setMyPoint(point);
    getTRX();
  }, []);

  return (
    <div className="withdraw">
      <div className="withdraw__contents">
        <div className="withdraw__contents__title">
          코인출금
          <Link href="/main">
            <img
              src="/images/icons/close-black.png"
              alt="close"
              className="withdraw__close"
            />
          </Link>
        </div>
        <div className="withdraw__contents__form">
          <div className="coin-withdraw-form">
            <div className="coin-withdraw-form__point">
              보유한 포인트 : <span>{addComma(myPoint)}P</span>
            </div>
            <div className="coin-withdraw-form__input">
              <div className="coin-withdraw-form__input__title">입금계좌</div>

              <input
                className="coin-withdraw-form__bank"
                placeholder="지갑주소를 입력해주세요"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="coin-withdraw-form__output">
              <div className="coin-withdraw-form__output__info">
                *실시간변동으로 출금시 가격과 차이가 있을 수 있습니다.
                <br />
                *최소 출금 가능 금액은 100,000krw 입니다.
              </div>
              <div className="coin-withdraw-form__output__title">출금금액</div>
              <div className="coin-withdraw-form__output__trans">
                1 TRX = {trx} POINT
              </div>
              <input
                type="text"
                className="coin-withdraw-form__output__money"
                value={point}
                onChange={(e) => {
                  expectedTRX(e.target.value, trx);
                  setPoint(inputPriceFormat(e.target.value));
                }}
              />
              <div className="coin-withdraw-form__output__expected-money">
                예상 : {expect} TRX
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="withdraw__contents__btn"
          onClick={() => {
            if (window.confirm(address + " 지갑주소를 확인해주세요.")) {
              withdrawalTRX();
            }
          }}
        >
          코인 출금하기
        </button>
      </div>
    </div>
  );
};

export default CoinWithdraw;

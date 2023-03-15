import React, { useEffect, useState } from "react";
import Link from "next/link";
import Bank from "../components/Bank/Bank";
import { refreshToken } from "../lib/refreshToken";
import { addComma } from "../lib/comma";
import axios from "axios";

import "../styles/pages/CurrencyWithdraw.scss";

const CurrencyWithdraw = () => {
  const [bank, setBank] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [point, setPoint]: any = useState("");
  const [address, setAddress] = useState("");
  const [myPoint, setMyPoint]: any = useState();

  function withdrawalKRW() {
    let KRWaddress;
    if (bank !== "") {
      KRWaddress = bank.concat(" " + address);
    } else {
      alert("은행을 선택해주세요");
    }
    const inputPoint = point.replace(/,/g, "");
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "POST",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal",
      headers,
      data: {
        type: "krw",
        point: inputPoint,
        name: name,
        address: KRWaddress,
      },
    })
      .then(() => {
        alert("출금신청이 완료되었습니다.");
        setMyPoint(myPoint - inputPoint);
        setPoint("");
        setName("");
        setAddress("");
        setBank("");
      })
      .catch((err) => {
        if (err.response.data.errCode === 101) {
          refreshToken(withdrawalKRW);
        } else if (err.response.data.errCode === 611) {
          if (point < 10000) {
            alert("10,000이상부터 가능합니다.");
          } else {
            alert("포인트를 확인해주세요");
          }
        }
      });
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
  }, []);

  return (
    <React.Fragment>
      {modal && <Bank setModal={setModal} setBank={setBank} />}
      <div className="withdraw">
        <div className="withdraw__contents">
          <div className="withdraw__contents__title">
            원화출금
            <Link href="/main">
              <img
                src="/images/icons/close-black.png"
                alt="close"
                className="withdraw__close"
              />
            </Link>
          </div>
          <div className="withdraw__contents__form">
            <div className="currency-withdraw-form">
              <div className="currency-withdraw-form__point">
                보유한 포인트 : <span>{addComma(myPoint)}P</span>
              </div>
              <div className="currency-withdraw-form__input">
                <div className="currency-withdraw-form__input__title">
                  입금계좌
                </div>
                <input
                  type="text"
                  className="currency-withdraw-form__input__name"
                  placeholder="성함을 입력해 주세요"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="currency-withdraw-form__bank">
                  {bank === "" ? (
                    <div
                      className="currency-withdraw-form__bank__name"
                      onClick={() => {
                        setModal(true);
                      }}
                    >
                      은행
                    </div>
                  ) : (
                    <div
                      className="currency-withdraw-form__bank__name"
                      onClick={() => {
                        setModal(true);
                      }}
                    >
                      {bank}
                    </div>
                  )}

                  <input
                    type="number"
                    pattern="\d*"
                    className="currency-withdraw-form__bank__number"
                    placeholder="계좌번호를 숫자만 입력해 주세요"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="currency-withdraw-form__output">
                <div className="currency-withdraw-form__output__title">
                  출금금액
                  <span className="currency-withdraw-form__output__subtitle">
                    *최소 출금 가능 금액은 10,000krw 입니다.
                  </span>
                </div>
                <input
                  type="text"
                  pattern="\d*"
                  className="currency-withdraw-form__output__money"
                  value={point}
                  onChange={(e) => {
                    setPoint(inputPriceFormat(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="withdraw__contents__btn"
            onClick={() => {
              withdrawalKRW();
            }}
          >
            원화 출금하기
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrencyWithdraw;

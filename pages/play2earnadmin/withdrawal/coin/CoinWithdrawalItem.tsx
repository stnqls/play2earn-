import React, { useState } from "react";
import { refreshToken } from "../../../../lib/refreshToken";
import axios from "axios";
import router from "next/router";

const CoinWithdrawalItem = (props: any) => {
  const [detail, setDetail] = useState(false);
  let [coin, setCoin] = useState("");
  const [txid, setTxid] = useState("");

  let status = props.status;
  switch (status) {
    case 101:
      status = "신청중";
      break;
    case 102:
      status = "승인완료";
      break;
    case 109:
      status = "승인거절";
      break;
  }

  function approval() {
    if (coin === "") {
      return alert("코인개수를 입력하세요");
    } else {
      const headers: any = {
        authorization: window.sessionStorage.getItem("accessToken"),
      };
      axios({
        method: "PATCH",
        url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal",
        headers,
        data: {
          seq: props.seq,
          email: props.email,
          status: "102",
          type: "trx",
          amount: coin,
          txid: txid,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            if (window.confirm("승인하시겠습니까?")) {
              alert("승인이 완료되었습니다.");
              setTimeout(() => {
                router.reload();
              }, 200);
            }
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            if (err.response.data.errCode === 101) {
              refreshToken(approval);
            }
          } else if (err.response.status === 400) {
            if (err.response.data.errCode === 601) {
              alert("입력값을 확인해 주세요");
            }
          }
        });
    }
  }

  function deny() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "PATCH",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal",
      headers,
      data: {
        seq: props.seq,
        email: props.email,
        status: "109",
        type: "trx",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          if (window.confirm("거절하시겠습니까?")) {
            alert("거절이 완료되었습니다.");
            setTimeout(() => {
              router.reload();
            }, 200);
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(deny);
          }
        } else {
          console.log(err);
          alert("다시시도해주세요");
        }
      });
  }

  return (
    <>
      <tr
        onClick={() => {
          setDetail(!detail);
        }}
        className="admin-coin-withdrawal-table__tbody__tr"
      >
        <td>{props.seq}</td>
        <td>{props.email}</td>
        <td>{props.point}</td>
        <td>{status}</td>
        <td>{props.created}</td>
      </tr>
      <tr
        className={
          detail
            ? "admin-coin-withdrawal-table__tbody__detail"
            : "admin-coin-withdrawal-table__tbody__detail--none"
        }
      >
        {props.status === 101 ? (
          <React.Fragment>
            <td colSpan={4}>
              지갑주소 : {props.address}
              <br />
              금액 : {props.amount} <br />
              TX ID :
              <input
                type="text"
                className="admin-coin-withdrawal-table__txid"
                placeholder="TX ID를 입력해주세요."
                onChange={(e) => {
                  setTxid(e.target.value);
                }}
              />
            </td>
            <td
              colSpan={1}
              className="admin-coin-withdrawal-table__tbody__detail__btns"
            >
              <input
                type="number"
                className="admin-coin-withdrawal-table__tbody__detail__btns__input"
                onChange={(e) => {
                  setCoin(e.target.value);
                }}
                placeholder="전송한 코인의 개수를 입력해주세요"
              />
              <button
                className="admin-coin-withdrawal-table__tbody__detail__btns__approval"
                onClick={() => {
                  approval();
                }}
              >
                승인
              </button>
              <button
                className="admin-coin-withdrawal-table__tbody__detail__btns__deny"
                onClick={() => {
                  deny();
                }}
              >
                거절
              </button>
            </td>
          </React.Fragment>
        ) : (
          <td colSpan={5}>
            지갑주소 : {props.address}
            <br />
            금액 : {props.amount} <br />
            TX ID :
            <a
              href={`https://tronscan.org/#/transaction/${props.txid}`}
              target={"_blank"}
            >
              {props.txid}
            </a>
          </td>
        )}
      </tr>
    </>
  );
};

export default CoinWithdrawalItem;

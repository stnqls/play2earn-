import axios from "axios";
import router from "next/router";
import { useState } from "react";
import { refreshToken } from "../../../../lib/refreshToken";

const CurrencyWithdrawalItem = (props: any) => {
  const [detail, setDetail] = useState(false);

  let status = props.status;
  switch (status) {
    case 101:
      status = "신청중";
      break;
    case 102:
      status = "승인 완료";
      break;
    case 109:
      status = "승인 거절";
      break;
  }

  function approval() {
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
        type: "krw",
        amount: props.point,
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
        } else {
          alert("오류가 발생했습니다.");
        }
      });
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
        type: "krw",
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
          alert("오류가 발생했습니다.");
        }
      });
  }

  return (
    <>
      <tr
        onClick={() => {
          setDetail(!detail);
        }}
        className="admin-currency-withdrawal-table__tbody__tr"
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
            ? "admin-currency-withdrawal-table__tbody__detail"
            : "admin-currency-withdrawal-table__tbody__detail--none"
        }
      >
        <td colSpan={4}>
          이름 : {props.name}
          <br />
          은행 : {props.address} <br />
          금액 : &#8361;{props.point}
        </td>
        {props.status === 101 ? (
          <td
            colSpan={1}
            className="admin-currency-withdrawal-table__tbody__detail__btns"
          >
            <button
              className="admin-currency-withdrawal-table__tbody__detail__btns__approval"
              onClick={() => {
                approval();
              }}
            >
              승인
            </button>
            <button
              className="admin-currency-withdrawal-table__tbody__detail__btns__deny"
              onClick={() => {
                deny();
              }}
            >
              거절
            </button>
          </td>
        ) : (
          <td
            colSpan={1}
            className="admin-currency-withdrawal-table__tbody__detail__btns"
          ></td>
        )}
      </tr>
    </>
  );
};

export default CurrencyWithdrawalItem;

import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { refreshToken } from "../../../../lib/refreshToken";
import CoinWithdrawalItem from "./CoinWithdrawalItem";

import "./CoinWithdrawal.scss";

const CoinWithdrawal = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [menu, setMenu] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(10);

  function pageChange(page: any) {
    setPage(page);
  }

  function getData() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal?type=trx&status=${status}`,
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getData);
          }
          console.log(err);
        }
      });
  }

  let filter = data.filter((val: any) => {
    if (search === "") {
      return val;
    } else if (val.email.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  useEffect(() => {
    getData();
  }, [menu, search]);

  return (
    <div className="admin-coin-withdrawal">
      <div className="admin-coin-withdrawal__header">
        <ul className="admin-coin-withdrawal__header__menu">
          <li
            className={
              menu === 0
                ? "admin-coin-withdrawal__header__menu__item"
                : "admin-coin-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setMenu(0);
              setStatus("");
            }}
          >
            전체보기
          </li>
          <li
            className={
              menu === 1
                ? "admin-coin-withdrawal__header__menu__item"
                : "admin-coin-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setMenu(1);
              setStatus("101");
            }}
          >
            신청중
          </li>
          <li
            className={
              menu === 2
                ? "admin-coin-withdrawal__header__menu__item"
                : "admin-coin-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setMenu(2);
              setStatus("102");
            }}
          >
            승인완료
          </li>
          <li
            className={
              menu === 3
                ? "admin-coin-withdrawal__header__menu__item"
                : "admin-coin-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setStatus("109");
              setMenu(3);
            }}
          >
            승인거절
          </li>
        </ul>
        <input
          type="text"
          placeholder="검색하기"
          className="admin-coin-withdrawal__header__search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="admin-coin-withdrawal__body">
        <table className="admin-coin-withdrawal__body__table admin-coin-withdrawal-table">
          <thead className="admin-coin-withdrawal-table__thead">
            <tr>
              <td>ID</td>
              <td>EMAIL</td>
              <td>POINT</td>
              <td>STATUS</td>
              <td className="admin-coin-withdrawal-table__date">DATE</td>
            </tr>
          </thead>
          <tbody className="admin-coin-withdrawal-table__tbody">
            {filter && filter.length > 0 ? (
              filter
                .slice(item * (page - 1), item * (page - 1) + item)
                .map((item: any, index: number) => (
                  <CoinWithdrawalItem
                    key={`admin-coin-withdrawal-${index}`}
                    address={item.address}
                    amount={item.amount}
                    created={item.created}
                    email={item.email}
                    point={item.point}
                    seq={item.seq}
                    status={item.status}
                    txid={item.txid}
                  />
                ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="admin-coin-withdrawal-table__tbody__none"
                >
                  내역이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {filter && filter.length && (
          <Pagination
            totalItemsCount={data.length}
            activePage={page}
            onChange={pageChange}
            itemsCountPerPage={item}
            firstPageText={""}
            lastPageText={""}
            nextPageText={">"}
            prevPageText={"<"}
          />
        )}
      </div>
    </div>
  );
};

export default CoinWithdrawal;

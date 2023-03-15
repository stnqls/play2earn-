import { useEffect, useState } from "react";
import axios from "axios";
import { refreshToken } from "../../../../lib/refreshToken";
import Pagination from "react-js-pagination";
import CurrencyWithdrawalItem from "./CurrencyWithdrawalItem";

import "./CurrencyWithdrawal.scss";

const CurrencyWithdrawal = () => {
  const [data, setData]: any = useState([]);
  const [status, setStatus]: any = useState("");
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
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal?type=krw&status=${status}`,
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
        }
      });
  }

  const filter = data.filter((val: any) => {
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
    <div className="admin-currency-withdrawal">
      <div className="admin-currency-withdrawal__header">
        <ul className="admin-currency-withdrawal__header__menu">
          <li
            className={
              menu === 0
                ? "admin-currency-withdrawal__header__menu__item"
                : "admin-currency-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setStatus("");
              setMenu(0);
            }}
          >
            전체보기
          </li>
          <li
            className={
              menu === 1
                ? "admin-currency-withdrawal__header__menu__item"
                : "admin-currency-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setStatus(101);
              setMenu(1);
            }}
          >
            신청중
          </li>
          <li
            className={
              menu === 2
                ? "admin-currency-withdrawal__header__menu__item"
                : "admin-currency-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setStatus(102);
              setMenu(2);
            }}
          >
            승인완료
          </li>
          <li
            className={
              menu === 3
                ? "admin-currency-withdrawal__header__menu__item"
                : "admin-currency-withdrawal__header__menu__item--none"
            }
            onClick={() => {
              setStatus(109);
              setMenu(3);
            }}
          >
            승인거절
          </li>
        </ul>
        <input
          type="text"
          placeholder="검색하기"
          className="admin-currency-withdrawal__header__search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="admin-currency-withdrawal__body">
        <table className="admin-currency-withdrawal__body__table admin-currency-withdrawal-table">
          <thead className="admin-currency-withdrawal-table__thead">
            <tr>
              <td>ID</td>
              <td>EMAIL</td>
              <td>POINT</td>
              <td>STATUS</td>
              <td className="admin-currency-withdrawal-table__date">DATE</td>
            </tr>
          </thead>
          <tbody className="admin-currency-withdrawal-table__tbody">
            {filter && filter.length > 0 ? (
              filter
                .slice(item * (page - 1), item * (page - 1) + item)
                .map((item: any, index: number) => (
                  <CurrencyWithdrawalItem
                    key={`admin-currency-withdrawal-${index}`}
                    seq={item.seq}
                    address={item.address}
                    amount={item.amount}
                    created={item.created}
                    email={item.email}
                    name={item.name}
                    point={item.point}
                    status={item.status}
                  />
                ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="admin-currency-withdrawal-table__tbody__none"
                >
                  내역이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {filter && filter.length > 0 && (
          <Pagination
            totalItemsCount={filter.length}
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

export default CurrencyWithdrawal;

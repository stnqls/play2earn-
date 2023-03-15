import React, { useState } from "react";
import Pagination from "react-js-pagination";

import "./CoinHistory.scss";

const CoinHistory = (props: any) => {
  const [transId, setTransId] = useState("");
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(5);

  function pageChange(page: any) {
    setPage(page);
  }

  function status(number: any) {
    switch (number) {
      case 101:
        return "신청중";
      case 102:
        return "완료";
      case 109:
        return "거절";
    }
  }

  return (
    <React.Fragment>
      <ul className="coin-history__list">
        {props.data && props.data.length > 0 ? (
          props.data
            .slice(item * (page - 1), item * (page - 1) + item)
            .map((item: any, index: number) => (
              <li
                className="coin-history__list__item"
                key={`coin-history-${index}`}
              >
                <div className="coin-history__list__item__money">
                  {item.amount}
                  <span> TRX</span>({item.point}P)
                </div>
                <div className="coin-history__list__item__status">
                  {status(item.status)}
                </div>
                <div className="coin-history__list__item__bank">
                  {item.address}
                </div>
                <div className="coin-history__list__item__transId">
                  <a
                    href={`https://tronscan.org/#/transaction/${transId}`}
                    target={"_blank"}
                    onClick={() => {
                      setTransId(item.txid);
                    }}
                  >
                    {item.txid}
                  </a>
                </div>
                <div className="coin-history__list__item__date">
                  {item.created}
                </div>
              </li>
            ))
        ) : (
          <li className="coin-history__list__item--none">
            출금내역이 없습니다.
          </li>
        )}
      </ul>
      {props.data && props.data.length > 0 && (
        <Pagination
          totalItemsCount={props.data.length}
          activePage={page}
          onChange={pageChange}
          itemsCountPerPage={item}
          firstPageText={""}
          lastPageText={""}
          nextPageText={">"}
          prevPageText={"<"}
        />
      )}
    </React.Fragment>
  );
};

export default CoinHistory;

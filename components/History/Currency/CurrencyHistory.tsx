import React, { useState } from "react";
import Pagination from "react-js-pagination";

import "./CurrencyHistory.scss";

const CurrencyHistory = (props: any) => {
  const [page, setPage] = useState(1);
  const [item] = useState(5);

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
      <ul className="currency-history__list">
        {props.data && props.data.length > 0 ? (
          props.data
            .slice(item * (page - 1), item * (page - 1) + item)
            .map((item: any, index: number) => (
              <li
                className="currency-history__list__item"
                key={`currency-history-${index}`}
              >
                <div className="currency-history__list__item__money">
                  <span> &#x20a9;</span>
                  {item.point}
                </div>
                <div className="currency-history__list__item__status">
                  {status(item.status)}
                </div>
                <div className="currency-history__list__item__bank">
                  {item.address}
                </div>
                <div className="currency-history__list__item__date">
                  {item.created}
                </div>
              </li>
            ))
        ) : (
          <li className="currency-history__list__item--none">
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

export default CurrencyHistory;

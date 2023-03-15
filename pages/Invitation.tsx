import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { refreshToken } from "../lib/refreshToken";

import "../styles/pages/Invitation.scss";

const Invitation = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(5);

  function pageChange(page: any) {
    setPage(page);
  }

  function getReference() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/users/referer`,
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          alert("오류가 발생했습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 401) {
          if (err.response.status === 401) {
            if (err.response.data.errCode === 101) {
              refreshToken(getReference);
            }
          }
        }
      });
  }

  useEffect(() => {
    getReference();
  }, []);

  return (
    <div className="invitation">
      <div className="invitation__content">
        <div className="invitation__content__title">
          초대내역
          <Link href="/main">
            <img
              src="/images/icons/close-black.png"
              alt="close"
              className="invitation__content__close"
            />
          </Link>
          <div className="invitation__content__sub">
            *간접초대일 경우 글자색이 갈색으로 표기됩니다.
          </div>
        </div>
        {data && data.length > 0 ? (
          <ul className="invitation__content__list">
            {data
              .slice(item * (page - 1), item * (page - 1) + item)
              .map((data: any, index: number) => (
                <li
                  className={
                    data.checkDirect
                      ? "invitation__content__list__item--direct"
                      : "invitation__content__list__item"
                  }
                  key={`invitation-item-${index}`}
                >
                  <div className="invitation__content__list__item__email">
                    {data.email}
                  </div>
                  <div className="invitation__content__list__item__date">
                    {data.created}
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <div className="invitation__content__list__item--none">
            초대 내역이 없습니다.
          </div>
        )}
      </div>
      {data && data.length > 0 && (
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
  );
};

export default Invitation;

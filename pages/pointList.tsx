import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { refreshToken } from "../lib/refreshToken";

import "../styles/pages/PointList.scss";

const PointList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(7);

  function pageChange(page: any) {
    setPage(page);
  }

  function getData() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/point",
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

  function pointCode(code: number) {
    if (code === 0) {
      return "광고시청 포인트 적립";
    } else if (code === 1) {
      return "광고(추천인) 포인트 적립";
    } else if (code === 2) {
      return "광고(총판) 포인트 적립";
    } else if (code === 3) {
      return "회원가입 포인트 적립";
    } else if (code === 4) {
      return "회원가입(추천인) 포인트 적립";
    } else if (code === 5) {
      return "회원가입(총판) 포인트 적립";
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pointList">
      <div className="pointList__content">
        <div className="pointList__content__title">
          포인트내역
          <Link href="/main">
            <img
              src="/images/icons/close-black.png"
              alt="close"
              className="pointList__content__close"
            />
          </Link>
        </div>
        {data && data.length > 0 ? (
          <ul className="pointList__content__list">
            {data
              .slice(item * (page - 1), item * (page - 1) + item)
              .map((data: any, index: number) => (
                <li
                  className="pointList__content__list__item"
                  key={`pointList-item-${index}`}
                >
                  <div className="pointList__content__list__item__point">
                    {data.addpoint} P
                  </div>
                  <div className="pointList__content__list__item__text">
                    {pointCode(data.addpoint_code)}
                  </div>
                  <div className="pointList__content__list__item__date">
                    {data.created}
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <div className="pointList__content__list__item--none">
            포인트 내역이 없습니다.
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

export default PointList;

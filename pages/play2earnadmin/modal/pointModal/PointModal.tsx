import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { refreshToken } from "../../../../lib/refreshToken";

import "./PointModal.scss";

const PointModal = (props: any) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [item] = useState(10);

  function pageChange(page: any) {
    setPage(page);
  }

  function getData(userCode: number) {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/users/${userCode}/point`,
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
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
    getData(props.userCode);
  }, []);

  return (
    <React.Fragment>
      <div
        className="admin-point-modal__cover"
        onClick={() => {
          props.setPointModal(false);
        }}
      ></div>
      <div className="admin-point-modal">
        <img
          src="/images/icons/close-black.png"
          alt="close"
          className="admin-point-modal__close"
          onClick={() => {
            props.setPointModal(false);
          }}
        />
        <div className="admin-point-modal__title">포인트 내역</div>
        <div className="admin-point-modal__total">TOTAL : {props.point} P</div>
        <table className="admin-point-modal__content">
          <thead className="admin-point-modal__content__thead">
            <tr>
              <td>point</td>
              <td>content</td>
              <td>date</td>
            </tr>
          </thead>
          <tbody className="admin-point-modal__content__tbody">
            {data &&
              data.length > 0 &&
              data
                .slice(item * (page - 1), item * (page - 1) + item)
                .map((data: any, index: number) => (
                  <tr key={`admin-point-modal-${index}`}>
                    <td>{data.addpoint} P</td>
                    <td>{pointCode(data.addpoint_code)}</td>
                    <td>{data.created}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        <Pagination
          totalItemsCount={data.length}
          activePage={page}
          onChange={pageChange}
          itemsCountPerPage={item}
          firstPageText={""}
          lastPageText={""}
          nextPageText={">"}
          prevPageText={"<"}
          innerClass="point-modal-pagination"
        />
      </div>
    </React.Fragment>
  );
};

export default PointModal;

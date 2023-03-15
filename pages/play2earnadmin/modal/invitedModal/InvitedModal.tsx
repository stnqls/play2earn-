import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { refreshToken } from "../../../../lib/refreshToken";

import "./InvitedModal.scss";

const InvitedModal = (props: any) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [item] = useState(10);

  function pageChange(page: any) {
    setPage(page);
  }

  function getInvitedInfo(userCode: number) {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: `https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/users/${userCode}/referer`,
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.rows);
          setTotal(res.data.count);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getInvitedInfo);
          }
        }
      });
  }

  useEffect(() => {
    getInvitedInfo(props.userCode);
  }, []);

  return (
    <React.Fragment>
      <div
        className="admin-invited-modal__cover"
        onClick={() => {
          props.setModal(false);
        }}
      ></div>
      <div className="admin-invited-modal">
        <img
          className="admin-invited-modal__close"
          src="/images/icons/close-black.png"
          alt="close"
          onClick={() => {
            props.setModal(false);
          }}
        />
        <div className="admin-invited-modal__title">초대내역</div>
        <div className="admin-invited-modal__total">TOTAL : {total}명</div>
        <table className="admin-invited-modal__content">
          <thead className="admin-invited-modal__content__thead">
            <tr>
              <td>e-mail</td>
              <td>method</td>
              <td>date</td>
            </tr>
          </thead>
          <tbody className="admin-invited-modal__content__tbody">
            {data && data.length > 0 ? (
              data
                .slice(item * (page - 1), item * (page - 1) + item)
                .map((data: any, index: number) => (
                  <tr key={`admin-invited-modal-${index}`}>
                    <td>{data.email} </td>
                    <td>{data.checkDirect ? "직접추천" : "간접추천"}</td>
                    <td>{data.created}</td>
                  </tr>
                ))
            ) : (
              <tr key={`admin-invited-modal`}>
                <td colSpan={3}>초대내역이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
        {data && total > 0 && (
          <Pagination
            totalItemsCount={data.length}
            activePage={page}
            onChange={pageChange}
            itemsCountPerPage={item}
            firstPageText={""}
            lastPageText={""}
            nextPageText={">"}
            prevPageText={"<"}
            innerClass="invited-modal-pagination"
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default InvitedModal;

import React, { useState } from "react";
import Pagination from "react-js-pagination";
import TotalUserItem from "./TotalUserItem";
import PointModal from "../../modal/pointModal/PointModal";
import InvitedModal from "../../modal/invitedModal/InvitedModal";

import "./TotalUser.scss";

const TotalUser = (props: any) => {
  const data = props.data;

  const [page, setPage] = useState(1);
  const [item] = useState(10);
  const [userCode, setUserCode] = useState();
  const [point, setPoint] = useState();
  const [modal, setModal] = useState(false);
  const [pointModal, setPointModal] = useState(false);

  function pageChange(page: any) {
    setPage(page);
  }

  return (
    <React.Fragment>
      <table className="admin-total-user">
        <thead className="admin-total-user__thead">
          <tr>
            <td>USER CODE</td>
            <td>E-MAIL</td>
            <td>POINT</td>
            <td>HEART</td>
            <td>DETAIL</td>
            <td>DATE</td>
            <td>CHANGE</td>
          </tr>
        </thead>
        <tbody className="admin-total-user__tbody">
          {data &&
            data.length > 0 &&
            data
              .slice(item * (page - 1), item * (page - 1) + item)
              .map((user: any, index: number) => (
                <TotalUserItem
                  key={`admin-total-user-${index}`}
                  user_code={user.user_code}
                  email={user.email}
                  point={user.point}
                  heart={user.heart}
                  created={user.created}
                  setModal={setModal}
                  setUserCode={setUserCode}
                  setPointModal={setPointModal}
                  setPoint={setPoint}
                  kinds={user.kinds}
                />
              ))}
        </tbody>
      </table>
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

      {modal && <InvitedModal setModal={setModal} userCode={userCode} />}
      {pointModal && (
        <PointModal
          setPointModal={setPointModal}
          userCode={userCode}
          point={point}
        />
      )}
    </React.Fragment>
  );
};

export default TotalUser;

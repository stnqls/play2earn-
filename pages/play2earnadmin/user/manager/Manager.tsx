import React, { useState } from "react";
import Pagination from "react-js-pagination";
import PointModal from "../../modal/pointModal/PointModal";
import InvitedModal from "../../modal/invitedModal/InvitedModal";

import ManagerItem from "./ManagerItem";
import "./Manager.scss";

const Manager = (props: any) => {
  const data = props.data;

  const [userCode, setUserCode] = useState();
  const [point, setPoint] = useState();
  const [modal, setModal] = useState(false);
  const [pointModal, setPointModal] = useState(false);
  const [page, setPage] = useState(1);
  const [item] = useState(10);

  function pageChange(page: any) {
    setPage(page);
  }

  return (
    <React.Fragment>
      <table className="admin-manager">
        <thead className="admin-manager__thead">
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
        <tbody className="admin-manager__tbody">
          {data &&
            data.length > 0 &&
            data
              .slice(item * (page - 1), item * (page - 1) + item)
              .map((data: any, index: number) => {
                if (data.kinds === 1) {
                  return (
                    <ManagerItem
                      key={`admin-manaber-${index}`}
                      created={data.created}
                      email={data.email}
                      heart={data.heart}
                      kinds={data.kinds}
                      point={data.point}
                      user_code={data.user_code}
                      setModal={setModal}
                      setUserCode={setUserCode}
                      setPointModal={setPointModal}
                      setPoint={setPoint}
                    />
                  );
                }
              })}
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

export default Manager;

import axios from "axios";
import { useEffect, useState } from "react";
import { refreshToken } from "../../../lib/refreshToken";
import TotalUser from "./totalUser/TotalUser";
import Manager from "./manager/Manager";

import "./AdminUserList.scss";

const AdminUserList = () => {
  const [user, setUser] = useState([]);
  const [menu, setMenu] = useState(0);
  const [search, setSearch] = useState("");

  function getUser() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/users",
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getUser);
          }
        }
      });
  }

  function getManager() {
    const headers: any = {
      authorization: window.sessionStorage.getItem("accessToken"),
    };
    axios({
      method: "GET",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/users?kinds=1",
      headers,
    })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          if (err.response.data.errCode === 101) {
            refreshToken(getUser);
          }
        }
      });
  }

  const filter = user.filter((val: any) => {
    if (search === "") {
      return val;
    } else if (val.email.toLowerCase().includes(search.toLocaleLowerCase())) {
      return val;
    }
  });

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="admin-user-list">
      <div className="admin-user-list__header">
        <ul className="admin-user-list__header__menu">
          <li
            className={
              menu === 0
                ? "admin-user-list__header__menu__list-active"
                : "admin-user-list__header__menu__list"
            }
            onClick={() => {
              setMenu(0);
              getUser();
            }}
          >
            전체회원
          </li>
          <li
            className={
              menu === 1
                ? "admin-user-list__header__menu__list-active"
                : "admin-user-list__header__menu__list"
            }
            onClick={() => {
              setMenu(1);
              getManager();
            }}
          >
            총판회원
          </li>
        </ul>
        <input
          type="text"
          className="admin-user-list__header__search"
          placeholder="이메일로 검색하기"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="admin-user-list__ex">
        * 총판은 추천인없이 가입해야 가능합니다.
      </div>
      <div className="admin-user-list__body">
        {menu === 0 && <TotalUser data={filter} />}
        {menu === 1 && <Manager data={filter} />}
      </div>
    </div>
  );
};

export default AdminUserList;

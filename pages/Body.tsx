import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "./Login";
import Main from "./main";

const Body = () => {
  // const [login, setLogin] = useState(false);

  // useEffect(() => {
  //   setLogin(false);
  //   // alert("로그인이 필요합니다.");
  //   location.href = "/Login";
  // }, []);
  // const router = useRouter();
  // const page = router.query.page;

  return (
    // <div className="body">
    <Login />
    // </div>
  );
};

export default Body;

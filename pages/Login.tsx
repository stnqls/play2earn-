import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdTokenResult,
} from "firebase/auth";

import "../styles/pages/login.scss";

const Login: NextPage = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  function isExistence(email: string, password: string) {
    axios({
      method: "POST",
      url: "https://us-central1-play2earn-b23c6.cloudfunctions.net/api/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Login();
          setLogin(false);
          Router.push("/main");
        }
      })
      .catch((err) => {
        alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
      });
  }

  function Login() {
    checkEmail(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        window.sessionStorage.clear();
        window.sessionStorage.setItem("accessToken", user.accessToken);
        window.sessionStorage.setItem(
          "refresh",
          user.stsTokenManager.refreshToken
        );
        getIdTokenResult(user)
          .then((idTokenResult) => {
            if (idTokenResult.claims.admin) {
              Router.push("/play2earnadmin");
              window.sessionStorage.setItem("admin", "admin");
            } else {
              location.href = "/";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          isExistence(email, password);
        } else if (errorCode === "auth/wrong-password") {
          alert("비밀번호가 올바르지 않습니다.");
        }
      });
  }

  function checkEmail(email: string) {
    const rule =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g;
    if (
      (email === "" && password !== "") ||
      (email === "" && password === "")
    ) {
      alert("E-MAIL을 입력해 주세요");
    } else {
      if (rule.test(email) === true) {
        checkPW(password);
        return email;
      } else {
        return alert("이메일 형식이 올바르지 않습니다.");
      }
    }
  }

  function checkPW(password: any) {
    if (password === "" && email !== "") {
      alert("비밀번호를 입력해 주세요");
    } else {
      return password;
    }
  }

  useEffect(() => {
    if (window.sessionStorage.getItem("accessToken")) {
      if (window.sessionStorage.getItem("admin")) {
        Router.push("/play2earnadmin");
      } else {
        setLogin(true);
        Router.push("/main");
      }
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="login">
        {!login && (
          <div className="login__content">
            <div className="login__content__logo">
              <img
                src="/images/logo/logo.png"
                alt="logo"
                className="login__content__logo__img"
              />
            </div>
            <div className="login__content__form">
              <div className="login__content__form__id">
                <input
                  type="text"
                  onChange={(e) => {
                    let mail = e.target.value;
                    setEmail(mail.replace(/(\s*)/g, ""));
                  }}
                  placeholder="아이디를 입력해주세요"
                />
              </div>
              <div className="login__content__form__pw">
                <input
                  type="password"
                  onChange={(e) => {
                    let pw = e.target.value;
                    setPassword(pw.replace(/(\s*)/g, ""));
                  }}
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
              <button
                type="button"
                className="login__content__form__btn"
                onClick={() => {
                  Login();
                }}
              >
                로그인
              </button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Login;

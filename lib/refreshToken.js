const axios = require("axios");

const refreshToken = (recall) => {
  axios({
    method: "POST",
    url: `https://securetoken.googleapis.com/v1/token?key=AIzaSyDtBaXgQohMjufjL2GWSPEhwLeeIBLBke4`,
    data: {
      grant_type: "refresh_token",
      refresh_token: window.sessionStorage.getItem("refresh"),
    },
  })
    .then((res) => {
      window.sessionStorage.setItem("accessToken", res.data.access_token);
      window.sessionStorage.setItem("token", res.data.id_token);
      window.sessionStorage.setItem("refresh", res.data.refresh_token);
      recall();
    })

    .catch((err) => {
      alert("서버 인증 중 문제가 발생했습니다. 다시 로그인 후 이용해주세요.");
    });
};

module.exports = {
  refreshToken,
};

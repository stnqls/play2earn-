const firebaseConfig = {
  apiKey: "AIzaSyDtBaXgQohMjufjL2GWSPEhwLeeIBLBke4",
  authDomain: "play2earn-b23c6.firebaseapp.com",
  projectId: "play2earn-b23c6",
  storageBucket: "play2earn-b23c6.appspot.com",
  messagingSenderId: "1066622716809",
  appId: "1:1066622716809:web:05bb8ed75273a98defef58",
  measurementId: "G-KCJZVLHZTC",
};

const getFirebaseConfig = () =>
  new Promise((resolve, reject) => resolve(firebaseConfig));

export default getFirebaseConfig;

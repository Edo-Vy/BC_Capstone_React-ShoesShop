import { createSlice } from "@reduxjs/toolkit";
import { history } from "../..";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setCookie,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";
const initialState = {
  //   userLogin: {},
  userLogin: getStoreJSON(USER_LOGIN),
  newUser: {
    email: "",
    password: "",
    name: "",
    gender: "",
    phone: "",
  },
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    // sau khi đăng nhập thành công
    setUserLoginAction: (state, action) => {
      let userLogins = action.payload;
      state.userLogin = userLogins;
    },
    setNewUserAction: (state, action) => {
      let userNew = action.payload;
      state.newUser = userNew;
    },
  },
});

export const { setUserLoginAction, setNewUserAction } = userReducer.actions;

export default userReducer.reducer;

//------------- action (thunk) ------------
// Login
export const signinApi = (userLogin) => {
  // {email:"" , password :""}

  return async (dispatch) => {
    try {
      let result = await http.post("/Users/signin", userLogin); // {email:"" , password :""}
      // Thành công
      console.log("KQ", result.data.content);
      // Lưu lại token // lưu accessToken vs email
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      // lưu cookie
      setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);

      // Lưu lại email
      setStoreJSON(USER_LOGIN, result.data.content);
      // Đưa userLogin thành công lên rudecer
      // result.data.content = {email:"", accessToken:""}
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
      // Sau khi verify tài khoản thành công, lưu vào localStorage -> đúng -> chuyển hướng
      history.push("/profile");
    } catch (erro) {
      alert("Tài khoản - Mật khẩu không đúng!");
      history.push("/login");
      console.log(erro);
    }
  };
};

//---- api getProfile

export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      let result = await http.post("/Users/getProfile");
      // Thành công
      console.log("kq", result.data.content);
      // Tạo ra actioncaretor => dispatch lên redux
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    } catch (erro) {
      //Token không hợp lệ
      alert("Đăng nhập để vào trang này!");
      // Về trang Login
      history.push("/login");
      console.log(erro);
    }
  };
};

// signup new user

export const getNewUserSignUp = (infoUser) => {
  // {email:'',...}

  return async (dispatch) => {
    try {
      const result = await http.post("/Users/signup", infoUser);
      console.log("result", result.data.content);

      const action = setNewUserAction(result.data.content);
      dispatch(action);
      
      alert("Đăng ký thành công!");
      history.push('/login');
    } catch (erro) {
      console.log(erro);
    }
  };
};

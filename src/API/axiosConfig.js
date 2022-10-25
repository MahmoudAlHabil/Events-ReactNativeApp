import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

axios.defaults.baseURL = 'https://student.valuxapps.com/api/'

export const setAccessToken = (token) => {
  axios.defaults.headers.common = {
    Authorization: token,
  };
  
};

export const readAccessToken = () => {
  AsyncStorage.getItem("accessToken").then((token) => {
    setAccessToken(token);
  });
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      //   return RootNavigation.navigate("AuthFlow", { screen: "Login" });
    }
    // showErrorMessage(error?.response?.data?.Message);
    throw error;
  }
);

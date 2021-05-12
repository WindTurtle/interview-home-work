import axiosClient from "./axiosClient";

const userApi = {
  signIn(data) {
    const url = "/users/signin";
    return axiosClient.post(url, data);
  },
  signUp(data) {
    const url = "/users/signup";
    return axiosClient.post(url, data);
  },
};

export default userApi;

import axiosClient from "./axiosClient";

const postApi = {
  getAll() {
    const url = "/posts";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },
};

export default postApi;

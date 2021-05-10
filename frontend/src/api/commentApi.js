import axiosClient from "./axiosClient";

const commentApi = {
  getAll() {
    const url = `/comments`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/comments/${id}`;
    return axiosClient.get(url);
  },
};

export default commentApi;
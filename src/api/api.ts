import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "c1452ba1-bc90-491b-9609-a361313ad1cf",
  },
});
export const userAPI = {
  getUsers: function (currentPage: number = 1, pageSize: number = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser: function (id: number) {
    return instance.post(`follow/${id}`, {});
  },
  unfollowUser: function (id: number) {
    return instance.delete(`follow/${id}`);
  },
};

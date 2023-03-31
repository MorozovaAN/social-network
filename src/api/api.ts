import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "c1452ba1-bc90-491b-9609-a361313ad1cf",
  },
});

export const userAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`);
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile(profileId: string | undefined) {
    return instance.get(`profile/${profileId}`);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

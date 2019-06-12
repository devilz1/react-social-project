import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7c2ee6fc-d916-4151-9770-ec178ee4b526"
    }
});

export const usersAPI = {
    getFollow: (id) => {
        return instance.post(`follow/${id}`, {})
    },

    getUnfollow: (id) => {
        return instance.delete(`follow/${id}`)
    },

    getProfile: (userID) => {
        return instance.get(`profile/${!userID ? 1078 : userID}`)
            .then(response => response.data);
    },

    userGetCount: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    pageGetChange: (pageNum, pageSize) => {
        return instance.get(`users?page=${pageNum}&count=${pageSize}`)
            .then(response => response.data)
    },
};



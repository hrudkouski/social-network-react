import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3af7a44d-0a6b-4bf7-b34b-b5730fa5756f"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }

    // unFollow() {
    //     return instance.get(`follow/userID`)
    //         .then(response => {
    //             return response.data
    //         });
    // }

};
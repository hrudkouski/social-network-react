import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 95,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.usersId) {
                        return {...el, followed: false}
                    }
                    return el;
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.usersId]
                    : state.followingProgress.filter(id => id !== action.usersId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (usersId) => (
    {type: FOLLOW, usersId}
);
export const unFollowSuccess = (usersId) => (
    {type: UNFOLLOW, usersId}
);
export const setUsers = (users) => (
    {type: SET_USERS, users}
);
export const setCurrentPage = (currentPage) => (
    {type: SET_CURRENT_PAGE, currentPage}
);
export const setTotalUsersCount = (totalUsersCount) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
);
export const toggleIsFetching = (isFetching) => (
    {type: TOGGLE_IS_FETCHING, isFetching}
);
export const toggleIsFollowingProgress = (isFetching, usersId) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, usersId}
);

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsersApi(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    };
};
export const unFollow = (usersId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, usersId));
        usersAPI.unFollowApi(usersId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(usersId));
                }
                dispatch(toggleIsFollowingProgress(false, usersId));
            });
    };
};
export const follow = (usersId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, usersId));
        usersAPI.followApi(usersId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(usersId));
                }
                dispatch(toggleIsFollowingProgress(false, usersId));
            });
    };
};


export default usersReducer;
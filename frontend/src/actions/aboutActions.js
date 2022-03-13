import axios from 'axios'
import {
    ABOUT_LIST_REQUEST,
    ABOUT_LIST_SUCCESS,
    ABOUT_LIST_FAIL,
    ABOUT_DETAILS_REQUEST,
    ABOUT_DETAILS_SUCCESS,
    ABOUT_DETAILS_FAIL,
    ABOUT_DELETE_SUCCESS,
    ABOUT_DELETE_REQUEST,
    ABOUT_DELETE_FAIL,
    ABOUT_CREATE_REQUEST,
    ABOUT_CREATE_SUCCESS,
    ABOUT_CREATE_FAIL,
    ABOUT_UPDATE_REQUEST,
    ABOUT_UPDATE_SUCCESS,
    ABOUT_UPDATE_FAIL,
    ABOUT_HOME_REQUEST,
    ABOUT_HOME_SUCCESS,
    ABOUT_HOME_FAIL,
} from '../constants/aboutConstants'
import { logout } from './userActions'

export const listAbouts = () => async (
    dispatch
) => {
    try {
        dispatch({ type: ABOUT_LIST_REQUEST })

        const { data } = await axios.get(
            `/api/abouts`
        )

        dispatch({
            type: ABOUT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ABOUT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listAboutDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ABOUT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/abouts/${id}`)

        dispatch({
            type: ABOUT_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ABOUT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteAbout = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ABOUT_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/abouts/${id}`, config)

        dispatch({
            type: ABOUT_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ABOUT_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createAbout = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ABOUT_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/abouts`, {}, config)

        dispatch({
            type: ABOUT_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ABOUT_CREATE_FAIL,
            payload: message,
        })
    }
}

export const updateAbout = (about) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ABOUT_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/api/abouts/${about._id}`,
            about,
            config
        )

        dispatch({
            type: ABOUT_UPDATE_SUCCESS,
            payload: data,
        })
        dispatch({ type: ABOUT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ABOUT_UPDATE_FAIL,
            payload: message,
        })
    }
}


export const listHomeAbout = () => async (dispatch) => {
    try {
        dispatch({ type: ABOUT_HOME_REQUEST })

        const { data } = await axios.get(`/api/abouts/home`)

        dispatch({
            type: ABOUT_HOME_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ABOUT_HOME_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

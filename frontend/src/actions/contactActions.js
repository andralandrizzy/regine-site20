import axios from 'axios'
import {
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_FAIL,
    CONTACT_DETAILS_REQUEST,
    CONTACT_DETAILS_SUCCESS,
    CONTACT_DETAILS_FAIL,
    CONTACT_DELETE_SUCCESS,
    CONTACT_DELETE_REQUEST,
    CONTACT_DELETE_FAIL,
    CONTACT_CREATE_REQUEST,
    CONTACT_CREATE_SUCCESS,
    CONTACT_CREATE_FAIL,

} from '../constants/contactConstants'

export const listContacts = () => async (
    dispatch
) => {
    try {
        dispatch({ type: CONTACT_LIST_REQUEST })

        const { data } = await axios.get(
            `/api/contacts`
        )

        dispatch({
            type: CONTACT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CONTACT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listContactDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/contact/${id}`)

        dispatch({
            type: CONTACT_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CONTACT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteContact = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CONTACT_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/contacts/${id}`, config)

        dispatch({
            type: CONTACT_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
        }
        dispatch({
            type: CONTACT_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createContact = ({name, email, subject, text_message}) => async (dispatch) => {
    try {
        dispatch({
            type: CONTACT_CREATE_REQUEST,
        })

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // }

        const { data } = await axios.post(
            '/api/contacts',
            { name, email, subject, text_message }
        )

        dispatch({
            type: CONTACT_CREATE_SUCCESS,
            payload: data,
        })

        // localStorage.setItem('contactInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: CONTACT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}



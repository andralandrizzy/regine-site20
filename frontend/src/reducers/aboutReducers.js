import {
    ABOUT_LIST_REQUEST,
    ABOUT_LIST_SUCCESS,
    ABOUT_LIST_FAIL,
    ABOUT_DETAILS_REQUEST,
    ABOUT_DETAILS_SUCCESS,
    ABOUT_DETAILS_FAIL,
    ABOUT_DELETE_REQUEST,
    ABOUT_DELETE_SUCCESS,
    ABOUT_DELETE_FAIL,
    ABOUT_CREATE_RESET,
    ABOUT_CREATE_FAIL,
    ABOUT_CREATE_SUCCESS,
    ABOUT_CREATE_REQUEST,
    ABOUT_UPDATE_REQUEST,
    ABOUT_UPDATE_SUCCESS,
    ABOUT_UPDATE_FAIL,
    ABOUT_UPDATE_RESET,
    ABOUT_HOME_REQUEST,
    ABOUT_HOME_SUCCESS,
    ABOUT_HOME_FAIL,
} from '../constants/aboutConstants'

export const aboutListReducer = (state = { abouts: [] }, action) => {
    switch (action.type) {
        case ABOUT_LIST_REQUEST:
            return { loading: true, abouts: [] }
        case ABOUT_LIST_SUCCESS:
            return {
                loading: false,
                abouts: action.payload.abouts,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case ABOUT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const aboutDetailsReducer = (
    state = { about: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case ABOUT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case ABOUT_DETAILS_SUCCESS:
            return { loading: false, about: action.payload }
        case ABOUT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const aboutDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ABOUT_DELETE_REQUEST:
            return { loading: true }
        case ABOUT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case ABOUT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const aboutCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ABOUT_CREATE_REQUEST:
            return { loading: true }
        case ABOUT_CREATE_SUCCESS:
            return { loading: false, success: true, about: action.payload }
        case ABOUT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case ABOUT_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const aboutUpdateReducer = (state = { about: {} }, action) => {
    switch (action.type) {
        case ABOUT_UPDATE_REQUEST:
            return { loading: true }
        case ABOUT_UPDATE_SUCCESS:
            return { loading: false, success: true, about: action.payload }
        case ABOUT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case ABOUT_UPDATE_RESET:
            return { about: {} }
        default:
            return state
    }
}


export const aboutsHomeReducer = (state = { abouts: [] }, action) => {
    switch (action.type) {
        case ABOUT_HOME_REQUEST:
            return { loading: true, abouts: [] }
        case ABOUT_HOME_SUCCESS:
            return { loading: false, abouts: action.payload }
        case ABOUT_HOME_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

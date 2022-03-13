
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    aboutListReducer,
    aboutDetailsReducer,
    aboutDeleteReducer,
    aboutCreateReducer,
    aboutUpdateReducer,
    aboutsHomeReducer,
} from './reducers/aboutReducers'
import {
    serviceListReducer,
    serviceDetailsReducer,
    serviceDeleteReducer,
    serviceCreateReducer,
    serviceUpdateReducer,
    servicesHomeReducer,
} from './reducers/serviceReducers'
import {
    contactListReducer,
    contactDetailsReducer,
    contactDeleteReducer,
    contactCreateReducer,
} from './reducers/contactReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'



const reducer = combineReducers({
    aboutList: aboutListReducer,
    aboutDetails: aboutDetailsReducer,
    aboutDelete: aboutDeleteReducer,
    aboutCreate: aboutCreateReducer,
    aboutUpdate: aboutUpdateReducer,
    aboutsHome: aboutsHomeReducer,
    serviceList: serviceListReducer,
    serviceDetails: serviceDetailsReducer,
    serviceDelete: serviceDeleteReducer,
    serviceCreate: serviceCreateReducer,
    serviceUpdate: serviceUpdateReducer,
    servicesHome: servicesHomeReducer,
    contactList: contactListReducer,
    contactCreate: contactCreateReducer,
    contactDetails: contactDetailsReducer,
    contactDelete: contactDeleteReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store


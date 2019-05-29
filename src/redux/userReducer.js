import axios from 'axios'

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

export function requestUserData(){
    const userData = axios.get('/auth/user-data').then(res => res.data)
        return {
            type: REQUEST_USER_DATA,
            payload: userData
        }
}

function userReducer(state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = action.payload.user
            return {
                email, firstName, lastName
            }
        default:
            return state
    }
}

export default userReducer
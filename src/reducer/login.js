const initialState = {
    name: '',
    adress: '',
    tel: '',
    email: '',
    isLogged: false,
};
const login = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGENAME":
            return {
                ...state,
                name: action.payload
            };
        case "CHANGEADRESS":
            return {
                ...state,
                adress: action.payload
            };
        case "CHANGEEMAIL":
            return {
                ...state,
                email: action.payload
            };
        case "CHANGETEL":
            return {
                ...state,
                tel: action.payload
            };
        case "CHANGE_LOGGED":
            return {
                ...state,
                isLogged: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                name: '',
                adress: '',
                tel: '',
                email: '',
                isLogged: false
            }
        case "LOGIN":
            return {
                ...state,
                name: action.payload.name,
                adress: action.payload.adress,
                tel: action.payload.tel,
                email: action.payload.email,
                isLogged: action.payload.isLogged
            }
        default:
            return state
    }
}

export default login; 
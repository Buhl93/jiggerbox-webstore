import menuTypes from './menu.types'

const INITIAL_STATE = {
    menuOpen: false,
    cocktailMenuOpen: false
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuTypes.TOGGLE_MENU:
            return {
                ...state,
                menuOpen: action.payload
            }
        case menuTypes.COCKTAIL_MENU:
            return {
                ...state,
                cocktailMenuOpen: action.payload
            }
        default:
            return state;
    }
}

export default menuReducer
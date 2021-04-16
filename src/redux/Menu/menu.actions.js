import menuTypes from './menu.types'

export const openMenu = () => ({
    type: menuTypes.TOGGLE_MENU,
    payload: true
})

export const closeMenu = () => ({
    type: menuTypes.TOGGLE_MENU,
    payload: false
})

export const openCocktailMenu = () => ({
    type: menuTypes.COCKTAIL_MENU,
    payload: true
})

export const closeCocktailMenu = () => ({
    type: menuTypes.COCKTAIL_MENU,
    payload: false
})
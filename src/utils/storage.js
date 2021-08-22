const userKey = 'user'
const cartKey = ''

const saveToken = (token) =>
    localStorage.setItem(userKey, JSON.stringify(token))

const loadToken = () =>
    JSON.parse(localStorage.getItem(userKey))

const clearToken = () =>
    localStorage.removeItem(userKey)

const saveProducts = (product) =>
    localStorage.setItem(cartKey, product)

const loadProducts = () =>
    localStorage.getItem(cartKey)

const clearProducts = () =>
    localStorage.removeItem(cartKey)


export default {
    saveToken,
    loadToken,
    clearToken,
    saveProducts,
    loadProducts,
    clearProducts
}

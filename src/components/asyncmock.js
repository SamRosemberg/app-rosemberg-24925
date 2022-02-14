
const products = [
    { id: 1, name: 'Hola', price: 'usd 10', category: 'Novelas', img:'#', stock: 25, description:'Sinopsis 1'},
    { id: 2, name: 'Hola2', price: 'usd 12', category: 'Escolar', img:'#', stock: 16, description:'Sinopsis 2'},
    { id: 3, name: 'Hola3', price: 'usd 16', category: 'Terror', img:'#', stock: 10, description:'Sinopsis 3'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
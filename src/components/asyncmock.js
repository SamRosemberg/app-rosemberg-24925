
const products = [
    { id: 1, name: 'Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', price: 'usd 10', category: 'Novelas', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9821/9781982147662.jpg', stock: 25, description:'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?'},
    { id: 2, name: 'Miss, I dont give a sh*t', author: 'Adele Bates', price: 'usd 12', category: 'Escolar', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5297/9781529731569.jpg', stock: 16, description:'In this down-to-earth book Adele Bates shares practical approaches, strategies and tips from the classroom on how to help pupils with behavioural needs thrive with their education.'},
    { id: 3, name: 'The Long Walk', author: 'Stephen King', price: 'usd 16', category: 'Terror', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5011/9781501144264.jpg', stock: 10, description:'In the near future, when America has become a police state, one hundred boys are selected to enter an annual contest where the winner will be awarded whatever he wants for the rest of his life.'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000)
    })
}
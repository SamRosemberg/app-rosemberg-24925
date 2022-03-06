
const products = [
    { id: 1, name: 'Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', price: 10, category: 'Novela', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9821/9781982147662.jpg', stock: 25, description:'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?'},
    { id: 2, name: 'Miss, I dont give a sh*t', author: 'Adele Bates', price: 12, category: 'Escolar', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5297/9781529731569.jpg', stock: 16, description:'In this down-to-earth book Adele Bates shares practical approaches, strategies and tips from the classroom on how to help pupils with behavioural needs thrive with their education.'},
    { id: 3, name: 'The Long Walk', author: 'Stephen King', price: 16, category: 'Terror', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5011/9781501144264.jpg', stock: 10, description:'In the near future, when America has become a police state, one hundred boys are selected to enter an annual contest where the winner will be awarded whatever he wants for the rest of his life.'},
    { id: 4, name: 'The Midnight Library', author: 'Matt Haig', price: 13, category: 'Novela', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7868/9781786892737.jpg', stock: 22, description:'Nora s life has been going from bad to worse. Then at the stroke of midnight on her last day on earth she finds herself transported to a library. There she is given the chance to undo her regrets and try out each of the other lives she might have lived. Which raises the ultimate question: with infinite choices, what is the best way to live?'},
    { id: 5, name: 'Atlas of Human Anatomy', author: 'Fran H. Netter', price: 32, category: 'Escolar', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3233/9780323393225.jpg', stock: 30, description:'Region-by-region coverage, including Muscle Table appendices at the end of each section. Large, clear illustrations with comprehensive labels not only of major structures, but also of those with important relationships. Tabular material in separate pages and additional supporting material as a part of the electronic companion so the printed page stays focused on the illustration.'},
    { id: 6, name: 'Insomia', author: 'Stephen King', price: 18, category: 'Terror', img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5011/9781501144226.jpg', stock: 6, description:'Since his wife died, Ralph Roberts has been having trouble sleeping. Each night he wakes up a bit earlier, until he is barely sleeping at all. During his late night walks, he observes some strange things going on in Derry, Maine. He sees colored ribbons streaming from peoples heads, two strange little men wandering around town after dark, and more. He begins to suspect that these visions are something more than hallucinations brought on by lack of sleep.'},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}

export const getProductByCategory = (category) => {
    console.log("fun",category);
    return new Promise((resolve, reject) => {
        const prod = products.filter(p => p.category === category)
        console.log(prod);
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}
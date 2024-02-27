const product = {
    namespaced: true,
    state: {
        products: [
            {
                id: 1,
                name: 'Samsung Galaxy S21',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'https://dkstatics-public.digikala.com/digikala-products/f9e0f4bd266dd2c1e3c300f624e37a5d6cba9d54_1656427600.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
                price: 300
            },
            {
                id: 2,
                name: 'iPhone 13',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
                price: 600
            },
            {
                id: 3,
                name: 'Redmi Note 12',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1690712123.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
                price: 400
            },
            {
                id: 4,
                name: 'Nothing Phone 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: 'https://dkstatics-public.digikala.com/digikala-products/b3d660fd6a3946de6f822dc28455af8a9e22cd67_1691477390.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
                price: 500
            }
        ]
    },
    getters: {
        allProduct(state) {
            return state.products;
        }
    }
}

export default product;
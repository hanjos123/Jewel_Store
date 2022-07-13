import collection1 from '../images/collection1.jpg'
import collection2 from '../images/collection2.jpg'
import collection3 from '../images/collection3.jpg'
import collection4 from '../images/collection4.jpg'
import collection5 from '../images/collection5.jpg'
import collection6 from '../images/collection6.jpg'

import aerrings from '../images/aerrings.svg'
import bracelet from '../images/bracelet.svg'
import bracket from '../images/bracket.svg'
import custom from '../images/custom.svg'
import necklate from '../images/necklate.svg'
import glass from '../images/glass.svg'

import shop1 from '../images/pc1.png'
import shop2 from '../images/pc2.png'

import ring1 from '../images/ring1.jpg'
import ring2 from '../images/ring2.jpg'
import ring3 from '../images/ring3.jpg'
import ring4 from '../images/ring4.jpg'
import ring5 from '../images/ring5.jpg'
import ring6 from '../images/ring6.jpg'

export const MENU__DATA = [
    {
        display: 'SHOP POINT',
        url: 'shop-point'
    },
    {
        display: 'SHOP',
        url: 'shop'
    },
    {
        display: 'COLLECTION',
        url: 'collection'
    },
    {
        display: 'BLOG',
        url: 'blog/all'
    },
    {
        display: 'CONTACT',
        url: 'contact'
    }
]

export const SHOP__DATA = [
    {
        display: 'Ring',
        url: '/category/ring',
        svgUrl: bracket,
        imgUrl: shop1
    },
    {
        display: 'Glasses',
        url: '/category/glasses',
        svgUrl: glass,
        imgUrl: shop2
    },
    {
        display: 'Necklace',
        url: '/category/necklace',
        svgUrl: necklate,
        imgUrl: shop1
    },
    {
        display: 'Bracelet',
        url: '/category/bracelet',
        svgUrl: bracelet,
        imgUrl: shop2
    },
    {
        display: 'Earrings',
        url: '/category/earrings',
        svgUrl: aerrings,
        imgUrl: shop1
    },
    {
        display: 'Custom',
        url: '/category/custom',
        svgUrl: custom,
        imgUrl: shop2
    },
]

export const COLLECTION__DATA = [
    {
        display: 'Glints - Crack',
        url: '#',
        imgUrl: collection1
    },
    {
        display: 'Baroque',
        url: '#',
        imgUrl: collection2
    },
    {
        display: 'Bloody Hearts',
        url: '#',
        imgUrl: collection3
    },
    {
        display: 'Lauris',
        url: '#',
        imgUrl: collection4
    },
    {
        display: 'Fenix',
        url: '#',
        imgUrl: collection5
    },
    {
        display: 'Flower',
        url: '#',
        imgUrl: collection6
    },
]

export const PRODUCT__DATA = [
    {
        display: 'FLOWER DIG',
        price: 900000,
        priceDiscount: null,
        imgUrl: ring1,
        url: '/product-detail/flower-dig'
    },
    {
        display: 'FLOWER Ring',
        price: 1800000,
        priceDiscount: null,
        imgUrl: ring2,
        url: '#'
    },
    {
        display: 'CRACK Ring',
        price: 800000,
        priceDiscount: null,
        imgUrl: ring3,
        url: '#'
    },
    {
        display: 'T LOVE Ring',
        price: 1200000,
        priceDiscount: null,
        imgUrl: ring4,
        url: '#'
    },
    {
        display: 'FLOWER DIG',
        price: 1800000,
        priceDiscount: 1530000,
        imgUrl: ring5,
        url: '#'
    },
    {
        display: 'BLOODYHEARTS Ring',
        price: 1500000,
        priceDiscount: null,
        imgUrl: ring6,
        url: '#'
    },
    {
        display: 'BLOODYHEARTS Ring',
        price: 1500000,
        priceDiscount: null,
        imgUrl: ring6,
        url: '#'
    }



]
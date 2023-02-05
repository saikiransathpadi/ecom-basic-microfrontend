import faker from 'faker';


const cartEle = (ele) => {
    let cart = `<div>You have ${faker.random.number()} items in your cart</div>`;
    ele.innerHTML = cart;
    console.log('cart ele set')
};

if (process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#div-cart');
    if (ele) {
        cartEle(ele);
    }
}

export { cartEle };
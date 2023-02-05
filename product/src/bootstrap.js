import faker from 'faker';

const mount = (ele) => {
    let products = '';
    for (let i = 0; i < 10; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    console.log(products);
    ele.innerHTML = products;
    console.log('products loaded')
};

if (process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#div-products');
    if (ele) {
        mount(ele);
    }
}

export { mount };

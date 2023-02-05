import { mount } from 'products/ProductsIndex';
import {cartEle} from 'cart/CartShow';

console.log('container');

mount(document.querySelector('#my-products'))
cartEle(document.querySelector('#my-cart'))
// console.log(document);
const productDetail = document.querySelector('.product__detail');
const modalProduct = document.querySelector('.modal_product');

productDetail.addEventListener('click', () => {
    modalProduct.classList.add('modal_open');
})
 
modalProduct.addEventListener('click', () => {
    modalProduct.classList.remove('modal_open');
})


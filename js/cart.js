const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity);
    // display on UI
    displayProducts(product, quantity);

    // set to local storage
    // simple way
    // localStorage.setItem(product, quantity);

    // actual way
    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();

    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.parse(cart);

    // save to local storage
    localStorage.setItem('cart', cartStringified);
}

// UI dispaly function
const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}
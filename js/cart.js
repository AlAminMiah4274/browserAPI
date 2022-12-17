// step: 2
const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

// step: 1
const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    // display on UI
    addProductToDisplay(product, quantity);

    // set to local storage
    // simple way
    // localStorage.setItem(product, quantity);

    // actual way
    saveItemToLocalStorage(product, quantity);
}

// step: 5
const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

// step: 4
const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();

    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // save to local storage
    localStorage.setItem('cart', cartStringified);
}

// step : 3, UI dispaly function
const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

// setp: 6, show product on UI from local storage:
const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        addProductToDisplay(product, quantity);
    }
}
displayStoredProducts();
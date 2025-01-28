const drinks = [
    { id: 0, image: 'Coke.jpeg', title: "Coca cola", price: 120 },
    { id: 1, image: 'Coke.jpeg', title: "Coca cola", price: 100 },
    { id: 2, image: 'Coke.jpeg', title: "Coca cola", price: 100 },
    { id: 3, image: 'Coke.jpeg', title: "Coca cola", price: 100 }
];


const snacks = [
    { id: 0, image: 'Coke.jpeg', title: "Coca cola", price: 120 },
    { id: 1, image: 'Coke.jpeg', title: "Coca cola", price: 100 },
    { id: 2, image: 'Coke.jpeg', title: "Coca cola", price: 100 },
    { id: 3, image: 'Coke.jpeg', title: "Coca cola", price: 100 }
];


const sweets = [
    { id: 0, image: 'Coke.jpeg', title: "Coca cola", price: 120 },
    { id: 1, image: 'Coke.jpeg', title: "Coca cola", price: 100 },
    { id: 2, image: 'Coke.jpeg', title: "Coca cola", price: 100 },
    { id: 3, image: 'Coke.jpeg', title: "Coca cola", price: 100 }
];



let i = 0;

const renderItems = (items, category) => {
    document.getElementById(category).innerHTML = items.map((item) => {
        const { image, title, price } = item;
        return (
            `<div class="box">
                <div class="imgBox">
                    <img class="images" src=${image} alt="${title}">
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>$${price}.00</h2>` +
            `<button onclick='addtobasket(${item.id}, "${category}")'>Add to Basket</button>` +
            `</div>
            </div>`
        );
    }).join('');
   
};

let basket = [];

function addtobasket(id, category) {
    let item;
    if (category === 'Drinks') {
        item = drinks.find(drink => drink.id === id);
    } else if (category === 'Snacks') {
        item = snacks.find(snack => snack.id === id);
    } else if (category === 'Sweets') {
        item = sweets.find(sweet => sweet.id === id);
    }
    basket.push({item});
    displayBasket();
}

function delElement(index) {
    basket.splice(index, 1);
    displayBasket();
}

function displayBasket() {
    let j = 0, total = 0;
    document.getElementById('Itemcount').innerHTML = basket.length;
    document.getElementById('total').innerHTML = "$0.00";
    let data = "<p id='basket-text'>Basket is empty, buy to power up the brain...</p>";

    if (basket.length === 0) {
        document.getElementById('cartItem').innerHTML = data;
    } else {
        document.getElementById("cartItem").innerHTML = basket.map((item) => {
            const { image, title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} alt="${title}">
                    </div>
                    <p style='font-size:25px;'>${title}</p>
                    <h2 style='font-size:20px;'>$${price}.00</h2>` +
                `<button class='trash' onclick='delElement(${j++})'>Remove</button></div>`
            );
        }).join('');
    }
}


renderItems(drinks, 'Drinks');
renderItems(snacks, 'Snacks');
renderItems(sweets, 'Sweets');

let Product = document.getElementByClassName("cart-item");
// Product.style.box-shadow = "20px 20px 50px rgba(0,0,0,.5)";


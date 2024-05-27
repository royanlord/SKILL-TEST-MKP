import { pizzas, pizzaSizes, toppings } from './data.js';

let selectedSize = ''
let selectedPizzaPrice = 0

const totalPrice = document.getElementById('total-price')

const pizzaElements = pizzas.map((pizza, index) => `
    <div class="card">
        <div class="card-content">
            <img src="${pizza.image}" alt="">
            <h4>${pizza.name}</h4>
            <p>$${pizza.price}</p>
            <input type="radio" name="pizza-choosen" id="pizza-choosen-${index}">
        </div>
    </div>
`).join('');

const sizeElements = pizzaSizes.map((size, index) => `
    <div class="size">
        <input type="radio" name="size-choosen" id="size-${index}">
        <h3>${size}</h3>
    </div>
`).join('');


const addPizza = () => {
    const radioPizza = document.querySelectorAll('input[name="pizza-choosen"]');
    radioPizza.forEach((input, index) => {
        input.addEventListener('change', () => {
            const selectedPizza = pizzas[index];
            selectedPizzaPrice = selectedPizza.price;
            totalPrice.innerText = '$' + selectedPizzaPrice;
            resetSizes()
            handlePizzaChange(selectedPizza)
        });
    });
}

const resetToppings = () => {
    const toppingChecks = document.querySelectorAll('input[type="checkbox"]');
    toppingChecks.forEach(check => {
        // console.log(check);
        check.removeAttribute('disabled');
        check.style.cursor = 'pointer';
        check.checked = false;
    })
}

const resetSizes = () => {
    const sizeRadios = document.querySelectorAll('input[name="size-choosen"]');
    sizeRadios.forEach(check => {
        check.checked = false;
    })
}

const disableToppings = (inactiveToppings) => {
    inactiveToppings.forEach(topping => {
        const toppingElement = document.getElementById(topping)
        toppingElement.setAttribute('disabled', true);
        
        document.getElementById(topping).style.cursor = 'not-allowed';
    });
}

const handlePizzaChange = (selectedPizza) => {
    if (selectedPizza) {
        visibleSize()
        resetToppings()
        disableToppings(selectedPizza.inactiveToppings)
        // if (selectedPizza?.name === 'TUNA MELT') {
        //     document.getElementById('lobster').setAttribute('disabled', true);
        //     document.getElementById('oyster').setAttribute('disabled', true);
        //     document.getElementById('salmon').setAttribute('disabled', true);
        //     document.getElementById('bacon').setAttribute('disabled', true);
        //     document.getElementById('duck').setAttribute('disabled', true);
        // } else if (selectedPizza?.name === 'CHEESEBURGER') {
        //     document.getElementById('avocado').setAttribute('disabled', true);
        //     document.getElementById('tuna').setAttribute('disabled', true);
        //     document.getElementById('duck').setAttribute('disabled', true);
        // } else if (selectedPizza?.name === 'FRANKFURTER BBQ') {
        //     document.getElementById('avocado').setAttribute('disabled', true);
        //     document.getElementById('lobster').setAttribute('disabled', true);
        //     document.getElementById('oyster').setAttribute('disabled', true);
        //     document.getElementById('salmon').setAttribute('disabled', true);
        // }
    }
}

const addSize = () => {
    const radioSize = document.querySelectorAll('input[name="size-choosen"]');
    radioSize.forEach((input, index) => {
        input.addEventListener('change', () => {
            const size = pizzaSizes[index];
            selectedSize = size
            countTotal(selectedPizzaPrice)
        });
    });
}

const toppingChecked = () => {
    const toppingChecks = document.querySelectorAll('input[type="checkbox"]');
    toppingChecks.forEach(check => {
        check.addEventListener('change', () => {
            countTotal(selectedPizzaPrice);
        });
    });
}

const countTotal = (pricePizza) => {
    console.log(pricePizza);
    console.log(selectedSize);

    const toppingChecks = document.querySelectorAll('input[type="checkbox"]');
    const selectedToppings = Array.from(toppingChecks).filter(checkbox => checkbox.checked);
    const toppingPrice = selectedToppings.reduce((total, checkbox) => {
        const topping = toppings.find(t => t.topping.toLowerCase() === checkbox.name);
        return total + (topping ? topping.price : 0);
    }, 0);
    
    if (selectedSize === 'small') {
        pricePizza = pricePizza - 1;
    } else if (selectedSize === 'large') {
        pricePizza = pricePizza + 2;
    }

    const total = pricePizza + toppingPrice
    totalPrice.innerText = '$' + total
    return pricePizza
}

const visibleSize = () => {
    document.getElementById('content-2').style.display = 'block'
}

document.querySelector('.card-pizza').innerHTML = pizzaElements;
document.querySelector('.pizza-size').innerHTML = sizeElements;
addPizza()
addSize()
toppingChecked()
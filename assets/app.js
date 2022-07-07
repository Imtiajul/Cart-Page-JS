//catching the dom element
// first book item 
const rmvBookOne = document.querySelector('#rvm-btn1');
const alertOne = document.querySelector('#alert-message1');
const closeBtnOne = document.querySelector('#close1');
const undoBtnOne = document.querySelector('#alert-undo1');

const bookOne = document.querySelector('#cart-item1');
const qntBookOne = document.querySelector('#quantity-box-1');
const incrementBookOne = document.querySelector('#increment1');
const decrementBookOne = document.querySelector('#decrement1');
const priceBookOne = document.querySelector('#price1');

// Rest of the Element
const cartTotal = document.querySelector('#cart-total');
const subTotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const payable = document.querySelector('#payable');

// increment decrement book item function
function increDecrement(bookOne, bookTwo) {
   let sub = Number(bookOne) + Number(bookTwo);
   cartTotal.innerText = sub;
   subTotal.innerText = sub + ' Tk';
   total.innerText = sub + 50 + ' Tk';
   payable.innerText = sub + 50 + ' Tk';
}

//functionaity of book one
rmvBookOne.addEventListener('click', function (event) {
   bookOne.style.display = 'none';
   alertOne.style.display = 'block';

   let deduct = Number(cartTotal.innerText) - Number(priceBookOne.innerText);
   cartTotal.innerText = deduct;
   subTotal.innerText = deduct + ' Tk';
   total.innerText = deduct + 50 + ' Tk';
   payable.innerText = deduct + 50 + ' Tk';
});

undoBtnOne.addEventListener('click', function () {
   bookOne.style.display = 'block';
   alertOne.style.display = 'none';

   let deduct = Number(cartTotal.innerText) + Number(priceBookOne.innerText);
   cartTotal.innerText = deduct;
   subTotal.innerText = deduct + ' Tk';
   total.innerText = deduct + 50 + ' Tk';
   payable.innerText = deduct + 50 + ' Tk';
});

closeBtnOne.addEventListener('click', function () {
   bookOne.remove();
   // alertOne.style.display = 'none';
   alertOne.remove();
});

// incrementing item quantity and updating the price
incrementBookOne.addEventListener('click', function () {
   let itemQt = Number(qntBookOne.value);
   let itemPrice = 204;
   qntBookOne.value = itemQt + 1;

   priceBookOne.innerText = itemPrice * qntBookOne.value;

   increDecrement(priceBookTwo.innerText, priceBookOne.innerText);

});
// decrementing item quantity and updating the price
decrementBookOne.addEventListener('click', function () {
   let itemQt = Number(qntBookOne.value);
   let itemPrice = 204;
   if (itemQt > 1) {
      qntBookOne.value = itemQt - 1;

      priceBookOne.innerText = itemPrice * qntBookOne.value;

      // displaying price function
      increDecrement(priceBookTwo.innerText, priceBookOne.innerText);
   } else {
      alert(`Item value can't be Zero`);
   }
});


// Second book item
const rmvBookTwo = document.querySelector('#rvm-btn2');
const alertTwo = document.querySelector('#alert-message2');
const closeBtnTwo = document.querySelector('#close2');
const undoBtnTwo = document.querySelector('#alert-undo2');

const bookTwo = document.querySelector('#cart-item2');
const qntBookTwo = document.querySelector('#quantity-box-2');
const incrementBookTwo = document.querySelector('#increment2');
const decrementBookTwo = document.querySelector('#decrement2');
const priceBookTwo = document.querySelector('#price2');

//functionaity of book Two
rmvBookTwo.addEventListener('click', function (event) {
   bookTwo.style.display = 'none';
   alertTwo.style.display = 'block';
   bookOne.remove();
   alertOne.style.display = 'none';
});

undoBtnTwo.addEventListener('click', function () {
   bookTwo.style.display = 'block';
   alertTwo.style.display = 'none';

});

closeBtnTwo.addEventListener('click', function () {
   bookTwo.remove();
   // alertTwo.style.display = 'none';
   alertTwo.remove();
});


//book two
// incrementing item quantity and updating the price
incrementBookTwo.addEventListener('click', function () {
   let itemQt = Number(qntBookTwo.value);
   let itemPrice = 128;
   qntBookTwo.value = itemQt + 1;

   priceBookTwo.innerText = itemPrice * qntBookTwo.value;
   // cartTotal.innerText = Number(priceBookTwo.innerText) + Number(priceBookOne.innerText);

   // displaying price function
   increDecrement(priceBookTwo.innerText, priceBookOne.innerText);
});
// decrementing item quantity and updating the price
decrementBookTwo.addEventListener('click', function () {
   let itemQt = Number(qntBookTwo.value);
   let itemPrice = 128;
   if (itemQt > 1) {
      qntBookTwo.value = itemQt - 1;

      priceBookTwo.innerText = itemPrice * qntBookTwo.value;
      // displaying price function
      increDecrement(priceBookTwo.innerText, priceBookOne.innerText);
   } else {
      alert(`Item value can't be Zero`);
   }

});
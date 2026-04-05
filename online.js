let items=[];
function addToCart(name,price){
    const index = items.findIndex(item=>item.name===name);
    if(index!==-1){
        items[index].quantity+=1;

    }
    else{
        const item={
            name:name,
            price:price,
            quantity:1
        };
           items.push(item);
    }
    updateCartDisplay();
}
function deleteFromCart(index){
    items.splice(index,1);
    updateCartDisplay();
}
function updateQuantity(index,quantity){
items[index].quantity=quantity;
updateCartDisplay();
}
function checkout(){
    let totalPrice=0;
    items.forEach(item => {
        totalPrice +=item.price*item.quantity;
    });
        
        
        alert(`Total price: $${totalPrice.toFixed(2)}`);
}
function updateCartDisplay(){
    const cartElement=document.getElementById("cart-items");
    cartElement.innerHTML="";
    items.forEach((item,index) => {
        const li=document.createElement("li");
        li.className='cart-item';
        li.innerHTML=`
        <span>${item.name}- $${item.price.toFixed(2)}</span>
        <div class="quantity">
            <button onClick="updateQuantity(${index},${item.quantity - 1})">-</button>
            <input type="number"
            value="${item.quantity}"
            min="1"max="10"
            onChange="updateQuantity(${index},this.value)"></input>
            <button onClick="updateQuantity(${index},${item.quantity + 1})">+</button>
        </div>
        
        <button onClick="deleteFromCart(${index})">Delete</button>
        `;
        cartElement.appendChild(li);
    });
}
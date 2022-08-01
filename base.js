import Items from "./content.js";
var Cartbtns = [];
Items.forEach((item)=>{
    //khởi tạo các biến
    var divElememt = document.createElement("div");
    divElememt.className = 'wrap-item';
    var imgElememt = document.createElement("img");
    imgElememt.src = item.img;
    var h1Elememt = document.createElement("h3");
    h1Elememt.innerText = item.title;
    var pElememt = document.createElement("p");
    pElememt.innerText = item.price;
    var btn = document.createElement("button");
    btn.innerText = 'Thêm vào giỏ hàng';
    btn.className = 'btn-add';
    Cartbtns.push(btn);
    // add item vao web
    divElememt.appendChild(imgElememt);
    divElememt.appendChild(h1Elememt);
    divElememt.appendChild(pElememt);
    divElememt.appendChild(btn);

    document.querySelector('.root').appendChild(divElememt);
})

Cartbtns.forEach(function(cart){
    cart.onclick = function(){
        var parent = cart.parentElement;
        var img = parent.querySelector('img');
        var h3 = parent.querySelector('h3');
        var p = parent.querySelector('p');

        var divElememt = document.createElement('div');
        divElememt.className = 'wrap-cart';

        var imgElememt = document.createElement('img');
        imgElememt.src = img.src;

        var h4Elememt = document.createElement('h4');
        h4Elememt.innerText = h3.innerText;

        var pElememt = document.createElement('p');
        pElememt.innerText = p.innerText;
        
        //add
        divElememt.appendChild(imgElememt);
        divElememt.appendChild(h4Elememt);
        divElememt.appendChild(pElememt);

        document.querySelector('.cart-show').appendChild(divElememt);
    }
})

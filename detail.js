    //  Add to cart
    var addCart = document.getElementsByClassName("add-to-cart");
    for(var i = 0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //Add to cart
    function addCartClicked(event){
        var button = event.target;
        var shopProducts = button.parentElement;
        var title = shopProducts.getElementsByClassName("producttitle")[0].innerText;
        var price = shopProducts.getElementsByClassName("price")[0].innerText;
        var singleImg = shopProducts.getElementsByClassName("single-img")[0].src;
        addProductToCart(title, price, singleImg);
        updatetotal();
        
    }
    function addProductToCart(title, price, singleImg){
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add("cart-box");
        var cartItems = document.getElementsByClassName("cart-content")[0];
        var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    
        for(var i = 0; i< cartItemsNames.length; i++){
            if(cartItemsNames[i].innerText == title){
            alert("you have already add this item to cart");
            return;
        }
        
     }
    
     var cartBoxContent = `
     
                    <div class="detail-img">
                    <img src="${singleImg}" width="100%" id="mainimg" class="single-img">
                </div>
                <div class="detail">
                    <h4 class="producttitle">${title}</h4>
                    <h2 class="price">${price}</h2>
                    <input type="number" value="1">
                    
                </div>
`;
    
                cartShopBox.innerHTML = cartBoxContent;
                cartItems.append(cartShopBox);
                cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
                cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    
    }
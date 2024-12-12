
const shop = document.getElementById('shop')


let basket = JSON.parse(localStorage.getItem('data')) || []

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
        
      let {id,name,price,desc,img} = x 

    return `
          <div class='shop_item'  id=prodcut-id-${id}>
               <img src= '${img}' alt='' />
               <div class='product_info' >
                      <h5>${name}</h5>
                      <p class="text">100% organic polyurthane(shell) 100 % polyurethane(liing)75% polyurethane 25% cotton(sweet)</p>
                      <p class="text1"></p>
                      <p  class='price'> <span>$:</span> ${price} </p>
                      <p class="text1"></p>

                        <button onclick ="Delete('${id}','${name}','${price}','${img}')">Delete </button>

                       <button onclick ="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart </button>
               </div>
           </div>  
    `

   })
}


let Delete = (id,name,price,img) => {
  basket = basket.filter((x) => x.id !== id)
  generateShop()
  calculate()
  localStorage.setItem('data',JSON.stringify(basket))
}


let add_to_cart = (id,name,price,img) => {
 
  basket.push({
    id: id,
    item: 1,
    name: name,
    price: price,
    img:img
    })

  localStorage.setItem('data',JSON.stringify(basket))


  calculate()
}

let calculate = () => {
  let cart_icon = document.getElementById('ican') 
  let cart_amount = basket.length

   cart_icon.innerHTML = cart_amount
}


calculate()
generateShop()

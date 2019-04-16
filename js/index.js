
window.onload = function(){
  var getProduct = document.getElementsByClassName('product-name');
  var row = document.getElementsByClassName("cart-element")



  function calculatePrice () {
    var row = document.getElementsByClassName("cart-element")
    var totalPrice = 0;
    for (var i = 0; i<row.length; i++) {
      var price = parseFloat(row[i].getElementsByClassName('product-price')[0].textContent)
      var quantity = parseFloat(row[i].getElementsByClassName("qty")[0].value)
      
      var total = document.getElementsByClassName('total-price')[i]
      total.innerHTML = price * quantity;
      totalPrice += parseFloat(total.innerHTML);
      document.getElementsByClassName('very-total-price')[0].innerHTML = totalPrice;
      
    }
  }

    calculatePrice ()

  //calculatePriceButton.onclick = getTotalPrice ();
  
 //remove the row
  let deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i < getProduct.length; i++) {
    deleteButtons[i].addEventListener('click', function (e) {
      e.currentTarget.parentNode.parentNode.remove();
    });
  }

calculatePriceButton = document.getElementById('btn-calculate-price')
calculatePriceButton.onclick = calculatePrice




let addItemButton = document.getElementById("addItem"); 
addItemButton.onclick = function addItem (){
  let newItem = document.getElementById("newItem").value; 
  let newPrice = document.getElementById("newPrice").value;
  row[0].insertAdjacentHTML("beforebegin" , `
  <div class="cart-element">
  <div class="product-name">
  <span>${newItem}</span>
  </div>
  <div> 
    $<span class="product-price">${newPrice}</span>
  </div>
 <div class="quantity">
  QTY
  <input type="number" class="qty">
 </div>
<div>
  $<span class="total-price">0.00</span>
</div>
<div class="btn-delete-section">
  <button class="btn-delete">Delete</button>
</div>
</div>`)
let deleteButtons = document.getElementsByClassName('btn-delete');
for(var i = 0; i < getProduct.length; i++) {
  deleteButtons[i].addEventListener('click', function (e) {
    e.currentTarget.parentNode.parentNode.remove();
  });
}  

}
};

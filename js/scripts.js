function Pizza(type, size, crust, toppings) {
  this.type = type
  this.size = size
  this.crust = crust
  this.toppings = toppings
}
let totalCost;
let crustCost;
let typeCost;
let toppingsCost  = 0;
let sizeCost;
let number;
let message;

Pizza.prototype.toppingsCost = function () {
  return this.toppings.length * 50
}
function sizeType(sizeT) {
  switch (sizeT) {
    case "small":
      return sizeCost = 200;
      break;

    case "medium":
      return sizeCost = 300;
      break;

    case "large":
      return sizeCost = 400;
      break;

    case "extraLarge":
      return sizeCost = 500;
      break;

  }
}
function crustType(crustT) {
  switch (crustT) {
    case "thin":
      return crustCost = 200;
      break;

    case "thick":
      return crustCost = 300;
      break;

    case "deep":
      return crustCost = 400;
      break;

    case "cheeseFilled":
      return crustCost = 500;
      break;


  }

}
function pizzaType(pizzaT) 
  {
    switch (pizzaT) {

      case "meatDeluxe":
        return typeCost = 600;
        break;

      case "hawaiian":
        return typeCost = 300;
        break;

      case "boerWoers":
        return typeCost = 400;
        break;

      case "chickenPeriPeri":
        return typeCost = 500;
        break;

      case "vegetarian":
        return typeCost = 200;
        break;

    }

  }
function totalPrice(typeCost,crustCost,sizeCost,toppingsCost){
  return totalCost = typeCost + crustCost + sizeCost + toppingsCost
}

$(document).ready(function () 
{
  $("#sendIt").click(function(event){
    event.preventDefault();
    let toppingsS = [];
    $.each($("input[name='topping']:checked"),
    
    function(){
      toppingsS.push($(this).val())
    })

    function toppingsPrice(){
    
    for(var i = 0; i<toppingsS.length; i++){

      if (toppingsS[i]==="pineapples" && sizeT === "small"){
        return toppingsCost = 50 + toppingsCost
      }
      else if (toppingsS[i]==="pineapples" && sizeT === "medium"){
        return toppingsCost = 100 + toppingsCost
      }
      else if (toppingsS[i]==="pineapples" && sizeT === "large"){
        return toppingsCost = 150 + toppingsCost
      }
      else if (toppingsS[i]==="pineapples" && sizeT === "extraLarge"){
        return toppingsCost = 200 + toppingsCost
      }
      else if (toppingsS[i]==="beef" && sizeT === "small"){
        return toppingsCost = 75 + toppingsCost
      }
      else if (toppingsS[i]==="beef" && sizeT === "medium"){
        return toppingsCost = 150 + toppingsCost
      }
      else if (toppingsS[i]==="beef" && sizeT === "large"){
        return toppingsCost = 225 + toppingsCost
      }
      else if (toppingsS[i]==="beef" && sizeT === "extraLarge"){
        return toppingsCost = 300 + toppingsCost
      }
      else if (toppingsS[i]==="bacon" && sizeT === "small"){
        return toppingsCost = 150 + toppingsCost
      }
      else if (toppingsS[i]==="bacon" && sizeT === "medium"){
        return toppingsCost = 300 + toppingsCost
      }
      else if (toppingsS[i]==="bacon" && sizeT === "large"){
        return toppingsCost = 450 + toppingsCost
      }
      else if (toppingsS[i]==="bacon" && sizeT === "extraLarge"){
        return toppingsCost = 600 + toppingsCost
      }
      else if (toppingsS[i]==="chicken" && sizeT === "small"){
        return toppingsCost = 100 + toppingsCost
      }
      else if (toppingsS[i]==="chicken" && sizeT === "medium"){
        return toppingsCost = 200 + toppingsCost
      }
      else if (toppingsS[i]==="chicken" && sizeT === "large"){
        return toppingsCost = 300 + toppingsCost
      }
      else if (toppingsS[i]==="chicken" && sizeT === "extraLarge"){
        return toppingsCost = 400 + toppingsCost
      }
      else if (toppingsS[i]==="cheese" && sizeT === "small"){
        return toppingsCost = 50 + toppingsCost
      }
      else if (toppingsS[i]==="cheese" && sizeT === "medium"){
        return toppingsCost = 150 + toppingsCost
      }
      else if (toppingsS[i]==="cheese" && sizeT === "large"){
        return toppingsCost = 200 + toppingsCost
      }
      else if (toppingsS[i]==="cheese" && sizeT === "extraLarge"){
        return toppingsCost = 250 + toppingsCost
      }
      else{
        return message = "no toppings selected"
      }
    }
    }
    var sizeT = $('input[name="size"]:checked').val();
    var pizzaT = $('input[name="type"]:checked').val();
    var crustT = $('input[name="crust"]:checked').val();
    var number = parseInt($('input#number').val())

    var deliveryStatus = $('input[name="delivery"]:checked').val();

    if (deliveryStatus==="deliver"){
      $("#deliverLocation").toggle
    }
    var deliverLocation = $('deliverLocale').val();

    

    sizeType(sizeT);
    pizzaType(pizzaT);
    crustType(crustT);
    toppingsPrice();
    totalPrice(typeCost,crustCost,sizeCost,toppingsCost)


    alert("Your Bill is" +totalCost*number+"to be taken at"+ deliverLocation)

  })

})

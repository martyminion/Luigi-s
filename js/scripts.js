function Pizza(type, size, crust, toppings) {
  this.type = type
  this.size = size
  this.crust = crust
  this.toppings = toppings
}
let totalCost;
let crustCost;
let typeCost;
let toppingsCost;
let sizeCost;
let number;
Pizza.prototype.toppingsCost = function () {
  return this.toppings.length * 50
}

$(document).ready(function () 
{
  
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
          return typeCost = 200;
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
          return typeCost = 600;
          break;
  
      }
  
    }
  function totalPrice(typeCost,crustCost,sizeCost){
    return totalCost = typeCost + crustCost + sizeCost
  }

  $("#sendIt").click(function(event){
    event.preventDefault();
    var sizeT = $('input[name="size"]:checked').val();
    var pizzaT = $('input[name="type"]:checked').val();
    var crustT = $('input[name="crust"]:checked').val();
    var number = parseInt($('input#number').val())
    
    sizeType(sizeT);
    pizzaType(pizzaT);
    crustType(crustT);
    totalPrice(typeCost,crustCost,sizeCost)

    alert(totalCost*number)

  })
 
})

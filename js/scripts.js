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
Pizza.prototype.toppingsCost = function () {
  return this.toppings.length * 50
}
function sizeType() {
  switch (sizeT) {
    case "small":
      sizeCost = 200;
      break;

    case "medium":
      sizeCost = 300;
      break;

    case "large":
      sizeCost = 400;
      break;

    case "extraLarge":
      sizeCost = 500;
      break;

  }
}
function crustType() {
  switch (crustT) {
    case "thin":
      crustCost = 200;
      break;

    case "thick":
      crustCost = 300;
      break;

    case "deep":
      crustCost = 400;
      break;

    case "cheeseFilled":
      crustCost = 500;
      break;


  }

}
function pizzaType() 
  {
    switch (pizzaT) {

      case "meatDeluxe":
        typeCost = 200;
        break;

      case "hawaiian":
        typeCost = 300;
        break;

      case "boerWoers":
        typeCost = 400;
        break;

      case "chickenPeriPeri":
        typeCost = 500;
        break;

      case "vegetarian":
        typeCost = 600;
        break;

    }

  }
$(document).ready(function () 
{
  var pizzaT = $("form#pizzaType").val();
  var crustT = $("form#crust").val();
  var sizeT = $("form#size").val();

  $("#sendIt").click(function(){
    
    sizeType();
    pizzaType();
    crustType();
    
    alert(sizeCost+crustCost+typeCost)

  })


})

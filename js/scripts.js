function Pizza(type, size, crust, toppings) {
  this.type = type
  this.size = size
  this.crust = crust
  this.toppings = toppings
}
let pizzas = [];
let totalCost;
let crustCost;
let typeCost;
let toppingsCost = 0;
let sizeCost;
let number;
let message;
let deliverLocation;
let pizzaT;
let sizeT;
let crustT;




Pizza.prototype.toppingsCost = function () {
  return this.toppings.length * 50
}

Pizza.prototype.sizeType = function (sizeT) {
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

Pizza.prototype.crustType = function (crustT) {
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

Pizza.prototype.pizzaType = function (pizzaT) {
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

Pizza.prototype.totalPrice = function totalPrice(typeCost, crustCost, sizeCost, toppingsCost) {
  return totalCost = typeCost + crustCost + sizeCost + toppingsCost
}


$(document).ready(function () {
  $("#thinCrust").click(function () {
    $("#thinCrust").children('img').toggle()
  })
  $("#thickCrust").click(function () {
    $("#thickCrust").children('img').toggle()
  })
  $("#deepCrust").click(function () {
    $("#deepCrust").children('img').toggle()
  })
  $("#cheeseCrust").click(function () {
    $("#cheeseCrust").children('img').toggle()
  })

  $("#addPizza").click(function (event) {
    event.preventDefault();
    $("#newPizza").append('<div id="pizzaType" class="form-check">' + '<h3>Choose you type of pizza</h3>' + '<div class="form-check-inline">' +
      '<label for="pizzaType1" class="form-check-label">Meat Deluxe</label>' +
      '<input class="form-check-input" name="type" type="radio" value="meatDeluxe"></div>' + '<div class="form-check-inline">' +
      '<label for="pizzaType2" class="form-check-label">Hawaiian</label>' +
      '<input class="form-check-input" name="type" type="radio" value="hawaiian"></div><br>' + '<div class="form-check-inline">' +
      '<label for="pizzaType3" class="form-check-label">BoerWoers</label>' +
      '<input class="form-check-input" name="type" type="radio" value="boerWoers"></div>' + '<div class="form-check-inline">' +
      '<label for="pizzaType4" class="form-check-label">Chicken PeriPeri</label>' +
      '<input class="form-check-input" name="type" type="radio" value="chickenPeriPeri"></div><br>' + '<div class="form-check-inline">' +
      '<label for="pizzaType5" class="form-check-label">Vegetarian</label>' +
      '<input class="form-check-input" name="type" type="radio" value="vegetarian"></div></div>' + '<div class="form-check">' +
      '<h3>Does size Matter ??</h3>' + '<div class="form-check-inline">' + '<label for="pizzaSize1" class="form-check-label">Small</label>' +
      '<input class="form-check-input" name="size" type="radio" value="small"></div>' + '<div class="form-check-inline">' +
      '<label for="pizzaSize2" class="form-check-label">Medium</label>' +
      '<input id="size" class="form-check-input" name="size" type="radio" value="medium"></div><br>' + '<div class="form-check-inline">' +
      '<label for="pizzaSize3" class="form-check-label">Large</label>' +
      '<input id="size" class="form-check-input" name="size" type="radio" value="large"></div>' + '<div class="form-check-inline">' +
      '<label for="pizzaSize4" class="form-check-label">Extra Large</label>' + '<input id="size" class="form-check-input" name="size" type="radio" value="extraLarge"></div></div>' +
      '<div id="crust" class="form-check">' + '<h3>Its a crusty affair</h3>' + '<div class="form-check-inline">' +
      '<label for="pizzaCrust1" class="form-check-label">Thin Crust</label>' +
      '<input class="form-check-input" name="crust" type="radio" value="thin"></div>' + '<div class="form-check-inline">' +
      '<label for="pizzaCrust2" class="form-check-label">Thick Crust</label>' +
      '<input class="form-check-input" name="crust" type="radio" value="thick"></div><br>' + '<div class="form-check-inline">' +
      '<label for="pizzaCrust3" class="form-check-label">Deep Crust</label>' +
      '<input class="form-check-input" name="crust" type="radio" value="deep"></div>' +
      '<div class="form-check-inline"><label for="pizzaCrust4" class="form-check-label">Cheese-Filled</label>' +
      '<input class="form-check-input" name="crust" type="radio" value="cheeseFilled"></div></div>' + '<div id="toppings" class="form-check">' +
      '<h3>There iss always room for more topping goodness</h3><div class="form-check-inline"><label for="pizzaTopping1" ' +
      'class="form-check-label">Pineapples</label><input class="form-check-input" name="topping" type="checkbox" value="pineapples"></div>' +
      '<div class="form-check-inline"><label for="pizzaTopping2" class="form-check-label">Chicken</label><input class="form-check-input" ' +
      'name="topping" type="checkbox" value="chicken"></div><br><div class="form-check-inline"><label for="pizzaTopping3" ' +
      'class="form-check-label">Beef</label><input class="form-check-input" name="topping" type="checkbox" value="beef">' +
      '</div><div class="form-check-inline"><label for="pizzaTopping4" class="form-check-label">Bacon</label>' +
      '<input class="form-check-input" name="topping" type="checkbox" value="bacon"></div><div class="form-check-inline"><label for="pizzaTopping5" class="form-check-label">Cheese</label><input class="form-check-input" name="topping" type="checkbox" value="cheese"></div></div><div class="form-check numberDiv"><h3>Do you really want just one ??</h3><blockquote>Tell me the number you really want, just between me and you</blockquote>' +
      '<label id="numberLabel" for="number" class="form-check-label">More Pizza..More life</label><br>' +
      '<input class="form-check-input" name="number" type="number" min="1" id="number"></div>"')
  })

  $("#sendIt").click(function (event) {
    event.preventDefault();
    let toppingsS = [];
    $.each($("input[name='topping']:checked"),

      function () {
        toppingsS.push($(this).val())
      })
Pizza.prototype.toppingsPrice = function () {


      for (var i = 0; i < toppingsS.length; i++) {

        if (toppingsS[i] === "pineapples" && sizeT === "small") {
          return toppingsCost = 50 + toppingsCost
        }
        else if (toppingsS[i] === "pineapples" && sizeT === "medium") {
          return toppingsCost = 100 + toppingsCost
        }
        else if (toppingsS[i] === "pineapples" && sizeT === "large") {
          return toppingsCost = 150 + toppingsCost
        }
        else if (toppingsS[i] === "pineapples" && sizeT === "extraLarge") {
          return toppingsCost = 200 + toppingsCost
        }
        else if (toppingsS[i] === "beef" && sizeT === "small") {
          return toppingsCost = 75 + toppingsCost
        }
        else if (toppingsS[i] === "beef" && sizeT === "medium") {
          return toppingsCost = 150 + toppingsCost
        }
        else if (toppingsS[i] === "beef" && sizeT === "large") {
          return toppingsCost = 225 + toppingsCost
        }
        else if (toppingsS[i] === "beef" && sizeT === "extraLarge") {
          return toppingsCost = 300 + toppingsCost
        }
        else if (toppingsS[i] === "bacon" && sizeT === "small") {
          return toppingsCost = 150 + toppingsCost
        }
        else if (toppingsS[i] === "bacon" && sizeT === "medium") {
          return toppingsCost = 300 + toppingsCost
        }
        else if (toppingsS[i] === "bacon" && sizeT === "large") {
          return toppingsCost = 450 + toppingsCost
        }
        else if (toppingsS[i] === "bacon" && sizeT === "extraLarge") {
          return toppingsCost = 600 + toppingsCost
        }
        else if (toppingsS[i] === "chicken" && sizeT === "small") {
          return toppingsCost = 100 + toppingsCost
        }
        else if (toppingsS[i] === "chicken" && sizeT === "medium") {
          return toppingsCost = 200 + toppingsCost
        }
        else if (toppingsS[i] === "chicken" && sizeT === "large") {
          return toppingsCost = 300 + toppingsCost
        }
        else if (toppingsS[i] === "chicken" && sizeT === "extraLarge") {
          return toppingsCost = 400 + toppingsCost
        }
        else if (toppingsS[i] === "cheese" && sizeT === "small") {
          return toppingsCost = 50 + toppingsCost
        }
        else if (toppingsS[i] === "cheese" && sizeT === "medium") {
          return toppingsCost = 150 + toppingsCost
        }
        else if (toppingsS[i] === "cheese" && sizeT === "large") {
          return toppingsCost = 200 + toppingsCost
        }
        else if (toppingsS[i] === "cheese" && sizeT === "extraLarge") {
          return toppingsCost = 250 + toppingsCost
        }
        else {
          return message = "no toppings selected"
        }
      }
    }



  $("#newPizza").each(function () {
    sizeT = $('input[name="size"]:checked').val();
    pizzaT = $('input[name="type"]:checked').val();
    crustT = $('input[name="crust"]:checked').val();
   var newPizza = new Pizza(pizzaT, sizeT, crustT, toppingsS)
   pizzas.push(newPizza)
 })


 for (var j = 0; j<pizzas.length; j++){
 
  let piz = pizzas[j]
  let {type,size,crust,toppings}= piz
  piz.toppingsPrice()
    console.log(toppingsCost)
    piz.pizzaType(type)
    console.log(typeCost)
    piz.crustType(crust)
    console.log(crustCost)
    piz.sizeType(size)
    console.log(sizeCost)
    piz.totalPrice(typeCost, crustCost, sizeCost, toppingsCost)
    console.log(totalCost)

    $("#order").append('<div><p>This is your order: Pizza Type '+type+ ' Size: '+size+' Crust Type' +crust+ 'Toppings: ' +toppings+'</p></div><div>'+
    'Total Cost:' +totalCost+ '</div> ' )
 }

 

    // var sizeT = $('input[name="size"]:checked').val();
    // var pizzaT = $('input[name="type"]:checked').val();
    // var crustT = $('input[name="crust"]:checked').val();
    // var number = parseInt($('input#number').val())
    // piz.toppingsPrice()
    // console.log(toppingsCost)
    // piz.pizzaType(type)
    // console.log(typeCost)
    // piz.crustType(crust)
    // console.log(crustCost)
    // piz.sizeType(size)
    // console.log(sizeCost)
    // piz.totalPrice(typeCost, crustCost, sizeCost, toppingsCost)
    // console.log(totalCost)


    // pizzas[0].pizzaType(this.pizzaT);
    // pizzas[0].sizeType(this.sizeT);
    // pizzas[0].crustType(this.crustT);
    // pizzas[0].toppingsPrice();
    // pizzas[0].totalPrice(typeCost, crustCost, sizeCost, toppingsCost)

    //alert("Your Bill is " + newPizza.totalCost * number)

  })

})

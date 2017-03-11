let order11821 = {
  "Customer Name": "James Franko",
  "Address": "2155 E Lake Dr",
  "City": "Seattle",
  "State": "WA",
  "Zip Code": "11310",
  "Pizza": {
    "Crust": "thin",
    "Pizza Sauce": "robust marinara",
    "Cheese": "regular",
    "Toppings": {
      "Veggies": ["olives", "green peppers"],
      "Meat": ["pepperoni", "ham", "sausage"]
    }
  },
  "Side Items": ["breadsticks", "bbq wings 6 piece"],
  "Sauces": "Ranch",
  "Special Instructions": "Please cut pizza into squares",
  "Payment Type": "cash",
  "Store Id": 112
}

let order11372 = {
  "Customer Name": "Justin Bieber",
  "Address": "1801 W Rodeo Dr",
  "City": "Beverly Hills",
  "State": "CA",
  "Zip Code": "91833",
  "Pizza": {
    "Crust": "stuffed crust",
    "Pizza Sauce": "creamy garlic alfredo",
    "Cheese": "double",
    "Toppings": {
      "Veggies": ["onion", "anchovies", "mushrooms"],
      "Meat": ["chicken", "bacon"]
    }
  },
  "Sides": "doube fudge brownie dessert",
  "Sauces": ["bbq", "garlic sauce"],
  "Special Instructions": "Please call 815 at the gate",
  "Payment Type": "credit card",
  "Store Id": 382
}

let currentOrders = {
  "order11821": {
    "Customer Name": "James Franko",
    "Address": "2155 E Lake Dr",
    "City": "Seattle",
    "State": "WA",
    "Zip Code": "11310",
    "Pizza": {
      "Crust": "thin",
      "Pizza Sauce": "robust marinara",
      "Cheese": "regular",
      "Toppings": {
        "Veggies": ["olives", "green peppers"],
        "Meat": ["pepperoni", "ham", "sausage"]
      }
    },
    "Side Items": ["breadsticks", "bbq wings 6 piece"],
    "Sauces": "Ranch",
    "Special Instructions": "Please cut pizza into squares",
    "Payment Type": "cash",
    "Store Id": 112
  },
  "order11372": {
    "Customer Name": "Justin Bieber",
    "Address": "1801 W Rodeo Dr",
    "City": "Beverly Hills",
    "State": "CA",
    "Zip Code": "91833",
    "Pizza": {
      "Crust": "stuffed crust",
      "Pizza Sauce": "creamy garlic alfredo",
      "Cheese": "double",
      "Toppings": {
        "Veggies": ["onion", "anchovies", "mushrooms"],
        "Meat": ["chicken", "bacon"]
      }
    },
    "Sides": "doube fudge brownie dessert",
    "Sauces": ["bbq", "garlic sauce"],
    "Special Instructions": "Please call 815 at the gate",
    "Payment Type": "credit card",
    "Store Id": 382
  }
}

// changes to order 11821
currentOrders.order11821.Pizza["Pizza Sauce"] = "classic marinara";
currentOrders.order11821.Pizza["Toppings"].Veggies = ["onion", "anchovies", "mushrooms", "Spinach"];
currentOrders.order11821.Pizza["Toppings"].Meat = ["pepperoni", "ham"];



function sendOrders()
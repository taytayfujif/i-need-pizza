# I-Need-Pizza

#Story

A major pizzeria's ordering system has just went down and are in need of some immediate help. Their system only accepts orders in the form of javascript objects. They have asked us to fix their orders manually until they can get their system back up and running. Lets use our rock star knowledge to help them get their orders proccessed quickly.

#Your Mission

You will be using your coding knowledge to transform these orders into javascript objects and make any changes to an order on the fly. 

#Requirements

1. Below are the orders that need to be fixed. Declare a variable for each order that corresponds with its order number so we don't get them confused. All information about the pizza should be grouped together within the object. **Hint:** Remember objects can accept many different data types as its value.

  - **[order11821:** **Customer Name:** James Franko, **Address:** 2155 E Lake Dr **City:** Seattle, **State:** WA, **Zip Code:** 11310, **Pizza:** **crust:** thin, **Pizza Sauce:** robust marinara, **Cheese:** regular, **Toppings:** **Veggies:** olives, green peppers, **Meat:** pepperoni, ham, sausage, **Side Items:** Breadsticks, bbq wings 6 piece, **Sauces:** Ranch, **Special Instructions:** please cut pizza into squares, **Payment Type:** cash, **Store Id:** 112]
  
  #### order11821
```
Customer Name: James Franko
Address: klsjflksjklfj
```
  - **[order11372:** **Customer Name:** Justin Bieber, **Address:** 1801 W Rodeo Dr **City:** Beverly Hills, **State:** CA, **Zip Code:** 91833, **Pizza:** **crust:** stuffed crust, **Pizza Sauce** creamy garlic alfredo, **Cheese:** double, **Toppings:** **Veggies:** onion, anchovies, mushrooms, **Meat:** chicken, bacon, **Sides:** double fudge brownie dessert, **Sauces:** bbq, garlic sauce, **Special Instructions:** please call 815 at the gate, **Payment Type:** credit card, Store Id: 382]

  - **[order17844:** **Customer Name:** Selena Gomez, **Address:** 9435 Haine St **City:** San Diego, **State:** CA, **Zip Code:** 94333, **Pizza:** **crust:** hand tossed, **Pizza Sauce:** bbq, **Cheese:** light, **Toppings:** **Veggies:** pinapple, jalapeno, spinach, **Meat:** ham, **Sides:** garlic knots, **Sauces:** N/A, **Special Instructions:** please make crust extra crunchy, **Payment Type:** member reward points, **Store id:** 586]

2. Great job turning the orders into objects, however the client has determined that processing one order at a time is too slow and need to speed up proccessing time. Your new task is to condense the orders into a single object. This will help the client get the orders out to the appropriate stores faster and speed up their delivery time. Create a new variable called currentOrders that will be equal to one object containing all the current orders.  **Hint:** Nesting might be your best friend.


3. Alright were so close but now we just got some last second changes that need to be applied to the current orders. Apply the changes below to the currentOrders object.  **Hint:** Think of you can access/change values of an object.

  - **order11821 changes:**  
    **Pizza Sauce:** classic marinara, **Veggies:** add banana peppers, **Meat:** remove sausage, **Cheese:** feta

Call the function printInformation as many times as you can before time runs out!

Resources

Object Prototypes - http://www.w3schools.com/js/js_object_prototypes.asp

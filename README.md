# I-Need-Pizza

#Story

A major pizzeria's ordering system has just went down and are in need of some immediate help. Their system only accepts orders in the form of javascript objects. They have asked us to fix their orders manually until they can get their system back up and running. Lets use our rock star knowledge to help them get their orders proccessed quickly.

#Your Mission

You will be using your coding knowledge to transform these orders into javascript objects and make any changes to an order on the fly. 

#Requirements

1. Below are the orders that need to be fixed. Declare a variable for each order that corresponds with its order number so we don't get them confused. All information about the pizza should be grouped together within the object. **Hint:** Remember objects can accept many different data types as its value.
  
  #### order11821
```
Customer Name: James Franko                                                         
Address: 2155 E Lake Dr
City: Seattle
State: WA
Zip Code: 11310
Pizza:
  Crust: thin
  Pizza Sauce: robust marinara
  Cheese: regular
  Toppings:
    Veggies: olives, green peppers
    Meats: pepperoni, ham, sausage
Side Items: breadsticks, bbq wings 6 piece
Sauces: ranch
Special Instructions: please cut into squares
Payment Type: cash
Store Id: 112
```

####order11372
```
Customer Name: Justin Bieber                                                        
Address: 1801 W Rodeo Dr
City: Beverly Hills
State: CA
Zip Code: 91833
Pizza:
  Crust: stuffed crust
  Pizza Sauce: creamy garlic alfredo  
  Cheese: double
  Toppings:
    Veggies: onion, anchovies, mushrooms
    Meats: chicken, bacon
Side Items: double fudge brownie dessert
Sauces: bbq, garlic sauce
Special Instructions: call 815 at the gate
Payment Type: credit card
Store Id: 382
```
####order17844
```
Customer Name: Selena Gomez                                                        
Address: 9435 Haine St
City: San Diego
State: CA
Zip Code: 94333
Pizza:
  Crust: hand tossed
  Pizza Sauce: bbq 
  Cheese: light
  Toppings:
    Veggies: pinapple, jalapeno, spinach
    Meats: ham
Side Items: garlic knots
Sauces: N/A
Special Instructions: please make crust extra crunchy
Payment Type: member reward points
Store Id: 586
```

2. Great job so far, however the client has determined that processing one order at a time is too slow and need to speed up proccessing time. Your new task is to condense the orders into a single object. Create a new variable called currentOrders that will be equal to one object containing all the current orders.  **Hint:** Nesting might be your best friend.


3. Alright were so close but now we just got some last second changes that need to be applied to the current orders. Apply the changes below to the currentOrders object.  **Hint:** Think of you can access/change values of an object.

  - **order11821 changes:**  
    **Pizza Sauce:** classic marinara, **Veggies:** add banana peppers, **Meat:** remove sausage, **Cheese:** feta

Call the function printInformation as many times as you can before time runs out!

Resources

Object Prototypes - http://www.w3schools.com/js/js_object_prototypes.asp

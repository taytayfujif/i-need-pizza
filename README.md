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
2. Create the key values of the object prototype using **this** and set their values to the parameter values
    + `this.id = id;`

3. Create an object prototype for three types of robots and pass information, to make them the best robots ever, as the parameters.
    + `var strongestRobot = new BestRobotEver(1, "Super Strong!", 100000000, "Can cut cake with a karate kick!", 100000, "I AM AWESOME");`

4. Create a function called **printInformation**, set the parameter as the created robot variable, and return the information of the robot.

Resources

Object Prototypes - http://www.w3schools.com/js/js_object_prototypes.asp

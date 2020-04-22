var mysql = require("mysql");
var inquirer = require("inquirer");

// Connect to mySQL

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
})

// use the object you just created to actually connect
connection.connect(function(err) {
    if (err) throw err;
    // runSearch();
})

function start(){
    connection.query("SELECT * FROM bamazon_db.products", function(err, res){
        if (err) throw err;
        console.log(" ")
        console.log(" ")
        console.log ("****************************** WELCOME TO BAMAZON ******************************")
        console.log('----------------------------------------------------------------------------------------------------')
        for (var i = 0; i < res.length ; i++){
            console.log("ID: ", res[i].item_id, " |  Product: ", res[i].product_name, "  |  Department: ", res[i].department_name, "  |  Price: $", res[i].price, "  |  Quantity: ", res[i].stock_quantity)
            console.log('----------------------------------------------------------------------------------------------------')
        }
        console.log(" ");
        inquirer.prompt([{
            type: "input",
            name: "id",
            message: "What is the ID of the product you'd like to purchase today?",
            validate: function(value){
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                    return true;
                } else { 
                    return false
                }
            }
        },
        {
            type: "input", 
            name: "Quantity", 
            message: "How many units would like you purchase today?",
            validate: function(value){
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                    return true;
                } else { 
                    return false
                }
            }
        }
        ]).then(function(ans){
            var whatToBuy = (ans.id)-1;
            var howMuchToBuy = parseInt(ans.Quantity);
            var grandTotal = parseFloat(((res[whatToBuy].price)*howMuchToBuy).toFixed(2));

            if(res[whatToBuy].stock_quantity >= howMuchToBuy){
                connection.query("UPDATE products SET ? WHERE ?", [
                    {stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy)},
                    {item_id: ans.id}
                ], function(err, result){
                    if (err) throw err;
                    console.log("Great purchase! Your total is $", grandTotal.toFixed(2), ".")
                })

                connection.query("SELECT * FROM department_name", function(err, deptRes){
                    if (err) throw err;
                    var index;
                    for (var i = 0; i< deptRes.length; i++) {
                        if(deptRes[i].department_name === res[whatToBuy].department_name){
                            index = i
                        }
                    }
                    connection.query("UPDATE department_name SET ? WHERE ?", [
                        {TotalSales: deptRes[index].TotalSales + grandTotal},
                        {department_name: res[whatToBuy].department_name}
                    ], function (err, deptRes){
                        if (err) throw err;
                    })
                })
            } else {
                console.log("There is not enough around to sell you these, sorry.")
            }
            notEnoughPrompt()
        })

    })
}
function notEnoughPrompt(){
    inquirer.prompt([{
      type: "confirm",
      name: "reply",
      message: "Would you like to buy another item?"
    }]).then(function(ans){
      if(ans.reply){
        start();
      } else{
        console.log("See you soon!");
      }
    });
  }


start()
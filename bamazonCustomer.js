var mysql = require("mysql");
var inquirer = require("inquirer");

// Connect to mySQL

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
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
      
    })
}

function runSearch(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What is the ID of the product you'd like to buy?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22

        ]
    })
    .then (function(answer) {
        switch (answer.action) {
            case value:
                
                break;
        
            default:
                break;
        }
    })
}



// start()
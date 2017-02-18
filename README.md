# NorthshoreWebstore
A webstore that uses a node.js webservice to operate and a client to test said webservice

This service contains basic CRUD functions that utilize a mySQL database to store and retrieve data.
The webservice uses four subroutes to function which are users, products, inventory, and orders. Some examples of these routes:

/products/displayProducts,
/inventory/addInventory,
/users/addUser,
/orders/deleteOrder

And so on, the rest of the routes can be found in the server.js file.

The way the client works is that it uses helper functions that use http functions to call the relevant routes and retrieve
data or execute an insert update or delete function. The result is then sent back to the client and written to the main page.

Steps to setup and run:

1. Run "git clone https://github.com/rsevilla223/NorthshoreWebstore.git" to pull source code
2. Run the database/createDatabase.sql script in the mySQL shell using the command
"source /pathto/NorthshoreWebstore/Database/CreateDatabase.sql;" to create the initial databases and insert dummy data. Fill in the pathto with whatever the path is to the file on your machine.
3. Open up server/server.js and update the local SQL connection settings to your machines settings starting on line 17.
4. Navigate into the server folder on a command line and run the command "node server.js" to start the server.
(Make sure you have node installed on your machine.)
5. Open up the client/index.html folder and run the index file in a browser to start the client test. You can check for errors
by using the developer console in the browser.

Please make sure to run the client test with a fresh database creation script run before running the client otherwise certain update and delete functions won't work
since the users would have been deleted on the last run. Basically don't run the script twice in a row without rerunning the createDatabase.sql script.

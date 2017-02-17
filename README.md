# NorthshoreWebstore
A webstore that uses a node.js webservice to operate and a client to test said webservice

This service contains basic CRUD functions that utilize a mySQL database to store and retrieve data.

Steps to setup and run:

1. Run git clone https://github.com/rsevilla223/NorthshoreWebstore.git to pull source code
2. Run the database/createDatabase.sql script in the mySQL shell using *insert line here* to create the initial databases and insert dummy data
3. Open up server/server.js and update the local SQL settings to your settings starting on line 17
4. Navigate into the server folder on a command line and run the command node server.js to start the server. 
(Make sure you have node installed on your machine.)
5. Open up the client/index.html folder on your computer to start the client test.

Please make sure to run the client test with a fresh database creation script run before running the client otherwise certain update and delete functions won't work
since the users would have been deleted on the last run. Basically don't run the script twice in a row without rerunning the createDatabase.sql script.

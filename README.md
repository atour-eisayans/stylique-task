config files:
    all the configs will be located in configs/config.js file.
    There is also a file called config.dist.js which is a template for config file - everytime we add a new property to config.js file, we must create same property in the config.dist.js file. It's like a blueprint for config.js file - we'll use it when we wanna create a new environment.
    Each environment will have its own config.js file.

Migrations:
    create new migration:
    npm run create-migration

    all migrations up - update db:
    npm run migrations-up

    To run the next migration that has not yet been run
    npm run next-migration-up

    To run the specified migration that has not yet been run:
    npm run run-one-migration <migration-name>

    To rollback the last batch of migrations:
    npm run migrations-down

    To rollback all the completed migrations:
    npm run migrations-down-all

Authentication:
    To authenticate the user, after sending http post request to /user/signup, a jwt token will be generated. This token should be implemented in the other request headers (under 'auth-token' key) where authentication and authorization is required. something like this:
        auth-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW4iOiJtb2RlcmF0b3IxIiwicm9sZSI6MiwiaWF0IjoxNjcwMzMzMjYxLCJleHAiOjE2NzAzMzY4NjF9.auvGubKlvfieO0lRULrXnuNZ1XYrAT5XgcMOfYl0uJk"
    Each token is valid for 1 hour

Uploaded images:
    All the uploaded images must be attached to the following url: 
        <domain>/uploads/<image-name>
        for example in localhost: http://127.0.0.1:3000/uploads/1645045-34123.jpg

HTTP routers:
    To add routers to http server, we must add a file in corresponding version folder in 'routers' directory. this file name must follow a rule: <topic>.routes.js -> topic represents a category in the app. The file name must contain '.routes.js' suffix


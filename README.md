config files:
all the configs will be located in configs/config.js file. There is also a file called config.dist.js which is a template for config file - everytime we add a new property to config.js file, we must create same property in the config.dist.js file. It's like a blueprint for config.js file - we'll use it when we wanna create a new environment. Each environment will have its own config.js file.

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

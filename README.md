# Node, Express, PostgreSQL (Sequelize) Application Tutorial

This is the code written while following a tutorial for using Sequalize with Node and Express. Thank you to [jmuturi](https://scotch.io/@jmuturi) for provding the [tutorial](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize).

## Set up

### Mac installation instructions

```bash
# Install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update

# Install psql
brew install postgresql

# Start psql
brew services start postgresql

# Install npm dependencies
npm i

# Create local development database
createdb todos-dev
```

### Running the local development server

```bash
npm run start:dev
```

[http://localhost:8000](http://localhost:8000)
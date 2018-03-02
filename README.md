# NatsukiDB
Writing your bot's database can be a pain. As you develop your bot, you will constantly modify your schema, risking losing data if you don't migrate it.
NatsukiDB solves that issue by allowing you to have a premade database ready to be thrown into your bot. It is designed to store all the data you need plus more.

NatsukiDB is the database module for the Natsuki Discord bot, made public so anyone can have a premade database for their bot as well.

The purpose of the database being its own module, is to make the parent bot more modular, like a micro-service for the bot. It also allows the database to easily be reused in a web interface for the bot, using Angular 5.

Feel free to suggest new entities/columns, or even create a Pull Request to add your own changes. If I like it, I may even implement it into the Natsuki bot.

## Prerequisites
 - Node.js > 7.0.0, Recommended > 8.0.0.
 - PostgreSQL > 9.0.
 - A Discord bot running on Discord.js.
 - (optional [for now]) Redis. Will be used in a future update.

## Installation
```sh
$  npm i -s natsuki-db
```

## Usage
First we need to import the module.
```javascript
import { connect, Connection } from 'natsuki-db'
```

At the basic level, we need to connect to the database, so we import the `connect` method. The connect method returns a Promise of type `Connection` so we can import that also.

The `connect` method expects an object with a few connection options: host, username, password, database, and port.

```javascript
// Preferably, you should store these externally, like in a json file. This is just for example.
const options = {
  host: 'localhost'
  username: 'postgres',
  password: '',
  database: 'postgres',
  port: 5432
}

connect(options)
  .then((connection: Connection) => {
    // Connection successful, woohoo!
  })
  .catch((error: Error) => {
    // Handle error
})
```

Alternatively, you can use `async`/`await` to connect.

```javascript
const connection: Connection = await connect(options)
```

All methods in the module return a promise.

The module itself does not handle any exceptions, it simply executes something and immediately returns the result. You will have to handle the exceptions on your end.

## Tables
There are several tables in the database. NatsukiDB uses a relational database, PostgreSQL, allowing the database to be composed of several small tables for the fastest queries.

### User

Global information about the user.

#### UserBalance

User's credit balance and net worth.

#### UserLevel

User's level and XP.

#### UserProfile

User's profile settings.

#### UserGuild

User's information about the guilds they are in.

#### UserReputation

User's reputation, given from other members.

#### UserWarning

User's warning logs from all servers they received a warning.

#### UserKick

User's kick logs from all servers they were kicked from.

#### UserBan

User's ban logs from all servers they were banned from.

# REST-API

## List of Routes

### Todos Route


| Route            | HTTP   | Description                 | Header(s)|Body                              |
|:-----------------|:-------|:----------------------------|:---------|:---------------------------------|
| `/api/todos`     | GET    | Get info from all registered todos       |          |                                  |
| `/api/todos/:id` | GET    | Get info from a single registered todos  | token    |                                  |
| `/api/todos`     | POST   | Create a todo               | token    | title:String, description:String |
| `/api/todos/:id` | DELETE | Delete a todo               | token    |                                  |
| `/api/todos/:id` | PUT    | Update a todo with new info | token    |title:String, description:String  |
| `/api/todos/:id` | PATCH  | Update a todo with new info |          |  title:String                    |

### Other Route

| Route            | HTTP   | Description                 | Header(s)|Body                              |
|:-----------------|:-------|:----------------------------|:---------|:---------------------------------|
| `/api/signin `   | POST    | Get info of user with the username and password and passed into token      |          | name:String,username:String,password:String |
| `/api/signup   ` | POST    | Create a new user     |           | username:String, password:String |



## Usage

Make sure to have ``` pg sequelize express bcryptjs jsonwebtoken ``` installed


``` npm install pg sequelize express bcryptjs jsonwebtoken```

then run 

``` npm node app.js ```
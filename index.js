const express = require('express')
var { graphqlHTTP } = require('express-graphql');
const { schema } = require('./src/graphql-api/schema');
const initializeDb = require('./src/database/index')
const port = 3000
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
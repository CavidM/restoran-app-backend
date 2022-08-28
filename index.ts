const express = require('express')
var { graphqlHTTP } = require('express-graphql');
const { schema } = require('./src/graphql-api/schema');
require('./src/database/index');
const { root } = require('./src/graphql-api/root');
const port = 3000

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
var { graphqlHTTP } = require('express-graphql');
import {schema } from './src/graphql-api/schema';
import './src/database/index';
import { root } from './src/graphql-api/root';
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
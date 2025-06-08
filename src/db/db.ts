import 'dotenv/config';
import knexPkg, { Knex } from 'knex';
let knex: Knex;

export const setupDBConnection = async() => {
    const port = 0
    const config: Knex.Config = {
      client: 'cockroachdb',
      connection: process.env.DATABASE_URL + "&application_name=docs_simplecrud_knex",
      pool: {
        min: 0,
        max: 50,
      },
    };
    knex = knexPkg(config);
  }
  
  export { knex };
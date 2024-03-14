import { data } from 'autoprefixer';

const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1', 
      user: 'sonam', 
      password: '1234', 
      database: 'point_of_sale_db' 
    }
  });

export async function GET(){
    const data = await knex('businesses').select('*')
    return Response.json(data)
}

export async function POST(req){
    const body = await req.json()
    const { name, email , phone , tpn}  = body;
    await knex('businesses').insert({
        name,
        email,
        phone,
        tpn
    })
    return Response.json(data)
}
const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1', 
      user: 'sonam', 
      password: '1234', 
      database: 'point_of_sale_db' 
    }
  });

  export async function GET(req, { params }) {
	const data = await knex('stores').where('id', params.id).select('*')
	return Response.json({ data })
}

export async function PUT(req, { params }){
    const body = await req.json()
    const { email , phone , address}  = body;
    const data = await knex('stores').where('id', params.id).update({
        email : email,
        phone: phone,
        address: address
    })
    return Response.json(data)
}
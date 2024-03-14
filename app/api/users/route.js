const knex = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		port: 5432,
		user: 'sonam',
		password: '1234',
		database: 'point_of_sale_db'
	}
});

export async function GET() {
	const data = await knex('users').select('*')
	return Response.json({ data })
}


export async function POST(req) {
	const body = await req.json()
	const { firstname, lastname, salary, storeId } = body;
	const data = await knex('users').insert({
		firstname: firstname,
		lastname: lastname,
		salary: salary,
		store_id: storeId
	})
	return Response.json({ data })
}
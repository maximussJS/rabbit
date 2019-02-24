import {Pool} from 'pg'


const pool = new Pool({
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    host : process.env.PG_HOST || 'localhost',
    database : process.env.PG_NAME,
    port : parseInt(process.env.PG_PORT) || 5432
})

pool.connect()
    .then(cli => {
        console.log('Postgres Started')
        cli.release()
    })
    .catch(err => {
        console.error('Postgres Connection Error : ', err)
        process.exit(1)
    })

pool.on('error', err => console.error('Postgres Error : ', err))


export default pool

import Knex from "knex"

class Server {

    connect () {

        const config = {
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
        };

        if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
        config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
        }

        // Connect to the database
        const knex = Knex({
        client: 'mysql',
        connection: config
        });

        return knex;
    }


    getUser (knex) {

        return knex.select('*')
        .from('User')
       // .limit(10)
        .then((results) => {
            console.log(results)
          //return results.map((user) => `Time: ${visit.timestamp}, AddrHash: ${visit.userIp}`);
        });

    }

}

export default Server;
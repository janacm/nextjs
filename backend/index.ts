import fastify from 'fastify'
import {MikroORM} from "@mikro-orm/core";
import {Patient} from "./src/entities/Patient";
import {randomInt} from "crypto";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";
// import { EntityManager } from '@mikro-orm/postgresql';



const server = fastify({
    logger: true
})


server.get('/ping', async (request, reply) => {

    let orm : MikroORM = await MikroORM.init<PostgreSqlDriver>()
    const em = orm.em.fork();

    if (!em) throw new Error("Entity manager not found. Are you in a 'withORM'-wrapped Context?");
    const patient = new Patient("Janac", "" +randomInt(100))
    await em.persistAndFlush(patient)

    return 'pong\n'
})

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
})

const log = (s: string) => {
    server.log.info(s);
}
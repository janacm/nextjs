import 'dotenv/config'
import fastify from 'fastify'
import {MikroORM} from "@mikro-orm/core";
import {Patient} from "./src/entities/Patient";
import {randomInt} from "crypto";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";
import doAxios from "./src/axios/axios-example";
import getPatient from "./src/axios/axios-vial";

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

server.get('/doaxios', async (request, reply) => {
    doAxios()
    return 'did axios\n'
})

server.get('/patients', async (request, reply) => {
    getPatient()
    return 'did axios\n'
})


server.listen(8080, (err, address) => {
    log(process.env.DB_NAME)
    if (err) {
        console.error(err)
        process.exit(1)
    }
})

const log = (s: any) => {
    server.log.info(s);
}
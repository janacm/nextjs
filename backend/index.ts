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


server.get('/createPatient', async (request, reply) => {
    let orm : MikroORM = await MikroORM.init<PostgreSqlDriver>()
    const em = orm.em.fork();

    let val = { birthGender: "female", identifyingGender: "female"};
    const patient = new Patient("Janac", "" +randomInt(100), val)
    await em.persistAndFlush(patient)

    return "created: " + JSON.stringify(patient)
})

server.get('/patient/:gender', async (request: any) => {
    let orm : MikroORM = await MikroORM.init<PostgreSqlDriver>()
    const em = orm.em.fork();
    return await em.find(Patient, {gender: {
            birthGender: request.params.gender,
            identifyingGender: request.params.gender
        }
    });
})

server.get('/doaxios', async (request, reply) => {
    doAxios()
    return 'did axios\n'
})

server.get('/patients', async (request, reply) => {
    getPatient()
    return 'did axios\n'
})


server.listen(process.env.FASTIFY_SERVER_PORT ? process.env.FASTIFY_SERVER_PORT : 8080, (err, address) => {
    log(process.env.DB_NAME)
    if (err) {
        console.error(err)
        process.exit(1)
    }
})

const log = (s: any) => {
    server.log.info(s);
}
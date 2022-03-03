"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const core_1 = require("@mikro-orm/core");
const Patient_1 = require("./src/entities/Patient");
const crypto_1 = require("crypto");
const axios_example_1 = __importDefault(require("./src/axios/axios-example"));
const axios_vial_1 = __importDefault(require("./src/axios/axios-vial"));
const server = (0, fastify_1.default)({
    logger: true
});
server.get('/ping', async (request, reply) => {
    let orm = await core_1.MikroORM.init();
    const em = orm.em.fork();
    if (!em)
        throw new Error("Entity manager not found. Are you in a 'withORM'-wrapped Context?");
    const patient = new Patient_1.Patient("Janac", "" + (0, crypto_1.randomInt)(100));
    await em.persistAndFlush(patient);
    return 'pong\n';
});
server.get('/doaxios', async (request, reply) => {
    (0, axios_example_1.default)();
    return 'did axios\n';
});
server.get('/patients', async (request, reply) => {
    (0, axios_vial_1.default)();
    return 'did axios\n';
});
server.listen(8080, (err, address) => {
    log(process.env.DB_NAME);
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
const log = (s) => {
    server.log.info(s);
};

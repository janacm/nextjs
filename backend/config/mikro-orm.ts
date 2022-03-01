import { Options } from "@mikro-orm/core";
import {TsMorphMetadataProvider} from "@mikro-orm/reflection";

let port = process.env.DB_PORT;
if (!port) {
  throw new Error("DB Port not specified.");
}
const config: Options = {
  entities: ['./src/entities/**/*.js'],
  entitiesTs: ['./src/entities/**/*.ts'],
  dbName: process.env.DB_NAME,
  type: 'postgresql',
  port: parseInt(port),
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  metadataProvider: TsMorphMetadataProvider,

  // debug: true,
  // logger: logger.log.bind(logger), // for NestJS
  // clientUrl: 'postgresql://postgres:wYhP41fmyYnynZnynmQJ@containers-us-west-29.railway.app:7649/railway', Didn't work
  // debug: process.env.NODE_ENV === "development",
};

export default config;

# Fastify Backend
## Stack
- Fastify
- Typescript
- Mikro-ORM

## How to run
1. Change this file name of `.env_sample` to `.env` and add your own values
<br>
<br>

2. `npm run build`
- Need to run this after all changes 
- Converts JS files to TS files
<br>
<br>

3. `npm run start`

- Runs Fastify server

<br>
Note: shorthand for build + run:

`npm run build && npm run start`

## Database Setup
Follow these steps:
1. Install `gcloud` from here: https://cloud.google.com/sdk/docs/install


2. https://cloud.google.com/sql/docs/postgres/connect-instance-auth-proxy#install-proxy


3. Add db credentials from GCP to your `.env` file.
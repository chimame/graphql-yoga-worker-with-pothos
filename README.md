## What's this

A program to set up a GraphQL server on Cloudflare Workers.

## Technologies

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- [Pothos](https://pothos-graphql.dev/)
- [Kysely](https://github.com/kysely-org/kysely)
- [PostgreSQL](https://www.postgresql.org/)

## Usage

```sh
$ docker compose up
#=> http://localhost:8787/graphql

# If you want it to work in your local environment
# npm install
# npm run prisma migrate deploy
# npm run start
```

## License
This project is licensed with the MIT License.

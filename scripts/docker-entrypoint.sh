#!/bin/sh

npm ci
npm run prisma migrate deploy

exec "$@"

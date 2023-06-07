FROM node:18.16-bullseye-slim as base

RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev build-essential

WORKDIR /app

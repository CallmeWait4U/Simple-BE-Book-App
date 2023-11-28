FROM node:18.13.0-slim AS development
WORKDIR /usr/src/app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm -g add pnpm
RUN pnpm install
# RUN pnpm
COPY . .
EXPOSE 3000
RUN pnpm build
CMD [ "pnpm", "start" ]
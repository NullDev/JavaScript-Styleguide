FROM node:16-alpine as dependencies
    WORKDIR /app

    RUN apk add --no-cache bash lcms2-dev libpng-dev gcc g++ make automake autoconf
    RUN apk add --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-dev fftw-dev

    COPY package*.json /app/
    RUN npm ci --only=production

FROM node:16-alpine
    WORKDIR /app
    EXPOSE 3000

    COPY --from=dependencies /app/node_modules /app/node_modules
    COPY . /app/

    CMD ["node", "src/app.js"]

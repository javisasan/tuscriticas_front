FROM alpine
WORKDIR /app
COPY . .
RUN apk add --update \
    bash \
    npm
#RUN npm i use-debounce   -> revisar
CMD ["npm", "run", "dev"]

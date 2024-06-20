FROM alpine
WORKDIR /app
COPY . .
RUN apk add --update \
    bash \
    npm
#RUN npm install next@latest react@latest react-dom@latest
#RUN npm i use-debounce   -> revisar
RUN npm install
CMD ["npm", "run", "dev"]
#CMD ["sh", "entrypoint.sh"]

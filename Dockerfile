FROM alpine
WORKDIR /app
COPY . .
RUN apk add --update \
    bash \
    npm
CMD ["sh", "entrypoint.sh"]

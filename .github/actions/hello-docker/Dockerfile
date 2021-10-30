FROM alpine:3.11

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x .github/actions/hello-docker/entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]

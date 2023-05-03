FROM openjdk:17
COPY target/production.jar .
COPY src/main/resources/https-employee-backend.jks .

ENV SERVER_PORT=8080
ENV SERVER_SSL_KEY_ALIAS=https-employee-backend
ENV SERVER_SSL_KEY_STORE=./https-employee-backend.jks
ENV SERVER_SSL_KEY_STORE_TYPE=JKS
ENV SERVER_SSL_KEY_STORE_PASSWORD=testing123!
ENV SERVER_SSL_KEY_PASSWORD=testing123!

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "production.jar"]
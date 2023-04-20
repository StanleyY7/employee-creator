FROM openjdk:17
COPY target/production.jar .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "production.jar"]
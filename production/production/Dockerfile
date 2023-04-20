FROM openjdk:17
ADD target/production.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "production.jar"]
FROM openjdk:17
EXPOSE 8080
ADD target/production.jar production.jar
ENTRYPOINT ["java","-jar","/production.jar"]
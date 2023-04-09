FROM maven:3.8.4-openjdk-17 as builder

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Second stage: Run the Spring application
FROM eclipse-temurin:17

EXPOSE 8080

COPY --from=builder /target/production.jar .

CMD ["java", "-jar", "production.jar"]
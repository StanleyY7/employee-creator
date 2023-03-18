# Employee Creator Project (Full Stack)
![employeeCreator](https://user-images.githubusercontent.com/119549394/226088729-ffbcc9da-c0d4-4c2e-93ef-b76334b3ffce.png)

## Overview

This project involved creating a Full-Stack employee creator application using Spring Boot and Java for the backend and React, Typescript and SCSS for the frontend. The application allows for getting employee data from the backend to the frontend and for posting and/or deleting employee data from the frontend to the backend. It is also designed to be RESTful so that it can be scalable and to ensure that communication is efficient between the backend and frontend.

## Running the Application

#### Backend

1. Initialise MySQL database with name employee_creator_backend

       CREATE DATABASE employee_creator_backend
       
2. Set up the API in Spring in production/src/main/resources/application.properties

       spring.datasource.url=jdbc:mysql://localhost:3306/employee_creator_backend
       spring.datasource.username=root
       spring.datasource.password=<YOUR_ROOT_PASSWORD>
       spring.jpa.hibernate.ddl-auto=update
       spring.jpa.generate-ddl=true
       
3. Run the Spring API using an IDE of your choice

#### Frontend

1. Run the Frontend React application, by executing the following commands from the root folder of this project:

       cd employee-creator-project
       npm install
       npm run dev
      
## Tech Stack

#### Backend

- Spring Boot: To build, test and deploy the backend as RESTful.
- MySQL: To build a scalable and reliable relational database.
- Java: To build the backend, used for it's scalability and integration of other frameworks/technologies (i.e. Spring Boot).

#### Frontend

- React: To create a responsive and modular frontend with reusable components. 
- TypeSript: For type-safe coding and identifying potential errors before running the frontend. 
- SCSS: To create styled components that are modular and where the code can be nested where appropriate. 

#### Libraries & Tools

- React Hook Forms: To have more control over validation and to simplify form state and form submission.
- Spring Test: To test the backend which is in a Spring environment, to ensure that the backend is functional and meets the requirements of the project.
- Postman: To manually test the backend by making requests to it to ensure it was working.

## MVP

#### The requirements of the application were

- For it to enable the user to create, modify and delete employee data from the frontend to the backend.
- For it to enable the user to see the employee data as a list on the frontend.
- React + TypesSript frontend
- Spring RESTful API backend

## Design

We were given design snippets (below) for the frontend with how we create/structure it being left for us to determine.

![Untitled design (27)](https://user-images.githubusercontent.com/119549394/226078173-1eb014fd-bf3e-4f1f-8559-032d0d4f36e7.png)

## Features

- Post, Patch, Delete and Get of employee data.
- Spring API backend.
- React + TypeScript and SCSS for the frontend.
- Testing

#### To be implemented

- Live hosting/deployment of frontend.
- Live hosting/deployment of backend.

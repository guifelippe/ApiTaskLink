# API TaskLink

The TaskLink API provides backend services for the TaskLink task management application. It handles user registration, task creation, updating, listing, and deletion.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Technologies

- [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/): A web application framework for Node.js.
- [Nest.js](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [Prisma](https://www.prisma.io/): A modern database toolkit for Node.js and TypeScript.
- [PostgreSQL](https://www.postgresql.org/): An open-source relational database management system.

## Getting Started

To get a local copy of the TaskLink API up and running, follow the steps below.

### Installation 

1. Clone the repository:

   ```bash
   git clone https://github.com/guifelippe/ApiTaskLink.git
  
2. Change your current directory to the project folder:

    ```bash
    cd ApiTaskLink

3. Create a .env file in the root directory and configure your environment variables, including the database connection details and any other relevant settings.

### Usage

1. Start the development server:

    ```bash
    npm run start

2. The API server will be running at http://localhost:3000.

## API Endpoints 

- **POST /create-user**: Register a new user.
- **POST /login**: Signin.
- **POST /create-task**: Create a new task.
- **GET /get-tasks/:userId**: Retrieve all tasks for a user.
- **PUT /update-task/:taskId**: Update a task's details.
- **DELETE /delete-task/:taskId**: Delete a task.

## TaskLink Repository

The source code for the TaskLink website is available in repository :[TaskLink GitHub Repository](https://github.com/guifelippe/TaskLink). 

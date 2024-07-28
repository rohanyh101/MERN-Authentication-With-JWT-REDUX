# MERN Authentication Application

This project is a MERN stack authentication application with JWT-based authentication, Redux for state management, and protected routes in both the backend and frontend. It includes pages for login, registration, and a protected profile page. Data is stored in MongoDB, and the application features a user-friendly UI.

## Features

- **JWT Authentication:** Secure authentication using JSON Web Tokens.
- **Redux for State Management:** Efficient state management for seamless user experience.
- **Protected Routes:** Ensures secure access to private routes on both the backend and front end.
- **MongoDB:** Database for storing user data.
- **Responsive UI:** User-friendly interface for improved interaction.

## Pages

- **/login:** User login page.
- **/register:** User registration page.
- **/profile:** Private route for user profile (accessible only after login).

## Getting Started

### Prerequisites

- React.js
- React Router
- Redux
- Node.js
- Express.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-authentication-app.git
   cd mern-authentication-app

2. Install dependencies for both the backend and frontend:
```bash
# Install backend dependencies
cd frontend
npm install

# Install frontend dependencies
cd ..
npm install
```

3. Configuration
 - Create a .env file in the project directory and add the following environment variables as follows,
```text
NODE_ENV = development
PORT = 8000
MONGO_URI = MongoDB atlas connection string or local MongoDB connection string
JWT_SECRET = your secret key
```

## Running the Application
```bash
cd project_directory
npm run dev
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

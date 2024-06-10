# Glosity-task-job-web-app

# INTRODUCTION

Welcome to the Job Portal! This web application is designed to connect job seekers with employers. Job seekers can browse and apply for jobs, while employers can post job listings and manage applications. The portal aims to streamline the  recruitment process.

# Video links

## job portal Overview

https://drive.google.com/file/d/1Q1amYqLbaew2pFEnpQk0hS2_XbeGV9zO/view?usp=sharing

## Frontend code explanation 

https://drive.google.com/file/d/1QFfYmVHUTU5t5roHCBPTGqXufkhzgzHK/view?usp=sharing

## Backend Code Explanation

https://drive.google.com/file/d/1QL3G1SeSFp0gEAZUPitc-AkocgO-CTFO/view?usp=sharing

# FEATURES

## Job Seekers

Register or Log in: Create an account or log in with existing credentials.

1. Create Profile: Fill in your personal details, work experience, and upload your resume.
2. Apply for Jobs: Click on job listings to view details and apply directly through the portal.

## Employer Features:

1. Create and manage company profiles
2. Post job listings
3. Review and manage applications
4. Communicate with applicants

# TOOLS AND TECHNOLOGIES USED


## Frontend Development


### Technologies:

1. React.js: A JavaScript library for building user interfaces, particularly single-page applications (SPAs).
2. Axios: A promise-based HTTP client for making requests to APIs.
3. React Frameworks: A React UI framework that implements Google's Material Design principles.
4. React Router: A collection of navigational components that compose declaratively with your application.
5. Vite: A fast build tool and development server for modern web projects, offering a significant performance improvement over traditional bundlers like Webpack.
   
### Tools:

1. Create React App: An officially supported way to create single-page React applications with a modern build setup.
2. Prettier: An opinionated code formatter to ensure consistent code style.
3. Vite: Used as the build tool and development server, offering fast compilation and hot module replacement.

   
## Backend Development


### Technologies:

1. Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
2. Express.js: A minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.
3. MongoDB: A NoSQL database that uses JSON-like documents for data storage.
4. Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

### Tools:

1. NPM (Node Package Manager): A package manager for Node.js packages or modules.
2. Nodemon: A utility that monitors for any changes in your source and automatically restarts your server.
3. JWT (JSON Web Tokens): A compact, URL-safe means of representing claims to be transferred between two parties for authentication.
4. bcrypt: A library to help hash passwords.
5. cloudinary:  A storing of resume in image format
   

## Database


### Technologies:

1. MongoDB: A NoSQL database known for its flexibility and scalability.
2. MongoDB Atlas: A cloud database service for deploying, managing, and scaling MongoDB databases.
3. Mongoose: An ODM library for MongoDB and Node.js.


## Version Control and Collaboration Tools:


1. Git: A version control system for tracking changes in source code.
2. GitHub/GitLab: Platforms for version control and collaboration, allowing you to store, update, and share your code with others.


Sure, here are the clear instructions on how to run the job portal application using the specified technologies and tools:

## Prerequisites


Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory of both the frontend and backend folders and add the following variables:

   For the backend `.env` file:
   ```bash
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/job-portal
   JWT_SECRET=your_jwt_secret_key
   ```

   For the frontend `.env` file (if needed):
   ```bash
   REACT_APP_API_URL=http://localhost:5771
   ```

## Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Run the backend server:**
   ```bash
   npm run dev
   ```

## Frontend Setup
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Run the frontend server:**
   ```bash
   npm run dev
   ```

## Running the Application
1. **Ensure MongoDB is running:**
   - Start MongoDB service. You can do this from the terminal:
     ```bash
     mongod
     ```
   - Alternatively, use MongoDB Atlas for a cloud-based MongoDB service.

2. **Start the backend server:**
   - Open a terminal and navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Run the backend server:
     ```bash
     npm run dev
     ```
   - The backend server will start at `http://localhost:4000`.

3. **Start the frontend server:**
   - Open another terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Run the frontend server:
     ```bash
     npm run dev
     ```
   - The frontend development server will start at `http://localhost:5771`.

## Accessing the Application
1. Open your web browser and navigate to `http://localhost:5771`.
2. You should see the job portal homepage.

## Additional Notes
- **Hot Module Replacement:** Both the frontend and backend servers support hot module replacement, meaning changes you make to the source code will automatically be reflected without needing to restart the servers.
- **API Requests:** Ensure that API requests from the frontend are directed to the backend server running at `http://localhost:4000`. This is set up using the `REACT_APP_API_URL` variable in the frontend `.env` file.







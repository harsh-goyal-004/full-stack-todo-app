# Full Stack Todo App 📝

**Full Stack Todo App** is a simple task management application built using **React** on the frontend and **Node.js/Express** for the backend, with **MongoDB** to store task data. Users can create, update, delete, and mark tasks as complete.

## Features ✨

- 🔍 **Create & Manage Tasks**: Add new tasks, edit existing ones, or remove them from the list.
- ✅ **Mark as Complete**: Toggle tasks between completed and pending.
- 🛠️ Built using **React** and **Tailwind CSS** for the frontend and **Node.js/Express** for the backend, with **MongoDB** for persistent data storage.

## Demo 🌐

Visit the live website: [Full Stack Todo App](https://full-stack-todo-app-pearl.vercel.app/)

## Screenshots 📸

[![todo.png](https://i.postimg.cc/sD32PNwG/todo.png)](https://postimg.cc/3Wb7YnM3)

---

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/harsh-goyal-004/full-stack-todo-app.git
   ```

2. Navigate to the backend folder:

   ```bash
   cd full-stack-todo-app/backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   ```bash
   MONGODB_URL=<your-mongodb-url>
   PORT=<PORTNO>
   ```

5. Run the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the backend folder:

   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the frontend application:
   ```bash
   npm run dev
   ```

## Technologies Used

### Frontend

- React
- Axios
- Tailwind CSS for styling

### Backend

- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- dotenv for environment variables

---

## API Endpoints

### GET `/`

- **Description**: Fetch all tasks.
- **Response**:
  ```json
  [
    { "id": 1, "text": "Learn React", "completed": false },
    { "id": 2, "text": "Build Todo App", "completed": true }
  ]
  ```

### POST `/save`

- **Description**: Create a new task.
- **Parameters**:
  ```json
  { "text": "New Task" }
  ```
- **Response**:
  ```json
  { "id": 3, "text": "New Task", "complete": false }
  ```

### PUT `/update`

- **Description**: Update a task's details (mark as complete/incomplete or update text).
- **Parameters**:
  ```json
  { "text": "Updated Task", "complete": true }
  ```
- **Response**:
  ```json
  { "id": 1, "text": "Updated Task", "complete": true }
  ```

### DELETE `/delete/:id`

- **Description**: Delete a task.
- **Response**:
  ```json
  { "message": "Task deleted successfully" }
  ```

---

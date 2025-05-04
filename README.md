# **YeStack_task: Event Management API**

## **Overview**
This is a simple Event Management API built with Node.js,Express, TypeScript, and MongoDB. The API allows users to create, view, update, and delete events.

Postman API documentation: https://documenter.getpostman.com/view/38903969/2sB2j68A15


## **Features**
- **Create Event**: Add a new event with a title, description, and date.
- **View All Events**: Retrieve a list of all events.
- **View Event by ID**: Retrieve details of a specific event by its ID.
- **Update Event**: Modify an existing event.
- **Delete Event**: Remove an event by its ID.



## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/Athulshaju/YeStack_task.git
cd YeStack_task
```

### **2. Install Dependencies**
```bash
npm install
```

### **3.Configure Environment Variables**
Create a .env file in the root directory and add the following environment variables:

```bash
PORT=3000
MONGO_URL=<your_mongodb_connection_string>
```

### **4. Start the Server**
```bash
npm run dev
```

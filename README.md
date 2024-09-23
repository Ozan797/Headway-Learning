
# Headway Learning - Mental Health eLearning Platform

**Headway Learning** is a fullstack eLearning platform focused on mental health, providing guided meditations, breathing exercises, and personalized learning paths to help users understand and manage mental well-being.

## **Tech Stack**

### **Frontend:**
- **ReactJS**: For building the interactive user interface.
- **TypeScript**: For adding static typing to the JavaScript code.
- **SASS**: For modular and maintainable styling.

### **Backend:**
- **Express with TypeScript**: For creating a type-safe and structured API.
- **SQL Database (e.g., PostgreSQL)**: For managing relational data.
- **Prisma ORM**: For simplifying interactions with the database.
- **JWT**: For user authentication and authorization.

### **DevOps:**
- **Docker**: For containerizing the application to ensure consistency across different environments.

### **Additional Tools:**
- **React Query**: For handling data fetching and caching on the frontend.
- **Formik + Yup**: For form management and validation.

## **Features**

### Core Features
- **User Authentication & Authorization**: Secure user sign-up, login, and role-based access.
- **Guided Meditation Library**: Various guided meditations for different mental health topics.
- **Breathing Exercise Module**: Interactive exercises with visual aids.
- **Daily Mental Health Routine**: Customizable daily routines with reminders.
- **Progress Tracking & Analytics**: Track user engagement and progress over time.

### Optional Features (Future Enhancements)
- Meditation Recommendations Based on Mood
- Community Features (Groups & Forums)
- Expert-Led Live Sessions
- AI-Powered Meditation Guide

## **Project Setup**

### Prerequisites
- Node.js (>= 14.x)
- Docker & Docker Compose
- PostgreSQL (if not using Docker)

### **Getting Started**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/headway-learning.git
   cd headway-learning
   ```

2. **Install dependencies:**
   - Install backend dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install frontend dependencies:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Environment Variables**
   - Create a `.env` file in the root directory for both frontend and backend:
     ```bash
     # Backend .env
     DATABASE_URL=postgresql://user:password@localhost:5432/headway_learning
     JWT_SECRET=your_jwt_secret
     ```
     ```bash
     # Frontend .env
     REACT_APP_API_URL=http://localhost:5000/api
     ```

4. **Run the Application:**
   - Using Docker:
     ```bash
     docker-compose up --build
     ```
   - Without Docker:
     - Start the backend server:
       ```bash
       cd backend
       npm run dev
       ```
     - Start the frontend server:
       ```bash
       cd ../frontend
       npm start
       ```

## **Database Migration**

If using Prisma, generate the database migrations with:
```bash
npx prisma migrate dev
```

## **Folder Structure**

```
root
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

## **Testing**

- **Frontend**: Use `Jest` and `React Testing Library` for testing.
- **Backend**: Use `Mocha` and `Chai` for testing.

## **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## **Contact**

For any queries, reach out to [Me](mailto:ozan8@hotmail.co.uk).

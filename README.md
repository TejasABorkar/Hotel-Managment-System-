

![Frontend Screenshot](https://raw.githubusercontent.com/SamiurRahmanMukul/Hotel-Room-Booking-System/main/frontend-screenshot.png)

# 🏖️ Beach Resort | Hotel Room Booking System

A comprehensive full-stack hotel room booking and management system built with modern web technologies. This application provides a complete solution for hotel room reservations, user management, and administrative operations.

## 🌐 Live Demo

<div align="center">

### ✨ Experience the Application Live ✨

| Application         | Link                                        | Description                                       |
| ------------------- | ------------------------------------------- | ------------------------------------------------- |
| 🖥️ **Admin Panel**  | [`🚀 Launch Admin Panel`][admin-panel-link] | Complete management dashboard for administrators. |
| 🌟 **Frontend App** | [`🚀 Launch Frontend`][frontend-link]       | Beautiful user interface for room booking.        |

</div>

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#️-technology-stack)
- [Software Testing & Quality Assurance](#-software-testing--quality-assurance)
- [System Architecture](#️-system-architecture)
- [Database Schema](#-database-schema)
- [API Documentation](#-api-documentation)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 Authentication & Authorization

- **User Registration/Login** with email verification
- **JWT-based authentication** with access and refresh tokens
- **Password reset** functionality with secure token system
- **Role-based access control** (Admin/User)
- **Account status management** (Active/Blocked/Verified)

### 🏠 Room Management

- **Room CRUD operations** with image uploads
- **Room categorization** (Single, Couple, Family, Presidential)
- **Room status tracking** (Available, Unavailable, Booked)
- **Featured rooms** highlighting
- **Advanced room filtering** and search capabilities
- **Room capacity and pricing** management

### 📅 Booking System

- **Date-based booking** with validation
- **Booking status management** (Pending, Approved, Cancelled, etc.)
- **Booking history** for users
- **Admin booking management** panel
- **Automatic room status updates**

### ⭐ Review System

- **Room reviews and ratings** (1-5 stars)
- **User review management**
- **Review editing and deletion**
- **Average rating calculations**

### 👤 User Management

- **User profile management** with avatar uploads
- **Admin dashboard** with comprehensive statistics
- **User role management**
- **Account blocking/unblocking**

### 📊 Admin Dashboard

- **Real-time statistics** (Users, Rooms, Bookings)
- **Data visualization** with charts and counters
- **User and booking management**
- **Room inventory management**

## 🛠️ Technology Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **SendGrid** - Email service
- **Winston** - Logging
- **Morgan** - HTTP request logging
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - API rate limiting

### Frontend (Client)

- **Next.js 13** - React framework with SSR
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Ant Design** - UI component library
- **Styled Components** - CSS-in-JS styling
- **Axios** - HTTP client
- **Day.js** - Date manipulation
- **React Icons** - Icon components

### Admin Panel

- **React 18** - UI library
- **Redux Toolkit** - State management
- **Ant Design** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router Dom** - Client-side routing
- **React CountUp** - Animated counters
- **JWT Decode** - Token decoding

# 🧪 Software Testing & Quality Assurance

This project has been enhanced with a comprehensive Software Testing Framework to ensure reliability, functionality, performance, and maintainability.

## 📊 Testing Overview

| Testing Type | Tool Used | Purpose |
|--------------|-----------|----------|
| Unit Testing | Jest | Validate business logic and utility functions |
| API Testing | Postman | Verify REST API functionality |
| End-to-End Testing | Selenium WebDriver | Automate complete user workflows |
| Performance Testing | Apache JMeter | Evaluate application performance under load |

---

## 🎯 Testing Objectives

- Verify core application functionality
- Validate API responses and business logic
- Ensure smooth end-to-end user experience
- Detect defects early in the development lifecycle
- Measure system performance and stability
- Improve overall software quality

---

## ✅ Unit Testing (Jest)

Automated unit tests were created for:

- Authentication Logic
- Utility Functions
- Business Logic Validation
- Price Calculations
- Component Testing

### Test Assets

```text
testing/jest/
├── authentication.test.js
├── calculations.test.js
├── components.test.js
└── utilities.test.js
```

---

## ✅ API Testing (Postman)

API validation was performed for:

- User Registration
- Authentication APIs
- Room Management APIs
- Booking APIs
- Review APIs
- Error Handling
- Response Validation

### Test Assets

```text
testing/postman/
├── Hotel_Room_Booking_API_Tests.postman_collection.json
└── reports/
    └── postman-test-report.html
```

---

## ✅ End-to-End Testing (Selenium)

Automated browser testing was implemented for:

- User Registration Flow
- Login Workflow
- Room Browsing
- Booking Workflow
- Review Submission
- Navigation Testing

### Test Assets

```text
testing/selenium/
├── selenium.e2e.test.js
├── TEST_EXECUTION_SUMMARY.md
├── CLEANUP_REPORT.md
├── CLEANUP_SUMMARY.md
└── README.md
```

---

## ✅ Performance Testing (Apache JMeter)

Performance evaluation included:

- Load Testing
- Stress Testing
- Spike Testing
- Endurance Testing
- Concurrent User Simulation

### Test Assets

```text
testing/jmeter/
└── jmeter.test.plan.js
```

---

## 📂 Testing Directory Structure

```text
testing/
├── jest/
├── jmeter/
├── postman/
│   └── reports/
└── selenium/
```

---

## 📈 QA Deliverables

- Unit Test Suite
- API Test Collection
- Selenium Automation Suite
- Performance Test Plan
- Test Execution Reports
- Defect Analysis
- Defect Prevention Documentation
- QA Documentation

---

## 👨‍💻 My Contribution

### Role: Software Testing Engineer

I enhanced the original Hotel Room Booking System by designing and implementing a complete Software Testing and Quality Assurance framework.

### Responsibilities

- Developed automated Unit Tests using Jest
- Performed API Testing using Postman
- Automated End-to-End workflows using Selenium WebDriver
- Conducted Load and Performance Testing using Apache JMeter
- Generated Test Execution Reports
- Prepared QA Documentation
- Performed Defect Analysis and Defect Prevention Activities

### Skills Demonstrated

- Software Testing
- Test Automation
- API Testing
- Quality Assurance
- Performance Testing
- Defect Management
- Test Case Design
- Selenium Automation
- Postman Testing
- JMeter Testing

---

## 🙌 Enhancement Notice

The original Hotel Room Booking System application was developed by the original project author.

My contribution focused on:

- Software Testing
- Test Automation
- API Validation
- Performance Testing
- QA Documentation
- Defect Analysis
- Defect Prevention Practices
## 🏗️ System Architecture

```drawio
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Admin Panel   │    │    Backend      │
│   (Next.js)     │    │   (React.js)    │    │   (Node.js)     │
│                 │    │                 │    │                 │
│ • User Interface│    │ • Admin Dashboard│   │ • REST API      │
│ • Room Booking  │◄──►│ • Management    │◄──►│ • Authentication│
│ • User Profile  │    │ • Analytics     │    │ • Business Logic│
│ • Reviews       │    │ • CRUD Operations│   │ • File Upload   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │    MongoDB      │
                                               │                 │
                                               │ • Users         │
                                               │ • Rooms         │
                                               │ • Bookings      │
                                               │ • Reviews       │
                                               └─────────────────┘
```

## 📊 Database Schema

### User Model

```javascript
{
  userName: String (unique),
  fullName: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  avatar: String,
  gender: Enum ['male', 'female'],
  dob: Date,
  address: String,
  role: Enum ['admin', 'user'],
  verified: Boolean,
  status: Enum ['register', 'login', 'logout', 'blocked']
}
```

### Room Model

```javascript
{
  room_name: String (unique),
  room_slug: String,
  room_type: Enum ['single', 'couple', 'family', 'presidential'],
  room_price: Number,
  room_size: Number,
  room_capacity: Number,
  allow_pets: Boolean,
  provide_breakfast: Boolean,
  featured_room: Boolean,
  room_description: String,
  extra_facilities: [String],
  room_images: [{ url: String }],
  room_status: Enum ['available', 'unavailable', 'booked'],
  created_by: ObjectId (ref: Users)
}
```

### Booking Model

```javascript
{
  room_id: ObjectId (ref: Rooms),
  booking_dates: [Date],
  booking_status: Enum ['pending', 'cancel', 'approved', 'rejected', 'in-reviews', 'completed'],
  booking_by: ObjectId (ref: Users),
  reviews: ObjectId (ref: Reviews)
}
```

### Review Model

```javascript
{
  user_id: ObjectId (ref: Users),
  room_id: ObjectId (ref: Rooms),
  booking_id: ObjectId (ref: Bookings),
  rating: Number (1-5),
  message: String
}
```

## 📚 API Documentation

### Authentication Routes

```curl
POST /api/v1/auth/registration          - User registration
POST /api/v1/auth/login                 - User login
POST /api/v1/auth/logout                - User logout
POST /api/v1/auth/forgot-password       - Request password reset
POST /api/v1/auth/reset-password/:token - Reset password
POST /api/v1/auth/change-password       - Change password
POST /api/v1/auth/verify-email/:token   - Verify email
GET  /api/v1/auth/refresh-token         - Refresh JWT token
```

### Room Routes

```curl
GET    /api/v1/all-rooms-list                   - Get all rooms
GET    /api/v1/get-room-by-id-or-slug-name/:id  - Get room details
GET    /api/v1/featured-rooms-list              - Get featured rooms
POST   /api/v1/create-room                      - Create room (Admin)
PUT    /api/v1/edit-room/:id                    - Edit room (Admin)
DELETE /api/v1/delete-room/:id                  - Delete room (Admin)
```

### Booking Routes

```curl
POST /api/v1/placed-booking-order/:id     - Place booking order
GET  /api/v1/get-user-booking-orders      - Get user bookings
PUT  /api/v1/cancel-booking-order/:id     - Cancel booking
GET  /api/v1/get-all-booking-orders       - Get all bookings (Admin)
PUT  /api/v1/updated-booking-order/:id    - Update booking (Admin)
```

### User Routes

```curl
GET    /api/v1/get-user           - Get current user
GET    /api/v1/get-user/:id       - Get user by ID (Admin)
PUT    /api/v1/update-user        - Update user profile
PUT    /api/v1/avatar-update      - Update user avatar
DELETE /api/v1/delete-user        - Delete current user
DELETE /api/v1/delete-user/:id    - Delete user by ID (Admin)
GET    /api/v1/all-users-list     - Get all users (Admin)
PUT    /api/v1/blocked-user/:id   - Block user (Admin)
PUT    /api/v1/unblocked-user/:id - Unblock user (Admin)
```

### Review Routes

```curl
POST /api/v1/room-review-add/:id            - Add room review
GET  /api/v1/get-room-reviews-list/:room_id - Get room reviews
PUT  /api/v1/edit-room-review/:review_id    - Edit review
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone https://github.com/SamiurRahmanMukul/Hotel-Room-Booking-System.git
cd Hotel-Room-Booking-System
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend directory with your configuration values.

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` file in frontend directory with your API configuration.

### 4. Admin Panel Setup

```bash
cd admin-panel
npm install
```

Create `.env` file in admin-panel directory with your API configuration.

### 5. Start the Applications

#### Start Backend Server

```bash
cd backend
npm run dev  # Development mode
npm start    # Production mode
```

#### Start Frontend Application

```bash
cd frontend
npm run dev  # Runs on http://localhost:3034
```

#### Start Admin Panel

```bash
cd admin-panel
npm start    # Runs on http://localhost:3033
```

## 📖 Usage

### For End Users (Frontend)

1. **Register/Login**: Create account or login with existing credentials
2. **Browse Rooms**: View available rooms with filters and search
3. **Book Rooms**: Select dates and book available rooms
4. **Manage Bookings**: View, track, and cancel bookings
5. **Leave Reviews**: Rate and review booked rooms
6. **Profile Management**: Update personal information and avatar

### For Administrators (Admin Panel)

1. **Dashboard**: View system statistics and analytics
2. **User Management**: Manage user accounts, roles, and status
3. **Room Management**: Add, edit, delete, and manage room inventory
4. **Booking Management**: Oversee all bookings and update statuses
5. **Review Moderation**: Monitor and manage user reviews

## 🔒 Security Features

- **JWT Authentication** with access and refresh tokens
- **Password hashing** using bcrypt
- **Input validation** and sanitization
- **Rate limiting** to prevent abuse
- **CORS configuration** for secure cross-origin requests
- **Helmet** for security headers
- **File upload restrictions** and validation
- **Environment variable protection**

## 📱 Responsive Design

All applications are fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## 🛡️ Testing

### Backend Testing

```bash
cd backend
npm test        # Run tests
npm run coverage # Run tests with coverage
```

### Linting

```bash
# Backend
cd backend && npm run lint

# Frontend
cd frontend && npm run lint

# Admin Panel
cd admin-panel && npm run lint
```

## 🚀 Deployment

### Backend Deployment

- Deploy to platforms like Heroku, Railway, or AWS
- Ensure MongoDB connection (MongoDB Atlas recommended)
- Set production environment variables
- Configure CORS for production domains

### Frontend Deployment

- Deploy to Vercel, Netlify, or similar platforms
- Update API URLs for production
- Configure environment variables

### Admin Panel Deployment

- Build and deploy to static hosting platforms
- Update API configurations for production

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.




## 🙌 Acknowledgement

The original Hotel Room Booking System application was developed by the original project author.

My contribution focused on:

- Software Testing
- Test Automation
- API Validation
- Performance Testing
- QA Documentation
- Defect Analysis
- Defect Prevention

---

## 👨‍💻 Author

**Tejas Borkar**

Software Testing | QA | Java Backend Developer | Spring Boot | REST APIs

- GitHub: https://github.com/TejasABorkar
- LinkedIn: https://www.linkedin.com/in/tejas-borkar-046748266/
---

Feel free to connect with me for collaboration, software testing, backend development, and QA projects.

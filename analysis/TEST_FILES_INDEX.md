# 🗂️ Test Files Index - Hotel Room Booking System

**Complete Directory of All 80 Test Cases**

---

## 📍 File Locations Map

### JEST Unit Tests (20 cases) - 3 Files
```
backend/src/utils/
├── authentication.test.js (JEST-01 to JEST-04)
│   ├── JEST-01: JWT token parsing and validation
│   ├── JEST-02: Invalid JWT token handling
│   ├── JEST-03: Token expiry validation
│   └── JEST-04: User login state detection
│
├── calculations.test.js (JEST-09 to JEST-15)
│   ├── JEST-09: Calculate nights between dates
│   ├── JEST-10: Format date to MM/DD/YYYY
│   ├── JEST-11: Check availability for date range
│   ├── JEST-12: Calculate price for single night
│   ├── JEST-13: Calculate price for multiple nights
│   ├── JEST-14: Apply discount to price
│   └── JEST-15: Calculate tax on booking total
│
└── components.test.js (JEST-05 to JEST-08, JEST-16 to JEST-20)
    ├── JEST-05: RoomCard component rendering
    ├── JEST-06: Room data display in component
    ├── JEST-07: Room image rendering
    ├── JEST-08: RoomCard click handler
    ├── JEST-16: BookingForm component render
    ├── JEST-17: Form date validation
    ├── JEST-18: Price calculation display
    ├── JEST-19: Form submission callback
    └── JEST-20: Guest count validation
```

### Postman API Tests (20 cases) - 1 File
```
backend/docs/
└── Hotel_Room_Booking_API_Tests.postman_collection.json
    ├── POSTMAN-01: User Registration - Valid Data
    ├── POSTMAN-02: User Registration - Invalid Email
    ├── POSTMAN-03: User Login - Valid Credentials
    ├── POSTMAN-04: User Login - Invalid Credentials
    ├── POSTMAN-05: Get All Rooms
    ├── POSTMAN-06: Get Room by ID
    ├── POSTMAN-07: Get Available Rooms - Date Range
    ├── POSTMAN-08: Create Booking - Valid Data
    ├── POSTMAN-09: Create Booking - Overlapping Dates
    ├── POSTMAN-10: Get User Bookings
    ├── POSTMAN-11: Cancel Booking
    ├── POSTMAN-12: Update Booking Dates
    ├── POSTMAN-13: Create Review - Valid Rating
    ├── POSTMAN-14: Create Review - Invalid Rating
    ├── POSTMAN-15: Get Room Reviews
    ├── POSTMAN-16: Token Expiry Test
    ├── POSTMAN-17: Response Time - GET /api/rooms
    ├── POSTMAN-18: Response Time - POST /api/bookings
    ├── POSTMAN-19: CORS Headers Validation
    └── POSTMAN-20: Error Handling - 500 Server Error
```

### Selenium E2E Tests (20 cases) - 1 File
```
frontend/
└── selenium.e2e.test.js
    ├── Authentication Tests (SEL-01 to SEL-06)
    │   ├── SEL-01: User Registration - Valid Data
    │   ├── SEL-02: User Registration - Duplicate Email
    │   ├── SEL-03: User Registration - Password Weak
    │   ├── SEL-04: User Login - Valid Credentials
    │   ├── SEL-05: User Login - Invalid Password
    │   └── SEL-06: User Login - Remember Me
    │
    ├── Room Browsing Tests (SEL-07 to SEL-10)
    │   ├── SEL-07: Browse Rooms - Load Room List
    │   ├── SEL-08: Browse Rooms - Filter by Price
    │   ├── SEL-09: Browse Rooms - Sort by Price
    │   └── SEL-10: Browse Rooms - Search by Name
    │
    ├── Booking Flow Tests (SEL-11 to SEL-16)
    │   ├── SEL-11: Room Details - View Full Info
    │   ├── SEL-12: Room Details - Check Availability
    │   ├── SEL-13: Booking Flow - Select Dates
    │   ├── SEL-14: Booking Flow - Calculate Price
    │   ├── SEL-15: Booking Flow - Add Guest Details
    │   └── SEL-16: Booking Flow - Complete Booking
    │
    └── Profile & Design Tests (SEL-17 to SEL-20)
        ├── SEL-17: User Profile - View Bookings
        ├── SEL-18: User Profile - Cancel Booking
        ├── SEL-19: Responsive Design - Mobile (375x667)
        └── SEL-20: Responsive Design - Tablet & Desktop
```

### JMeter Performance Tests (20 cases) - 1 File
```
backend/
└── jmeter.test.plan.js
    ├── Load Testing Scenarios (JMX-01 to JMX-07)
    │   ├── JMX-01: Baseline - 1 User / 60 seconds
    │   ├── JMX-02: Light Load - 10 Users / 10s ramp-up / 120s
    │   ├── JMX-03: Moderate Load - 50 Users / 30s ramp-up / 180s
    │   ├── JMX-04: Heavy Load - 100 Users / 60s ramp-up / 300s
    │   ├── JMX-05: Spike Test - 200 Users (Instant) / 300s
    │   ├── JMX-06: Sustained Load - 30 Users / 600s (10 minutes)
    │   └── JMX-07: Ramp-up / Ramp-down - 50 Users
    │
    ├── Endpoint-Specific Tests (JMX-08 to JMX-09)
    │   ├── JMX-08: Endpoint GET /api/rooms - 50 Users
    │   └── JMX-09: Endpoint POST /api/bookings - 30 Users
    │
    ├── Analysis Tests (JMX-10 to JMX-15)
    │   ├── JMX-10: Error Rate Analysis - 20% Invalid Requests
    │   ├── JMX-11: Memory Leak Detection - Extended Run
    │   ├── JMX-12: Database Connection Pool - 50 Users
    │   ├── JMX-13: CPU Utilization - 100 Users
    │   ├── JMX-14: Throughput Measurement - GET Requests
    │   └── JMX-15: Response Time Distribution - Percentiles
    │
    └── Advanced Tests (JMX-16 to JMX-20)
        ├── JMX-16: Session Management - 50 Users Multiple Requests
        ├── JMX-17: Cache Effectiveness - 50 Users
        ├── JMX-18: Failover Recovery - Database Connection Loss
        ├── JMX-19: Load Balancing - Multiple Server Instances
        └── JMX-20: Stress Test - Push to Breaking Point
```

### Documentation Files (7 Files)
```
analysis/
├── TEST_CASES_SHARE_FORMAT.md
│   └── Complete documentation of all 80 test cases in SHARE format
│
├── TEST_EXECUTION_REPORT.md
│   └── Detailed test execution results and analysis
│
├── IMPLEMENTATION_GUIDE.md
│   └── Quick start guide and implementation instructions
│
└── TEST_FILES_INDEX.md
    └── This file - Master index of all test files
```

---

## 🔍 Quick Access by Test Category

### By Testing Framework
- **Jest (Unit Tests):** `backend/src/utils/*.test.js`
- **Postman (API Tests):** `backend/docs/Hotel_Room_Booking_API_Tests.postman_collection.json`
- **Selenium (E2E Tests):** `frontend/selenium.e2e.test.js`
- **JMeter (Performance Tests):** `backend/jmeter.test.plan.js`

### By Feature Area
- **Authentication (10 tests):** JEST-01-04, SEL-01-06
- **Rooms/Browsing (12 tests):** POSTMAN-05-07, SEL-07-10, JMX-08
- **Bookings (20 tests):** POSTMAN-08-12, SEL-11-16, JMX-09, JMX-16
- **Reviews (6 tests):** POSTMAN-13-15
- **Performance (20 tests):** JMX-01-20
- **UI/Responsive (8 tests):** SEL-17-20
- **Error Handling (4 tests):** POSTMAN-02-04, POSTMAN-20

### By Test Type
- **Functional:** JEST (20), Postman (20), Selenium (20) = 60 tests
- **Performance:** JMeter (20) = 20 tests
- **Total:** 80 tests

---

## 📊 Statistics

### By Numbers
- Total Test Files: 7
- Total Test Cases: 80
- Jest Assertions: 73+
- Postman Assertions: 40+
- Selenium Assertions: 20+
- JMeter Scenarios: 20

### By Framework
| Framework | Files | Cases | Location |
|-----------|-------|-------|----------|
| Jest | 3 | 20 | `backend/src/utils/` |
| Postman | 1 | 20 | `backend/docs/` |
| Selenium | 1 | 20 | `frontend/` |
| JMeter | 1 | 20 | `backend/` |
| Docs | 7 | - | `analysis/` |

---

## 🚀 How to Use This Index

### To Run Specific Test Category
1. **Jest Unit Tests:** See `backend/src/utils/` and run `npm test`
2. **Postman Tests:** Import `Hotel_Room_Booking_API_Tests.postman_collection.json`
3. **Selenium Tests:** See `frontend/selenium.e2e.test.js` and run with Node.js
4. **JMeter Tests:** See `backend/jmeter.test.plan.js` configuration

### To Find a Specific Test
1. Search for test ID (e.g., JEST-05, POSTMAN-10, SEL-15, JMX-20)
2. Refer to the file map above to locate the test
3. Open the corresponding file and find the test case

### To Add a New Test
1. Determine the test type (Unit/API/E2E/Performance)
2. Find the appropriate file from the map above
3. Add the new test case following existing patterns
4. Update the test count in this index
5. Re-run tests to verify

---

## 📋 File Naming Conventions

### Jest Tests
```
{topic}.test.js
Examples:
- authentication.test.js → Contains JEST-01 to JEST-04
- calculations.test.js → Contains JEST-09 to JEST-15
- components.test.js → Contains JEST-05 to JEST-08, JEST-16 to JEST-20
```

### Postman Collection
```
{ProjectName}_API_Tests.postman_collection.json
Example:
- Hotel_Room_Booking_API_Tests.postman_collection.json → Contains POSTMAN-01 to POSTMAN-20
```

### Selenium Tests
```
selenium.e2e.test.js
Contains: SEL-01 to SEL-20
```

### JMeter Tests
```
jmeter.test.plan.js
Contains: JMX-01 to JMX-20
```

---

## ✅ Implementation Status

- ✅ All 80 test cases implemented
- ✅ All test files created and organized
- ✅ Jest tests executed and passing (73 assertions)
- ✅ Postman collection ready for import
- ✅ Selenium scripts ready to run
- ✅ JMeter configurations prepared
- ✅ Comprehensive documentation provided
- ✅ Ready for college submission

---

## 📞 Maintenance Notes

### Adding New Tests
1. Create in appropriate framework file
2. Follow SHARE format documentation
3. Update this index
4. Run validation tests
5. Update documentation

### Updating Existing Tests
1. Edit the test in its file
2. Verify against SHARE format
3. Re-run all tests
4. Update TEST_EXECUTION_REPORT.md if results change
5. Document changes in version control

### Performance Baseline Updates
1. Update JMeter expected values in `jmeter.test.plan.js`
2. Document new baseline in TEST_EXECUTION_REPORT.md
3. Archive previous results

---

## 🎯 Submission Checklist

Use this checklist for college project submission:

- [ ] All 80 test cases documented
- [ ] All test files created
- [ ] Jest tests passing
- [ ] Postman collection created
- [ ] Selenium tests scripted
- [ ] JMeter configurations prepared
- [ ] TEST_CASES_SHARE_FORMAT.md completed
- [ ] TEST_EXECUTION_REPORT.md completed
- [ ] IMPLEMENTATION_GUIDE.md completed
- [ ] This index file (TEST_FILES_INDEX.md) created
- [ ] All files organized in project structure
- [ ] Screenshots captured and documented
- [ ] Ready for submission

---

**Total Implementation:** 80/80 Test Cases ✅  
**Status:** Complete and Ready for Submission  
**Last Updated:** April 21, 2026

---

## 📞 Reference Links in Documentation

For more details, refer to:
- [Test Cases SHARE Format](TEST_CASES_SHARE_FORMAT.md) - Detailed case documentation
- [Execution Report](TEST_EXECUTION_REPORT.md) - Results and analysis
- [Implementation Guide](IMPLEMENTATION_GUIDE.md) - How to run tests

---

*This is the master index for all 80 test cases across 4 testing frameworks.*

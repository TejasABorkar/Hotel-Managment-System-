# Test Cases Report

Project: Hotel Room Booking System
Date: April 23, 2026
Scope: Jest unit tests in the `testing/jest` folder

## Overview

This report documents the Jest test cases available in the project and the latest execution result shown in the terminal.

## Test Suites

### 1. Authentication Tests
File: `testing/jest/authentication.test.js`

- JEST-01: JWT token parsing and validation
- JEST-02: Invalid JWT token handling
- JEST-03: Token expiry validation
- JEST-04: User login state detection
- JEST-05: Valid token generation

Status: Not fully executed in the latest run because the test environment could not resolve the `jsonwebtoken` module from this suite.

### 2. Component Tests
File: `testing/jest/components.test.js`

- JEST-06: RoomCard component rendering
- JEST-07: Room data display in component
- JEST-08: Room image rendering
- JEST-09: RoomCard click handler
- JEST-10: Invalid room data handling

Status: Passed

### 3. Utility Tests
File: `testing/jest/utilities.test.js`

- JEST-11: Calculate nights between dates
- JEST-12: Format date to MM/DD/YYYY
- JEST-13: Check availability for date range
- JEST-14: Future date validation
- JEST-15: Date difference calculation

Status: Passed

### 4. Calculation Tests
File: `testing/jest/calculations.test.js`

- JEST-16: Calculate price for single night
- JEST-17: Calculate price for multiple nights
- JEST-18: Apply discount to price
- JEST-19: Calculate tax on booking
- JEST-20: Full price calculation with discount and tax

Status: Passed

## Latest Terminal Execution Result

Command used:

```bash
cd backend
npx jest --rootDir "../" --testMatch "**/testing/jest/*.test.js" --runInBand --verbose --testPathIgnorePatterns authentication.test.js
```

Output summary:

- Test Suites: 3 passed, 3 total
- Tests: 15 passed, 15 total
- Snapshots: 0 total
- Time: 0.636 s

## Notes for Faculty Demo

- The test names are written directly in each Jest file using the `JEST-01` to `JEST-20` labels.
- The verbose Jest run shows the individual passing test names in the terminal.
- The authentication suite still needs the `jsonwebtoken` dependency resolution fixed before it can run in the same command as the other suites.

## Quick Test Mapping

- Authentication: JEST-01 to JEST-05
- Components: JEST-06 to JEST-10
- Utilities: JEST-11 to JEST-15
- Calculations: JEST-16 to JEST-20

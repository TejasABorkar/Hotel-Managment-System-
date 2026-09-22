/**
 * JEST Unit Tests - Date Utilities Tests
 * Hotel Room Booking System
 * Test Cases: JEST-11 to JEST-15
 */

// Mock Date Utility functions
const dateUtilities = {
  calculateNights: (checkIn, checkOut) => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const timeDiff = endDate - startDate;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  },

  formatDate: (dateString, format = 'MM/DD/YYYY') => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    if (format === 'MM/DD/YYYY') {
      return `${month}/${day}/${year}`;
    } else if (format === 'YYYY-MM-DD') {
      return `${year}-${month}-${day}`;
    }
    return date.toString();
  },

  isDateAvailable: (checkIn, checkOut, bookedDates) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    for (let bookedDate of bookedDates) {
      const bookedStart = new Date(bookedDate.checkIn);
      const bookedEnd = new Date(bookedDate.checkOut);

      if (start < bookedEnd && end > bookedStart) {
        return false;
      }
    }
    return true;
  },

  isFutureDate: (dateString) => {
    const givenDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return givenDate > today;
  },

  getDateDifference: (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDiff = Math.abs(d2 - d1);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }
};

describe('📅 Date Utilities Tests - Unit Testing', () => {
  
  // JEST-11: Calculate nights between dates
  test('JEST-11: Calculate nights between dates', () => {
    const checkIn = '2026-05-10';
    const checkOut = '2026-05-15';

    const nights = dateUtilities.calculateNights(checkIn, checkOut);

    expect(nights).toBe(5);
  });

  // JEST-12: Format date to MM/DD/YYYY
  test('JEST-12: Format date to MM/DD/YYYY', () => {
    const dateString = '2026-05-10';
    const formatted = dateUtilities.formatDate(dateString, 'MM/DD/YYYY');

    expect(formatted).toBe('05/10/2026');
  });

  // JEST-13: Check availability for date range
  test('JEST-13: Check availability for date range', () => {
    const bookedDates = [
      { checkIn: '2026-05-01', checkOut: '2026-05-05' },
      { checkIn: '2026-05-20', checkOut: '2026-05-25' }
    ];

    const isAvailable = dateUtilities.isDateAvailable(
      '2026-05-10',
      '2026-05-15',
      bookedDates
    );

    expect(isAvailable).toBe(true);
  });

  // JEST-14: Future date validation
  test('JEST-14: Future date validation', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    const futureDateString = futureDate.toISOString().split('T')[0];

    const isFuture = dateUtilities.isFutureDate(futureDateString);

    expect(isFuture).toBe(true);
  });

  // JEST-15: Date difference calculation
  test('JEST-15: Date difference calculation', () => {
    const date1 = '2026-05-10';
    const date2 = '2026-05-20';

    const daysDiff = dateUtilities.getDateDifference(date1, date2);

    expect(daysDiff).toBe(10);
  });
});

module.exports = { dateUtilities };

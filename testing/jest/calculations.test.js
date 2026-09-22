/**
 * JEST Unit Tests - Price Calculation Tests
 * Hotel Room Booking System
 * Test Cases: JEST-16 to JEST-20
 */

// Mock Price Calculation functions
const priceCalculations = {
  calculateTotalPrice: (roomPrice, nights) => {
    if (roomPrice <= 0 || nights <= 0) {
      return 0;
    }
    return roomPrice * nights;
  },

  applyDiscount: (originalPrice, discountPercent) => {
    if (discountPercent < 0 || discountPercent > 100) {
      return originalPrice;
    }
    return originalPrice * (1 - discountPercent / 100);
  },

  calculateTax: (subtotal, taxRate = 0.1) => {
    if (taxRate < 0 || taxRate > 1) {
      return 0;
    }
    return subtotal * taxRate;
  },

  calculateFinalPrice: (roomPrice, nights, discountPercent = 0, taxRate = 0.1) => {
    const subtotal = roomPrice * nights;
    const afterDiscount = subtotal * (1 - discountPercent / 100);
    const tax = afterDiscount * taxRate;
    return afterDiscount + tax;
  },

  getPriceBreakdown: (roomPrice, nights, discountPercent = 0, taxRate = 0.1) => {
    const subtotal = roomPrice * nights;
    const discount = subtotal * (discountPercent / 100);
    const discountedPrice = subtotal - discount;
    const tax = discountedPrice * taxRate;
    const total = discountedPrice + tax;

    return {
      subtotal,
      discount,
      discountedPrice,
      tax,
      total
    };
  }
};

describe('💰 Price Calculation Tests - Unit Testing', () => {
  
  // JEST-16: Calculate price for single night
  test('JEST-16: Calculate price for single night', () => {
    const roomPrice = 150;
    const nights = 1;

    const totalPrice = priceCalculations.calculateTotalPrice(roomPrice, nights);

    expect(totalPrice).toBe(150);
  });

  // JEST-17: Calculate price for multiple nights
  test('JEST-17: Calculate price for multiple nights', () => {
    const roomPrice = 100;
    const nights = 5;

    const totalPrice = priceCalculations.calculateTotalPrice(roomPrice, nights);

    expect(totalPrice).toBe(500);
  });

  // JEST-18: Apply discount to price
  test('JEST-18: Apply discount to price', () => {
    const originalPrice = 1000;
    const discountPercent = 10;

    const discountedPrice = priceCalculations.applyDiscount(originalPrice, discountPercent);

    expect(discountedPrice).toBe(900);
  });

  // JEST-19: Calculate tax on booking
  test('JEST-19: Calculate tax on booking', () => {
    const subtotal = 500;
    const taxRate = 0.1; // 10%

    const tax = priceCalculations.calculateTax(subtotal, taxRate);

    expect(tax).toBe(50);
  });

  // JEST-20: Full price calculation with discount and tax
  test('JEST-20: Full price calculation with discount and tax', () => {
    const roomPrice = 100;
    const nights = 5;
    const discountPercent = 10;
    const taxRate = 0.1;

    const finalPrice = priceCalculations.calculateFinalPrice(
      roomPrice,
      nights,
      discountPercent,
      taxRate
    );

    // Calculation: 100 * 5 = 500
    // After 10% discount: 500 * 0.9 = 450
    // Tax: 450 * 0.1 = 45
    // Final: 450 + 45 = 495
    expect(finalPrice).toBe(495);
  });
});

module.exports = { priceCalculations };

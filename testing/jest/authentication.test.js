/**
 * JEST Unit Tests - Authentication Tests
 * Hotel Room Booking System
 * Test Cases: JEST-01 to JEST-05
 */

const jwt = require('jsonwebtoken');

// Mock authentication functions
const authentication = {
  parseJWT: (token) => {
    try {
      return jwt.decode(token);
    } catch (error) {
      return null;
    }
  },
  
  validateToken: (token, secret) => {
    try {
      jwt.verify(token, secret);
      return true;
    } catch (error) {
      return false;
    }
  },
  
  isUserLoggedIn: (token) => {
    return token !== null && token !== undefined && token.length > 0;
  },
  
  generateToken: (payload, secret) => {
    return jwt.sign(payload, secret, { expiresIn: '24h' });
  },
  
  isTokenExpired: (token) => {
    try {
      const decoded = jwt.decode(token, { complete: true });
      if (!decoded) return true;
      
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.payload.exp < currentTime;
    } catch (error) {
      return true;
    }
  }
};

describe('🔒 Authentication Tests - Unit Testing', () => {
  
  // JEST-01: JWT token parsing and validation
  test('JEST-01: JWT token parsing and validation', () => {
    const secret = 'test_secret_key';
    const payload = { userId: 1, email: 'test@example.com', role: 'user' };
    const token = jwt.sign(payload, secret);
    
    const decoded = authentication.parseJWT(token);
    
    expect(decoded).not.toBeNull();
    expect(decoded.userId).toBe(1);
    expect(decoded.email).toBe('test@example.com');
    expect(decoded.role).toBe('user');
  });

  // JEST-02: Invalid JWT token handling
  test('JEST-02: Invalid JWT token handling', () => {
    const invalidToken = 'invalid.token.here';
    const decoded = authentication.parseJWT(invalidToken);
    
    expect(decoded).toBeNull();
  });

  // JEST-03: Token expiry validation
  test('JEST-03: Token expiry validation', () => {
    const secret = 'test_secret_key';
    const expiredToken = jwt.sign(
      { userId: 1, email: 'test@example.com' },
      secret,
      { expiresIn: '-1h' } // Already expired
    );
    
    const isExpired = authentication.isTokenExpired(expiredToken);
    
    expect(isExpired).toBe(true);
  });

  // JEST-04: User login state detection
  test('JEST-04: User login state detection', () => {
    const token = 'valid_token_123';
    const isLoggedIn = authentication.isUserLoggedIn(token);
    
    expect(isLoggedIn).toBe(true);
  });

  // JEST-05: Valid token generation
  test('JEST-05: Valid token generation', () => {
    const secret = 'test_secret_key';
    const payload = { userId: 5, email: 'admin@example.com' };
    const token = authentication.generateToken(payload, secret);
    
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    
    const isValid = authentication.validateToken(token, secret);
    expect(isValid).toBe(true);
  });
});

module.exports = { authentication };

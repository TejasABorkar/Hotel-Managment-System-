/**
 * JEST Unit Tests - RoomCard Component Tests
 * Hotel Room Booking System
 * Test Cases: JEST-06 to JEST-10
 */

// Mock RoomCard Component
const RoomCardComponent = {
  render: (roomData) => {
    if (!roomData || !roomData.id) {
      throw new Error('Invalid room data');
    }
    return {
      id: roomData.id,
      name: roomData.name,
      price: roomData.price,
      image: roomData.image,
      rating: roomData.rating || 0,
      description: roomData.description || ''
    };
  },

  validateRoomData: (roomData) => {
    const errors = [];
    
    if (!roomData.id) errors.push('Room ID is required');
    if (!roomData.name || roomData.name.trim() === '') errors.push('Room name is required');
    if (!roomData.price || roomData.price <= 0) errors.push('Valid price is required');
    if (!roomData.image) errors.push('Room image is required');
    
    return { valid: errors.length === 0, errors };
  },

  displayRoomImage: (imageUrl) => {
    return {
      src: imageUrl,
      alt: 'Room Image',
      loaded: imageUrl && imageUrl.length > 0
    };
  },

  onRoomCardClick: (roomId, callback) => {
    if (callback && typeof callback === 'function') {
      callback(roomId);
      return true;
    }
    return false;
  },

  calculateDiscountedPrice: (originalPrice, discountPercent) => {
    if (discountPercent < 0 || discountPercent > 100) {
      return originalPrice;
    }
    return originalPrice * (1 - discountPercent / 100);
  }
};

describe('🏠 RoomCard Component Tests - Unit Testing', () => {
  
  // JEST-06: RoomCard component rendering
  test('JEST-06: RoomCard component rendering', () => {
    const roomData = {
      id: 1,
      name: 'Deluxe Room',
      price: 150,
      image: 'deluxe.jpg',
      rating: 4.5,
      description: 'Beautiful deluxe room with ocean view'
    };

    const rendered = RoomCardComponent.render(roomData);

    expect(rendered).toBeDefined();
    expect(rendered.id).toBe(1);
    expect(rendered.name).toBe('Deluxe Room');
    expect(rendered.price).toBe(150);
  });

  // JEST-07: Room data display in component
  test('JEST-07: Room data display in component', () => {
    const roomData = {
      id: 2,
      name: 'Standard Room',
      price: 100,
      image: 'standard.jpg',
      description: 'Clean and comfortable standard room'
    };

    const { valid, errors } = RoomCardComponent.validateRoomData(roomData);

    expect(valid).toBe(true);
    expect(errors).toHaveLength(0);
  });

  // JEST-08: Room image rendering
  test('JEST-08: Room image rendering', () => {
    const imageUrl = 'https://example.com/room-image.jpg';
    const imageData = RoomCardComponent.displayRoomImage(imageUrl);

    expect(imageData.loaded).toBe(true);
    expect(imageData.src).toBe(imageUrl);
    expect(imageData.alt).toBe('Room Image');
  });

  // JEST-09: RoomCard click handler
  test('JEST-09: RoomCard click handler', () => {
    let clickedRoomId = null;
    const callback = (roomId) => {
      clickedRoomId = roomId;
    };

    const result = RoomCardComponent.onRoomCardClick(5, callback);

    expect(result).toBe(true);
    expect(clickedRoomId).toBe(5);
  });

  // JEST-10: Invalid room data handling
  test('JEST-10: Invalid room data handling', () => {
    const invalidRoomData = {
      id: 3,
      name: '',
      price: -50,
      image: null
    };

    const { valid, errors } = RoomCardComponent.validateRoomData(invalidRoomData);

    expect(valid).toBe(false);
    expect(errors.length).toBeGreaterThan(0);
  });
});

module.exports = { RoomCardComponent };

db = db.getSiblingDB('hotel_booking');

// Use bcryptjs to hash password (bcrypt hash for "admin" with salt rounds 8)
// Pre-computed hash: $2a$08$R1h5b7YlQ5wLFYnGKWEkN.4o1VYnwYG1d7Pv2e.GNwC9A/pKgXZKu
db.users.insertOne({
  userName: 'admin_user',
  fullName: 'Admin User',
  email: 'admin@example.com',
  password: '$2a$08$R1h5b7YlQ5wLFYnGKWEkN.4o1VYnwYG1d7Pv2e.GNwC9A/pKgXZKu',
  phone: '9999999999',
  gender: 'male',
  dob: new Date('1990-01-01'),
  address: 'Admin Address, City, State 123456',
  role: 'admin',
  verified: true,
  status: 'login',
  createdAt: new Date(),
  updatedAt: new Date()
});
print('✅ Admin user inserted successfully');

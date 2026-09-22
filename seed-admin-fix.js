db = db.getSiblingDB('hotel-room-booking');

db.users.deleteOne({ email: 'admin@example.com' });

db.users.insertOne({
  userName: 'admin_user',
  fullName: 'Admin User',
  email: 'admin@example.com',
  password: '$2a$08$poeHO/g6Uo5nniDDeB1Gq.J42xNDvrOp0RY8u7Unkk.BorOg4/S/y',
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

print('✅ Admin user fixed successfully');

// // config/db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://photechitsolutions:CZaIxg4uSYRaIlMz@photechitsolutions.n6dgfdu.mongodb.net/photech-admin?retryWrites=true&w=majority&appName=PhoTechITSolutions'
//     );
//     console.log('✅ MongoDB connected');
//   } catch (error) {
//     console.error('❌ MongoDB connection error:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

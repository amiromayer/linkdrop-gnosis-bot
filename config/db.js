import mongoose from 'mongoose'

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost:27017/linkdropdemobotdb`

const connectDB = async () => {
  try {
    await mongoose.connect(
      MONGODB_URI,
      { useNewUrlParser: true, useCreateIndex: true }
    )
    console.log(`Connected to database`)
  } catch (err) {
    console.error(err.message || err)
    process.exit(1)
  }
}

export default connectDB

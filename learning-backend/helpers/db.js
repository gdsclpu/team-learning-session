import mongoose from "mongoose";

export default async () => {
    await mongoose.connect(process.env.MONGOURI);
	if (mongoose.connection.readyState === 1) {
		console.log('Connected to MongoDB 🍀');
	}
	return;
}
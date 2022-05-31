import mongoose from 'mongoose';
const { Schema } = mongoose;
import Review from './Review.js';

const businessSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Add a business name'],
			unique: [true, 'This business already exists'],
		},

		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},

		address: {
			type: String,
			required: [true, 'Add the address'],
		},

		image: {
			type: String,
			required: [true, 'Add a picture'],
		},

		contact: [
			{
				phone: {
					type: Number,
					require: [true, 'Write a phone number'],
					unique: [true, 'This phone number is already in use'],
				},

				email: {
					type: String,
					unique: [true, 'This email is already in use'],
				},

				facebook: {
					type: String,
					unique: [true, 'This facebook is already in use'],
				},

				instagram: {
					type: String,
					unique: [true, 'This instagram is already in use'],
				},
			},
		],

		budget: {
			type: String,
			enum: ['$', '$$', '$$$', '$$$$'],
			required: [true, 'Add budget'],
		},

		typeBusiness: {
			type: String,
			required: [true, 'Add type of business'],
			enum: ['Store', 'Service', 'Food'],
		},

		reviews: {
			type: [Review.schema],
		},

		rating: {
			type: Number,
			required: [true, 'Please add the rating'],
			default: 0,
		},

		numReviews: {
			type: Number,
			required: [true, 'Please add the number reviews'],
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Business = mongoose.model('Business', businessSchema);
export default Business;

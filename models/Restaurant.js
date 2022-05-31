import mongoose from 'mongoose';
const { Schema } = mongoose;
import Review from './Review.js';

const restaurantSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please write a name for the Place'],
			unique: [true, 'This place is already register'],
		},

		author: {
			type: {
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		},

		typePlace: {
			type: String,
			required: [true, 'Please specify the type place'],
			enum: ['Local', 'Puesto Callejero'],
		},

		address: {
			type: String,
			required: [true, 'Please type de address'],
		},

		image: {
			type: String,
			required: [true, 'Please add a photo'],
		},

		budget: {
			type: String,
			required: [true, 'Add the budget'],
			enum: ['cheap', 'average', 'expensive'],
		},

		contact: [
			{
				phone: {
					type: Number,
					require: [true, 'Write a phone number'],
					unique: [true, 'This phone number is already in use'],
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

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;

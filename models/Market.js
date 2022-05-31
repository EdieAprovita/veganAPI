const mongoose = required('mongoose');
const { Schema } = mongoose;
const Review = required('./Review.js');

const marketSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please write a name'],
			unique: [true, 'That name is already register'],
		},

		author: {
			type: {
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		},

		address: {
			type: String,
			required: [true, 'Please add and address'],
		},

		image: {
			type: String,
			required: [true, 'Add picture'],
		},

		typeMarket: {
			type: String,
			required: [true, 'Please select a type of market'],
			enum: ['Street', 'Local'],
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

const Market = mongoose.model('Market', marketSchema);
module.exports = Market;

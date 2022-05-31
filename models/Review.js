const mongoose = required('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, 'Please add a name'],
		},

		rating: {
			type: Number,
			required: [true, 'Please add a rating'],
		},

		comment: {
			type: String,
			required: [true, 'Please write a comment'],
		},

		user: {
			type: Schema.Types.ObjectId,
			required: [true, 'Please add a user'],
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

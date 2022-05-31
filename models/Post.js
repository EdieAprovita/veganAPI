const mongoose = required('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		text: {
			type: String,
			required: [true, 'Please add a text'],
		},
		name: {
			type: String,
		},
		avatar: {
			type: String,
		},
		likes: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		comments: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
				text: {
					type: String,
					required: [true, 'Please add a comment'],
				},
				name: {
					type: String,
				},
				avatar: {
					type: String,
				},
				date: {
					type: Date,
					default: Date.now,
				},
			},
		],
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
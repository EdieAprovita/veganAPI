const mongoose = required('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		contact: [
			{
				phone: {
					type: Number,
					required: [true, 'Please add a phone number'],
				},
				email: {
					type: String,
					required: [true, 'Please add an email'],
					trim: true,
				},
			},
		],
		skills: {
			type: [String],
			required: [true, 'Please add a skill'],
		},
		experience: [
			{
				title: {
					type: String,
					required: [true, 'Please add a title'],
				},
				company: {
					type: String,
					required: [true, 'Please add a company'],
				},
				location: {
					type: String,
					required: [true, 'Please add a location'],
				},
				from: {
					type: Date,
					required: [true, 'Please add a from date'],
				},
				to: {
					type: Date,
				},
				current: {
					type: Boolean,
					default: false,
				},
				description: {
					type: String,
				},
			},
		],
		education: [
			{
				school: {
					type: String,
					required: [true, 'Please add a school'],
				},
				degree: {
					type: String,
					required: [true, 'Please add a degree'],
				},
				fieldofstudy: {
					type: String,
					required: [true, 'Please add a field of study'],
				},
				from: {
					type: Date,
					required: [true, 'Please add a from date'],
				},
				to: {
					type: Date,
				},
				current: {
					type: Boolean,
					default: false,
				},
				description: {
					type: String,
				},
			},
		],
		social: {
			youtube: {
				type: String,
			},
			twitter: {
				type: String,
			},
			facebook: {
				type: String,
			},
			linkedin: {
				type: String,
			},
			instagram: {
				type: String,
			},
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},

	{
		timestamps: true,
	}
);

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;

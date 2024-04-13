const mongoose = require('mongoose');

const GalleryUserSchema = new mongoose.Schema({
  imageUrls: {
    type: [String], // Array of image URLs
    required: true
},
  breed: String,
  gender: String,
  age: Number,
  species: String,
  others: String,
  medhistory: [String],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approved: {
    type: Boolean,
    default: false 
  },
  pet_status: {
    type: String,
    default: 'for adoption',
    enum: ['for adoption', 'on process']
    }
}, { timestamps: true });
  

const UserGallery = mongoose.model('UserGallery', GalleryUserSchema);

module.exports = UserGallery;

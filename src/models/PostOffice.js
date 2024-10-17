// src/models/Admin.js
import mongoose from 'mongoose';

const PostOfficeSchema = new mongoose.Schema({
    post_office_name: { type: String, required: true },
    pin: { type: Number, required: true },
    district: { type: String, required: true },
});

export default mongoose.models.PostOffice || mongoose.model('PostOffice', PostOfficeSchema);
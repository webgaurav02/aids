// src/models/Admin.js
import mongoose from 'mongoose';

const PostOfficeSchema = new mongoose.Schema({
    district: { type: String, required: true },
    name_of_the_ictc: { type: String, required: true },
    location: { type: String, required: true },
});

export default mongoose.models.PostOffice || mongoose.model('PostOffice', PostOfficeSchema);
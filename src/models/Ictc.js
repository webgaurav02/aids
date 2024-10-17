// src/models/Admin.js
import mongoose from 'mongoose';

const IctcSchema = new mongoose.Schema({
    district: { type: String, required: true },
    name_of_the_ictc: { type: String, required: true },
    location: { type: String, required: true },
});

export default mongoose.models.Ictc || mongoose.model('Ictc', IctcSchema);
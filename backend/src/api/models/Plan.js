const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    },
    rejectedUsers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    },
    acceptedUsers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('Admin', PlanSchema);
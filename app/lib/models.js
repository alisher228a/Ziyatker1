import mongoose from "mongoose"

const newsSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    desc: {
        type: String,
    },
    desc_kz: {
        type: String,
    },
    desc_en: {
        type: String,
    },
    explanation: {
        type: String,
    },
    explanation_kz: {
        type: String,
    },
    explanation_en: {
        type: String,
    },
    views: {
        type: Number,
    },
    rating: {
        type: String,
    },
    deadline: {
        type: Date,
    }
},
    { timestamps: true }
);

const ministriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    title_kz: {
        type: String,
        required: true,
    },
    title_en: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    desc_kz: {
        type: String,
        required: true,
    },
    desc_en: {
        type: String,
        required: true,
    },
    tasks: {
        type: String,
        required: true,
    },
    tasks_kz: {
        type: String,
    },
    tasks_en: {
        type: String,
    },
    goal: {
        type: String,
    },
    goal_kz: {
        type: String,
    },
    goal_en: {
        type: String,
    }
},
    { timestamps: true }
);

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    title_kz: {
        type: String,
        required: true,
    },
    title_en: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
    },
    desc_kz: {
        type: String,
    },
    desc_en: {
        type: String,
    },
    goal: {
        type: String,
    },
    goal_kz: {
        type: String,
    },
    goal_en: {
        type: String,
    },
    achievements: {
        type: String,
    },
    achievements_kz: {
        type: String,
    },
    achievements_en: {
        type: String,
    },
    tasks: {
        type: String,
    },
    tasks_kz: {
        type: String,
    },
    tasks_en: {
        type: String,
    },
},
    { timestamps: true }
);

export const News = mongoose.models.News || mongoose.model('News', newsSchema);
export const Ministries = mongoose.models.Ministries || mongoose.model('Ministries', ministriesSchema);
export const Project = mongoose.models.Project || mongoose.model('Project', projectsSchema);
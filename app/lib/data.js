import { connectToDB } from "./utils";
import { News, Ministries, Project } from "./models";

export const fetchNewsBy6 = async () => {
    try {
      await connectToDB();
      const news = await News.find()
        .sort({ updatedAt: -1 })
        .limit(6); 
  
      return news;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to fetch news!");
    }
  };
  


export const fetchNews = async () => {
    try {
        await connectToDB();
        const news = await News.find().sort({ updatedAt: -1 });

        return news;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch news!");
    }
};

export const fetchMinistries = async () => {
    try {
        await connectToDB();
        const ministries = await Ministries.find();
        
        return ministries;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch ministries!");
    }
};

export const fetchProjects = async () => {
    try {
        await connectToDB();
        const projects = await Project.find();
        
        return projects;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch projects!");
    }
};


export const fetchProjectById = async (id) => {
    try {
        await connectToDB();
        const project = await Project.findById(id);

        if (!project) {
            throw new Error(`No project found with id: ${id}`);
        }

        return project;
    } catch (error) {
        console.error("Error fetching project by ID:", error);
        return null; 
    }
};

export const fetchMinistryById = async (id) => {
    try {
        await connectToDB();
        const ministry = await Ministries.findById(id);

        if (!ministry) {
            throw new Error(`No ministry found with id: ${id}`);
        }

        return ministry;
    } catch (error) {
        console.error("Error fetching ministry by ID:", error);
        return null; 
    }
};
  
export const fetchNewsById = async (id) => {
    try {
        await connectToDB();
        const news = await News.findById(id);

        if (!news) {
            throw new Error(`No News found with id: ${id}`);
        }

        return news;
    } catch (error) {
        console.error("Error fetching news by ID:", error);
        return null; 
    }
};

export const increaseViewNews = async (id) => {
    try {
        await connectToDB();
        const news = await News.findById(id);

        if (!news) {
            throw new Error(`No News found with id: ${id}`);
        }

        news.views = (news.views || 0) + 1;

        await news.save();

        return news;
    } catch (error) {
        console.error("Error increasing views for news:", error);
        return null;
    }
};

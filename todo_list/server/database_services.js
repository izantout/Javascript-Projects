const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: "./server/config.env" });


class DatabaseServices {
  constructor() {
    this.client = new MongoClient(process.env.ATLAS_URI);
    this.database = null;
    this.collection = null;
  }

  // Initialize connection and set up collection
  async connect() {
    if (!this.database) {
      try {
        await this.client.connect();
        console.log("Connected to MongoDB");
        this.database = this.client.db("TodoApp");
        this.collection = this.database.collection("Tasks");
      } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
      }
    }
  }

  // Method to add a new task
  async addTask(task) {
    try {
      await this.connect();
      const result = await this.collection.insertOne(task);
      return { _id: result.insertedId, ...task }; // Returns the inserted task document with its _id
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  // Method to delete a task by ID
  async deleteTask(taskId) {
    try {
      await this.connect();
      const result = await this.collection.deleteOne({ _id: new ObjectId(taskId) });
      return result.deletedCount === 1; // Returns true if a task was deleted
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  // Method to get all tasks
  async getTasks() {
    try {
      await this.connect();
      const tasks = await this.collection.find().toArray();
      return tasks;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  // Close connection when done
  async close() {
    await this.client.close();
    console.log("MongoDB connection closed");
  }
}

module.exports = DatabaseServices;

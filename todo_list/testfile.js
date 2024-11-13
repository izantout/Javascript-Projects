const DatabaseServices = require('./server/database_services.js');
const dbService = new DatabaseServices();

async function run() {
  // Add a task
  const newTask = { title: "Learn MongoDB", details: "Understand CRUD operations" };
  const addedTask = await dbService.addTask(newTask);
  console.log("Added Task:", addedTask);

  // Get all tasks
  const tasks = await dbService.getTasks();
  console.log("All Tasks:", tasks);

  // Close connection
  await dbService.close();
}

run();

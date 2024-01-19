const express = require("express");
const Sequelize = require("sequelize");
var cors = require("cors");
const Op = Sequelize.Op;

const { sequelize, Task, Category } = require("./models");

const app = express();

app.use(express.json());

app.use(cors());

//CREATE Task
app.post("/tasks", async (req, res) => {
  const {
    id,
    title,
    description,
    categoryId,
    task_date,
    priority_level,
    progress_level,
  } = req.body;
  try {
    const task = await Task.create({
      id,
      title,
      description,
      categoryId,
      task_date,
      priority_level,
      progress_level,
    });
    return res.json(task);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

// // READ Tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: "category",
    });
    return res.json(tasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

// FIND Task
app.get("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    return res.json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

// // // UPDATE Task

app.patch("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    title,
    description,
    categoryId,
    task_date,
    priority_level,
    progress_level,
  } = req.body;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    task.title = title;
    task.description = description;
    task.categoryId = categoryId;
    task.task_date = task_date;
    task.priority_level = priority_level;
    task.progress_level = progress_level;

    await task.save();
    console.log(task);
    return res.json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// // DELETE Task
app.delete("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await Task.findOne({
      where: { id },
    });
    await task.destroy();
    return res.json({ message: "Task deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// CREATE Category
app.post("/categories", async (req, res) => {
  const { title } = req.body;
  try {
    const category = await Category.create({ title });
    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

// READ Categories
app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();
    // const departments = await Category.findAll({
    //     include: "students",
    //   });
    return res.json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

// FIND Category
app.get("/categories/:id", async (req, res) => {
  const id = +req.params.id;
  try {
    const category = await Category.findOne({
      where: {
        id,
      },
    });
    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

// UPDATE Department

app.patch("/categories/:id", async (req, res) => {
  const id = +req.params.id;
  const { title } = req.body;
  try {
    const category = await Catgeory.findOne({
      where: { id },
    });
    category.title = title;
    await category.save();
    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// DELETE Category
app.delete("/categories/:id", async (req, res) => {
  const id = +req.params.uuid;
  try {
    const category = await Category.findOne({
      where: { id },
    });
    await category.destroy();
    return res.json({ message: "Category deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost: 5000");
  await sequelize.authenticate();
  console.log("Database Connected!");
});

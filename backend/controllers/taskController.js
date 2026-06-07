const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const search = req.query.search;
    const query = { userId: req.user.id };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const tasks = await Task.find(query).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required' });

    const task = new Task({ title, description, dueDate, priority, userId: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const { title, description, status, dueDate, priority } = req.body;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;
    if (priority !== undefined) task.priority = priority;
    if (dueDate !== undefined) task.dueDate = dueDate;

    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const total = await Task.countDocuments({ userId });
    const completed = await Task.countDocuments({ userId, status: 'completed' });
    const pending = await Task.countDocuments({ userId, status: 'pending' });
    const now = new Date();
    const overdue = await Task.countDocuments({ userId, dueDate: { $exists: true, $lt: now }, status: { $ne: 'completed' } });

    res.json({ total, completed, pending, overdue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const express = require('express');
const { protect } = require('../middleware/auth');
const { getTasks, createTask, updateTask, deleteTask, toggleTaskStatus } = require('../controllers/taskController');

const router = express.Router();

router.use(protect); // All task routes are protected

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/toggle', toggleTaskStatus);

module.exports = router;

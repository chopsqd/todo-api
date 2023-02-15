const getAllTasks = (req, res) => {
    res.send('getAllTasks')
}

const getTask = (req, res) => {
    res.send('getTask')
}

const createTask = (req, res) => {
    res.send('createTask')
}

const updateTask = (req, res) => {
    res.send('updateTask')
}

const deleteTask = (req, res) => {
    res.send('deleteTask')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}
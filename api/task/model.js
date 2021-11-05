const db =require('../../data/dbConfig')

async function getTask() {
    const task = await db('tasks')
    return task
}

async function insertTask(newTask){
    const [task_id] = await db('tasks').insert(newTask)
    return getTask().where({task_id}).first()
}

module.exports = {getTask, insertTask}
// build your `Task` model here
const db =require('../../data/dbConfig')

//[POST] /api/tasks
// {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

//  [GET] /api/tasks
//[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]
async function getTask() {
    const task = await db('tasks')
    return task
}

async function insertTask(newTask){
    const [task_id] = await db('tasks').insert(newTask)
    return getTask().where({task_id}).first()
}

module.exports = {getTask, insertTask}
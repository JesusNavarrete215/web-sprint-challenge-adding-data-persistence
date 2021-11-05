// build your `Project` model here
const db =require('../../data/dbConfig')

async function getProjects(){
    const result = await db('projects')
    return result
}

async function insertProject(newProject){
 const [project_id] = await db('projects').insert(newProject)
return 
}

module.exports = {getProjects, insertProject}
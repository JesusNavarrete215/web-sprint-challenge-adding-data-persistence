// build your `Project` model here
const db =require('../../data/dbConfig')

async function getProjects(){
    const result = await db('projects')
    return result
}


async function insertProject(newProject){
 const [project_id] = await db('projects').insert(newProject)
return getProjects().where({project_id}).first()
}

module.exports = {getProjects, insertProject}
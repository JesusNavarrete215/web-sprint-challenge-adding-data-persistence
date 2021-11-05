
const db =require('../../data/dbConfig')

async function getResources(){
  const resource = await db('resources')
  return resource
}

async function insertResources(newResources){
    const [resource_id] = await db('resources').insert(newResources)
   return getResources().where({resource_id}).first();
   }

module.exports = {getResources, insertResources}

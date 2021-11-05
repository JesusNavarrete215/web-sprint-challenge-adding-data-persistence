// build your `Resource` model here
const db =require('../../data/dbConfig')

async function getResources(){
  const resource = await db('resources')
  return resource
}
//[GET] /api/resources
//[{"resource_id":1,"resource_name":"foo","resource_description":null}]


// [POST] /api/resources
//{"resource_id":1,"resource_name":"foo","resource_description":null}

async function insertResources(newResources){
    const [resource_id] = await db('resources').insert(newResources)
   return getResources().where({resource_id}).first();
   }

module.exports = {getResources, insertResources}

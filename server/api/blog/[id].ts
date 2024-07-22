import posts from "../../../db/data.json"

export default defineEventHandler((event) => {

    const id = getRouterParam(event, 'id')

    const post = posts.find(post => post.id === id)
    
    return post

})

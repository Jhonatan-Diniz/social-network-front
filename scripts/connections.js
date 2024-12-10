import { GetFetch } from "./fetch.js"

export const getPosts = async () => {
  let endpoint = 'posts/get_posts'
  let list_of_post = await GetFetch(endpoint)
  return list_of_post
}

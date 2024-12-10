import { getPosts } from "./connections.js";

const RenderPosts = async () => {
  let posts_conteiner = document.querySelector('#posts')
  let posts_list = await getPosts()

  console.log(posts_list[0])
  for (let post of posts_list) {
    console.log(post)
    posts_conteiner.innerHTML += `
         <div class='post'>
              <span class='user_data'>
              <span class='nickname'>@${post.user_id}</span>
              <span class='date'>${post.created}</span>
              </span>
              <div class='message'>
                  ${post.msg}
              </div>
              <span class='interaction_bar'>
                  <button class='int_btn'>comment</button>
                  <button class='int_btn'>like</button>
                  <button class='int_btn'>share</button>
               </span>
         </div>
        `
  }
}

await RenderPosts()


const latestPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
displayPosts(posts);
    // console.log(post);
}



const loadLatestPost = async () => {
    try {
      const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }
  
      const data = await res.json();
  
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Invalid or empty data received from the API.');
      }
  
      console.log(data);
     
  
    } catch (error) {
      console.error('Error fetching or processing data:', error.message);
    }
  };
 
  
  

const displayPosts = (posts) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    posts.forEach((post) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div id="card-container" class="card card-side bg-base-100 bg-[#F3F3F5] hover:bg-[#797DFC1A] transition">
        <div class="mt-6">
            <figure><img class="w-20 h-20 rounded-xl ml-10  relative" src="${post.image}" alt="Movie" /></figure>
            <div class="w-4 h-4 rounded-full ${post.isActive ? 'bg-green-500' : 'bg-red-500'} absolute top-4 left-28"></div>
        </div>
        <div class="card-body">
            <div class="flex-1 lg:flex lg:gap-5">
                <h4># ${post.category}</h4>
                <h4>Author : ${post.author.name}</h4>
            </div>
            <h2 class="card-title">${post.title}</h2>
            <p>${post.description}</p>
            <hr class="border-dashed border-2">
            <div class="flex-1 space-y-2 lg:flex justify-between">
                <div class="flex-1 lg:flex lg:gap-6">
                    <div class="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                  
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  
                        <p> ${post.view_count}</p>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  
                        <p>${post.posted_time} min</p>
                    </div>

                </div>
                <button onclick="outSideData('${post.title.replace(/'/g,'@')}' , '${post.view_count}',)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>
              </button>
            </div>
        </div>
    </div>
        `;
        cardContainer.appendChild(newDiv);
    });
};

    const markRead = (id, view) => {
        const markRead=getElementById('mark_read');
        let readCount=parseInt(getElementById('read_count').innerText)+1;
        document.getElementById('read_count').innerText=readCount;
        const postTitle=getElementById(id).innerText
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex flex-col lg:flex-row gap-1 bg-white p-4 rounded-2xl mt-5">
                <p
                    class="max-w-[212px] mx-auto lg:mx-0 text-center lg:text-start mulish font-semibold text-[#12132D]">
                    ${postTitle}</p>
                <p class="text-[rgba(18,19,45,0.60)] mx-auto lg:mx-0 flex gap-2 items-center"><img src="./icons/eye.svg" alt="">${view}</p>
            </div>
        `
        markRead.appendChild(div);
    };

    const displayData = (data) =>{
        const authorContainer = document.getElementById('author-container');
        authorContainer.innerHTML = '';
        data.forEach((data) => {
            const viewDiv = document.createElement('div');
            viewDiv.innerHTML = `
            <figure><img src="${data.cover_image}"
                    alt="" /></figure>
            <div class="mt-4 space-y-3">
                <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              
                    <p>${data.author?.posted_date || "No Publish Date"}</p>
                </div>
                <h2 class="card-title font-bold">${data.title}</h2>
                <p>${data.description}</p>
                <div class="flex items-center gap-3">
                    <img class="w-11 h-11 rounded-full" src="${data.profile_image}" alt="">
                    <div>
                        <h4 class="text-xl font-semibold">${data.author.name}</h4>
                        <p>${data.author?.designation || "Unknown"}</p>
                    </div>
                </div>
            </div>
        
            `;
            authorContainer.appendChild(viewDiv);
        });
    
      };
    
    // console.log(posts);



latestPost();
loadLatestPost();


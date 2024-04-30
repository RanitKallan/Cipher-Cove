
// Constants
const pixabayApiKey = '42928151-30ef3fc866cc32a0b73e8eea4'; 

// Fetch and display posts
fetchPosts();

async function fetchPosts() {
    
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await postsResponse.json();

    displayPosts(postsData);
}

async function fetchImage(query) {
    try {
        // getting images from pixabay
        const pixabayResponse = await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(query)}`);
        const imageData = await pixabayResponse.json();

        if (imageData.hits.length > 0) {
            const randomIndex = Math.floor(Math.random() * imageData.hits.length);
            return imageData.hits[randomIndex].largeImageURL;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Failed to fetch image:", error);
        return null;
    }
}

async function displayPosts(posts) {
    const postsContainer = document.getElementById('blog-posts-container');
    postsContainer.innerHTML = ''; // Reset content

    for (const post of posts.slice(0, 20)) {
        const imageUrl = await fetchImage(post.title);

        const postElement = document.createElement('div');
        postElement.classList.add('card', 'blog-post');
        postElement.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="${post.title}" class="card-img-top blog-post-image">` : ''} 
            <div class="card-body">
                <h5 class="card-title blog-post-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>
        `;
        postsContainer.appendChild(postElement);
    }
}

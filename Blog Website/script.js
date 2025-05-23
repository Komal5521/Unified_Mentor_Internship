/* Account creation alert */
function togglePost(id) {
    const post = document.getElementById(`post${id}`);
    post.style.display = post.style.display === 'block' ? 'none' : 'block';
  }
  
  function addComment(event, listId) {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value.trim();
    const message = form[1].value.trim();
    if (name && message) {
      const commentList = document.getElementById(listId);
      const li = document.createElement('li');
      li.textContent = `${name}: ${message}`;
      commentList.appendChild(li);
      form.reset();
    }
  }
  
  /* Search bar  */
  function searchPosts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const content = post.querySelector('p').textContent.toLowerCase();
      post.style.display = title.includes(query) || content.includes(query) ? 'block' : 'none';
    });
  }
  
  function toggleForm() {
    const form = document.getElementById('signupForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
  }
  
  //  Automatically hide form on successful submit
  document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Account created successfully!");
      signupForm.reset();
      signupForm.style.display = "none";
    });
  });
  

// comments in blog post
  function togglePost(id) {
    const post = document.getElementById(`post${id}`);
    post.style.display = post.style.display === 'block' ? 'none' : 'block';
  }
  
  function addComment(event, listId) {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value.trim();
    const message = form[1].value.trim();
    if (name && message) {
      const commentList = document.getElementById(listId);
      const li = document.createElement('li');
      li.textContent = `${name}: ${message}`;
      commentList.appendChild(li);
      form.reset();
    }
  }
  
  function searchPosts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const content = post.querySelector('p').textContent.toLowerCase();
      post.style.display = title.includes(query) || content.includes(query) ? 'block' : 'none';
    });
  }
  

  // new blog
  function toggleNewBlogForm() {
    const form = document.getElementById('newBlogForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
  }
  
  function addNewBlog(event) {
    event.preventDefault();
  
    const title = document.getElementById('blogTitle').value.trim();
    const category = document.getElementById('blogCategory').value.trim();
    const content = document.getElementById('blogContent').value.trim();
  
    if (title && category && content) {
      const blogList = document.querySelector('.blog-list');
  
      const newPost = document.createElement('article');
      newPost.classList.add('post-card');
      newPost.setAttribute('data-tags', category.toLowerCase());
  
      newPost.innerHTML = `
        <img src="https://picsum.photos/600/300?random=${Math.floor(Math.random() * 100)}" alt="Post Image">
        <h2>${title}</h2>
        <p class="meta">By Komal | ${new Date().toLocaleDateString()} | #${category}</p>
        <p>${content.slice(0, 100)}...</p>
        <button onclick="togglePost('${Date.now()}')">Read More</button>
        <div class="full-post" id="post${Date.now()}">
          <p>${content}</p>
        </div>
      `;
  
      blogList.prepend(newPost); // Add new blog on top
      document.getElementById('newBlogForm').style.display = 'none';
      event.target.reset(); // Clear the form
      alert("New blog post published successfully!");
    }
  }
  
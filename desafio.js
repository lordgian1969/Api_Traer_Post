const getPosts = async () => {
const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
    const response = await fetch(url);
    const post = await response.json();
    let postHtml="<ul>";
    post.forEach(element => {
        postHtml+= "<li>"+ element.title +"<h5>"+ element.body + "</h5></li>";
        });
        postHtml+="<ul>"; 
    const elementoPost = document.getElementById("post-data");
    elementoPost.innerHTML = postHtml;
    } catch (err) {
    console.log(err);
    }
    }

 

  
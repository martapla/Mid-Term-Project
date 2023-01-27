// Get Api Fetch Info for the Boxes - Recent/Other Projects Section -

const apiJsonInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        let getApiInfo = "";
        res.slice(0, 3).forEach((post, index) => {
          getApiInfo += `<div class="box">
              <div><img class="box img" src="./project-assets/projects-section/${ index + 1 }.jpg" alt=""></div>
              <div class="projects-text">
                <h3 class="projects h3">${post.title.substring(0,15)}</h3>
                <p class="projects p">${post.body.substring(0,100)}</p>
                <a href="./projects.html">Learn More</a>
              </div>
          </div>`;
        });
        document.querySelector(".collection-box").innerHTML = getApiInfo;
      })
      .catch((error) => console.log(error));
  };
  
  apiJsonInfo();
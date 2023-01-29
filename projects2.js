//Fetch to : Title and Description 

const getDataJson = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
        .then((res) => {
            let project = res[0]
            console.log(project);
    
            document.querySelector(".project-title").innerText = project.title.slice(0, 1).toUpperCase() + project.title.substring(1, 30);

            document.querySelector(".project-text p ").innerText = project.body.slice(0, 1).toUpperCase() + project.body;
    
          })
    
      }
    
getDataJson()
      

const getOtherProjects = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
          let getApiInfo = "";
          //Other Projects Section run 1 position behind: Image (index +1) and Text with slice(1,4)
          let newArray = res.slice(1, 4);
           console.log(newArray);
           newArray.forEach((post, index) => {
          
           getApiInfo += `<div class="box">
               <div><img class="box img" src="./project-assets/projects-section/${ index + 2}.jpg" alt=""></div>
               <div class="projects-text">
                <h3 class="projects h3">${post.title.slice(0,1).toUpperCase()+ post.title.slice(1,15)}</h3>
                <p class="projects p">${post.body.slice(0,1).toUpperCase()+ post.body.substring(1,100)}</p>
                <a href="./projects.html">Learn More</a>
              </div>
            </div>`;
        });
        document.querySelector(".collection-box").innerHTML = getApiInfo;
      })
      .catch((error) => console.log(error));
  };
  
  getOtherProjects();
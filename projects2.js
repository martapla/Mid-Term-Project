const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
        .then((res) => {
            let project = res[1]
            console.log(project);
    
             document.querySelector(".project-title").innerText =  project.title.substring(0,30)
             document.querySelector(".project-text p ").innerText =  project.body
    
          })
    
      }
    
getData()
      

// const apiJsonInfo2 = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((res) => {


//  let getApiInfo = "";
//  res.slice(0,1).forEach((post) => {
//      getApiInfo +=
//          ` <div id="main-project">
//            <div class="project-container">
//              <h1 class="project-title">${post.title.substring(0, 15)}</h1>
//              <div class="project-info">
//              <div class="project-ui">UI Design & App Development</div>
//              <div class="project-date">Completed on:  02/02/22. </div>
//            </div>
//            <div class="main-project">
//                <img  src="../project-assets/projects-section/1.jpg" alt="square">
//            </div>
//            <div class="project-text">
//                <p>${post.body}</p>
//                <p>${post.body}</p>
//            </div>
//            </div>`;
          
//         });
//         document.querySelector(".project-container").innerHTML = getApiInfo;
//       })
//       .catch((error) => console.log(error));
//   };
  
//   apiJsonInfo2();
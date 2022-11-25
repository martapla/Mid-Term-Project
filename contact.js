
const addPost = () => {
  
    // nos traemos los values/valores de los inputs
    let name = document.getElementById("text-name").value;
    let email = document.getElementById("text-email").value;
    let phone = document.getElementById("text-phone").value;
    

    // Vamos a usar el fetch() para poder enviar info a el endpoint.
    fetch("https://jsonplaceholder.typicode.com/users",
        {
      // Tipo de request que queremos ejecutar.
      method: "POST",
      
      body: JSON.stringify({ name:text-name, email:text-email, phone:text-phone }),
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.log(error));
};
  
window.addEventListener("load", () => {
    
    document.getElementById("submit-btn").addEventListener("click",() => {
        addPost();
    })
})
;


//document.querySelector("#addPost").addEventListener("submit", addPost);
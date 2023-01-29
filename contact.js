
//Contact Post

console.log("TESTCONTACT");

const addPost = () => {
  
// nos traemos los values/valores de los inputs
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;
  
console.log(`Name: ${name} - Email: ${email} - Phone: - ${phone} - Message: ${message} `);
alert (`Thanks to Submit ${name} !`)
    

// Vamos a usar el fetch() para poder enviar info al endpoint.
fetch("https://jsonplaceholder.typicode.com/posts",
{
// Tipo de request que queremos ejecutar.
method: "POST",
      
body: JSON.stringify({
  title: name,
  body:  `${email} ${phone} ${message}`,
  userId:1,

}),

headers: {
  "Content-type": "application/json; charset=UTF-8",
  Accept: "text/plain, application/json",
},

})
  
.then((response) => response.json())
.then((formData) => console.log(formData))
.then(() => {
    let formDone = document.querySelector(".s-form-done");
    formDone.style.display = "block";
    console.log(formDone);
})
.catch((error) => {
  let formFail = document.querySelector(".s-form-fail");
  formFail.style.display = "block";
  console.log("ERROR");
});
};
  
// window.addEventListener("load", () => {
    
// document.getElementById("submit-btn").addEventListener("click",() => { addPost() })
// })
// ;


document.querySelector("#contactForm").addEventListener("submit", addPost);

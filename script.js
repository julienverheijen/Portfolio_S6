//Clone the card template
 const container = document.querySelector(".cards_container");
 const cardTemplate = document.getElementById("card-template");
 for (let i = 0; i < 10; i++) {
   container.append(cardTemplate.content.cloneNode(true));
 }

 fetch("data.json")
   .then((response) => response.json())
//    .then((data) => {
//     if (data.projectType === "1"){
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
//    })
//    .catch(error => {
//     console.error('Error loading JSON:', error);
//     });
   .then((posts) => {
     container.innerHTML = "";
     posts.forEach((post) => {
       const div = cardTemplate.content.cloneNode(true);
       div.getElementById("card-link").href = post.link;
       div.getElementById("logo-img").src = post.logoImage;
       div.getElementById("card-title").textContent = post.title;
       div.getElementById("card-details").textContent = post.details;
       div.getElementById("cover-img").src = post.coverImage;
    //    div.getElementById("project-type").content = post.projectType;
       container.append(div);
     });
   });
//Clone the card template
 const container = document.querySelector(".cards_container");
 const cardTemplate = document.getElementById("card-template");
 for (let i = 0; i < 10; i++) {
   container.append(cardTemplate.content.cloneNode(true));
 }

 fetch("data.json")
   .then((response) => response.json())
   .then((posts) => {
     container.innerHTML = "";
     posts.forEach((post) => {
       const div = cardTemplate.content.cloneNode(true);
       div.getElementById("card-link").href = post.link;
       div.getElementById("card-projectType-icon").src = post.projectTypeIcon;
    //    div.getElementById("card-projectType-icon").content = post.learningOutcomeIcon;
       div.getElementById("card-title").textContent = post.title;
       div.getElementById("card-details").textContent = post.context;
       div.getElementById("card-cover-img").src = post.coverImage;
       container.append(div);
     });
   });
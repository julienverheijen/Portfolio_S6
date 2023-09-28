fetch("../data.json")
   .then((response) => response.json())
   .then((data) => {
    data.forEach(() => {
        let test = data.find(obj => obj.id === myId) 
        // console.log(test)
        document.getElementById("deliverable-title").textContent = test.title
        document.getElementById("deliverable-details").textContent = test.details
        document.getElementById("deliverable-context-text").textContent = test.context
        document.getElementById("deliverable-results-text").textContent = test.results
        document.getElementById("deliverable-conclusion-text").textContent = test.conclusion
   });
});  
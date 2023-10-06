fetch("../data.json")
   .then((response) => response.json())
   .then((data) => {
    data.forEach(() => {
        let deliverable = data.find(obj => obj.id === projectId) 
        document.getElementById("deliverable-title").textContent = deliverable.title
        document.getElementById("deliverable-context-text").textContent = deliverable.context
        document.getElementById("deliverable-results-text").textContent = deliverable.results
        document.getElementById("deliverable-conclusion-text").textContent = deliverable.conclusion
        document.getElementById("documentBtn").href = deliverable.documentLink
   });
});  
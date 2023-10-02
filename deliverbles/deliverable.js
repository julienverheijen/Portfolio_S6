fetch("../data.json")
   .then((response) => response.json())
   .then((data) => {
    data.forEach(() => {
        let deliverable = data.find(obj => obj.id === projectId) 
        // console.log(test)
        document.getElementById("deliverable-title").textContent = deliverable.title
        document.getElementById("deliverable-details").textContent = deliverable.details
        document.getElementById("deliverable-context-text").textContent = deliverable.context
        document.getElementById("deliverable-results-text").textContent = deliverable.results
        document.getElementById("deliverable-conclusion-text").textContent = deliverable.conclusion
        document.getElementById("deliverable-context-img").src = deliverable.mediaContext
        document.getElementById("deliverable-results-img").src = deliverable.mediaResults
        document.getElementById("deliverable-conclusion-img").src = deliverable.mediaConclusion
        document.getElementById("documentBtn").href = deliverable.documentLink
   });
});  
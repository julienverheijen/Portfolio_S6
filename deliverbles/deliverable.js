fetch("../data.json")
   .then((response) => response.json())
   .then((data) => {
    data.forEach(() => {
        let deliverable = data.find(obj => obj.id === projectId) 
        document.getElementById("deliverable-title").textContent = deliverable.title
        document.getElementById("deliverable-projectType-icon").src = deliverable.projectTypeIcon;
        document.getElementById("deliverable-learningOutcomeA-icon").src = deliverable.learningOutcomeA;
        document.getElementById("deliverable-learningOutcomeB-icon").src = deliverable.learningOutcomeB;
        document.getElementById("deliverable-learningOutcomeC-icon").src = deliverable.learningOutcomeC;
        document.getElementById("deliverable-image").src = deliverable.coverImage;
        document.getElementById("deliverable-context-text").textContent = deliverable.context
        document.getElementById("deliverable-results-text").textContent = deliverable.results
        document.getElementById("deliverable-conclusion-text").textContent = deliverable.conclusion
        document.getElementById("documentBtn").href = deliverable.documentLink
   });
});  
//card template placeholders before page is loaded
const container = document.querySelector(".cards_container");
const cardTemplate = document.getElementById("card-template");
for (let i = 0; i < 9; i++) {
  container.append(cardTemplate.content.cloneNode(true));
}

//filter on project type
document.addEventListener('DOMContentLoaded', async () => {
  const showAll = document.getElementById('showAll');
  const showPersonal = document.getElementById('showPersonal');
  const showInternational = document.getElementById('showInternational');
  const showGroup = document.getElementById('showGroup');
  const filteredDataContainer = document.getElementById('filteredData');
  const container = document.getElementById('card_container');

  //make 'All Projects' enabled by default
  const filteredData = await filterDataByType(null);
  displayFilteredData(filteredData);
  enableAllButtons();
  showAll.disabled = true;

  //make all projects active
  showAll.addEventListener('click', async () => {
    const filteredData = await filterDataByType(null);
    displayFilteredData(filteredData);
    enableAllButtons();
    showAll.disabled = true;
  });

  //make personal projects active
  showPersonal.addEventListener('click', async () => {
    const filteredData = await filterDataByType('P');
    displayFilteredData(filteredData);
    enableAllButtons();
    showPersonal.disabled = true;
  });

  //make international projects active
  showInternational.addEventListener('click', async () => {
    const filteredData = await filterDataByType('I');
    displayFilteredData(filteredData);
    enableAllButtons();
    showInternational.disabled = true;
  });

  //make group projects active
  showGroup.addEventListener('click', async () => {
    const filteredData = await filterDataByType('G');
    displayFilteredData(filteredData);
    enableAllButtons();
    showGroup.disabled = true;
  });

  //filter on type
  async function filterDataByType(type) {
    try {
      const response = await fetch('data.json');
      const jsonData = await response.json();
      return type ? jsonData.filter(item => item.type === type) : jsonData;
    } catch (error) {
      console.error('Error fetching or parsing data:', error);
      return [];
    }
  }

  //display or clear filterd data
  function displayFilteredData(data) {
    container.innerHTML = ''; // Clear existing content

    if (data.length === 0) {
      filteredDataContainer.innerHTML = 'No matching items found.';
      return;
    }

    //post data
    data.forEach(post => {
      const div = cardTemplate.content.cloneNode(true);
      div.getElementById("card-link").href = post.link;
      div.getElementById("card-projectType-icon").src = post.coverProjectTypeIcon;
      div.getElementById("card-title").textContent = post.title;
      div.getElementById("card-details").textContent = post.context;
      div.getElementById("card-cover-img").src = post.coverImage;
      container.append(div);
    });
  }

  //enables active buttons
  function enableAllButtons() {
    showAll.disabled = false;
    showPersonal.disabled = false;
    showInternational.disabled = false;
    showGroup.disabled = false;
  }
});
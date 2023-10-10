<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects</title>
    <script type="module" src="script.js"></script>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="projects.css">
</head>
<body class="maxViewWidth">

<?php include("navigation.html");?>

<ul class="breadcrumb">
  <li><a href="../index.php">Home</a> /</li>
  <li>Projects</li>
</ul>

      <div class="cards_container">
        <template id="card-template">
          <a class="card" id="card-link">

            <div class="card_top">
              <div>
                <img class="top__img" id="card-cover-img" alt="" />
              </div>
              <div>
                <img class="top__icon" id="card-projectType-icon" alt="" />
              </div>
              <div>
                <!-- <img class="top__icon" id="card-projectType-icon" alt="" /> -->
              </div>
            </div>

            <div class="card_bottom">                
              <h3 class="bottom__title" id="card-title"></h3>
              <div class="bottom__text" id="card-details">
              </div>
            </div>
          </a>
        </template>
      </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Project Plan</title>
    <script type="module" src="../deliverbles/deliverable.js"></script>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../deliverbles/deliverable.css">
    <script> 
        var projectId = 1;
    </script>
</head>
<body class="maxViewWidth">
    <?php include("../navigation.html");?>

    <ul class="breadcrumb">
    <li><a href="../index.php">Home</a> /</li>
    <li><a href="../projects.php">Projects</a> /</li>
    <li>Personal Project Plan</li>
    </ul>

        <header>
            <h1 id="deliverable-title"></h1>
            <div id="badges-container">
                <img class="badges" id="deliverable-projectType-icon" alt="" />
                <img class="badges" id="deliverable-learningOutcomeA-icon" alt="" />
                <img class="badges" id="deliverable-learningOutcomeB-icon" alt="" />
                <img class="badges" id="deliverable-learningOutcomeC-icon" alt="" />
              </div>
        </header>
    <div class="deliverable_container">
        <article class="body_context">
            <h2>CONTEXT</h2>
            <p class="context_text" id="deliverable-context-text"></p>
        </article>
        <article class="body_results">
            <h2>RESULTS</h2>
            <p class="results_text" id="deliverable-results-text"></p>
        </article>
        <article class="body_conclusion">
            <h2>CONCLUSION</h2>
            <p class="conclusion_text" id="deliverable-conclusion-text"></p>
        </article>
        <div>
            <a class="button" id="documentBtn" target="_blank">View Document</a>
        </div>
</div>
</body>
</html>

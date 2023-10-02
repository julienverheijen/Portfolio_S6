<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Navigation</title>
    <script type="module" src="../deliverbles/deliverable.js"></script>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../deliverbles/deliverable.css">
    <script> var projectId = 2; </script>
</head>
<body class="maxViewWidth">
    <?php include("../navigation.html");?>

        <header>
            <h1 id="deliverable-title"></h1>
            <p id="deliverable-details"></p>
        </header>
    <div class="deliverable_container">
        <article class="body_context">
            <h2>CONTEXT</h2>
            <p class="context_text" id="deliverable-context-text"></p>
        </article>

            <div class="body_context_img">
                <img class="deliverable_img" id="deliverable-context-img" alt="" />
            </div>

                <article class="body_results">
                    <h2>RESULTS</h2>
                    <p class="results_text" id="deliverable-results-text"></p>
                </article>

                    <div class="body_results_img">
                        <img class="deliverable_img" id="deliverable-results-img" alt="" />
                    </div>

                <article class="body_conclusion">
                    <h2>CONCLUSION</h2>
                    <p class="conclusion_text" id="deliverable-conclusion-text"></p>
                </article>

            <div class="body_conclusion_img">
                <img class="deliverable_img" id="deliverable-conclusion-img" alt="" />
            </div>

        <div>
            <a class="button" id="documentBtn" target="_blank">View Document</a>
        </div>
</body>
</html>

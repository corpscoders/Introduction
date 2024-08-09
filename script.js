/*
* This project uses js-yaml, which is licensed under the MIT License.
* Copyright (c) 2011-2015 by Vitaly Puzrin
*/ 

fetch("settings.yaml") // Adjust the path if needed
      .then(response => response.text())
      .then(yamlText => {
        const settings = jsyaml.load(yamlText);

        // Update the website
        document.title = settings.site_title;
        document.getElementById("h1").textContent = settings.site_description;
        document.body.style.color = settings.primary_color
        document.body.style.backgroundColor = settings.background_color;
        // ... update other elements as needed
      });
function openProjectForm() {
    document.getElementById("projectFormModal").style.display = "block";
}

function closeProjectForm() {
    document.getElementById("projectFormModal").style.display = "none";
}

function addProject() {
    const projectName = document.getElementById('projectName').value;
    const toolsUsed = document.getElementById('toolsUsed').value;
    const projectImage = document.getElementById('projectImage').value;
    const projectLink = document.getElementById('projectLink').value;
    const projectDescription = document.getElementById('projectDescription').value;

    const gridContainer = document.getElementById('grid-container');
    
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.onclick = () => openProjectDetails(projectName, toolsUsed, projectImage, projectLink, projectDescription);
    
    const img = document.createElement('img');
    img.src = projectImage;
    img.alt = projectName;
    
    const p = document.createElement('p');
    p.innerText = projectName;
    
    gridItem.appendChild(img);
    gridItem.appendChild(p);
    gridContainer.appendChild(gridItem);
    
    closeProjectForm();
}

function openProjectDetails(name, tools, image, link, description) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <h1>${name}</h1>
            </header>
            <main>
                <img src="${image}" alt="${name}">
                <h2>Tools Used: ${tools}</h2>
                <p>${description}</p>
                <a href="${link}" target="_blank">View Project</a>
                <br>
                <a href="index.html">Back to Portfolio</a>
            </main>
        </body>
        </html>
    `);
}

// Add event listener to close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectFormModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

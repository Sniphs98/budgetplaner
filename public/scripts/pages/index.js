import httpApi from '../utils/httpApi.utils.js';
const api = new httpApi();

getProjects();

function getProjects() {
    api.get('/project/getAll').then(response => {
        const mainSection = document.getElementById('project-card-container');

        response.forEach(project => {
            const element = createProjectCard(project);

            mainSection.appendChild(element);
        })
    })
}

function createProjectCard(project) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardElement.appendChild(cardBody);
    
    const title = document.createElement('h5');
    title.classList.add('card-title')
    title.textContent = project.title;
    cardBody.appendChild(title);
    
    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = project.description;
    cardBody.appendChild(description);
    
    const link = document.createElement('a');
    link.classList.add('btn');
    link.classList.add('btn-primary');
    link.textContent = 'Visit';
    link.setAttribute('href', `/project-detail.html?id=${project.projectId}`);
    cardBody.appendChild(link);
    
    return cardElement;
}
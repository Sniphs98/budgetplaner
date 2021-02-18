import { getUserByName } from '../helper/login.js';
import getInputValue from '../helper/input.js';
import loginApi from '../service/login.js';
import httpApi from '../service/httpApi.js';
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

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', logUserIn);

async function logUserIn() {
    const firstname = getInputValue(document.getElementById('login-firstname'));
    const lastname = getInputValue(document.getElementById('login-lastname'));
    
    const user = await getUserByName(firstname, lastname);

    loginApi.login(user);
}
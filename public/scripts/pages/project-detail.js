import { someOneIsLoggedIn, getLoggedInUser } from '../helper/login.js';
import createElement from '../helper/element.js';
import getInputValue from '../helper/input.js';
import httpApi from '../service/httpApi.js';
const api = new httpApi();

const projectID = getProjectID();
let projectData;

fetchProject(projectID).then(project => {
    projectData = project;

    fillOutInformation(projectData)
})

const button = document.getElementById('donation-btn');
button.addEventListener('click', handleDonationCreation);
handeSubmitButtonState(button);

function fillOutInformation(project) {
    const title = document.getElementById('project-title');
    title.textContent = project.title;
    
    const description = document.getElementById('project-description');
    description.textContent = project.description;
    
    const donationGoalElement = document.getElementById('donation-goal-value');
    donationGoalElement.textContent = `${project.goalMoney} €`;
    
    const collectedMoneyValue = document.getElementById('collected-money-value');
    collectedMoneyValue.textContent = `${project.currentMoney} €`;
}

function getURLParams() {
    return new URLSearchParams(window.location.search);
}

function getProjectID() {
    const params = getURLParams();

    return params.get('id');
}

function fetchProject(projectId) {
    return api.get(`/project/getById/${projectId}`);
}

function getDonationValue() {
    return getInputValue(document.getElementById('donation-value'));
}

function handleDonationCreation(event) {
    event.preventDefault();
    
    const donationValue = getDonationValue();
    const {
        goalMoney: moneyTarget,
        currentMoney: collectedMoney 
    } = projectData;

    const collectedMoneyValue = donationValue + collectedMoney;
    const updatedProject = projectData;
    updatedProject.currentMoney = collectedMoneyValue;
    
    if (updatedProject.supporters === null) {
        updatedProject.supporters = []
    }
    
    // const donator = getLoggedInUser();
    // updatedProject.supporters = [...updatedProject.supporters, donator ];
    
    debugger;

    createDonation(updatedProject).then(() => {
        clearInputs();

        fetchProject(projectID).then(project => {
            projectData = project;

            fillOutInformation(projectData);
        });
    });
}

function clearInputs() {
    const input = document.getElementById('donation-value');

    input.value = null;
}

function createDonation(project) {
    return api.post('/project/updateProject', project);
}

function handeSubmitButtonState(button) {
    const userIsLoggedIn = someOneIsLoggedIn();
    
    if (userIsLoggedIn) {
        return;
    }
    
    const notificationElement = createElement({
        tag: 'div',
        attributes: [
            {
                name: 'class',
                value: 'alert alert-danger',
            }
        ],
        textContent: 'You can\'t create a project because you\'re not logged in.'
    });
    const notificationSection = document.getElementById('notification-section');
    notificationSection.appendChild(notificationElement);
    
    button.setAttribute('disabled', true);
}
import getInputValue from '../helper/input.js';
import httpApi from '../service/httpApi.js';
const api = new httpApi();

const button = document.getElementById('create-project-btn');
button.addEventListener('click', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    
    const projectInformation = getProjectInformation();
    createProject(projectInformation).then(() => {
        clearInputFields(['title', 'description', 'money-target']);
    });
}

function getProjectInformation() {
    const title = getInputValue(document.getElementById('title'));
    const goalMoney = getInputValue(document.getElementById('money-target'));
    const description = getInputValue(document.getElementById('description'));
    
    return {
        title,
        goalMoney,
        description
    };
}

function clearInputFields(ids) {
    ids.forEach(id => {
        document.getElementById(id).value = null;
    })
}

function mergeProjectInfoWithDefaults(project) {
    return {
        ...getProjectDefaults(),
        ...project
    };
}

function getProjectDefaults() {
    return {
        goalMoney: 0,
        currentMoney: 0
    }
}

function createProject(project) {
    const mergedProjectInformation = mergeProjectInfoWithDefaults(project);

    return api.post('/project/create', mergedProjectInformation);
}


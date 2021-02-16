import httpApi from '../utils/httpApi.utils.js';
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
    const title = document.getElementById('title').value;
    const goalMoney = Number(document.getElementById('money-target').value);
    const description = document.getElementById('description').value;
    
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


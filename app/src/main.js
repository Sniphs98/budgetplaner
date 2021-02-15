import { createApp } from "vue";
import App from "./App.vue";
import router from './router.js';
import './styles/all.css';
import store from './store';

const app = createApp(App);

/* Adding plugins */
app.use(router);
app.use(store);

/* Registering global components */
import TextField from './components/form/TextField.vue';
app.component('TextField', TextField);

import NumberField from './components/form/NumberField.vue';
app.component('NumberField', NumberField);

import TextArea from './components/form/TextArea.vue';
app.component('TextArea', TextArea);

import SelectField from './components/form/SelectField.vue';
app.component('SelectField', SelectField);

import Button from './components/base/Button.vue';
app.component('Button', Button);

app.mount("#app");

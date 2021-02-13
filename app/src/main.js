import { createApp } from "vue";
import App from "./App.vue";

import './styles/all.css';

const app = createApp(App);

import TextField from './components/form/TextField.vue';
app.component('TextField', TextField);

import NumberField from './components/form/NumberField.vue';
app.component('NumberField', NumberField);

app.mount("#app");

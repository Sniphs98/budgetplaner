import { createApp } from "vue";
import App from "./App.vue";

import './styles/all.css';

const app = createApp(App);

import TextField from './components/form/TextField.vue';
app.component('TextField', TextField);

import NumberField from './components/form/NumberField.vue';
app.component('NumberField', NumberField);

import TextArea from './components/form/TextArea.vue';
app.component('TextArea', TextArea);

app.mount("#app");

import Vue from 'vue';
import 'bulma';
import 'animate.css';
import dateFormat from 'dateformat';

import App from './App';

Vue.filter('format', dateFormat);

new Vue({
    el: '#app',
    render: h => h(App),
    data: {
        now: new Date(),
    },
    mounted() {
        setInterval(() => this.now = new Date(), 1);
    },
});

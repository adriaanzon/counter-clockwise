<template>
    <div id="app">
        <div class="box" style="min-height: 400px">
            <tabs animation="slide" :only-fade="false" is-fullwidth>
            <tab-pane label="Stopwatch" selected>
                <stopwatch></stopwatch>
            </tab-pane>
            <!-- <tab-pane label="Timer">Timer Tab</tab-pane> -->
            <!-- <tab-pane label="Alarm">Alarm Tab</tab-pane> -->
            <tab-pane label="Clock">
                <clock></clock>
            </tab-pane>
            </tabs>
        </div>
    </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';

export default {
    name: 'app',
    components: {
        Tabs,
        TabPane,
        Clock,
        Stopwatch,
    },
    data() {
        return {};
    },
};
</script>

<style>
.vue-bulma-tabs .animated {
    animation-duration: .5s;
}
</style>

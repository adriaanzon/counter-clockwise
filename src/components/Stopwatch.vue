<template>
    <div>
        <h1 class="title">
            {{ elapsedHours ? elapsedHours + ':' : '' }}<!--
            -->{{ elapsed | format('M:ss:L') }}
        </h1>

        <div v-show="!startingTime">
            <button @click="start" class="button">Start</button>
        </div>

        <div v-show="startingTime">
            <button @click="pause" class="button" v-show="!pausedAt">Pause</button>
            <button @click="resume" class="button" v-show="pausedAt">Resume</button>
            <button @click="stop" class="button">Stop</button>
        </div>
    </div>
</template>

<script>
import TimeHelpers from '../mixins/TimeHelpers';
import SaveStateWithCasts from '../mixins/SaveStateWithCasts';

export default {
    mixins: [TimeHelpers, SaveStateWithCasts],

    data() {
        return {
            startingTime: null,
            pausedAt: null,
        };
    },

    methods: {
        start() {
            this.startingTime = new Date();
        },
        stop() {
            this.startingTime = null;
            this.pausedAt = null;
        },
        pause() {
            this.pausedAt = new Date();
        },
        resume() {
            let diff = this.pausedAt - this.startingTime;
            this.startingTime = new Date(new Date - diff);
            this.pausedAt = null;
        },
        getSaveStateConfig() {
            return {
                cacheKey: 'Stopwatch',
                casts: { startingTime: Date, pausedAt: Date },
            };
        },
    },

    computed: {
        elapsed() {
            if (this.pausedAt) {
                return new Date(this.pausedAt - this.startingTime);
            } else if (this.startingTime) {
                return this.$root.now - this.startingTime;
            }

            return new Date(0);
        },

        elapsedHours() {
            return Math.floor(this.elapsed / 1000 / 60 / 60);
        },
    },
};
</script>

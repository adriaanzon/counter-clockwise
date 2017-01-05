import saveState from 'vue-save-state';
import { getSavedState } from 'vue-save-state/src/local-storage';
import { forEach } from 'lodash';

export default {
    mixins: [saveState],
    methods: {
        /* @override saveState.loadState */
        loadState() {
            const savedState = getSavedState(this.getSaveStateConfig().cacheKey);

            if (!savedState) {
                return;
            }

            forEach(savedState, (value, key) => {
                if (this.attributeIsManagedBySaveState(key)) {
                    let type = this.getSaveStateConfig().casts[key];
                    this.$data[key] = (!type || value === null) ? value : new type(value);
                }
            });
        },
    },
};

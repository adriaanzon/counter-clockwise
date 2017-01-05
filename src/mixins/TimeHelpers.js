export default {
    methods: {
        difference(a, b) {
            return this.utc(this.utc(a) - this.utc(b));
        },
        utc(date) {
            if (!(date instanceof Date)) {
                date = new Date(date);
            }

            return new Date(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate(),
                date.getUTCHours(),
                date.getUTCMinutes(),
                date.getUTCSeconds(),
                date.getUTCMilliseconds()
            );
        },
    },
};

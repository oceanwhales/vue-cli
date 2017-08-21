export default {
    name: 'app-article',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
    methods: {
        getImgUrl() {
            const images = require('./../../assets/logo-snb.png');
            return images;
        },
    },
};

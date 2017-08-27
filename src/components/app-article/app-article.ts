export default {
    name: 'app-article',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            articles: [
                {
                    date: "10/08/2017",
                    title: "Article à propos du SNB",
                    text: "La porte ouverte du SNB",
                    image: require('./../../assets/porte-ouverte.jpg'),
                },
                {
                    date: "11/08/2017",
                    title: "Un nouveau site en préparation pour le SNB",
                    text: "Un nouveau site en préparation pour le SNB dont voici la description et le logo",
                    image: require('./../../assets/logo-snb.png'),
                }
            ]
        };
    },
    methods: {
        getImgUrl() {
            const images = require('./../../assets/porte-ouverte.jpg');
            return images;
        },
    },
};

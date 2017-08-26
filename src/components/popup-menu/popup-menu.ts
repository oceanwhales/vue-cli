export default {
    name: 'popup-menu',
    data() {
        return {
            isActive: false,
        };
    },
    mounted() {
        this.isActive = false;
    },
    methods: {
        displayMyPopup() {
            this.isActive = true;
            // $('#mypopup').modal({
            //     autofocus: true,
            //     context: '#appNav',
            // }).modal('show');
        },
    },
};

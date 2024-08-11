import axios from 'axios';

export default {
    data() {
        return {
            message: '',
        };
    },
    created() {
        axios.get('/api/hello')
            .then(response => {
                this.message = response.data.message;
            });
    },
};
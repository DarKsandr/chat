import { createStore } from "vuex";
import auth from './modules/auth';

const store = createStore({
    strict: true,
    modules: {
        auth,
    },
});

export default store;
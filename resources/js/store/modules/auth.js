import router from '@/js/route'

const ls = 'is_auth';

const getIsAuth = () => {
    const item = localStorage.getItem(ls) ?? false;
    if(item === 'true' || item === true){
        return true
    } else {
        return false;
    }
}

const auth = {
    state(){
        return {
            is_auth: getIsAuth(),
            user: {},
        }
    },
    mutations: {
        setAuth(state, newAuth){
            state.is_auth = newAuth;
        },
        login(state, user){
            state.is_auth = true;
            state.user = user;
            localStorage.setItem(ls, true);
            router.push({name: 'home'});
        },
        logout(state){
            state.is_auth = false;
            state.user = {};
            localStorage.setItem(ls, false);
            router.push({name: 'login'});
        }
    },
    getters: {
        isAuth(state){
            return state.is_auth;
        }
    }
};

export default auth;
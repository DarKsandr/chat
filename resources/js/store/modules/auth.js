import router from "@/js/route";

const ls = "is_auth";

const auth = {
    state() {
        return {
            is_auth: (() => {
                const item = localStorage.getItem(ls) ?? false;
                if (item === "true" || item === true) {
                    return true;
                } else {
                    return false;
                }
            })(),
            user_: {},
        };
    },
    mutations: {
        setAuth(state, newAuth) {
            state.is_auth = newAuth;
        },
        setUser(state, newUser) {
			state.user_ = newUser;
		},
        login(state, user) {
            state.is_auth = true;
			state.setUser(user);
            localStorage.setItem(ls, true);
            router.push({ name: "home" });
        },
        logout(state) {
            state.is_auth = false;
			state.setUser({});
            localStorage.setItem(ls, false);
            router.push({ name: "login" });
        },
    },
    getters: {
        isAuth(state) {
            return state.is_auth;
        },
        user(state){
            return state.user_;
        }
    },
};

export default auth;

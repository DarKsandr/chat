<template>
    <header>
        <div>
            <a href="#" @click.prevent="logout" v-if="store.getters.isAuth">Logout</a>
        </div>
    </header>
    <main class="container">
        <router-view></router-view>
    </main>
    <footer></footer>
</template>
<script>
    import { useStore } from 'vuex';
    import axios from './axios';

    export default {
    setup() {
        const store = useStore();
        const logout = async () => {
            const res = await axios.post('/api/logout');
            store.commit('logout', false);
        }
        return {logout, store}
    }
}
</script>
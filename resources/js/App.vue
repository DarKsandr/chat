<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Chat</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" @click.prevent="logout" v-if="store.getters.isAuth" class="nav-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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

        const getUser = async () => {
            store.commit('setUser', (await axios.get('/api/user')).data );
        }

        getUser();

        return { logout, store }
    }
}
</script>
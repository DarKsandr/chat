<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="mb-3">
            New to Chat? <router-link :to="{name: 'register'}">Create an account</router-link>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import {ref} from 'vue';
import axios from '@/js/axios';
import { useStore } from 'vuex';
import {loginResponse} from '@/js/helpers/login';

export default {
    setup(){
        const store = useStore();
        const email = ref('');
        const password = ref('');

        const submit = () => {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const res = await axios.post('/api/login', {
                    email: email.value,
                    password: password.value,
                });
                loginResponse(res);
            });
        }
        return {email, password, submit}
    }
}
</script>
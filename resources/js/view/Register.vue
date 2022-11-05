<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="email">
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Repeat Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" v-model="repeat_password">
        </div>
        <div class="mb-3">
            Already have an account? <router-link :to="{ name: 'login' }">Sign in</router-link>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import { ref } from 'vue';
import axios from '@/js/axios';
import { useStore } from 'vuex';
import {loginResponse} from '@/js/helpers/login';

export default {
    setup() {
        const store = useStore();
        const name = ref('');
        const email = ref('');
        const password = ref('');
        const repeat_password = ref('');

        const submit = async () => {
            if (password.value == repeat_password.value) {
                await axios.get('/sanctum/csrf-cookie');
                const res = await axios.post('/api/register', {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                });
                loginResponse(res);
            } else {
                alert(`Passwords are different`);
            }
        }
        return { name, email, password, repeat_password, submit }
    }
}
</script>
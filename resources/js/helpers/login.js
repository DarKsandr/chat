import store from '@/js/store/index';

export const loginResponse = res => {
    if (res.status == 200) {
        store.commit('login', res.data.user);
    } else {
        alert(res?.data?.errors[0] ?? res?.data?.error ?? "Unknown error");
    }
}
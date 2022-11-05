<template></template>
<script>
import axios from '@/js/axios';
export default {
    setup(){
        axios.get('/api/user');
    }
}
</script>
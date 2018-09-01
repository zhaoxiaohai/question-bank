<template>
    <div id="app">
        <layout>
            <router-link to='/manage'>管理</router-link>
            <router-link to='/answer'>答题</router-link>
        </layout>
        <router-view></router-view>
    </div>
</template>
<script>
import layout from "./components/layout/layout.vue";
export default {
    name:'app',
    components:{
        layout
    }
};
</script>


<template>
    <div id="app">
        <div class="navbar navbar-default">
            <div class="navbar-brand">
                <router-link to="/">Brand Name</router-link>
            </div>
            <ul class="nav navbar-nav navbar-left">
                <li><router-link to="/book">Buku</router-link></li>
                <li><router-link to="/publisher">Penerbit</router-link></li>
                <li><router-link to="/author">Pengarang</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
         
    }
</script>
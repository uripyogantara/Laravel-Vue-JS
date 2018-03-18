<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(publisher,key) in publishers" :key="key">
                    <td>{{key+1}}</td>
                    <td>{{publisher.name}}</td>
                    <td>{{publisher.address}}</td>
                    <td>{{publisher.phone}}</td>
                    <td>
                        <button class="btn btn-danger" v-on:click="deletePublisher(publisher)">DELETE</button>
                        <button class="btn btn-warning" v-on:click="updatePublisher(publisher)">UPDATE</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>
<script>
import Vue from 'vue'

export default {
    data:function(){
        return{
            // publishers:[],
        }
    },
    created:function(){
        this.$store.dispatch('getPublishers')
        setInterval(function () {
            this.$store.dispatch('getPublishers')
        }.bind(this), 4000);
    },
    computed:{
        publishers(){
            return this.$store.state.publisherStore.publishers
        }
    },
    methods:{
        deletePublisher(publisher){
            this.$store.dispatch('deletePublisher',publisher)
            console.log(publisher)
        },
        updatePublisher(publisher){
            this.$store.commit('doUpdate',publisher)
        }
    }
}
</script>

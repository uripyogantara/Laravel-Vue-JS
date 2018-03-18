<template>
  <div>
        <h2>Form Tambah Publisher</h2>
        <form v-on:submit.prevent="addPublisher">
            <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Name" v-model="name">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="address" placeholder="Address" v-model="address"> 
            </div>
            <div class="form-group">
                <input class="form-control" type="number" name="phone" placeholder="Phone" v-model="phone">
            </div>
            <input type="submit" value="Simpan" class="btn btn-primary btn-block" v-if="isInsert">
            <div v-else>
                <input type="submit" value="Update" class="btn btn-warning btn-block" >
                <input type="button" value="Cancel" class="btn btn-danger btn-block" v-on:click="doInsert()">
            </div>
            
        </form>
  </div>
</template>
<script>
export default {
    data:()=>{
        return{
            
        }
    },
    computed:{
        isInsert(){
            return this.$store.state.publisherStore.isInsert
        },
        name:{
            get(){
                return this.$store.state.publisherStore.newPublisher.name
            },
            set(value){
                this.$store.commit('updatePublisherName',value)
            }
        },
        address:{
            get(){
                return this.$store.state.publisherStore.newPublisher.address
            },
            set(value){
                this.$store.commit('updatePublisherAddress',value)
            }
        },
        phone:{
            get(){
                return this.$store.state.publisherStore.newPublisher.phone
            },
            set(value){
                this.$store.commit('updatePublisherPhone',value)
            }
        },
    },
    methods:{
        addPublisher(){
            var vm=this
            if(vm.isInsert){
                this.$store.dispatch('addPublisher')            
            }else{
                this.$store.dispatch('updatePublisher')
            }
        },
        doInsert(){
            this.$store.commit('doInsert')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <add-publisher></add-publisher>    
            </div>
            <div class="col-md-8">
                <list-publisher></list-publisher>
            </div>
        </div>
    </div>
</template>

<script>
    import AddPublisher from './publisher/AddPublisher.vue'
    import ListPublisher from './publisher/ListPublisher.vue'
    export default {
        components:{
            'add-publisher':AddPublisher,
            'list-publisher':ListPublisher
        }
    }
</script>

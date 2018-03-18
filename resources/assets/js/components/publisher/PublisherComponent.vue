<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form-publisher></form-publisher>    
            </div>
            <div class="col-md-8">
                <list-publisher></list-publisher>
            </div>
        </div>
    </div>
</template>

<script>
    import FormPublisher from './FormPublisher.vue'
    import ListPublisher from './ListPublisher.vue'
    export default {
        components:{
            'form-publisher':FormPublisher,
            'list-publisher':ListPublisher
        }
    }
</script>

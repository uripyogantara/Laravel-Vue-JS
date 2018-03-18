export default{
    state:{
        publishers:[],
        publisher:{
            'name':'',
            'phone':'',
            'address':'',
            'id':''
        },
        isInsert:true
    },
    mutations:{
        addPublisher:(state,data)=>{
            state.publishers.push(data)
            state.publisher={
                'name':'',
                'phone':'',
                'address':'',
                'id':''
            }  
        },
        updatePublisher:(state,data)=>{
            // state.publishers.push(data)
            var index = -1
            for (var i = 0; i < state.publishers.length; i++) {
                if (state.publishers[i]['id'] == data.id) {
                    index=i
                    break
                }
            }
            console.log(index)
            if (index > -1) {
                state.publishers.splice(index, 1,data);
            }
            // console.log(state.publishers)
            state.isInsert=true
            state.publisher={
                'name':'',
                'phone':'',
                'address':'',
                'id':''
            }
        },
        getPublishers(state,data){
            state.publishers=data
        },
        updateStatePublisher(state,value){
            state.publisher=value
        },
        deletePublisher(state,data){
            var index = state.publishers.indexOf(data);
            state.publishers.splice(index, 1);
        },
        doInsert(state){
            state.isInsert=true
            state.publisher={
                'name':'',
                'phone':'',
                'address':'',
                'id':''
            }
        },
        doUpdate(state,publisher){
            state.isInsert=false
            state.publisher={
                'name':publisher.name,
                'phone':publisher.phone,
                'address':publisher.address,
                'id':publisher.id
            }
        }
    },
    actions:{
        addPublisher:(context,data)=>{
            axios.post('/api/publisher',data)
            .then(function(response){
                console.log('add sukses')
                context.commit('addPublisher',response.data)
            })
        },
        updatePublisher:(context,data)=>{
            axios.put('/api/publisher/'+data.id,data)
            .then(function(response){
                console.log('update sukses')
                context.commit('updatePublisher',data)
            })
        },
        getPublishers:(context)=>{
            axios.get('/api/publisher')
            .then(function(response){
                context.commit('getPublishers',response.data);
            }).catch(function(error){
                console.log('error')
            })
        },
        deletePublisher:(context,data)=>{
            axios.delete('/api/publisher/'+data.id)
            .then(function(response){
                context.commit('deletePublisher',data)
            })
        }
    }
}
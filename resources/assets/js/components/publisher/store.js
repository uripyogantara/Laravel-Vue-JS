export default{
    state:{
        publishers:[],
        newPublisher:{
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
            state.newPublisher={
                'name':'',
                'phone':'',
                'address':'',
                'id':''
            }  
        },
        updatePublishers:(state,data)=>{
            var index = -1
            for (var i = 0; i < state.publishers.length; i++) {
                if (state.publishers[i]['id'] == data.id) {
                    index=i
                    break
                }
            }
            if (index > -1) {
                state.publishers.splice(index, 1,data);
            }
            state.isInsert=true
            state.newPublisher={
                'name':'',
                'phone':'',
                'address':'',
                'id':''
            }
        },
        getPublishers(state,data){
            state.publishers=data
        },
        updateNewPublisher(state,value){
            state.newPublisher=value
            console.log(value)
        },
        deletePublisher(state,data){
            var index = state.publishers.indexOf(data);
            state.publishers.splice(index, 1);
        },
        doInsert(state){
            state.isInsert=true
            state.newPublisher={
                'name':'',
                'phone':'',
                'address':'',
                'id':''
            }
        },
        doUpdate(state,newPublisher){
            state.isInsert=false
            state.newPublisher={
                'name':newPublisher.name,
                'phone':newPublisher.phone,
                'address':newPublisher.address,
                'id':newPublisher.id
            }
        }
    },
    actions:{
        addPublisher:(context)=>{
            var data=context.state.newPublisher
            axios.post('/api/publisher',data)
            .then(function(response){
                console.log('add sukses')
                context.commit('addPublisher',response.data)
            })
        },
        updatePublisher:(context)=>{
            var data=context.state.newPublisher
            axios.put('/api/publisher/'+data.id,data)
            .then(function(response){
                console.log('update sukses')
                context.commit('updatePublishers',data)
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
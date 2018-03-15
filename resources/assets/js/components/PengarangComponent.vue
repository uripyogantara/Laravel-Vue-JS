<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Pengarang</div>

                    <div class="panel-body">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                          Add Author
                        </button>
                        <table class="table">
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Telepon</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="(author,key) in authors" :key="key">
                                <td>{{key+1}}</td>
                                <td>{{author.name}}</td>
                                <td>{{author.address}}</td>
                                <td>{{author.phone}}</td>
                                <td>
                                    <button class="btn btn-success" v-on:click="edit(key)">EDIT</button>
                                    <button class="btn btn-danger" v-on:click="deleteAuthor(author.id)">DELETE</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tambah Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Author</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="addAuthor()">
                                <div class="form-group">
                                    <input class="form-control" type="text" name="name" placeholder="Name" v-model="addData.name">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" name="address" placeholder="Address" v-model="addData.address"> 
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="number" name="phone" placeholder="Phone" v-model="addData.phone">
                                </div>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- end tambah modal -->

        <!-- edit Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Author</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form v-on:submit.prevent="editAuthor(editData.id)">
                                <div class="form-group">
                                    <input class="form-control" type="text" name="name" placeholder="Name" v-model="editData.name">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" name="address" placeholder="Address" v-model="editData.address"> 
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="number" name="phone" placeholder="Phone" v-model="editData.phone">
                                </div>
                                <button type="submit" class="btn btn-primary">Edit</button>
                            </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <!-- end edit modal -->
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    export default {
        data:function(){
            return{
                authors:{},
                url:'/api/author',
                addData:{'name':'','address':'','phone':''},
                editData:{'id':'','name':'','address':'','phone':''},
            }
        },
        created:function(){
            this.fectAuthors();
        },
        mounted(){
            console.log('Pengarang Component')
        },
        methods:{
            fectAuthors(){
                var vm=this
                axios.get(`${this.url}`)
                .then(function (response) {
                    Vue.set(vm.$data,'authors',response.data)
                    // console.log(response.data)
                })
            },

            addAuthor(){
                var vm=this
                var dataInput=vm.addData
                axios.post('/api/author',dataInput)
                    .then(function(response){
                        vm.addData={'name':'','address':'','phone':''}
                        console.log('success')
                        $('#exampleModal').modal('hide')
                        vm.fectAuthors()
                    })
            },

            edit(index){
                var vm=this
                var author=vm.authors[index]
                vm.editData={
                    'id':author.id,
                    'name':author.name,
                    'address':author.address,
                    'phone':author.phone,
                }
                $('#editModal').modal('show')
                // console.log(vm.editAuthor)
            },

            editAuthor(id){
                var vm=this
                var dataInput={
                    'name':vm.editData.name,
                    'address':vm.editData.address,
                    'phone':vm.editData.phone
                }

                axios.put('/api/author/'+id,dataInput)
                    .then(function(response){
                        console.log('sukses')
                        vm.editData={'id':'','name':'','address':'','phone':''}
                        $('#editModal').modal('hide')
                        vm.fectAuthors()
                    })
                    .catch(function(error){
                        console.log(error)
                    });
            },

            deleteAuthor(id){
                // alert(id)
                var vm=this
                axios.delete('/api/author/'+id)
                    .then(function(response){
                        vm.fectAuthors()
                    })
                    .catch(function(error){
                        console.log(error)
                    })
            }
        }
    }
</script>

import Vue from 'vue'
import VueX from 'vuex'
import axios from 'axios'

import publisherStore from '../components/publisher/store'

Vue.use(VueX)

export default new VueX.Store({
    modules:{
        publisherStore
    }
})
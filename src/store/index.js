import {createStore} from "vuex";
import task from "@/store/modules/task.js";

const store = createStore({
    modules: {
        task
    }
})

export default store;
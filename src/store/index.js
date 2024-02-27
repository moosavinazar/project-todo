import {createStore} from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

const store = createStore({
    state: {
        tasks: []
    },
    getters: {
        allTasks(state) {
            return state.tasks;
        }
    },
    mutations: {
      setTasks(state, tasks) {
          state.tasks = tasks;
      }
    },
    actions: {
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                commit('setTasks', response.data);
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'There is a problem, please try again',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        },

        async filterTasks({ commit }, limit) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
                commit('setTasks', response.data);
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'There is a problem, please try again',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        }


    }
})

export default store;
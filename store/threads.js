export default {

  state() {
    return {
      threads: [],
      search: []
    }
  },

  getters: {
    threads(state) {
      return state.threads
    }
  },

  mutations: {
    SET_THREADS(state, threads) {
      state.threads = threads
    },
    APPEND_THREAD(state, thread) {
      state.threads = [...state.threads, thread]
    },
    CHANGE_STATE_THREAD(state, data) {
      const index = state.threads.findIndex(thread => thread.id == data.id)
      state.threads.splice(index, 1, data)

    },
    DELETE_THREAD(state, data) {
      const index = state.threads.findIndex(thread => thread.id == data.id)
      state.threads.splice(index, 1)

    },
  },


  actions: {

    async getThreads({commit}) {
      let threads = await this.$axios.get('api/threads')
      commit('SET_THREADS', threads.data)
    },

    async search({commit}, word) {
      let threads = await this.$axios.get(`api/threads/search?word=${word}`)
      commit('SET_THREADS', threads.data)
    },

    async createThread({commit}, data) {
      try {
        let thread = await this.$axios.post(`api/threads`, data)
        commit('APPEND_THREAD', thread.data)
      } catch (e) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',

            show_class:
              {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show'
              }
          }
        )
      }
    }
    ,

    async doneThread({commit}, data) {
      let thread = await this.$axios.post(`api/threads/${data.id}/done`)
      commit('CHANGE_STATE_THREAD', thread.data)
      Swal.fire({
        title: 'thread is done',
        icon: 'success',
        position:"top",
        timerProgressBar:true,
        timer:3000,
        showConfirmButton:false,
        toast:true
      })
    }
    ,

    async deleteThread({commit}, data) {
      let thread = await this.$axios.delete(`api/threads/${data.id}`)
      commit('DELETE_THREAD', data)
      Swal.fire({
        title: 'thread is changed',
        icon: 'success',
        position:"top",
        timerProgressBar:true,
        timer:3000,
        showConfirmButton:false,
        toast:true
      })
    }
  }
  ,


}

export default {
  handlecontactModal({ commit }, payload) {
    commit('HANDLE_CONTACT_MODAL', payload)
  },

  handlecontactSubmit({ commit }, payload) {
    console.log(payload)
    commit('HANDLE_CONTACT_SUBMIT', payload)
  },
  getContacts({ commit }, params = {}) {
    commit('CONTACTS', params)
    return true
  },
}

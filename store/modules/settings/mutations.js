export default {
  HANDLE_CONTACT_MODAL(state, payload) {
    state.iscontactModalVisible = !state.iscontactModalVisible
  },

  HANDLE_CONTACT_SUBMIT(state, payload) {},
  CONTACTS(state, payload) {
    state.contacts += payload.record
    // console.log(payload)
  },
  // WORKING_HOURS(state, payload) {
  //   state.workingHours += payload.record;
  //   // console.log(payload)
  // }
}

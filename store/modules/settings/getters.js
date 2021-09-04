// import querystring from "querystring";
// import jsonp from "fetch-jsonp";

// let timeout;
// let currentValue;
export default {
  // Summary COLUMN
  contactsColumn(state) {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        align: 'left',
        width: 100,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        align: 'left',
        width: 150,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        align: 'left',
        width: 150,
      },
      {
        title: 'Fax',
        dataIndex: 'fax',
        align: 'left',
        width: 100,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        align: 'left',
        width: 100,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        align: 'left',
        width: 100,
      },
      {
        title: 'Action',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
        align: 'left',
        width: 100,
      },
    ]

    return columns
  },
  // Summary DATA
  contactsData(state) {
    const data = []
    for (let i = 0; i < state.contacts; i++) {
      data.push({
        key: i,
        name: '',
        type: '',
        phone: ' ',
        fax: '',
        address: '',
        status: '',
      })
    }
    return data
  },

  iscontactModalVisible(state) {
    return state.iscontactModalVisible
  },
}

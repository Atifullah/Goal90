<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--SETTINGS-->
  <div class="settings">
    <a-row>
      <a-card title="Settings" size="small" :bordered="false">
        <!--START SETTING FORM-->
        <a-form-model
          ref="educationForm"
          :hide-required-mark="true"
          label-align="left"
          :model="educationForm"
        >
          <a-row :gutter="24" class="px-2 mt-5">
            <!--SEARCH DOCUMENTS COLUMN -->
            <a-col :xs="15" :sm="18" :md="20" :lg="18" :xl="18">
              <a-input-search placeholder="Search" />
            </a-col>
          </a-row>
          <b>Settings</b>
          <h4 class="mt-4" @click="hadleModal('')">Change Language</h4>
          <a-divider />
          <h4>Change Location</h4>

          <a-row :gutter="24" class="px-2 mt-5">
            <!--SEARCH DOCUMENTS COLUMN -->
            <a-col :xs="15" :sm="18" :md="20" :lg="18" :xl="18">
              <span>Receive notifications </span>
            </a-col>
            <!-- ENDS SEARCH DOCUMENTS COLUMN -->

            <!-- BADGE COLUMN -->
            <a-col :xs="7" :sm="6" :md="4" :lg="6" :xl="6">
              <div>
                <a-badge>
                  <a href="#" class="head-example" />
                </a-badge>
                <a-switch />
              </div>
            </a-col>
            <!-- END BADGE COLUMN COLUMN -->
          </a-row>
          <a-divider />

          <a-row :gutter="24" class="px-2 mt-5">
            <!--SEARCH DOCUMENTS COLUMN -->
            <a-col :xs="15" :sm="18" :md="20" :lg="18" :xl="18">
              <span>Receive newsletters </span>
            </a-col>
            <!-- ENDS SEARCH DOCUMENTS COLUMN -->

            <!-- BADGE COLUMN -->
            <a-col :xs="7" :sm="6" :md="4" :lg="6" :xl="6">
              <div>
                <a-badge>
                  <a href="#" class="head-example" />
                </a-badge>
                <a-switch />
              </div>
            </a-col>
            <!-- END BADGE COLUMN COLUMN -->
          </a-row>
          <a-divider />
          <a-row :gutter="24" class="px-2 mt-5">
            <!--SEARCH DOCUMENTS COLUMN -->
            <a-col :xs="15" :sm="18" :md="20" :lg="18" :xl="18">
              <span>Receive special offers </span>
            </a-col>
            <!-- ENDS SEARCH DOCUMENTS COLUMN -->

            <!-- BADGE COLUMN -->
            <a-col :xs="7" :sm="6" :md="4" :lg="6" :xl="6">
              <div>
                <a-badge>
                  <a href="#" class="head-example" />
                </a-badge>
                <a-switch />
              </div>
            </a-col>
            <!-- END BADGE COLUMN COLUMN -->
          </a-row>
        </a-form-model>
        <!--END SETTING FORM-->
      </a-card>
    </a-row>
    <Languages />
  </div>
  <!-- END SETTINGS SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->

<script>
// STORE
import { mapGetters, mapActions } from 'vuex'

// COMPONENTS
import Languages from './Modals/Languages'

export default {
  components: {
    Languages,
  },
  data() {
    return {
      educationForm: {
        document: null,
        resourceType: 1,
      },
    }
  },

  // Call Anything On runtime
  computed: {
    ...mapGetters('modules/settings', [
      'isWebResourceModalVisible',
      'getDocumentsData',
      'sharedResourcesColumn',
      'sharedResourcesData',
      'webResourcesColumn',
      'webResourcesData',
    ]),

    isWebResourceVisible: {
      // getter
      get() {
        return this.isWebResourceModalVisible
      },
      // setter
      set(newValue) {
        this.handleCancel()
      },
    },
  },

  methods: {
    ...mapActions('modules/settings', ['hadleModal']),
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    handleBlur() {
      console.log('blur')
    },
    handleFocus() {
      console.log('focus')
    },
    filterOption(input, option) {
      return option.componentOptions.children[0].text
        .toLowerCase()
        .includes(input.toLowerCase())
    },
  },
}
</script>

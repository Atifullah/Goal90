<!-- ************************* TEMPLATE ************************ -->
<template>
  <!-- LOGIN SECTION -->
  <div id="login">
    <a-row :gutter="16">
      <!--LOGIN IMAGES COLUMN-->
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="login-img">
        <div class="login-bg">
          <p class="mb-4 mr-5 text-justify">
            This system may only be accessed by authorized users, and each user
            can only view data associated with their specific account. By
            logging in, you are accepting the
            <a href="#" class="text-primary-light font-600">
              Terms and Conditions
            </a>
            this application.
          </p>
        </div>
      </a-col>
      <!--END LOGIN IMAGES COLUMN-->

      <!--LOGIN FORM COLUMN-->
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" />
      <!--END LOGIN FORM COLUMN-->
    </a-row>
  </div>
  <!--END LOGIN SECTION-->
</template>

<script>
export default {}
</script>

<style></style>

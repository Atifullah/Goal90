<template>
  <div>
    <a-card class="appointment-schedule-card">
      <a-row>
        <a-col :span="4">
          <img
            src="https://clinicalnotebook.com/wp-content/uploads/2015/04/Doctor-Profile-Pic-Example.png"
            alt="profile"
            class="doctor-profile-pic"
          />
        </a-col>
        <a-col :span="12">
          <h5>Dr .David James</h5>
          <span>Orthopadic</span>
        </a-col>
        <a-col :span="6" class="call-controler">
          <a-button type="danger"> X </a-button>
          <a-button type="success"> X </a-button>
        </a-col>
      </a-row>
      <div class="appontment-date">
        <span>1 August 2021</span>
      </div>

      <a-button block class="cancel-appointment-btn">
        Cancel Appontment
      </a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'AppointmentSchedule',
}
</script>

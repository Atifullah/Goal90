<template>
  <div>
    <a-card class="vitals-summary">
      <a-row>
        <a-col :span="10">
          <h3>Helo, john Wicks</h3>
          <a-button type="primary" class="vitals-btn"> Primary </a-button>
        </a-col>
        <a-col :span="14">
          <a-card class="vitals-details">
            <a-row>
              <a-col :span="8">
                <span>BP</span>
              </a-col>
              <a-col :span="8"> Weight </a-col>
              <a-col :span="8"> TEMP </a-col>
            </a-row>
            <a-row>
              <a-col :span="8"> SPO2 </a-col>
              <a-col :span="8"> BMI </a-col>
              <a-col :span="8"> PULSE </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'VitalsSummery',
}
</script>
<style lang="scss"></style>

<template>
  <div>
    <div id="dashboard-container">
      <div class="dashboard-top-sectons">
        <div class="vitals-container">
          <VitalsSummery />
          <VitalsGraph />
        </div>

        <div class="top-doctors-list-container">
          <TopDoctors />
        </div>
      </div>
      <div class="dashboard-footer-section">
        <div class="notefications-section">
          <!-- <div class="notefication-header">
          
          </div> -->
          <Notefications />
        </div>
        <div class="appontment-schedule-section">
          <h1>Schedule Appointment</h1>
          <!-- <div class="appontment-schedule-header">
            <h1></h1>

          </div> -->
          <AppointmentSchedule />
        </div>
        <div class="menu-section">
          <Menu />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VitalsSummery from '@/components/Dashboard/Vitals/VitalsSummery'
import VitalsGraph from '@/components/Dashboard/Vitals/VitalsGraph'
import TopDoctors from '@/components/Dashboard/TopDoctors/TopDoctors'
import AppointmentSchedule from '@/components/Dashboard/AppointmentSchedule/AppointmentSchedule'
import Notefications from './Notefications/Notefications'
import Menu from './Menu/Menu'
export default {
  name: 'Dashboard',
  components: {
    VitalsSummery,
    TopDoctors,
    Notefications,
    AppointmentSchedule,
    Menu,
    VitalsGraph,
  },
}
</script>
<style lang="scss">
#dashboard-container {
  width: 80%;
  margin: auto;

  padding: 10px;
  .dashboard-top-sectons {
    display: flex;
    .top-doctors-list-container {
      margin-left: 10px;
      .ant-card-body {
        padding: 10px;
      }
      .top-dostors-list {
        border-radius: 15px;
        width: 300px;
        .top-doctors-list-items {
          padding-top: 10px;
          .top-doctors-status {
            padding: 4px 20px 6px 20px;
            border-radius: 10px;
            border: none;
          }
        }
      }
    }
    .vitals-summary {
      width: 600px;
      border-radius: 15px;
      background-color: #4d194d;
      h3 {
        color: white;
      }
      .vitals-btn {
        margin-top: 30px;
      }

      .ant-card-body {
        padding: 10px;
      }
      .vitals-details {
        border-radius: 15px;
        .ant-card-body {
          padding: 30px;
        }
      }
    }
  }

  .dashboard-footer-section {
    display: flex;
    margin-top: 20px;
    .notefications-section {
      width: 250px;
      .notefications {
        width: 250px;
        border-radius: 10px;
        padding: 5px;
        .notefications-footer {
          text-align: center;
        }
        .ant-card-body {
          padding: 5px;
        }
        .notefications-list {
          padding-top: 10px;
        }
      }
    }
    .appontment-schedule-section {
      margin-left: 10px;
      width: 400px;
      background-color: white;
      padding: 10px;
      .appointment-schedule-card {
        background-color: #3a133a;
        border-radius: 15px;
        color: white;
        h5 {
          color: white;
        }
        .doctor-profile-pic {
          height: 50px;
          width: 50px;
          border-radius: 10px;
        }
        .call-controler {
          display: flex;
        }
        .appontment-date {
          width: 100%;
          padding: 10px;
          color: white;
          margin-top: 10px;
          background-color: #666633;
          text-align: center;
          border-radius: 5px;
        }
        .cancel-appointment-btn {
          background-color: #3a133a;
          color: white;
          margin-top: 10px;
          height: 40px;
        }
      }
    }
    .menu-section {
      margin-left: 10px;
      .menu-card {
        border-radius: 10px;
        width: 300px;
        .menu {
          width: 100%;
          .ant-menu-item {
            padding: 0px;
            font-size: 16px;
            font-weight: bold;
            .anticon {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>

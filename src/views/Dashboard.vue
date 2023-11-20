<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <mini-statistics-card
              :title="{ text: 'Lượt request', value: '52546' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+55%</span> so với tháng trước"
              :icon="{
                name: 'weekend',
                color: 'text-white',
                background: 'dark',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Lượt request', value: '24272' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+3%</span> so với tuần trước"
              :icon="{
                name: 'leaderboard',
                color: 'text-white',
                background: 'primary',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Lượt request', value: '6056' }"
              detail="<span class='text-danger text-sm font-weight-bolder'>-2%</span> so với hôm qua"
              :icon="{
                name: 'person',
                color: 'text-white',
                background: 'success',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Lượt request', value: '206' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+5%</span> so với 1h trước"
              :icon="{
                name: 'weekend',
                color: 'text-white',
                background: 'info',
              }"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-4 col-md-6 mt-4">
            <chart-holder-card
              title="Lượt Request"
              subtitle="Theo ngày"
              update="cập nhật hàng ngày"
            >
              <reports-bar-chart
                :chart="{
                  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                  datasets: {
                    label: 'Request',
                    data: [50, 20, 10, 22, 50, 10, 40],
                  },
                }"
              />
            </chart-holder-card>
          </div>
          <div class="col-lg-4 col-md-6 mt-4">
            <chart-holder-card
              title="Lượt Request"
              subtitle="Theo tuần"
              update="cập nhật hàng tuần"
              color="success"
            >
              <reports-line-chart
                :chart="{
                  labels: [
                    'w41',
                    'w42',
                    'w43',
                    'w44',
                    'w45',
                    'w46',
                    'w47',
                    'w48',
                    'w49',
                  ],
                  datasets: {
                    label: 'Request',
                    data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                  },
                }"
              />
            </chart-holder-card>
          </div>
          <div class="col-lg-4 mt-4">
            <chart-holder-card
              title="Lượt Request"
              subtitle="Theo tháng"
              update="cập nhật hàng tháng"
              color="dark"
            >
              <reports-line-chart
                id="tasks-chart"
                :chart="{
                  labels: [
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                  datasets: {
                    label: 'Request',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                  },
                }"
              />
            </chart-holder-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartHolderCard from "./components/ChartHolderCard.vue";
import ReportsBarChart from "@/examples/Charts/ReportsBarChart.vue";
import ReportsLineChart from "@/examples/Charts/ReportsLineChart.vue";
import MiniStatisticsCard from "./components/MiniStatisticsCard.vue";
// import logoAtlassian from "@/assets/img/small-logos/logo-atlassian.svg";
// import logoSlack from "@/assets/img/small-logos/logo-slack.svg";
// import logoSpotify from "@/assets/img/small-logos/logo-spotify.svg";
// import logoJira from "@/assets/img/small-logos/logo-jira.svg";
// import logoInvision from "@/assets/img/small-logos/logo-invision.svg";
// import team1 from "@/assets/img/team-1.jpg";
// import team2 from "@/assets/img/team-2.jpg";
// import team3 from "@/assets/img/team-3.jpg";
// import team4 from "@/assets/img/team-4.jpg";
export default {
  name: "dashboard-default",
  data() {
    return {
      // team1,
      // team2,
      // team3,
      // team4,
      // logoAtlassian,
      // logoSlack,
      // logoSpotify,
      // logoJira,
      // logoInvision,
    };
  },
  components: {
    ChartHolderCard,
    ReportsBarChart,
    ReportsLineChart,
    MiniStatisticsCard,
  },
};
</script>

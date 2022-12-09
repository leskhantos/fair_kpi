<template>
  <a-row>
    <a-col>
      <a-row>
        <h1 style="font-weight: 500;
font-size: 38px;">Watchlists</h1>
      </a-row>
    </a-col>
  </a-row>
  <a-row style="margin-bottom: 20px; justify-content: space-between; flex-wrap: nowrap">
    <a-col :span="20">
      <a-input-search placeholder="Search across 168 entries and hashtags" />
    </a-col>
    <a-col >
      <a-button type="primary">
        <template #icon><PlusOutlined /></template>
        New watchlist
      </a-button>
    </a-col>

  </a-row>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Personal">
     <a-row>
       <a-col :span="11" >
         <a-card title="My Favourites 8" style="width: 100%">
           <template #extra>
             <a-button>Personal</a-button>
           </template>
           <a-table :columns="columns" :data-source="data" :pagination="false">
             <template #trend="{data}">
               <div class="chart-container">
                 <Line :data="chartData" :options="options" />
               </div>
             </template>
             <template #deltaPercent="{ text: plan }">
               <p :class="plan.includes('-') ? 'red':'green'">{{ plan }}</p>
             </template>
           </a-table>
         </a-card>
       </a-col>
       <a-col :span="11" :offset="1">
         <a-card title="New Marketing Campaign 8" style="width: 100%">
           <template #extra>
             <a-button>Personal</a-button>
           </template>
           <a-table :columns="columnsSecond" :data-source="dataSecond" :pagination="false">

             <template #trend="{data}">
               <div class="chart-container">
                 <Line :data="chartData" :options="options" />
               </div>
             </template>
             <template #deltaPercent="{ text: plan }">
               <p :class="plan.includes('-') ? 'red':'green'">{{ plan }}</p>
             </template>
           </a-table>
         </a-card>
       </a-col>
     </a-row>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Drafts" force-render>Drafts</a-tab-pane>
  </a-tabs>
</template>

<script>
import { SettingOutlined, UnorderedListOutlined, PlusOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)
const columns = [

  {
    dataIndex: 'name',
    key: 'name',
    title: 'Name',
    slots: {  title: 'customTitle'},
  },
  {
    title: 'Current value, $',
    dataIndex: 'currentValue',
    key: 'currentValue',
  },
  {
    title: 'Trend',
    key: 'trend',
    slots: { customRender: 'trend' },
  },
  {
    title: 'Δ Delta, %',
    key: 'deltaPercent',
    dataIndex: 'deltaPercent',
    slots: { customRender: 'deltaPercent' },
  },
];
const columnsSecond = [

  {
    dataIndex: 'name',
    key: 'name',
    title: 'Name',
    slots: {  title: 'customTitle'},
  },
  {
    title: 'Current value, $',
    dataIndex: 'currentValue',
    key: 'currentValue',
  },
  {
    title: 'Total Revenue, $',
    key: 'totalValue',
    dataIndex: 'totalValue',
  },
  {
    title: 'Δ Delta, %',
    key: 'deltaPercent',
    dataIndex: 'deltaPercent',
    slots: { customRender: 'deltaPercent' },
  },
];
const data = [
  {
    name: 'Total Revenue',
    currentValue: '$1,164,247',
    deltaPercent: '+2,5%',
  },
  {
    name: 'Subscription Revenue',
    currentValue: '$440,112',
    deltaPercent: '+2,5%',
  },
];
const dataSecond = [
  {
    name: 'Total Revenue',
    currentValue: '$1,164,247',
    totalValue:'$440,112',
    deltaPercent: '+2,5%',
  },
  {
    name: 'Subscription Revenue',
    currentValue: '$440,112',
    totalValue:'$245,100',
    deltaPercent: '-1.3%',
  },
];
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins:{
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      }
    }
  },
  elements: {
    point:{
      radius: 0
    },
  }
};
const chartData = {
  labels: ['', '', '', '','','',''],
  datasets: [
    {
      fill: true,
      label: '',
      backgroundColor: '#B0E0E6',
      // borderColor: '#B0E0E6',
      borderColor: '#1890FF',
      data: [12, 15, 13, 20, 12, 16, 14],
      borderWidth: 1.5, // and not lineWidth
    }
  ]
}
export default defineComponent({
  name: "WatchListView",
  setup() {
    return {
      activeKey: ref('1'),
      columns,
      data,
      chartData,
      options,
      columnsSecond,
      dataSecond
    };
  },
  components: {
    SettingOutlined,
    UnorderedListOutlined,
    PlusOutlined,
    SmileOutlined,
    DownOutlined,
    Line
  },
});
</script>

<style scoped lang="css">
.chart-container{
  width: 134px;
  height: 32px;
}
.red{
  color: #FF4D4F;
}
.green{
  color: green;
}
</style>
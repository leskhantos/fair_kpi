<template>
  <a-breadcrumb>
    <a-breadcrumb-item>WatchList</a-breadcrumb-item>
    <a-breadcrumb-item>{{''}}</a-breadcrumb-item>
  </a-breadcrumb>
  <a-row>
    <a-col>
      <a-row>
        <h1 style="font-weight: 500;
font-size: 38px;">My Favourites </h1>
        <h1 style="color: rgba(0,0,0,0.45);font-weight: 500;
font-size: 38px; margin-left: 10px;">8</h1>
      </a-row>
    </a-col>
  </a-row>
  <a-row style="margin-bottom: 20px; justify-content: space-between; flex-wrap: nowrap">
    <a-col>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="a">
          <BorderOutlined /> Card view
        </a-radio-button>
        <a-radio-button value="b">
          <TableOutlined />
          Table view
        </a-radio-button>
        <a-radio-button value="c">
          <DotChartOutlined />
          Graph view
        </a-radio-button>
      </a-radio-group>
    </a-col>
    <a-col :span="12">
      <a-input-search placeholder="Search across 168 entries and hashtags" />
    </a-col>
    <a-col >
      <a-button>
        <template #icon><UnorderedListOutlined /></template>
        Tag list
      </a-button>
    </a-col>
    <a-col >
      <a-button type="primary">
        <template #icon><PlusOutlined /></template>
        Add KPI
      </a-button>
    </a-col>

  </a-row>
  <a-row style="margin-bottom: 20px">
    <a-col style="margin-right: 8px; color: rgba(0,0,0,0.45)">
      4 filters applied:
    </a-col>
    <a-tag closable class="name_hashtags">#general</a-tag>
    <a-tag closable class="name_hashtags">#business</a-tag>
    <a-tag closable class="name_hashtags">#marketing</a-tag>
    <a-tag closable class="name_hashtags">#research</a-tag>
  </a-row>

  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template #customTitle>
     <a-select
         placeholder="by Country"
         :options="optionsSelect"
     ></a-select>
    </template>
    <template #profit="{text:data}">
      <p :class="data.includes('-') ? 'red':'green'">{{ data }}</p>
    </template>
    <template #trend="{data}">
      <div class="chart-container">
        <Line :data="chartData" :options="options" />
      </div>
    </template>
    <template #planPercent="{ text: plan }">
        <p :class="plan.includes('-') ? 'red':'green'">{{ plan }}</p>
    </template>
  </a-table>
</template>

<script>
import { SettingOutlined, BorderOutlined,TableOutlined,DotChartOutlined, UnorderedListOutlined, PlusOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons-vue';
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

const value1 = ref('b');
const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    dataIndex: 'country',
    key: 'country',
    slots: {  title: 'customTitle'},
  },
  {
    title: 'Total Revenue, $',
    dataIndex: 'totalRevenue',
    key: 'totalRevenue',
  },
  {
    title: 'TR Δ, $',
    key: 'trDollar',
    dataIndex: 'trDollar',
  },
  {
    title: 'Profit',
    key: 'profit',
    dataIndex: 'profit',
    slots: { customRender: 'profit' },
  },
  {
    title: 'Trend',
    key: 'trend',
    dataIndex: 'trend',
    slots: { customRender: 'trend' },
  },
  {
    title: 'Δ vs Plan',
    key: 'plan',
    dataIndex: 'plan',

  },
  {
    title: 'Δ vs Plan, %',
    key: 'planPercent',
    dataIndex: 'planPercent',
    slots: { customRender: 'planPercent' },
  },
];

const data = [
  {
    index: '1',
    country: 'Kazakhstan',
    totalRevenue: '$155,164,247,00',
    profit: '-5,5%',
    planPercent: '-1,2%',
    trDollar: '$440,112',
    trend: '$440,112',
    plan: '$107,900'
  },
  {
    index: '2',
    country: 'USA',
    totalRevenue: '$155,164,247,00',
    profit: '+5,5%',
    planPercent: '+1,2%',
    trDollar: '$440,112',
    trend: '$440,112',
    plan: '$107,900'

  },
  {
    index: '3',
    country: 'Japan',
    totalRevenue: '$155,164,247,00',
    profit: '-5,555%',
    planPercent: '-1,2222%',
    trDollar: '$440,112',
    trend: '$440,112',
    plan: '$107,900'
  },
  {
    index: '4',
    country: 'Russia',
    totalRevenue: '$155,164,247,00',
    profit: '-5,555%',
    planPercent: '+1,2%',
    trDollar: '$440,112',
    trend: '$440,112',
    plan: '$107,900'
  },
  {
    index: '5',
    country: 'China',
    totalRevenue: '$155,164,247,00',
    profit: '-5,555%',
    planPercent: '-1,2222%',
    trDollar: '$440,112',
    trend: '$440,112',
    plan: '$107,900'
  },
  {
    index: '6',
    country: 'Singapore',
    totalRevenue: '$155,164,247,00',
    profit: '-5,555%',
    planPercent: '+1,22%',
    trDollar: '$440,112',
    trend: '$440,112',
    plan: '$107,900'
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
      tension: 0.5
    }
  ]
}
const optionsSelect = ref([
  { value: 'kz', label: 'Kazakhstan' },
  { value: 'usa', label: 'USA' },
  { value: 'jpn', label: 'Japan' },
]);
export default defineComponent({
  name: "MyFavouritesView",
  setup() {
    return {
      value1,
      columns,
      data,
      options,
      chartData,
      optionsSelect
    };
  },
  components: {
    SettingOutlined,
    UnorderedListOutlined,
    PlusOutlined,
    SmileOutlined,
    DownOutlined,
    BorderOutlined,
    TableOutlined,
    DotChartOutlined,
    Line
  },
});
</script>

<style scoped lang="css">
.name_hashtags{
  color: rgba(0, 0, 0, 0.45);
}
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
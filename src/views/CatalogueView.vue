<template>
  <a-row>
    <a-col>
      <a-row>
        <h1 style="font-weight: 500;
font-size: 38px;">Catalogue </h1>
        <h1 style="color: rgba(0,0,0,0.45);font-weight: 500;
font-size: 38px; margin-left: 10px;">168</h1>
      </a-row>
 </a-col>
  </a-row>
  <a-row style="margin-bottom: 20px; justify-content: space-between; flex-wrap: nowrap">
    <a-col :span="15">
      <a-input-search placeholder="Search across 168 entries and hashtags" />
    </a-col>
    <a-col  >
      <a-button>
        <template #icon><SettingOutlined /></template>
        Hidden fields
      </a-button>
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
        New KPI entry
      </a-button>
    </a-col>

  </a-row>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template #name="{text: data }">
      <p class="name_title">{{ data?.title }}</p>
      <p class="name_description">
        {{data?.description}}
         </p>
      <div>
        <a-tag v-for="tag in data?.tags" class="name_hashtags">{{ tag }}</a-tag>
      </div>
    </template>
    <template #cvPercent="{text:data}">
      <p :class="data.includes('-') ? 'red':'green'">{{ data }}</p>
    </template>
    <template #trendAndBullet="{data}">
      <div class="chart-container">
        <Line :data="chartData" :options="options" />
      </div>
    </template>
    <template #action="{ record }">
      <a-button type="primary">
        Add to watchlist
      </a-button>
    </template>
  </a-table>

</template>

<script>
import { SettingOutlined, UnorderedListOutlined, PlusOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
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
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    dataIndex: 'name',
    key: 'name',
    title: 'Name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Current Value, $',
    dataIndex: 'currentValue',
    key: 'currentValue',
  },
  {
    title: 'CV Δ, $',
    key: 'cvDollar',
    dataIndex: 'cvDollar',
  },
  {
    title: 'CV Δ, %',
    key: 'cvPercent',
    dataIndex: 'cvPercent',
    slots: { customRender: 'cvPercent' },
  },
  {
    title: 'Trend & Bullet',
    key: 'trendAndBullet',
    dataIndex: 'trendAndBullet',
    slots: { customRender: 'trendAndBullet' },
  },
  {
    title: 'Actions',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    index: '1',
    name: {
      title: 'Total Revenue',
      description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      tags: ['#general','#marketing','#business','+ 2 more']
    },
    currentValue: '$155,164,247,00',
    cvPercent: '-5,5%',
    cvDollar: '$440,112',
    trendAndBullet: '$440,112',
  },
  {
    index: '2',
    name: {
      title: 'Subscription Revenue',
      description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      tags: ['#marketing','#business']
    },
    currentValue: '$155,164,247,00',
    cvPercent: '+5,5%',
    cvDollar: '$440,112',
    trendAndBullet: '$440,112',
  },
  {
    index: '3',
    name: {
      title: 'Expenses',
      description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      tags: ['#general','#marketing','#business','+ 7 more']
    },
    currentValue: '$155,164,247,00',
    cvPercent: '-5,555%',
    cvDollar: '$440,112',
    trendAndBullet: '$440,112',
  },
  // {
  //   index: '4',
  //   name: {
  //     title: 'Total Revenue',
  //     description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //     tags: ['#marketing','#business']
  //   },
  //   currentValue: '$155,164,247,00',
  //   cvPercent: '-5,5%',
  //   cvDollar: '$440,112',
  //   trendAndBullet: '$440,112',
  // },
  // {
  //   index: '5',
  //   name: {
  //     title: 'Subscription Revenue',
  //     description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //     tags: ['#general','#marketing','#business','+ 2 more']
  //   },
  //   currentValue: '$155,164,247,00',
  //   cvPercent: '-5,5%',
  //   cvDollar: '$440,112',
  //   trendAndBullet: '$440,112',
  // },
  // {
  //   index: '6',
  //   name: {
  //     title: 'Expenses',
  //     description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //     tags: ['#general','#marketing','#business','+ 2 more']
  //   },
  //   currentValue: '$155,164,247,00',
  //   cvPercent: '-5,5%',
  //   cvDollar: '$440,112',
  //   trendAndBullet: '$440,112',
  // },
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
      borderWidth: 1.5 // and not lineWidth
    }
  ]
}
export default defineComponent({
  name: "CatalogueView",
  setup() {
    return {
      data,
      columns,
      options,
      chartData
    };
  },
  components: {
    SettingOutlined,
    UnorderedListOutlined,
    PlusOutlined,
    SmileOutlined,
    DownOutlined,
    Line,
  },
});
</script>

<style scoped lang="css">
.chart-container{
  width: 134px;
  height: 32px;
}
.name_title{
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
}
.name_description{
  color: rgba(0, 0, 0, 0.45);
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}
.name_hashtags{
  color: rgba(0, 0, 0, 0.45);
}
.red{
  color: #FF4D4F;
}
.green{
  color: green;
}
.ant-table td { white-space: nowrap; }
</style>
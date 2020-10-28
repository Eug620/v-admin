<template>
  <div class="home-box">
    <a-row :gutter="[8, 16]">
      <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <a-card title="访问量">
          <template v-slot:extra><a-tag color="green">日</a-tag></template>
          <div class="card-body">
            <span class="numeral">25,848</span>
            <div class="desc">
              <span
                >日同比 12.5%<CaretUpOutlined
:style="{ color: '#ed4014' }"
              /></span>
              <span
                >周同比 12.5%<CaretDownOutlined
:style="{ color: '#19be6b' }"
              /></span>
            </div>
          </div>
          <div class="card-foot">
            <div class="foot-left">总访问量</div>
            <div class="foot-right">280 万</div>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <a-card title="销售额">
          <template v-slot:extra><a-tag color="blue">月</a-tag></template>
          <div class="card-body">
            <span class="numeral">25,848</span>
            <div class="desc">
              <a-progress :percent="70" status="active" />
            </div>
          </div>
          <div class="card-foot">
            <div class="foot-left">总销售额</div>
            <div class="foot-right">68 万</div>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <a-card title="订单量">
          <template v-slot:extra><a-tag color="red">周</a-tag></template>
          <div class="card-body">
            <span class="numeral">￥12,848</span>
            <div class="desc">
              <span>日同比 12.5%</span>
              <span>周同比 12.5%</span>
            </div>
          </div>
          <div class="card-foot">
            <div class="foot-left">转化率</div>
            <div class="foot-right">60%</div>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <a-card title="新增用户">
          <template v-slot:extra>
            <a-tooltip
              placement="topLeft"
              title="指示说明"
              arrow-point-at-center
            >
              <a-tag color="cyan">?</a-tag>
            </a-tooltip></template
          >
          <div class="card-body">
            <span class="numeral">128 位</span>
            <div class="desc">
              <div class="avatar-item">
                <a-tooltip
                  placement="topLeft"
                  title="史蒂夫·乔布斯"
                  arrow-point-at-center
                >
                  <a-avatar
                    src="https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar"
                    :size="20"
                  ></a-avatar>
                </a-tooltip>
              </div>
              <div class="avatar-item">
                <a-tooltip
                  placement="topLeft"
                  title="斯蒂夫·沃兹尼亚克"
                  arrow-point-at-center
                >
                  <a-avatar
                    src="https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar"
                    :size="20"
                  ></a-avatar>
                </a-tooltip>
              </div>
              <div class="avatar-item">
                <a-tooltip
                  placement="topLeft"
                  title="乔纳森·伊夫"
                  arrow-point-at-center
                >
                  <a-avatar
                    src="https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar"
                    :size="20"
                  ></a-avatar>
                </a-tooltip>
              </div>
              <div class="avatar-item">
                <a-tooltip
                  placement="topLeft"
                  title="蒂姆·库克"
                  arrow-point-at-center
                >
                  <a-avatar
                    src="https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar"
                    :size="20"
                  ></a-avatar>
                </a-tooltip>
              </div>
              <div class="avatar-item">
                <a-tooltip
                  placement="topLeft"
                  title="比尔·费尔南德斯"
                  arrow-point-at-center
                >
                  <a-avatar
                    src="https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar"
                    :size="20"
                  ></a-avatar>
                </a-tooltip>
              </div>
            </div>
          </div>
          <div class="card-foot">
            <div class="foot-left">总用户</div>
            <div class="foot-right">10850 人</div>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="[8, 16]">
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <TeamOutlined
              :style="{ fontSize: '32px', color: 'rgb(105, 192, 255)' }"
            />
            <span>用户</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <FundProjectionScreenOutlined
              :style="{ fontSize: '32px', color: 'rgb(149, 222, 100)' }"
            />
            <span>分析</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <ShoppingCartOutlined
              :style="{ fontSize: '32px', color: 'rgb(255, 156, 110)' }"
            />
            <span>商品</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <AccountBookOutlined
              :style="{ fontSize: '32px', color: 'rgb(179, 127, 235)' }"
            />
            <span>订单</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <RedEnvelopeOutlined
              :style="{ fontSize: '32px', color: 'rgb(255, 214, 102)' }"
            />
            <span>票据</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <CommentOutlined
              :style="{ fontSize: '32px', color: 'rgb(92, 219, 211)' }"
            />
            <span>消息</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <TagsOutlined
              :style="{ fontSize: '32px', color: 'rgb(255, 133, 192)' }"
            />
            <span>标签</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <a-card hoverable>
          <div class="card">
            <UngroupOutlined
              :style="{ fontSize: '32px', color: 'rgb(255, 192, 105)' }"
            />
            <span>配置</span>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-card title="访问量">
        <template v-slot:extra>
          <a-range-picker @change="onChange" size="small">
            <template v-slot:suffixIcon>
              <ScheduleOutlined />
            </template>
          </a-range-picker>
        </template>
        <a-row>
          <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
            <h4>访问量趋势</h4>
            <columnarChart height="240px" />
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <h4>访问量排行</h4>
            <div class="list-top">
              <ul>
                <li v-for="item in [1, 2, 3, 4, 5, 6, 7]" :key="item">
                  <div class="left-box">
                    <a-avatar
                      :size="20"
                      :style="{
                        backgroundColor:
                          item > 3
                            ? 'rgb(245, 245, 245)'
                            : 'rgb(230, 247, 255)',
                        color:
                          item > 3 ? 'rgb(140, 140, 140)' : 'rgb(24, 144, 255)',
                        fontSize: '14px'
                      }"
                    >
                      {{ item }}
                    </a-avatar>
                    <span>东直门 {{ item }} 号</span>
                  </div>
                  <div class="right-box">
                    <span>456,789</span>
                  </div>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </a-card>
    </a-row>
    <a-row :gutter="[8, 16]">
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <a-card title="热门搜索">
          <template v-slot:extra>
            <a-dropdown :trigger="['click']" placement="bottomCenter">
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <PlusOutlined />
              </a>
              <template v-slot:overlay>
                <a-menu>
                  <a-menu-item key="0"> 操作一 </a-menu-item>
                  <a-menu-item key="1"> 操作二 </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
          <a-row :gutter="16">
            <a-col :span="12">
              <div class="number-info-box">
                <div class="number-info-title">
                  <span>搜索用户数</span>
                  <a-tooltip placement="top">
                    <template v-slot:title>
                      <span>指标说明</span>
                    </template>
                    <InfoCircleOutlined />
                  </a-tooltip>
                </div>
                <div class="number-info-value">
                  <a-statistic :value="1193" />
                  <a-statistic
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                  >
                    <template v-slot:prefix>
                      <ArrowUpOutlined />
                    </template>
                  </a-statistic>
                </div>
                <lineChart id="lineChart1" height="50px" />
              </div>
            </a-col>
            <a-col :span="12">
              <div class="number-info-box">
                <div class="number-info-title">
                  <span>人均搜索次数</span>
                  <a-tooltip placement="top">
                    <template v-slot:title>
                      <span>指标说明</span>
                    </template>
                    <InfoCircleOutlined />
                  </a-tooltip>
                </div>
                <div class="number-info-value">
                  <a-statistic :value="193" />
                  <a-statistic
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#cf1322' }"
                  >
                    <template v-slot:prefix>
                      <ArrowDownOutlined />
                    </template>
                  </a-statistic>
                </div>
                <lineChart id="lineChart2" height="50px" />
              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-table
              :columns="columns"
              :data-source="data"
              size="small"
              :pagination="{ pageSize: 5 }"
            >
              <template #name="{ text }">
                <a>{{ text }}</a>
              </template>
            </a-table>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <a-card title="用户画像">
          <template v-slot:extra>
            <a-dropdown :trigger="['click']" placement="bottomCenter">
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <PlusOutlined />
              </a>
              <template v-slot:overlay>
                <a-menu>
                  <a-menu-item key="0"> 操作一 </a-menu-item>
                  <a-menu-item key="1"> 操作二 </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
          <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="8">
              <div class="sex-item">
                <a-avatar :style="{ backgroundColor: 'rgb(51, 153, 255)' }">
                  <template v-slot:icon>
                    <ManOutlined />
                  </template>
                </a-avatar>
                <div :style="{ color: 'rgb(51, 153, 255)' }">男性 65%</div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="sex-item">
                <a-avatar :style="{ background: 'rgb(190, 107, 224)' }">
                  <template v-slot:icon>
                    <WomanOutlined />
                  </template>
                </a-avatar>
                <div :style="{ color: 'rgb(190, 107, 224)' }">女性 25%</div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="sex-item">
                <a-avatar :style="{ background: 'rgb(186, 189, 195)' }">
                  <template v-slot:icon>
                    <QuestionOutlined />
                  </template>
                </a-avatar>
                <div :style="{ color: 'rgb(186, 189, 195)' }">未知 10%</div>
              </div>
            </a-col>
          </a-row>
          <a-row :gutter="4" style="height:120px">
            <a-col v-for="item in sexList" :key="item" :span="1">
              <div
                ref="sexBox"
                class="sex-box"
                :style="{background:item,height:height}"
              ></div>
            </a-col>
          </a-row>
          <div class="user-preference"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted, getCurrentInstance, onUnmounted } from 'vue'
import {
  UngroupOutlined,
  TagsOutlined,
  CommentOutlined,
  RedEnvelopeOutlined,
  AccountBookOutlined,
  ShoppingCartOutlined,
  FundProjectionScreenOutlined,
  TeamOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  ScheduleOutlined,
  PlusOutlined,
  InfoCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ManOutlined,
  WomanOutlined,
  QuestionOutlined
} from '@ant-design/icons-vue'
import columnarChart from './components/columnarChart'
import lineChart from './components/lineChart'

export default defineComponent({
  setup() {
    const ctx = getCurrentInstance()
    const columns = ref([
      {
        title: '排名',
        dataIndex: 'top',
        key: 'top',
        slots: { customRender: 'top' }
      },
      {
        title: '搜索关键词',
        dataIndex: 'keyWord',
        key: 'keyWord',
        ellipsis: true
      },
      {
        title: '用户数',
        dataIndex: 'userCount',
        key: 'userCount',
        ellipsis: true,
        sorter: (a, b) => a.userCount.length - b.userCount.length
      },
      {
        title: '周涨幅',
        dataIndex: 'weekIncrease',
        key: 'weekIncrease',
        ellipsis: true,
        sorter: (a, b) => a.userCount.length - b.userCount.length
      }
    ])
    const data = ref([
      {
        key: '1',
        top: '1',
        keyWord: '搜索关键词-0',
        userCount: '25',
        weekIncrease: '57%'
      },
      {
        key: '2',
        top: '2',
        keyWord: '搜索关键词-1',
        userCount: '67',
        weekIncrease: '32%'
      },
      {
        key: '3',
        top: '3',
        keyWord: '搜索关键词-2',
        userCount: '257',
        weekIncrease: '19%'
      },
      {
        key: '4',
        top: '4',
        keyWord: '搜索关键词-3',
        userCount: '36',
        weekIncrease: '22%'
      },
      {
        key: '5',
        top: '5',
        keyWord: '搜索关键词-4',
        userCount: '36',
        weekIncrease: '22%'
      },
      {
        key: '6',
        top: '6',
        keyWord: '搜索关键词-5',
        userCount: '36',
        weekIncrease: '22%'
      },
      {
        key: '7',
        top: '7',
        keyWord: '搜索关键词-6',
        userCount: '36',
        weekIncrease: '22%'
      },
      {
        key: '8',
        top: '8',
        keyWord: '搜索关键词-7',
        userCount: '36',
        weekIncrease: '22%'
      },
      {
        key: '9',
        top: '9',
        keyWord: '搜索关键词-8',
        userCount: '36',
        weekIncrease: '22%'
      },
      {
        key: '10',
        top: '10',
        keyWord: '搜索关键词-9',
        userCount: '36',
        weekIncrease: '22%'
      }
    ])
    const _sexList = []
    for (let i = 0; i < 96; i++) {
      if (i < 60) {
        _sexList.push('rgb(51, 153, 255)')
      } else if (i >= 60 && i < 80) {
        _sexList.push('rgb(190, 107, 224)')
      } else {
        _sexList.push('rgb(186, 189, 195)')
      }
    }
    const sexList = ref(_sexList)
    const onChange = () => {}
    const height = ref('28px')
    const heightHandler = () => {
      height.value = ctx.refs.sexBox.clientWidth + 'px'
    }
    onMounted(() => {
      heightHandler()
      window.addEventListener('resize', heightHandler)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', heightHandler)
    })
    return {
      columns,
      data,
      sexList,
      onChange,
      height
    }
  },
  components: {
    UngroupOutlined,
    TagsOutlined,
    CommentOutlined,
    RedEnvelopeOutlined,
    AccountBookOutlined,
    ShoppingCartOutlined,
    FundProjectionScreenOutlined,
    TeamOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    ScheduleOutlined,
    PlusOutlined,
    InfoCircleOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
    ManOutlined,
    WomanOutlined,
    QuestionOutlined,
    columnarChart,
    lineChart
  }
})
</script>

<style lang="less" scoped>
.home-box {
  ::v-deep .ant-row {
    margin-bottom: 10px;
  }
  .card-body {
    padding-bottom: 12px;
    border-bottom: 1px solid #e8eaec;
    .numeral {
      font-size: 30px;
    }
    .desc {
      height: 30px;
      padding-top: 8px;
      span {
        display: inline-block;
        margin-right: 10px;
      }
      .avatar-item {
        display: inline-block;
        position: relative;
        left: 10px;
      }
    }
  }
  .card-foot {
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    font-size: 14px;
    position: relative;
    transition: all 0.2s ease-in-out;
    span {
      margin-top: 8px;
      font-size: 14px;
    }
  }
  .list-top {
    ul {
      padding-left: 0;
      li {
        list-style-type: none;
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-box {
          display: flex;
          align-items: center;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .number-info-box {
    .number-info-title {
      span {
        margin-right: 10px;
      }
      margin-bottom: 4px;
    }
    .number-info-value {
      display: flex;
      span {
        margin-left: 10px;
      }
    }
  }
  .sex-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    div {
      margin-top: 10px;
    }
  }
  .sex-box {
    padding: 2px;
    display: block;
    border-radius: 2px;
    opacity: 0.75;
  }
  .user-preference {
    height: 210px;
    background-image: url(https://file.iviewui.com/admin-pro-dist/img/user-preference.11401619.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
  .ant-col-1 {
    padding-bottom: 2px;
  }
}
</style>

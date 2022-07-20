<template>
  <div class="table-body">
    <div class="table-head px-2 font-weight-bold d-flex align-items-center justify-content-between py-3">
      {{ tableHeadTitle }} :
      <span class="py-1 px-2">
        {{ $toFarsiNum(tableData.length , true) }}
        {{ tableHeadCounter }}
      </span>
    </div>
    <div class="table-main">
      <table class="table custom-table table-hover">
        <thead>
          <tr>
            <th>
              #
            </th>
            <th v-for="(items , i) in tableHeadItems" :key="i" :class="items === 'وضعیت' ? 'text-center' : ''">
              {{items}}
            </th>
          </tr>
        </thead>
        <tbody v-if="!loadingTable">
          <tr v-if="tableData.length !== 0" v-for="(data , i) in tableData"
            @click="pushRoute(action === 'route' ? data[tableAction[0]] : null, action === 'route' ? data[tableAction[1]] : null, action === 'modal' ? data : null)"
            :key="i">
            <td>
              {{ $toFarsiNum(i+1) }}
            </td>
            <td v-for="(items , i) in tableKeyItems" :key="i" :class="items === 'status' ? 'status text-center' : ''">
              <span :class="tableKeyItems[i] === 'description' ? 'description-td' : ''"
                :dir="ltrDir[i] === true ? 'ltr' : 'rtl'">
                {{
                indexFarsiItemTable[i] === true ?
                $toFarsiNum(data[items] , haveCommaFarsiItemTable[i]) :
                data[items]
                }}
                <span v-if="action && items === tableKeyItems[0]" class="show-order">
                  (مشاهده)
                </span>
              </span>
            </td>
            <b-modal id="modal-center" :hide-footer="true" centered title="">
              <slot></slot>
            </b-modal>
          </tr>
          <div v-if="tableData.length === 0"
            class="d-flex font-weight-bold align-items-center justify-content-center no-data mt-3">
            <b-icon icon="folder-x" class="ml-2"></b-icon>
            اطلاعاتی برای نمایش وجود ندارد.
          </div>
          <div v-if="tableData.length === 0" class="cover-no-data text-center mt-3"></div>
        </tbody>

        <tbody v-if="loadingTable">
          <tr v-if="loadingTable" v-for="i in 5" :key="i">
            <td>
              <b-skeleton-img no-aspect height="40px"></b-skeleton-img>
            </td>
            <td v-for="(items , i) in tableHeadItems" :key="i">
              <b-skeleton-img no-aspect height="40px"></b-skeleton-img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: 'custom-tabel',
  components: {},
  props: ['loadingTable', 'tableHeadTitle', 'tableHeadCounter', 'tableData', 'tableHeadItems', 'tableKeyItems', 'indexFarsiItemTable', 'haveCommaFarsiItemTable', 'ltrDir', 'tableAction', 'action'],
  data () {
    return {}
  },
  methods: {
    pushRoute(action, slug ,data) {
      if(this.action === 'route')
        this.$router.push(action + slug)
      else if (this.action === 'modal') {
        this.$bvModal.show('modal-center')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table-body{
    background: $black-20;
    border: 2px solid $black-50;
    border-radius: 6px;
    overflow: hidden;
    .table-main{
      overflow-x: auto;
      scrollbar-width: thin;
    }
    .table-main::-webkit-scrollbar {
      width: 9px;
      background: $black-100;
    }
    .table-main::-webkit-scrollbar-thumb {
      background: $black-200;
    }
    .table-head{
        span{
            font-size: 12px;
            background: $blue-100;
            border-radius: 6px;
            color: $black-500;
        }
    }
    .custom-table {
        th{
            white-space: nowrap;
            font-size: 15px;
        }
        td{
            cursor: pointer;
            font-weight: 500;
            font-size: 13px;
            color: $black-600;
            svg{
                font-size: 23px;
            }
            .show-order {
                color: $black-200;
                font-size: 12px;
            }
        }
        td:first-child , td:nth-child(2){
            font-weight: 700 !important;
        }
        .description-td{
            max-width: 200px !important;
        }
    }
    tbody{
      position: relative;
      .no-data{
        position: absolute;
        left: 0;
        right: 0;
        height: 70px;
        font-size: 13px;
        color: $black-450;
        svg{
          font-size: 35px;
          color: $black-400;
        }
      }
      .cover-no-data{
        height: 70px;
      }
    }
}
</style>
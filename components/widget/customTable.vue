<template>
  <div class="table-body">
    <div class="table-head px-2 font-weight-bold d-flex align-items-center justify-content-between py-3">
      لیست تراکنشات :
      <span class="py-1 px-2">
        ۵
        تراکنش
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
          <tr v-if="tableData.length !== 0" v-for="(ticket , i) in tableData"
            @click="pushRoute(actions === 'route' ? ticket[tableAction[0]] : null, actions === 'route' ? ticket[tableAction[1]] : null, action === 'modal' ? ticket : null)"
            :key="i">
            <td>
              {{ $toFarsiNum(i+1) }}
            </td>
            <td v-for="(items , i) in tableKeyItems" :key="i" :class="items === 'status' ? 'status text-center' : ''">
              <span :class="tableKeyItems[i] === 'description' ? 'description-td' : ''"
                :dir="ltrDir[i] === true ? 'ltr' : 'rtl'">
                {{ indexFarsiItemTable[i] === true ?
                $toFarsiNum(ticket[items] , haveCommaFarsiItemTable[i]) :
                ticket[items]
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
  props: ['loadingTable', 'tableData', 'tableHeadItems', 'tableKeyItems', 'indexFarsiItemTable', 'haveCommaFarsiItemTable', 'ltrDir', 'tableAction', 'action'],
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
            // max-width: 200px;
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
}
</style>
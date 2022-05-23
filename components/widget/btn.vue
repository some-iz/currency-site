<template>
  <button @click="loadingShow()" :class="loading === true ? `disable-btn ${classList}` : classList" v-if="base === 'btn'" class="btn" :disabled="loading">
    <slot v-if="!loading"></slot>
    <span class="spinner-btn" v-if="loading">
        <span class="spinner-text"> 
            <slot></slot>  
        </span>
        <span class="spinner-icon">
            <span v-for="a in Number(loadingCount)" class="spinner-grow" :key="a" role="status">
                <span class="sr-only">Loading...</span>
            </span>
        </span>
    </span>
  </button>
  <a :href="url" :class="classList" v-else-if="base === 'aLink'">
    <slot></slot>
  </a>
  <nuxt-link :class="classList" v-else-if="base === 'nuxtLink'" :to="url">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'btn',
  props: {
    // 3 value for base => btn / aLink / nuxtLink
    base: {
      type: String,
      default: 'btn'
    },
    // 2 value for type => false / true
    loading: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: '/'
    },
    // 2 value for typeColor => primary / secondary 
    typeColor: {
      type: String,
      default: 'primary',
    },
    // 2 value for width => full / auto 
    width: {
      type: String,
      default: 'auto',
    },
    // 3 value for size => big / medium / small 
    size: {
      type: String,
      default: 'medium',
    },
    // a number value => how much spinner wants to show?
    loadingCount: {
      type: Number,
      default: 3,
    }
  },
  computed: {
    classList() {
      let style = ''

      if (this.typeColor === 'primary') 
        style += 'primary '
      else if (this.typeColor === 'secondary')
        style += 'secondary '
      
      if (this.width === 'full') 
        style += 'full '
      else if (this.width === 'auto')
        style += 'auto '
      
      if (this.size === 'big') 
        style += 'big '
      else if (this.size === 'medium')
        style += 'medium '
      else if (this.size === 'small')
        style += 'small '
      
      return style
        
    }
  },
  methods: {
    loadingShow() {
      if(this.loading === false)
        this.$emit('click' , true)
    }
  },
}
</script>

<style lang="scss" scoped>
.primary {
  background: $primary-color;
  border-radius: 50px;
  border: 3px solid $primary-color;
  color: $black-full;
  transition: 0.5s;
  font-weight: 500;
}
.primary:disabled {
  cursor: wait;
}
.primary:hover {
}
.secondary {
  background: transparent;
  color: $primary-color-for-secondary-btn;
  border-radius: 50px;
  border: 3px solid $primary-color;
  transition: 0.5s;
  font-weight: 500;
}
.secondary:hover {
  background: $primary-color;
  color: $black-full;
}
.auto {
    width: auto;
}
.full {
  width: 100%;
}
.medium{
  font-size: 15px;
  padding: 14px 16px;
}
.big {
  padding: 21px 24px;
}
.small {
  font-size: 14px;
  padding: 9px 13px;
}
.disable-btn{
    cursor: wait;
    overflow: hidden;
}
.spinner-btn{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .spinner-text{
        opacity: 0;
    }
    .spinner-icon{
        position: absolute;
        white-space: nowrap;
        transform: translateY(1.5px);
        >span{
            width: 12px;
            height: 12px;
            margin-right: 5px;
            display: inline-block;
        }
        >span:first-child{
            margin-right: 0;
            display: n;
        }
    }
}
</style>
<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: String
    },
    sm: {
      type: String
    },
    md: {
      type: String
    },
    lg: {
      type: String
    },
    xl: {
      type: String
    },
    offset: {
      type: String
    },
    offsetSm: {
      type: String
    },
    offsetMd: {
      type: String
    },
    offsetLg: {
      type: String
    },
    offsetXl: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        this.col ? 'col-' + this.col : '',
        this.sm ? 'col-sm-' + this.sm : '',
        this.md ? 'col-md-' + this.md : '',
        this.lg ? 'col-lg-' + this.lg : '',
        this.xl ? 'col-xl-' + this.xl : '',
        this.offset ? 'offset-' + this.offset : '',
        this.offsetSm ? 'offset-sm-' + this.offsetSm : '',
        this.offsetMd ? 'offset-md-' + this.offsetMd : '',
        this.offsetLg ? 'offset-lg-' + this.offsetLg : '',
        this.offsetXl ? 'offset-xl-' + this.offsetXl : ''
      ),
    };
  }
};
</script>

<style scoped>
</style>

<template lang="">
  <button class="btn" :class="classList" @click="onClickBtn">
    <img v-if="btnLeft" :src="require(`@/assets/images/arr.svg`)"/>
    <span>
      <slot />
    </span>
    <img v-if="!btnLeft" :src="require(`@/assets/images/arr.svg`)"/>
  </button>
</template>
<script>
import { onMounted } from "vue";
export default {
  props: {
    classList: {
      type: String,
    },
    btnLeft: {
      type: Boolean,
      default: false,
    },
  },

  emit: ["onClickBtn"],

  setup(props, { emit }) {
    const onClickBtn = (btn) => {
      // console.log(btn.currentTarget)
      emit("onClickBtn", btn);
    };

    return {
      onClickBtn,
    };
  },
};
</script>
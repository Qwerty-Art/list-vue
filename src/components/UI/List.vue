<template >
  <div class="grid-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      @click="onClickItem"
      class="grid-item"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },

  emit: ["onClickItem"],

  setup(props, { emit }) {
    const onClickItem = (item) => {
      emit("onClickItem", item);
    };

    return {
      onClickItem,
    };
  },
};
</script>

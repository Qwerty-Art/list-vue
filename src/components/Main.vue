<template lang="">
  <div class="grid">
    <List :list="list[0]" @onClickItem="handlerSelectItem"/>
    <div class="grid-controls">
      <Btn data-btn="moveRight" @onClickBtn="handlerBtn" />
      <Btn data-btn="moveLeft" @onClickBtn="handlerBtn" classList="-left" :btnLeft="true" />
      <Btn data-btn="moveAllRight" @onClickBtn="handlerBtn">Перенести всё</Btn>
       <Btn data-btn="moveAllLeft" @onClickBtn="handlerBtn" classList="-left" :btnLeft="true">Перенести всё</Btn>
    </div>
    <List :list="list[1]" @onClickItem="handlerSelectItem"/>
  </div>
</template>
<script>
import List from "@/components/UI/List.vue";
import Btn from "@/components/UI/Button.vue";
import BtnText from "@/components/UI/ButtonText.vue";
import { listItem } from "@/_file-list";

import { ref } from "vue";

export default {
  components: { List, Btn, BtnText },

  setup() {
    const list = ref(listItem); // массив эдементов

    // ф-ция выбора элементов
    const handlerSelectItem = (item) => {
      if (item.currentTarget.classList.contains("-active")) {
        item.currentTarget.classList.remove("-active");
      } else {
        item.currentTarget.classList.add("-active");
      }
    };

    // ф-ция нажатия кнопок
    const handlerBtn = (btn) => {
      switch (btn.currentTarget.getAttribute("data-btn")) {
        case "moveRight":
          moveItem(0, false); // переносим из левой колонки выбранные элементы
          break;
        case "moveLeft":
          moveItem(1, false); // переносим из правой колонки выбранные элементы
          break;
        case "moveAllRight":
          moveItem(0, true); // переносим из левой колонки все элементы
          break;
        case "moveAllLeft":
          moveItem(1, true); // переносим из правой колонки все элементы
          break;
      }
    };

    // ф-ция переноса элементов
    const moveItem = (index, all = false) => {
      const listAll = document.querySelectorAll(".grid-list");
      const receivingList = index === 0 ? 1 : 0;

      if (!all) {
        const arraySelectItem = [];
        Array.from(listAll[index].querySelectorAll(".grid-item")).forEach(
          (el, i) => {
            if (el.classList.contains("-active")) {
              arraySelectItem.push(list.value[index][i]);
              el.classList.remove("-active");
            }
          }
        );

        arraySelectItem.forEach((el, i) => {
          const indexEl = list.value[index].findIndex((item) => item === el);
          list.value[receivingList].push(
            list.value[index].splice(indexEl, 1)[0]
          );
        });
      } else {
        list.value[receivingList].push(...list.value[index])
        list.value[index].length = 0
      }
    };

    return {
      handlerSelectItem,
      handlerBtn,
      moveItem,
      list,
    };
  },
};
</script>
<style lang="">
</style>
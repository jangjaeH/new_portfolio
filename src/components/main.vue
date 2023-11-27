<template>
  <div class="title">
    <transition name="slide" mode="out-in">
      <h1 :key="currentKey">{{ currentText }}</h1>
    </transition>
    <p>안녕하세요 제 이름은 장재혁 입니다. 페이지를 찾아주셔서 감사합니다 :)</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const contents = [
      "Hello, I’m JaeHyeok!",
      "Welcome to my website!",
      // Add more slide contents as needed
    ];

    const currentText = ref("");
    const textIdx = ref(0);
    const currentKey = ref(0);

    function typing() {
      if (textIdx.value < contents[currentKey.value].length) {
        currentText.value += contents[currentKey.value][textIdx.value++];
      } else {
        currentText.value = "";
        textIdx.value = 0;
        currentKey.value = 1 - currentKey.value; // Toggle between 0 and 1
      }
    }

    onMounted(() => {
      setInterval(typing, 100);
    });

    return {
      currentText,
      currentKey,
    };
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>

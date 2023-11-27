<template>
  <div data-aos="fade-up" class="title">
    <h1>{{ currentText }}</h1>
    <p>
      안녕하세요 제 이름은 장재혁 입니다. 페이지를 찾아주셔서 감사합니다. :)
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const content = "Hello, I’m JaeHyeok!";
    const currentText = ref("");
    let textIdx = 0;

    function typing() {
      let txt = content[textIdx++];
      currentText.value += txt;

      if (textIdx > content.length) {
        currentText.value = "";
        textIdx = 0;
      }
    }

    onMounted(() => {
      setInterval(typing, 100);
    });

    return {
      currentText,
    };
  },
};
</script>

<style></style>

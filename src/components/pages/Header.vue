<template>
  <div class="headerContainer">
        <HeaderTitle />
        <!-- <HeaderSearch /> -->
  </div>
</template>
<script>
import HeaderTitle from "./HeaderTitle.vue";
// import HeaderSearch from "./HeaderSearch.vue";
export default {
  name: "Header",
  data() {
    return {
      
    };
  },
  components: {
    HeaderTitle,
    // HeaderSearchProperty "$createElement" was accessed during render
  }
};
</script>
<style>
  
</style>

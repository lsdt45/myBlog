 <template>
  <div class="right-panel__wrapper">
    <RecentPage />
  </div>
</template>


<script lang="ts" setup>
import RecentPage from './RecentPage.vue';
</script>

<style lang="scss">
  .right-panel__wrapper {
    background-color: $component-bgcolor;
    // margin-top: 10px;
  }
</style>
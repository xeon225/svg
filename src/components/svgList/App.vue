<template>
  <div id="app">
    <div class="float-left box pos-a">
        <div style="padding:5px;">
            <div class="bg-white border-radius">
                <weather></weather>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

import weather from 'components/svgList/weather/index.vue';

export default {
  components: {
    weather
  }
}
</script>

<style>

</style>

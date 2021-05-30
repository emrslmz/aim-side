<template>
  <div class="dead-bar-frame">
    {{ selectedSpray }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'DeadBar',
  computed: {
    ...mapState('Shot', ['valoSprays', 'selectedSpray']),
  },
  methods: {
    ...mapActions('Shot', ['selectSpray']),
  },
  created() {
    this.selectSpray();
  }
};
</script>

<style scoped>
.dead-bar-frame {
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
}
</style>

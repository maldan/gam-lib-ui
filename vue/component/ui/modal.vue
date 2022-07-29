<template>
  <div :class="$style.modal" @click.stop="">
    <div :class="$style.window">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
@import '../../vars';

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(12px);

  .window {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    color: $color-white-060;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.8);
  }
}
</style>

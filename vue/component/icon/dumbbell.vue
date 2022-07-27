
    <template>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        :fill="color"
        xmlns="http://www.w3.org/2000/svg"
        :style="{
          width: size + 'px',
          height: size + 'px',
        }"
        :class="clickable ?$style.clickable :null"
      >
        
    <path d="M3.5 6.5L4 6H5V18H4L3.5 17.5L3 17V7L3.5 6.5Z" :fill="color"/>
    <path d="M1 11L2 10V14L1 13V11Z" :fill="color"/>
    <path d="M22 10L23 11V13L22 14V10Z" :fill="color"/>
    <path d="M19 6H20L20.5 6.5L21 7V17L20.5 17.5L20 18H19V6Z" :fill="color"/>
    <path d="M9 11H15V13H9V11Z" :fill="color"/>
    <path d="M6 6H7L7.5 6.5L8 7V17L7.5 17.5L7 18H6V6Z" :fill="color"/>
    <path d="M16.5 6.5L17 6H18V18H17L16.5 17.5L16 17V7L16.5 6.5Z" :fill="color"/>


      </svg>
    </template>
    
    <script setup lang="ts">
      withDefaults(
        defineProps<{
          color?: string;
          size?: number | string;
          clickable?: boolean;
        }>(),
        {
          color: "#fefefe",
          size: 16,
        }
      );
    </script>
    
    <style module lang="scss">
      svg {
        display: block;
      }
      .clickable {
        cursor: pointer;
        
        &:hover {
           opacity: 0.8;
        }
      
        &:active {
          opacity: 0.7;
          position: relative;
          top: 1px;
        }
      }
    </style>
  
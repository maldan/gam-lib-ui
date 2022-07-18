
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
        
<path d="M6 18C6 19.1025 6.89696 20 7.99999 20H16C17.103 20 18 19.1025 18 18V8H6V18Z" :fill="color"/>
<path d="M14 4.99999V4H10V4.99999H5V6.99998H19V4.99999H14Z" :fill="color"/>


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
  
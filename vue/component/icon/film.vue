
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
        
    <path d="M19 4H15.5H8.5H5C4.44775 4 4 4.43597 4 4.98822V18.9882C4 19.5405 4.44775 20 5 20H8.5H15.5H19C19.5523 20 20 19.5405 20 18.9882V4.98822C20 4.43597 19.5523 4 19 4ZM7.5 18H6V16.5H7.5V18ZM7.5 14.5H6V13H7.5V14.5ZM7.5 11H6V9.5H7.5V11ZM7.5 7.5H6V6H7.5V7.5ZM15 18H9V13H15V18ZM15 11H9V6H15V11ZM18 18H16.5V16.5H18V18ZM18 14.5H16.5V13H18V14.5ZM18 11H16.5V9.5H18V11ZM18 7.5H16.5V6H18V7.5Z" :fill="color"/>


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
  
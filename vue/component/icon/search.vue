
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
        
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58461 16.0137C13.2212 16.0137 16.1692 13.1005 16.1692 9.50687C16.1692 5.91323 13.2212 3 9.58461 3C5.94803 3 3 5.91323 3 9.50687C3 13.1005 5.94803 16.0137 9.58461 16.0137ZM9.58461 13.8448C12.009 13.8448 13.9743 11.9026 13.9743 9.50687C13.9743 7.11111 12.009 5.16896 9.58461 5.16896C7.16022 5.16896 5.19487 7.11111 5.19487 9.50687C5.19487 11.9026 7.16022 13.8448 9.58461 13.8448Z" :fill="color"/>
    <path d="M14.4611 12.7603L21 19.4988L19.4158 21L12.8769 14.2615L14.4611 12.7603Z" :fill="color"/>


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
  
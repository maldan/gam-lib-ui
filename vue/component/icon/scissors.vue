
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
        
<path d="M4.79999 6.4L9.6 11.2L11.2 9.60002L5.60001 4H4.79999V6.4Z" :fill="color"/>
<path d="M7.19999 13.6C5.43201 13.6 4 15.032 4 16.8C4 18.568 5.43201 20 7.19999 20C8.96797 20 10.4 18.568 10.4 16.8C10.4 16.332 10.292 15.888 10.112 15.488L12 13.6L13.888 15.488C13.708 15.888 13.6 16.332 13.6 16.8C13.6 18.568 15.032 20 16.8 20C18.568 20 20 18.568 20 16.8C20 15.032 18.568 13.6 16.8 13.6C16.332 13.6 15.888 13.708 15.488 13.888L13.6 12L19.2 6.40004V4.00004H18.4L8.51201 13.888C8.11199 13.708 7.66799 13.6 7.19999 13.6ZM8.80001 16.8C8.80001 17.684 8.08402 18.4 7.19999 18.4C6.316 18.4 5.59998 17.684 5.59998 16.8C5.60002 15.916 6.316 15.2 7.19999 15.2C8.08402 15.2 8.80001 15.916 8.80001 16.8ZM18.4 16.8C18.4 17.684 17.684 18.4 16.8 18.4C15.916 18.4 15.2 17.684 15.2 16.8C15.2 15.916 15.916 15.2 16.8 15.2C17.684 15.2 18.4 15.916 18.4 16.8ZM11.6 12C11.6 11.78 11.78 11.6 12 11.6C12.2201 11.6 12.4 11.78 12.4 12C12.4 12.22 12.22 12.4 12 12.4C11.78 12.4 11.6 12.22 11.6 12Z" :fill="color"/>


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
  
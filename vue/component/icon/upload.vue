
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
        
<path d="M17.0646 18H13.2027V14.4246H14.479C14.8026 14.4246 14.9939 14.0876 14.8026 13.845L12.32 10.6976C12.1618 10.4954 11.8345 10.4954 11.6763 10.6976L9.19371 13.845C9.00245 14.0876 9.19003 14.4246 9.51737 14.4246H10.7936V18H6.46833C4.53739 17.9023 3 16.2477 3 14.4549C3 13.2182 3.73192 12.1398 4.81692 11.5569C4.71761 11.3109 4.66612 11.048 4.66612 10.7717C4.66612 9.508 5.78055 8.48694 7.15979 8.48694C7.4577 8.48694 7.74459 8.53412 8.01308 8.62511C8.8112 7.07498 10.5325 6 12.5333 6C15.1226 6.00337 17.2558 7.81971 17.4986 10.1348C19.4884 10.4482 21 12.1365 21 14.0472C21 16.0893 19.264 17.8585 17.0646 18Z" :fill="color"/>


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
  
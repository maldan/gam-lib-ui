
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
        
    <path d="M12 2.87635L3.99998 6.87636V17.1236L12 21.1236L20 17.1236V6.87636L12 2.87635ZM11.2258 19.0054L5.54837 16.1667V8.6075L11.2258 11.4462V19.0054ZM6.50535 7.35485L12 4.60756L17.4946 7.35489L12 10.1022L6.50535 7.35485ZM18.4516 16.1667L12.7742 19.0054V11.4462L18.4516 8.6075V16.1667Z" :fill="color"/>


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
  
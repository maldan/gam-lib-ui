
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
        
    <path d="M7 16H20V18H7V16Z" :fill="color"/>
    <path d="M4 16H6V18H4V16Z" :fill="color"/>
    <path d="M7 13H20V15H7V13Z" :fill="color"/>
    <path d="M4 13H6V15H4V13Z" :fill="color"/>
    <path d="M7 10H20V12H7V10Z" :fill="color"/>
    <path d="M4 10H6V12H4V10Z" :fill="color"/>
    <path d="M7 7H20V9H7V7Z" :fill="color"/>
    <path d="M4 7H6V9H4V7Z" :fill="color"/>


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
  
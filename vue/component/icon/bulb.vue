
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
        
    <path d="M9.3646 17.121C9.3646 18.7117 10.5444 20 12.0002 20C13.4557 20 14.6359 18.7117 14.636 17.121H9.3646Z" :fill="color"/>
    <path d="M9.55407 15.6087H14.4462C14.4957 15.051 15.0107 14.5203 15.6341 13.878C16.6681 12.8124 18.0001 11.4397 18 9.12774C18 5.17515 15.1287 3.07964 11.9997 3C8.87083 3.07929 6 5.17515 6 9.12774C6 11.4397 7.33207 12.8124 8.36609 13.8779C8.98946 14.5203 9.50451 15.051 9.55407 15.6087Z" :fill="color"/>


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
  

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
        
    <path d="M17.4876 13.8C18.5125 13.8 19.3494 14.6059 19.3978 15.6192L19.4 15.7119V16.05C19.4 17.74 18.5262 19.0051 17.1859 19.8211C15.8679 20.6235 14.0963 21 12.2 21C10.3037 21 8.5321 20.6235 7.21409 19.8211C5.91437 19.0298 5.05338 17.8162 5.0024 16.2025L5 16.05V15.712C5 14.6867 5.80683 13.8505 6.81981 13.8022L6.91245 13.8H17.4876ZM12.2 3C14.6853 3 16.7 5.01472 16.7 7.5C16.7 9.98526 14.6853 12 12.2 12C9.71474 12 7.7 9.98526 7.7 7.5C7.7 5.01472 9.71474 3 12.2 3Z" :fill="color"/>


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
  
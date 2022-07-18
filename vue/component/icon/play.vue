
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
        
<path d="M18.6033 11.2152L6.15889 3.11523C5.91778 2.95863 5.62378 2.96223 5.38578 3.12243C5.14622 3.28443 5 3.57963 5 3.90003V20.1C5 20.4204 5.14622 20.7156 5.38578 20.8776C5.50711 20.9586 5.64244 21 5.77778 21C5.90844 21 6.04067 20.9622 6.15889 20.8848L18.6033 12.7848C18.8476 12.6246 19 12.3258 19 12C19 11.6742 18.8476 11.3754 18.6033 11.2152Z" :fill="color"/>


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
  
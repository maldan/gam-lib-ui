
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
        
<path d="M18.3387 5.66133C16.6406 3.96332 14.3942 3 12 3C7.05503 3 3 7.04705 3 12C3 16.9556 7.04561 21 12 21C16.9326 21 21 16.9715 21 12C21 9.60582 20.0367 7.35934 18.3387 5.66133ZM12 18.8555C8.21065 18.8555 5.14453 15.7974 5.14453 12C5.14453 10.5234 5.60859 9.12067 6.46289 7.96051L16.0395 17.5265C14.8793 18.3914 13.4766 18.8555 12 18.8555ZM17.5266 16.0394L7.96051 6.46289C9.12074 5.60859 10.5234 5.14453 12 5.14453C15.7895 5.14453 18.8555 8.2026 18.8555 12C18.8555 13.4765 18.3914 14.8793 17.5266 16.0394Z" :fill="color"/>


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
  
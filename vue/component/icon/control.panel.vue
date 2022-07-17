
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
      >
        
<path d="M4 4H11.619V11.619H4V4Z" :fill="color"/>
<path d="M12.381 4H20V11.619H12.381V4Z" :fill="color"/>
<path d="M4 12.381H11.619V20H4V12.381Z" :fill="color"/>
<path d="M12.381 12.381H20V20H12.381V12.381Z" :fill="color"/>


      </svg>
    </template>
    
    <script setup lang="ts">
      withDefaults(
        defineProps<{
          color?: string;
          size?: number | string;
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
    </style>
  
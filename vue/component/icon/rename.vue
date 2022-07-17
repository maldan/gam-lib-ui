
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
        
<path d="M12.768 7.98341H4V16.0166H12.768V7.98341ZM10.489 14.4937H6.19088V13.5562H10.489L10.489 14.4937Z" :fill="color"/>
<path d="M15.6972 18.0083V5.99169H18.0083V4H11.3944V5.99169H13.7055V18.0083H11.3944V20H18.0083V18.0083H15.6972Z" :fill="color"/>
<path d="M16.6347 7.98341H20V16.0166H16.6347V7.98341Z" :fill="color"/>


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
  
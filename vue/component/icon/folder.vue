
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
        
<path d="M4.13487 9H8.43971C8.72165 9 8.98206 9.1493 9.12274 9.3915L9.83126 10.351C9.97194 10.5932 10.2324 10.7425 10.5143 10.7425L21 6.74254V17.6978C21 18.2731 20.5294 18.7396 19.9491 18.7396H4.05088C3.47051 18.7396 3 18.2731 3 17.6978V7.95781C3 9.15252 3.1255 10.352 3.37207 9.58473C3.4624 9.24037 3.77598 9 4.13487 9Z" :fill="color"/>
<path d="M20.2118 5.5209H15.8737C15.5652 5.5209 15.2851 5.69935 15.1569 5.97753L14.4145 7.58815C14.2863 7.86632 14.0062 8.04477 13.6977 8.04477H3V17.9582C3 18.5335 3.47051 19 4.05088 19H19.9491C20.5295 19 21 18.5335 21 17.9582V6.30226C21 5.87075 20.6471 5.5209 20.2118 5.5209Z" :fill="color"/>


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
  
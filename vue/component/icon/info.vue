
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
        
<path d="M18.3644 5.6359C14.8497 2.12156 9.15103 2.12117 5.6359 5.6359C2.12117 9.15064 2.12156 14.8493 5.6359 18.3644C9.15064 21.8783 14.8493 21.8787 18.3644 18.3644C21.8787 14.8493 21.8783 9.15103 18.3644 5.6359ZM13.1737 15.9132C13.1737 16.5616 12.6482 17.0872 11.9998 17.0872C11.3514 17.0872 10.8258 16.5616 10.8258 15.9132V11.2175C10.8258 10.5691 11.3514 10.0436 11.9998 10.0436C12.6482 10.0436 13.1737 10.5691 13.1737 11.2175V15.9132ZM11.979 9.2109C11.3028 9.2109 10.852 8.73194 10.8661 8.14067C10.852 7.52084 11.3028 7.05635 11.9927 7.05635C12.683 7.05635 13.1197 7.52123 13.1342 8.14067C13.1338 8.73194 12.6834 9.2109 11.979 9.2109Z" :fill="color"/>


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
  
const fs = require('fs');

const files = fs.readdirSync('./asset/icon');
let index = ``;
let exportList = [];

for (let i = 0; i < files.length; i++) {
  const file = fs.readFileSync(`./asset/icon/${files[i]}`, 'utf-8');
  let fixed = file.replace(/<\/?svg(.*?)>/g, '');
  fixed = fixed.replace(/fill="(.*?)"/g, ':fill="color"');

  const component = `
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
        ${fixed}
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
  `;

  fs.writeFileSync(`./component/icon/${files[i].replace('.svg', '.vue')}`, component);

  const name = files[i]
    .replace('.svg', '')
    .split('.')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join('');
  index += `import Icon${name} from "./${files[i].replace('.svg', '.vue')}";\n`;
  exportList.push('Icon' + name);
}

fs.writeFileSync(`./component/icon/index.ts`, `${index}\nexport { ${exportList.join(',')} }`);

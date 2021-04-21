## ele-admin-template-ts

### 构建项目

`yarn create @vitejs/app ele-admin-template-ts`

- vue
- typescript

`yarn add @vuedx/typescript-plugin-vue -D`

```json
"plugins": [
  {
    "name": "@vuedx/typescript-plugin-vue"
  }
]
```

`yarn add @types/node`

```js
import { resolve } from 'path'

resolve: {
  alias: {
    '@': resolve(__dirname, 'src'),
  },
},
```

### 添加依赖

```bash
yarn add vue-router@next vuex@next axios element-plus -S

yarn add sass -D
```

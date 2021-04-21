import { createStore } from 'vuex'

const allModules = import.meta.globEager('./modules/*.ts')
const modules = {} as any

Object.keys(allModules).forEach((path) => {
  const filename = path.split('/')[2].split('.')[0]
  modules[filename] = allModules[path][filename] || allModules[path].default || allModules[path]
})

console.log(modules, 'vuex自动导包')

export interface State {
  token: string
}

const store = createStore<State>({
  state: {
    token: '',
  },
  getters: {
    token: (state) => state.token,
  },
  modules,
})

export default store

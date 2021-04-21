import { RouteRecordRaw } from 'vue-router'
import routes from '@/router/routes'
import { Module, MutationTree, Store } from 'vuex'

// 路由处理
function filterRoutes(data: Array<RouteRecordRaw>) {
  return data.find((item) => {
    if (!item.meta?.hidden) {
      return item.children?.filter((code) => {
        if (code.children) {
          code.children = code.children.filter((foo) => !foo.meta?.hidden)
        } else {
          code.children = []
        }
      })
    }
  })?.children
}

// const routelist = filterRoutes(routes)
export interface State {
  isCollapse: boolean
  routelist: Array<RouteRecordRaw> | undefined
}

const state = (): State => ({
  isCollapse: false,
  routelist: [],
})

const getters = {
  isCollapse: (state: State) => state.isCollapse,
  routelist: () => filterRoutes(routes),
}

const mutations: MutationTree<State> = {
  updateCollapse(state: State, payload: boolean) {
    state.isCollapse = payload
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<State, State>

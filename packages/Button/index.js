import YuButton from './src/index.vue'

YuButton.install = function (Vue) {
  Vue.component(YuButton.name, YuButton)
}

export default YuButton
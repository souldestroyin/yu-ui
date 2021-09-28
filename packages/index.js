import YuButton from "./Button";

const components = [
  YuButton
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => Vue.component(component.name, component))
}

export default {
  install,
  YuButton
}
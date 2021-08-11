import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 声明Vue的构造方法
// 主要执行了_init方法
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 定义了_init方法，
// _init方法中，主要执行了initLifecycle、initEvents、initRender、
// callHook(vm, 'beforeCreate')、initInjections、initState、initProvide、callHook(vm, 'created')
initMixin(Vue)
// 给$data和$props添加get/set
// 在Vue的原型上挂在$set、$delete、$watch
stateMixin(Vue)
// $on、$once、$off、$emit
eventsMixin(Vue)
// _update、$forceUpdate、$destroy
lifecycleMixin(Vue)
// $nextTick、_render
renderMixin(Vue)

export default Vue

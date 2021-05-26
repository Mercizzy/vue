/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
// nodeOps是一些dom创建、删除、插入元素的方法
// baseModules 是ref和directives
// platformModules 是关于属性，class，events，domProps，style，transition的创建和更新方法
export const patch: Function = createPatchFunction({ nodeOps, modules })

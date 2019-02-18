
import Vue from 'vue';
import { authEmail } from '@/config';
// tslint:disable-next-line:no-var-requires
const VueCookie = require('vue-cookie');

export const auth = (to: any, from: any, next: (arg0: { name: string; query: { backUrl: any; }; }) => void) => {
  // 如果是要授权登录的且当前cookie中不存在用户邮箱的跳转到登录页面
  if (!to.meta.unauth && !VueCookie.get(authEmail, { domain: 'localhost' })) {
    Vue.prototype.$notify({
      title: '退出提示',
      message: '登录超时',
    });
    next({ name: 'login', query: { backUrl: to.fullPath } });
  }
};

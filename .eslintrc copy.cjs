/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	//2.配置ESLint
		//表示当前目录即为根目录，ESLint规则将被限制到该目录下
	root: true,
	env: {
		//在node 环境下启动ESLint配置
		node : true,
	},
		//ESLint中基础配置需要继承的配置，vue3的必要和标准配置
	extends: [
		'plugin:vue/vue3-essential', 
		'eslint:recommended', 
		'@vue/eslint-config-prettier'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	/**
	 * 需要修改的启用规则及其各自的错误级别
	 * 错误级别分为三种：
	 * “off”或 0 - 关闭规则
	 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   	 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
	 */
	rules: {
		curly: 'error', // 控制语句需要大括号
		'vue/multi-word-component-names': 'off', // 组件名不需要多个单词
		'no-undef': 'off' // 未定义的报错
	}
}

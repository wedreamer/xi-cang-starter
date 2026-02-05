module.exports = {
  // 让 Prettier 自己决定处理什么文件 (利用 --ignore-unknown)
  '*': 'prettier --write --ignore-unknown',
  // ESLint 仍然建议限制扩展名，防止传图片/二进制给它导致报错
  '*.{js,ts,jsx,tsx,mjs,cjs}': 'eslint --fix',
  // 对 TS 文件进行类型检查，且忽略文件名参数（全量检查）
  '*.{ts,mts,cts,tsx}': () => 'npx tsc --noEmit',
};

module.exports = {
  '*.{js,ts,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
  // 对 TS 文件进行类型检查，且忽略文件名参数（全量检查）
  '*.{ts,mts,cts,tsx}': () => 'npx tsc --noEmit',
};

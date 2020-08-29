// 默认导出
export default function(a, b) {
  return a + b;
}

// 具名导出（普通导出）
export function double(a) {
  return a * 2;
}

export var n = 3;

console.log('ppp')
// 最终导出：{ default: fn, double: fn, n:3}
#  块级作用域
{
  相当于之前的立即执行函数
}

let: 1，没有预解析不存在变量提升，同一个块级不能重复定义
     2，let定义变量在之前使用，都是报错
     3，for循环里条件是父级作用域

const: 定义的常量必须有值且不能修改，引用值可以push之类的但不能重新等于其他
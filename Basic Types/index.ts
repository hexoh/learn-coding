/** Boolean  布尔值 */ 
let isDone: boolean = false;


/** Number 数字 */ 
let decimal: number = 6;  // 十进制
let hex: number = 0xf00d; // 十六进制
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制
let big: bigint = 100n;  // 大整型 BigIntegers  只有在ES2020中才能使用


/** String 字符串 */ 
let color: string = "blue";  // 可以使用单，双引号
color = 'red';

// 模版字符串 ``
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

// 下面定义sentence_的方式与模板字符串效果相同
let sentence_: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
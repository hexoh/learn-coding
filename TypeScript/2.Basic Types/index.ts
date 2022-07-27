/** 1.Boolean  布尔值 */ 
let isDone: boolean = false;



/** 2.Number 数字 */ 
let decimal: number = 6;  // 十进制
let hex: number = 0xf00d; // 十六进制
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制
let big: bigint = 100n;  // 大整型 BigIntegers  只有在ES2020中才能使用



/** 3.String 字符串 */ 
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




/** 4.Array 数组 */
// 可以在元素类型后面接上 []，表示由此类型元素组成的一个数组。
let list: number[] = [1, 2, 3];

// 数组泛型，Array<元素类型>
let list1: Array<number> = [1, 2, 3];  



/** 5.Tuple 元组 */
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

/* 调用类型方法 */
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

/* 访问一组已知索引之外的元素失败 */
// x[3] = 'world'; // Tuple type '[string, number]' of length '2' has no element at index '3'.
// console.log(x[5].toString()); // Object is possibly 'undefined'.Tuple type '[string, number]' of length '2' has no element at index '5'.

// x[6] = true; // Error, 长度为 "2" 的元组类型 "[string, number]" 在索引 "6" 处没有元素。



/** 6.Enum 枚举 */
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color { Red, Green, Blue}
let c: Color = Color.Green;

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
// 或者，全部都采用手动赋值
enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2



/** 7.Unknown */
/* 我们可能需要描述编写应用程序时不知道的变量类型。 这些值可能来自动态内容，例如来自用户-或者我们可能要有意接受我们API中的所有值。 
   在这些情况下，我们希望提供一种类型，该类型告诉编译器和将来的读者此变量可以是任何变量，因此我们将其赋予 unknown 类型。
*/
declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe; // 不能将类型“unknown”分配给类型“number”。

// 已经取到值为boolean类型时，不能赋值给string类型
if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    const aBoolean: boolean = maybe;
    // So, it cannot be a string
    // const aString: string = maybe; // 不能将类型“boolean”分配给类型“string”。
}

if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    const aString: string = maybe;
    // So, it cannot be a boolean
    // const aBoolean: boolean = maybe; // 不能将类型“string”分配给类型“boolean”。
}



/** 8.Any */
/* 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
   这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。那么我们可以使用 any 类型来标记这些变量。
*/                       
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

// 与未知变量不同，any类型的变量使您可以访问任意属性，甚至是不存在的属性。 这些属性包括函数，并且TypeScript不会检查它们的存在或类型
let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed();  // 对象的类型为 "unknown"。

// 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
let list3: any[] = [1, true, "free"];

list3[1] = 100;

let looselyTyped1: any = {};
let d = looselyTyped1.a.b.c.d;
//  ^ = let d: any



/** 9.Void */
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
    console.log("This is my warning message");
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined;
// OK if `--strictNullChecks` is not given 仅当未指定--strictNullChecks时,可以赋值为null
// unusable = null;



/** 9.Null and Undefined */
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大。
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// 默认情况下 null 和 undefined 是所有类型的子类型。就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
/* 然而，当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。这能避免很多常见问题。
   也许在某处你想传入一个 string 或 null 或 undefined，你可以使用联合类型 string | null | undefined。   
*/



/** 10.Never */
/* never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式
   或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。never类型是任何类型的子类型，
   也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。 
*/
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}



/** 11.Object */
/* object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
   使用object类型，就可以更好的表示像Object.create这样的API
*/
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error 类型“42”的参数不能赋给类型“object | null”的参数。
// create("string"); // Error 类型“"string"”的参数不能赋给类型“object | null”的参数。
// create(false); // Error 类型“undefined”的参数不能赋给类型“object | null”的参数。
// create(undefined); // Error var undefined 类型“undefined”的参数不能赋给类型“object | null”的参数。



/** 12.Type assertions 类型断言 */
/* 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
   通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
   它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
 */
// 类型断言有两种形式。as语法：
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
// “尖括号”语法：
let someValue1: unknown = "this is a string";
let strLength1: number = (<string>someValue1).length;  
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。



/** 13.A note about let */
/* 您可能已经注意到，到目前为止，我们一直在使用let关键字而不是您可能更熟悉的JavaScript的var关键字。 
   let关键字实际上是TypeScript可用的较新的JavaScript结构。 您可以在《变量声明手册参考》中阅读更多有关let和const如何解决var问题的信息。
*/



/** 14.About Number, String, Boolean, Symbol and Object */
/*  可能有一些迷惑，Number, String, Boolean, Symbol, or Object 与上面建议的小写版本相同。
    但是，这些类型不作为语言原语，并且几乎永远不应将其用作类型。
*/
// this is a error eg
// function reverse(s: String): String {
//     return s.split("").reverse().join("");
// }
// reverse("hello world");

// 而是使用 number, string, boolean, object and symbol。
function reverse(s: string): string {
  return s.split("").reverse().join("");
}
reverse("hello world");
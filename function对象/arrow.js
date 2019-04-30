// 1.共享上下文折this
function A() {
    this.a = 1;

    // 这里的 this 其实是使用了 abc 中的this
    // 下面代码类似于:
    // let self = this;
    // let b = () => console.log(self.a)
    let b = () => console.log(this.a)

    // 无法访问到
    // let b = function () {
    //     console.log(this.a)
    // }

    b()
}

let bindThis = new A()
console.log(bindThis)

function foo () {
    setTimeout(() => {
        console.log(`arrow function id: ${this.id}`)
    }, 100)
}
function foo2 () {
    setTimeout(function() {
        // 在浏览器环境中，此时this是全局的window，id返回20
        // 在Node环境中，此时this为undefined
        console.log(`function id: ${this.id}`)
    }, 100)
}
// 注意，在node中，此id不在全局，无法访问
var id = 20

foo.call({id: 8})
foo2.call({id: 8})

let obj = {
    x: 1,
    y: ()=> console.log(this.x)
}

// undefined 这里的this引用了全局的,因为 obj 不是函数,没有自己的作用域
obj.y() 

function B() {
    this.x = 1;
    this.inner = () => console.log('inner x:', this.x)
}
B.prototype.bar = () => console.log('prototype x:', this.x)

let a = new B()
// 同样,这里也提到了全局
a.bar() // undefined
// 使用这个方法，虽然可以访问到内容，但是会造成更多的内存引用
a.inner() // 1


// 没有 arguments
let  abc = () => {
    console.log('arguments:', arguments)
}

// 在浏览器环境中，没有arguments
// 在node环境中，返回Arguments对象
abc(1,2)
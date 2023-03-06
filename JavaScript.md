# JS

### HELLO WORLD

> to print hello world,
> alert("Hello World")

alert function is for getting prompt messages.

### What is JavaScript ?

> Javascript is a high level OOP Multiparadigm programming language.

> High-Level means human redable and high level of abstractions.

> Multi-Paradigm means that it can be used in multiple manners.(oop,functional and procedural)

### Role of JS in web development ?

> > for adding interaction , manipulation, and build entire web applications.

> > HTML : Nouns : (elements)
> > CSS : Adjectives : (description of elements)
> > JS : Verbs : (what element is doing.)

Script in the same html file is called as inline javascript

Naming convention = Camel casing.
can only be letters, numbers, $ and \_

### Data Types :

Number : holds floating point numbers.
even if it seems whole number, its floating actually.

String : for text

Boolean : true/false

Undefined : value taken by a variables when value not given
eg. let children; in this case, the value of children is undefined and the type of children is undefined.

Null : means empty value

Symbol(ES2015) : defines value that is unique and cannot be
changed

BigInt(ES2020) : Large integers.

JAVASCRIPT has dynamic typing : We dont need to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

this also means that we can simply change the type of data that a variable can hold.

<hr>

### CODING :

console.log(); : can be used to log operations on the console of the web browser while the execution of the webpage.

let firstName = "Preetam" // this is how we declare variables.

console.log(value1, value2, value3); // we can log multiple values.

#### typeof operator

typeof operator returns the type of a value.

eg. console.log(typeof 23);

**_typeof null is a bug that shows object type which makes no sense but its not changed because of legacy reasons._**

### Declaration types

let and const were declared in ES6 whereas
var is oldschool.

let is used to declare variables whose values can be changed later.
const values cannot be changed.(immutable).hence we cannot declare unassigned values to const types.

we can write let a = b = 13;

**_NOTE : Mutating in JS means to changes the value of a variable_**

When to use const and use let ?

always use const when variables will never change, if you are certain that it will change, make it using let.

**_avoid using var,_** prior to ES6 var was used

(let is block scoped and var is function scoped, we will study later what this is)

IMPORTANT NOTE : **we dont even need to use let const or var, and we can declared directly also, but then the scope wont be local but global.**

### Basic Operators

operators work on operands.

**Mathematical/Arithematic** : - , + , \* , / , \*\*(power), typeof;

we can concatinate strings using + operator.

**Assignment operator** : = , += , -= , /= , \*=, ++, --

**Comparison operator** (gives boolean result): >, <, <=, >=

**Bitwise operators** : | , & , << , >>, ~

### Operator Precidence

Console.log(x-y > a-b), here which operators will be solved first, it will be according to operator precidence

Operators with same precednece will be resolved, left to right.
but assignment is right to left.

remember () has the highest priority and are hence executed first.

### Strings and template literals

formatting text is not so cool using the + operators to bind text and variables together eg.

const jonas =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " +job +" ! ";

Hence we use the template literals like :

const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;

introduced in ES6.
we can use ` instead of ' for strings.

in normal strings, \n\ is used to leave lines, whereas in template
strings we can simply leave a line using enter to leave a line in string.(like formatted string.)

### Taking Decisions using code.

if and else

### Type Convertion and type Coersion(Implicit vs Explicit)

when we manually convert type its type convertion and when java script does it automatically its called type coersion(like autoboxing/wrapping in java)

#### Conversion :

we can get a string to number using =)Number(numberString).

note : Number() function does not convert the string variable into integer, it just returns the value in Number.

**NaN** : when we try converting a non number string into number type, the function Number() returns : NaN(Not a Number)

typeof NaN is : number (its an invalid number)

converting a number to string is done using String() function.

#### Cohersion :

when we log using console.log("preetam" + var), we can add preetam with var beacause JS converts var to string. this is because + converts the var to string.

in console.log('23' - '10' - 3) the - operator converts from string to number and the console will print 10.

hence + -> converts any to string
-, \*, / -> convert to number

```javascript
let n = "1" + 1;
n = n - 1;
console.log(n);
```

the above code will give numberic 10 on console, since typeof n in first line will be string and second line becomes number.

```javascript
console.log(2 + 3 + 4 + "5");
```

the above code will give result 95 in string since first 3 operands are number and will add up to be 9 and then the + will convert number to string.

Type convertion can cause unwanted bugs if we dont know about this

### Truthy and Falsey values :

when we convert value to boolean type, they will either be true and or false. Other type values that when converted to boolean result in true are called, truthy values, and on the oter side, the values that not truty are falsey.

there are only 5 falsey values :

0 , '' , undefined, null, NaN.

the above when converted to boolean will be falsey.

note that in _if_ condition, the input is a boolean value and hence any value we place will be converted to boolean based on truthy or falsey value.

One of the important use of truthy and false is to check if a variable has been defined or not.

### == vs ===

=== is strict equality operator.
== is loose equality operator.

=== Does not type convert for comparing. i.e value and type has to be same.

== Does convert type for comparing. ie. value has to be equal irrespective of the type.

always default to the === operator.

#### prompt()

prompt will give out a popup and will accept input
this input can be stored since prompt() will return the value entered.

#### !== vs !=:

!== vs != one is strict and other is loose.

#### Boolean Logic :

AND : &&

NOT : !

OR : ||

as simple as that

### Switch statement :

```javascript
switch(var) {
    case 1 :
    {
        console.log('One');
        break;
    }
    default:
    {

    }
}
```

we can execute same code for two cases using :

```js
case 1:
case 2:
{
    console.log("Preetam is the best");
    break;
}
```

and note that here comparison is done strictly.

### Statements and Expressions :

an expression is a piece of code that produces a value eg. a+b is an expression

a statement is a piece or line of code that makes sense ends with ; or {} in js
eg a+b = 13;

strings are also statements.

Now why is this imp, note that template literals, inside of ${} only accept an expression.

### Ternary/Conditional Operator:

condition ? first output : second output

the condition can be truty or falsley value and the first and secton output can be Expression or Statements.

**NOTE : we cannot use if else inside of template literals, but since ternary operator is an expression, we can use it inside of template literals **

### ES5, ES6 and ESNEXT

Mocha was javascipt first name developer in 10 days for NetScape by Brendan Eich.

LiveScipt then JavaScript(because java was very famous.)
JavaScipt was copied by microsoft and namded JScript and since internet was growing, standardisation was needed.

JavaScipt was standardized by the company ECMA, which released ECMAScript 1(ES1)

after a lot of debate, ES5 was released in 2009 which introduced sooooo many new features.

ES6(ES2015) in 2015, and was the biggest update ever.

now new release every new year now.

**NOTE : JS is backward compatible with ES1 !!!!!!!!!!!!!**

JS never removes things but always updates them.

Explains why JS is filled with legacy bugs.

#### Forward Compatibility ???

JS is not forward compatible.

since there is no forward compatibility, the old browsers may not understand the new modern JS !!!

QUESTION : How to deal with that ?

ANSWER : Simply use latest Chrome. while development and later during production, use **babel** to trransiile and polify coodee(i.e. convert the code back to ES5 to ensure browser compatibilty for all users.)

since ES5 is compatible for all browsers today.

Future ES versions are called ESNEXT.

**ITS cool to check the compatibility version table.**

## FUNDAMENTALS 2

### Strict Mode :

'use strict'

this should be the first line of code where we want to apply strict mode, and most of the time its global and hence this is the first line of code written.

**NOTE always write 'use strict' as the top line of code**

strict mode forbids us to do certain things and also gives out the errors in the code in the console.

**_JS gives many errors silently, and does not log the errors_**
but strict mode logs and tells about the bugs in the log.

**_another thing is, that strict mode does not allow using variable names, that might become feature in the future. eg, we cannot make 'interface' as variables name since JS preserves it for future use_**

### Functions :

we make a function using the function keyword.

rest is same as any programming languare

we can pass parameters, return values etc.

NOTE : a function that does not return anything returns undefined.

Functions help reuse piece of code.

**_DRY (Dont Repeat Yourself)_** we keep our code dry, meaning we dont repeat stuff and use functions.

console.log is a built inn function.

so is Number which takes in a string and returns number type.

### Functional Declarations vs Expressions :

when we declare a function using function keyword, its function declaration.

```js
function calc(birthYear) {
    return 2037 - birthYear;
}
```

Parameter is the placeholder, and the argument is the value that is passed.

and

when we make a funciton like a variable its called function Expression.

```js
const calc = function (birthYear) {
    return 2037 - birthYear;
};
```

in the above calc is the function now.

Sometimes, function expression will be needed.

The Difference ??

Function declaration can be called, before they are defined !!!!!!
But function expressions, cannot be called before defining.
(this is because of a phenomenon called Hoisting.)

Now it comes down to the user how they want to use function.
(Expression seems cool since it can be used in a structured way.)

### Arrow Function

its a function that is faster to write.

(parameters) => value to be returned

```js
const age = (birthYear) => 1997 - birthYear;
```

best for oneliner functions.

but it gets complex for more than one line of code

```js
const yearsUntilRetirement = (age, retirementAge) => {
    const retirement = retirementAge - age;
    return retirement;
};
```

note how the return keyword and paranthesis return when there is multiple line of code .

**_NOTE : Arrow functions, cannot use this keyword hence use it wisely._**

we use arrow functions for arrow function for single linear returning functions.

### function vs function()

NOTE: in JS calling a function with or without a bracket has different implications !!!!!

function() ==> means to evalutate the function, and retun its value.

function ==> means to make a reference to the function()

```js
function fun(b, c)
{
    let a = b+c;
    return a;
}

console.log(function);           // first console
console.log(function(12, 13));   // second console

```

in the above, the first console will print the function body itself, since its like a reference to function itself !!! i.e. its like another name for function. Whereas, second console will print this output that is returned by the function.

<hr>

### Arrays :

```js
const friends = ["Preetam", "Vishal", "Goga"];
const years = new Array(1991, 1984, 2008, 200);
```

the above are the two ways of creating the array, we can either use Array function , or we can make using [].

we can get the length of the array using length property, eg. arr.length.(length is property and not a function).

**NOTE : we cannot change the complete const array, but we can changes it elements.**

Array can hold different types of data, it does not have to be of a single type.(like making an array of Object class in java).

and in case of JS, the type will be that of object.

**what would happen if we pass an array in String() ?? , it will be converted to string, lol and we try to add a number to array ? the addition will turn the array and the number into string and add them.**

```js
const arr = [1, 2, 3, 4];
console.log(arr + 12);
// in the above, the output will be , "[1,2,3,4]12";
```

### Basic Array Methods

**array.push(element);** push method is used to add elemement to then end of array. it also returns the new size of the array after adding.

```js
const friends = ["Miahael", "Steven", "Peter"];
const size = friends.push("Preetam");
```

here size will contain the new size of friends.

**array.pop()** pop() method removes element at the end and returns it.

**array.unshift(element)** used to add at the start of the array.
this also returns the new size of the array.

**array.shift()** shift removes element from the start of the array and returns it.

**array.indexOf(element)** returns the index of the element in the array. if element not present returns -1.

**array.includes(element)** returns boolean based on if element in present in the array or not. NOTE: it checks with strict equality.

an empty array is create like this : let arr = [];

### DS Objects :

in arrays, the issue is that we cannot access the elements stored in the array by names, we have to use index.

In js, Object type can be used to make key value pairs.

```js
const jonas = {
    firstName: "Preetam",
    secondName: "Singh",
    age: "12",
    job: "teacher",
    friends: ["Preetam", "sahil", "simran"],
};
```

the above is an object, and note that each of the key can be called as _property_ also.

there are multiple ways of creating objects in JS but this is called object literal syntax.

remember, use arrays for ordered data, and objects for unordered data.

#### How to access the data from object DS ?

**dot** we can access elements using '.'

**Brackets** we can use the [] but instead of index, use the property name.

```js
const jonas = { name: "Preetam", lastName: "Singh" };
jonas.name;
jonas["lastName"];
```

QUESTION :where to use the barackets notatation ?
ANSWER :in the bracket, we can fetch the property name form functions eg.

```js
jonas[getProperty()];
```

in the above, getProperty returns the string name of the property to be accessed.

IMPORTANT : Note that '.' operator is used to access elements with non dynamic names(eg. cannot accesss elements starting with numbers, containing - etc.) Hence its best to use [] to access in case of dynamic names, and when the property to be accessed is determined by return value of a function or evaluated.

how to add elements in objects ????

obj.element = value;

or

obj[ "element"] = value;

**NOTE : the key has to be in string.**

THIS IS POSSIBLE WITH []

```js
let empty = {};
let names = ["one", "two", "three", "four", "five"];

for (let a of names) {
    empty[a] = a;
}
```

the above code will be able to create five properties for empty object literal. and this is super Awesome.

<br>

### IMPORTANT Setting dynamic property names :

we can give name of properties based on dynamic names eg.

```js
let propName = "name";

let obj1 = {
    ["propName"]: "Preetam",
    [`sur-${propName}`]: "Singh",
};
```

and this can come in very handy, and I love it !!!
But make sure to use the square brackets in this case.

### Object Methods ?

we can make objects inside of objects

yes we can make functions inside of an object USING FUNCTION EXPRESSION.

we can use a function declaration here.

```js
const jonas = {
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },
};

jonas.calcAge(1999);
jonas["calcAge"](1999);
```

we can again accesss the function using the . or using the square brackets as shown above.

### this : using the content of object inside of an object ??

we can use this, to access the elements of the current object.

and how to make a new property inside of an object ?

```js
const jonas = {
    age: 12,
    class: 12th,
    calcAge: function (birthYear)
    {
        this.birth = birthYear;
    }
}
```

**NOTE : in the above code, this.birth will make a new property in jonas called birth**

REMEMBER this CANNOT BE USED INSIDE OF AN ARROW FUNCTION.

### LOOPS :

for(let i=1; i>12; i++)

NOTE : we use let, since we require the value of variable to change.

For loop is useful for iterating throught array.

**continue and break** continue skips the remaining of the current iteration whereas break terminates the loop.

while loop also exists :)

\*\_NOTE : IN js =)Math.random(), gives a random number between 0 and 1 and ====> =)Math.trunc( Math.random() \* 10), always gives a number between 0 and 9.

Math.trunc() : roudns towards 0

Math.floor() : rounds towards smaller number.

Math.ceil() : rounds off to bigger number.\*\*

### stuff.

we can go to the perttier website to find all the configurtions we can tweak.

in vs code, we can define a new global snippet file, to get rid of repetetive code.

```js
{
"jloging":{
    "scope": "javascript, typescript",
    "prefix": "cl",
    "body": [
        "console.log('$1');",
        "$2"
    ],
    "description": "Log output to console"
}
}
```

the above is a snippet for console.log

### NODE JS and NPM

Live server is for kids, Node.js is for men.

after installing Node and setting the environment variables, we can use its library of awesome tools(NPM) and live server is a part of that. We can install using a terminal and vscode and for running live server :
in the directory type live-server

codingwars !!

### Debugging

there exist, console.error() and console.warn() for logging warnings and errors.

console.table(object) when we pass inn any object inside of console.table, the parameters and values of the objects are logged in a tabular manner which can come in handy sometimes.

**google chrome also has its own debugger**

In the Sources section we can set breakpoints, check the valuea of all the variables and yadi yada.

there we can find the call stack, in the scope section, we can see the current values of the variables.

**debugger;** javascript has =)debugger keyword which will open the chrome debugger when that keyword is triggered.

<HR>

## Interactive JAVASCRIPT :

in js, we can select elements with the help of their class name and use it.

=)document.querySelector(class or id in string format).

this also returns the first element content with this class.

ON the element, we can use =)textContent property to fetch the text value in the element.

```js
console.log(document.querySelector(".message").textContent);
```

### DOM and DOM manipulation.

DOM stands for Document Object Model : Structures representation of HTML documents and allows js to access HTML elements and Styles to manipulate them.
we will be able to change tags, attributes and styles.

DOM is stored in a tree struture and is created as soon as the page loads in browser.

DOM tree is just parent and child tree that shows hierarchy in the html structure.

each Dom node is the HTML element(consisting starting and closing tag)

the root of dom tree is a Document object, which has a child HTML and then HTML has Head and Body and so onn.

we can access the Docuement object in the javascript and this object serves entry point in the DOM.

NOW DOM nodes keep track of comments, text, images links etc also since everything on the html page is to be kept track of.

NOTE : DOM methods and properties are not a part of JS, they are part of web API's(libraries) that are used by the web browsers and JS can access and interact with those libraries. SIMPLE.

and DOM manipulation works the same with all the browsers.

NOTE: there are other APIs used by the browsers, Timers FETCH etc, that we will see later.

### Selecting and manipulating elements.

so we get the content using =)document.querySelector(tag or class).

NOTE : querySelector, only works for the first tag with the class.

and now, like we access the variabels we can access or change the text content of the selected tag using =)element.textContent

when user has entered some value in a form field, we can get the value using =)element.value

```js
console.log(document.querySelector(".class").value);
```

in the above, if the tag with 'class' was an input field, then as we studied in HTML forms, the text value in the form will be stored in the value attribute, and hence here we are kinda accessing the value.

NOTE : in the html, if the type attribute of the form is set to number, then only number value can be passed using JS value property.

### Handling click of a button / EVENT LISTENER :

an event listener is capable of checking for events on the page.

we first select the element where we want the event to be checked.

so selecting the element using document.querySelector() and then we add even listener by =) addEventListener('eventType', code to execute upon event) method.

NOTE : there are various ways to check events but the methods addEventListener() is best.

the function inside of eventListner is called event handler function.

we can pass a function in the to be executed logic, and can even make an inline function(function expression).

NOTE : the value fetched using value, will always be a string, and if there is no value in the input field, ""(empty string) is fetched. SO to check if the form is empty, we can check using if, since "" is a falsey value.

NOTE: convertion of "" to Number gives 0.

IMPORTANT : remember, the addEventListener() function here is taking in function in the form of a variable !!!!!(FUNCTIONAL PROGRAMMING) the 2nd parameter for for event listener is not code, but a function itself !!!!! get it ?? so dont pass function() but pass function, since passing function() will execute function for sure while calling the event listener, whereas passing function only will ensure that the function code only gets executed after the event occures.

### Manipulate CSS using DOM ??

after selecting the element, we can use =)element.style.propertyname.

```js
documnet.querySelector("body").style.backgroundColor = "blue"; // this is a setter, we will see later getters and setters.
```

NOTE: CSS uses - for property name, eg. background-color and js DOM has backgroundColor.

and also note. that it is a property and not a function that we can manipulate.

NOTE: we can store the result of documnet.querySelector(identifier); in a variable, since it returns an object type.

### SELECTING MULTPLE ELEMENTS WITH SAME CLASS IN querySelector ??

we can use the property querySelectorAll in order to access all the query with the particular class.
NOTE: the catch is that the =)querySelectorAll returns an NodeList(like java linkedList) with a list of all the elements with the same property.

this list elements can be accessed using [].

### How to remove class from an element and check if a class is present.

classList ahead of a selected element can be used, then further, we can use the =)remove() method of remove class.

```js
document.querySelector(".class").classList.remove("hidden", "class2");
```

and seperated with , we can remove multiple classes.

NOTE: dont use the 'DOT' in the class name when passing class name in the remove function.

=)element.classList.contains('class'); checks if a class is present in an element or not.

NOTE: methods inside of classList dont consider the 'DOT'.

### Keyboard Events :

Keyboard events, dont happen on particular queries, and hence are observed over the whole document.

and hence we listen for event on the documnet object itself.

=)KeyUp : when we lift our finger of the key
=)KeyPress : while we hold and keep pressing the key, keypress happens continuoslly
=)KeyDown : when we press down the key

KeyDown ==> KeyPress ==> KeyUp.

```js
document.addEventListener("keydown", function (e) {});
```

now , in the above, function() will trigger for any keypress.

and the e is the =)event argument

=) e.preventDefault() in the callback function of eventListener function will prevent the default behavior of the parameters in html (eg. default clicking on submit form in html is to raload the page, and we can stop it using this.)

NOTE: javascript will observe event and pass its object in as argument of the anonymous function.

this event is just an object with vaious properties.

and we can check the key in following way :

```js
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
    }
});
```

NOTE: key is a property of the event object.

NOTE: there are pretty cool stuff in the event listener, eg. mousepressed etc too

### Setting attribute value ?

to set attribute value of an element :

=) element.setAttribute('attribute name', 'attribute value');

<hr>

## HOW Java Script WORKS ????

High Level , Object Oriented, Multi Paradigm , Interpreted or JIT compiled, Dynamic, Single-Threaded, Garbage-Collected, Programming Langauge with First Class Functions and A non Blocking event lop concurency model.

**High-Level : ** We dont have to manage resources and internal stuff, that is abstracted.

**Grabage-collected : ** Automatic cleaning the pointer, that is not in use.

**Interpreted or JIT compiled :** Interpreted means it is executed line by line.(done by =) JavaScript engine )

**Multi Paradigm : ** Paradigm means an approach and mindset fo coding(JS has many approaces and uses)

> Procedural : like C

> Object Oriented : working with class and oops

> Functional Programming : using functions as variabels and we can pass them assign them etc.

JavaScript can work with any of these paradigms.

**Prototype Bases OOP ? :** everything in js, are Obejcts except for primitive types. Prototype based means that we make class as a prototype and base our object based on that prototype.

**First class Functions :** Functions are treated as variables !!!!! we can pass them, returns them, assign them ETC.

**Dynamic : ** Dynamically typed, meaning that type of variable is determined when the program is run and also type of a variable can be changed easily.

NOTE: this makes JS not a "strongly typed" language since we dont specify in hardcode the types.

**Single Threaded :** Concurrency Model : how concurrent threads are handled is the concurrency model.

JavaScript runs in one single thread, so it can only do one thing at a time.

**Non-Blocking event loop :** What happen when a long running task arrives, it will block other tasks and cooupy the single thread for a long time.

We use event loop. Event loops executes long running tasks in the background, and then once they are finished, put in the main thread,(Will see later in breaf)

### JS engine and runtime :

JS engine is a JS executing engine. Every browser has its own engine. Its just a program that runs JS.

One of most famous one is GOOGLE Chrome : V8 it powers chrome and Node js.

**Any engine comprise of :**

Call Stack : Call stack is where code is executed in sequence
Heap : heap is where dynamic memory is given to set programs.

IMPORTANT: compilation vs interpretation : compilation is when entire source code is converted into an executable program, whereas in interpretation, there is an interpreter that goes thorogh line by line at the same time.
Interpreted languages are much slower.

NOTE: JS is no more interpreted, Now modern engine works on JIT compilation .

**JIT compilation :** Entier code is converte itno machine code at once then executed immediately. Hence compilation occures, but there is no portable program file.
This is a much better than interpreted.

### step by step JIT compilation :

1.) Parsing : in this phase the code is read by the browser(called parsing) and a DS Abstract Syntax Tree is generated. This steps also checked for syntax errors. AST are very brief.

2.) Compilation : using the AST, JIT compilation occures where non protable machine code is generated.

3.) Execution(in call stack) : the machine code is then executed

4.) Optimization :
IMPORTANT: Optimization occures in modern js in a very clever way, first the first version of compiled machine code is generated as fast as possible, so that the use can access it ASAP. and that is not very optimised code. hence, while the use is using the website, JS engine takes some time and gives out a much optimised machine code, and replaces the uoptimised machine code with the optimised one. This happens multiple time and is a very cool in which optimal code is given without user having to wait too much.

Different engines have more ways of optimization.(we dont need to know)

NOTE : all the above steps occure in special threads inside the engine, that we cannot access !!

### Javascipt Runtime :

**In the browser :**

Js runtime includes all the javascript tools needed to execute js code.
it includes :

1.) JS engine : for JIT of js code.

2.) WEB API's : Essentially librares that are not a part of javascript itself, but provided in the browsers for various functionality and interaction between JS , HTML and CSS. We are able to use the API's through 'Window Objects' provided int he JS.(eg. document object)
eg. DOM, Timers, Fetch API etc.

3.) CallBack Queue : generally, we are the one that call a function, but callback functions are those functions that call functions that are defined by us when certain criterias are met. e.g. click event handler will call the function passed in as argument, when a click event occures.

eg. DOM events listeners are also maintained in the queue. eg click, timer, data etc.

callback functions are kept in callback queue, and once the event occures, they are kept in the call stack.

**EVENT QUEUE : is the one that takes the callback funcions that places them in the call stack.(we will see how it makes non-blocking concurrency possible later)**

**Node .js :**

remember that Js dosent only work within webbrowsers only, it can used for backend using Node also.

Node has a similar engine, callback queue and instead of web api's exist c++ bindings and thread pool(dont need to know rn.)

### JS in call stack : IMPORTANT

after code is compiled and is ready for execution, and the in the following manner :

**1.) First, global execution context is created(called top level code) :** first the global code is executed, since the function code is only executed once its called.

```js
const name = "preetam"; // top level code.
console.log(name);

const f1 = () => {
    console.log(f2());
};
function f2() {
    var c = 2;
    return c;
}
```

NOTE: that functions f1 and f2 will only be _DECLARED_ but wont be executed in the callstack.(i.e. they will just take memory in heap)

QUESTION : what is an execution context ?
ANSWER : an execution context can be called as a small part of stack that is part of a scope. eg. a function when called will have an execution context which will contain variables, functions etc. (like a function has its own inner scope its just that). Hence its just an abstraction. also note that the variables and functions declared within the execution context, only exist within that context.

QUESTION : what is global execution context ?
ANSWER : we know that one execution context can contain other execution contexts. the parent of all contexts that comprises of all the variables and function declarations and everyting globally without being bound by any internal execution context is called global context.

Hence the callstack is made of various execution contexts that are executed with stack behavior.

**2.) Callbacks :** for each function call, new execution context will be created. NOW, after the all of the callstack has been executed, WAITING FOR CALLBACKS WILL ALWAYS BE THERE.

QUESTION : what is execution context made of ?
ANSWER : Variable environment(variables and function declaration etc.), Scrop Chain and this keyword.

NOTE : arrow functions dont get their own this keyword, or argument object.

### this and argument object

we know what this is, but, an argument object is an array that comprises of all the arguments passed down to the function.

### Scopes in JS

NOTE: shadowing is when scope of an innner variable overtakes the scope of the outer variable with same name.

there are three types of scopes :

1.) Global
2.) Function
3.) Block Scope(ES6) eg. like that in if else block

NOTE: only 'let' and 'const' variables are scoped in block scope, the variables declared using "var" will not end their scope after block scope ends.

IMPORTANT : functions() are also block scoped, i.e. function defined in a block can only be accessed within that block(NOTE: in strict mode)

JavaScript follows lexical scoping and Lexical Scoping means that the scope of a function is defiend by where it is written.

NOTE: suppose there is a global var, which is accessed by fun() function. in this case, the var must be declared before the fun() is called. var can be declared after the declaration of function, but should be declared before the function is called the first time.(Since the global variable will only be needed when its called.)
HENCE WRITE THE GLOBAL VARIABLES AT TOP ALWAYS.

**functions and scope :** function declarations can be accessed from anywhere within the scope irrespective of the function defined below.
but Function expressions, can only be used by the vaiables in the same scope, defined below the function expression.

IMPORTANT : variables declared using var, are not block scoped, but function scoped(i.e. for, if else blocks cant scope it, it will get scoped to the function its inside or get global scoped.)

**If we remove Strict mode ?**
funcions are block scoped, but if we remove strict mode functions become functions scoped aswell.
BUT we always use strict mode.

### Variable Environment: Hoisting and the TDZ

**HOISTING :** makes some types of variabesl accessible/usable in the code before they are actually declared.

what it looks like :
"Variables lifted to the top of their scope".

what it is : "Before execution, code is scanned for vaiables declaration, and for each vaiable, a new property is created in the variable encironment object."

eg. we can use functions can be declared before declaration.

**Function Declaration :** Hoisted, Actual function as initial value, Block Scoped(in strict mode)

**Var variables :** Hoisted but in a different way but NOTE : if we try to access before declaration, ititial value is undefiend. also var are function scoped.

**Let & Const variables :** Not hoisted, and the initial value will be < uninitialised > , the area between starting of scope, and the declaration of the variables is called =)TDZ(temporal death zone) where the value will come out to be uninitialised upon accessing the variable. Hence we get error if we try using let and const before declaration of the variable. let and const variables are Block level.

**arrow and expression functions :** Hoising and initial value depend on wether the function is defiend using var or let/const.(hence if the function is defiend with var, it will be hoisted and the value will be undefiend whereas, if its let/const, there will be no hoisting and the value will be uninitialised)

```js
const myName = "preetam";
if (myName === "preetam") {
    console.log(`preetam is a ${job}`); // TDZ for job
    const age = 2037 - 1989; // TDZ for job
    console.log(age); // TDZ for job
    const job = "teacher";
    console.log(x);
}
```

Hence hoisting ensures that accesing variables before declaration will give error in case of let/const and will not give error in case of var.

### need of TDZ(Temporal Death Zone) ??

in es6 it was introduced and this makes it lot easier to catch and avoid errors. Since it gives errors ;). This also ensures that we have to define const at initialisation.

Hoisting was made only for the purpose of some coding practices. Like recursion is possible too.

These features cannot be removed from JS for backward comparibility.

NOTE: what happens when we try accessing a function expression/arrow function defined using var before initialisation ?? we get undefiend is not a function error. This is because the valur of var variables in TDZ is undefiend.

### Conclusion and best practices :

never use var.
always declare all variables first, followed by all the functions.

### Window object

window is the global object that contains the essentials like alert(), prompt() etc.

variables declared using var make a property in window object.

```js
var x = 12;
console.log(x === window.x);
```

the above code will print true, since x made using var will make a property called x inside of window also.

let and const wont create a property in the window object since, window object only contains the property that are hoisted. eg. var declarations and also function declarations.

### this Keyword.

this is a variable made for every execution context(scope).
this keyword will point to the owner of the fucntion in which this keyword is used.

Also note that this keyword is not static, and hence will change its values depending on where the execution is going on.

```js

    preetam: function () {
        console.log(this.preetam);
    },

```

in the above, this will be object1.

NOTE: so what if we try to access this in a function without any object ???
this will be undefiend in strict mode and when not in strict mode will point to global object!! so always use strict mode and this in global scope will point to Window class.

NOTE: arrow function dont get this keyword, and using the 'this' keyword inside of them will actually be the this keyword of the parent scope.(eg. if arrow function is defined in global scope, this keyword inside of the arrow function will point to the paret scope this which will be window class even in strict mode :)

#### this keyword in EventListener :

in the eventlistener , it points to the DOM element the eventlistener is attatched to

### Method borrowing :

when we copy method from one object to another :

```js
const obj1 = {
    val: function () {
        return 12;
    },
};
const obj2 = {
    var: 10,
};

obj2.val = obj1.val;
```

this is possible because of the existence of first class methods :)

### How to remove confusion if this can be used or not !

this keyword is the object using which we are calling the function

eg.

```js
const obj = {
    name: "preetam",
    fun: function () {
        let innerFunction = function () {
            console.log("this is inner function and name is " + this.name);
        };
        innerFunction();
    },
};

obj.fun();
```

in the above , we will get error saying that this is undefiend. this is because when we call innerFunction() inside of fun(), we are calling it without any object and without object, this keyword holds undefiend.

IMPORTANT: a regular function call has the this keyword set to undefined hence functions that contain this keyword, must always be called using the object name.

NOTE: we can even overcome this by in the scope of the object itself defining a 'var self = this;' and then we can use the self anywhere in the function now, to access the properties of the object.

or

we can use an arrow function !!! since arrow function dont get their own this keyword, this will point to object of the parent scope. !!!
HANDY !!!

```js
const obj = {
    name: "preetam",
    fun: function () {
        let innerFunction = () => {
            console.log("this is inner function and name is " + this.name);
        };
        innerFunction();
    },
};
obj.fun();
```

here the this keyword used inside of the arrow function actually is for the parent scope of the fun() function;

NOTE: Dont use Arrow functions to avoid issues LMAO

### Arguments Keyword

arguments keyword consists an array of all the arguments passed to a function.

in JS we can pass more paramenters than specified in the initialised function and can access them using the arguments keyword.

```js
function fun(a, b) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

fun(1, 2, 3, 4, 54, 5, 6, 7, 7);
```

in the above, we passed more than 2 parameters when fun() only had a and b specified.

NOTE: arrow functions dont get arguments keyword.Ṭ
But arguments is not used in modern JS since a better way exists.

### Primitives vs Objects :

**Primitives in javascript are :**
Number
String
Boolean
Undefined
Null
Symbol
BigInt

**Referece Types :**
Object literal
Arrays
Functions
Many more...

NOTE: Primitive types are stored in Call Stack, and Reference types are stored in Heap.

the identifier dont store the value !! they just have the address of where the value is stored in memory.

**BOTH CASES :**

1.) Primitive value : Identifiers contian the address information of where the value is stored.

Identifier --through stack memory Address--> Value in memory

2.) Reference values : Identifirs contain the address information of the value stored in stack memory and this value contains another address pointing to the heap memory

Identifiers --through stack memory address --> heap address value --- through heap memory address --> object in heap.

IMPORTANT : when we make a copy of primitive types, new memory in stack is allocated, whereas copying reference will make the two reference point to the same piece of memory in the Heap.

**const and reference types :**

now we know that there are identifiers, address to stack, address to heap, objects in memory.

the thing to note is, that when we make a const reference, we can change the object that it holds, but we cant change the heap address(Difficult i know)

or

we cannot change value of const primitive types, but we can change the values of properties of const objects!!!!

NOTE: const means that the value at the address const identifiers point to, must not change. hence value stored there in case of primitive types cannot be changed. But in reference type, the value is an address itself to heap memory, hence we cant change the heap memory but can freely change the content of the heap memory block.

```js
const object1 = {
    val: 12,
    num: 13,
};
object1.val = 13; // Allowed

object1 = {}; // not allowed
```

in the above, we can change a property in const object, but cannot change the whole object itself.

### How to shallow copy a reference ?

a shallow copy is, only copying the first level and for that :

we can use =)Object.assign({}, jessica2);

this object actually takes two objects and combine their contents and returns a new reference.

NOTE: there is a loophole though, if there is an object inside of the object, then the deep copy inner object and the original inner object will be same.

```js
const person = {
    name: "preetam",
    preetam: {
        surname: "singh",
    },
};

const shalloCopy = Object.assign({}, person);
```

in tha above code, person.preetam and shalloCopy.preetam are the same reference.

### Deep copy ??

Deep copy can be made using libraries and additional functions.

<hr>

## IMPORTANT CONCEPTS :

### Destructuring arrays :

Destructuring is to break a complex ds into a smaller ds like a variable.

we destructure array to store its variables into variables.

we can easily destruture using the suntax :

```js
const arr = [2, 3, 4];
const [a, b, c] = arr;
```

and we can go fancy and only take certain elements and ignore certain elements. eg.

```js
const arr = [1, 2, 3];
const [a, , b] = arr;
```

and a will be 1 and b will be 3.

NOTE: the original array is not affected.

**there are other uses too**

what if we want to swap values ??

```js
[first, second] = [second, first];
```

the above will swap variables.

NOTE: we can return multiple values using arrays, and when we are recieving the returned value, we can actually destructure the result into various variables to emulate as if the function has returned multiple values.

### Destructuring nested arrays ?

```js
const nested = [2, 3, [1, 2]];
const [i, , j] = nested;
const [a, b, [c, d]] = nested;
```

in the above case, i will be 2 and j will be another array containing 1,2.
and a = 2, b = 3, c = 1 and d = 2.

NOTE: what if we try destructuring an array into more variables then the content of the array ?? : in such a case, there will be undefined variables.

```js
let [a, b, c] = [1, 2];
```

in the above case, c will be undefined.

can we tackle this ?? yes we can

```js
const [a = 1, b = 1, c = 1] = [1, 2];
```

we can use this format to give initial values to the variables so that even if the array lacks elements, we can easily destructure it.

### Destructuring Objects :

yes we can !

here we use curly braces though

```js

const obj = {
    name: 'preetam',
    class : 'MCA',
    college : 'SGRRU',
};

const{name, class, college} = obj;
```

note : in objects, there is no sequence or structure and hence we need to name the variables same as the ones in the object.

or we can

```js
const obj = {
    name: "preetam",
    class: "MCA",
    college: "SGRRU",
};

const { name: preetamName, class: theClass, college: theCollege } = obj;
```

and this way we can give variabels names we want.

IMPORTANT: later working on web api's this will come in real handy, since recieving the objects or arrys we can easily destructure it into variables. eg, note how event object is returned by the event listener, we can easily deconstruct it into a variabels we want.

NOTE: what if we try accesing a variable that is not present ? we get undefined. and how to fix that ?

```js
const { name : newName = 'preetam', class : newClass};
```

and this way we can ensure that we get what we get a default value incase the property does not exist in the object.

VVVVV IMPORTANT: if the variabels we want the destrutured data to be stored already defined, we dont need to specify let or const etc in front. But for this all the deconstruction variables must be predefined.

HENCE : either all the variables used in deconstruction are predefined or not predefined or it shows, cant resassign OR not assigned error.

```js
let a = 12,
    b = 15;

({ a, b } = obj);
```

NOTE: int the above code, note that the reason paranthesis is need is because {} are for code blocks and we cant assign to a codeblock, hence {a,b} = obj is inappropriate, therefore we bind it into paranthesis so that the code makes scence.

**Nested Objects too work like nested arrays.**

```js

const obj = {
    name: 'Preetam',
    class: 'MCA',
    friends : {
        first :'Sahil',
        second:'himself'
        third: 'he',
        },
}

const { name: hisName, friends: {first:firstFriend, second: secondFriend, third: thirdFriend}} = obj;
```

IMPORTANT : we can actually pass in an object as argument and destructure the object in the parameter as shown below :

```js
const adder = function ({
    first: firstNumber,
    second: secondNumber,
    third: thirdNumber,
}) {
    return firstNumber + secondNumber + thirdNumber;
};

adder({
    first: 12,
    second: 13,
    third: 14,
});
```

all these can come in very handy, as we will see later.

#### delay in JavaScript

we can set a delay we can use =)setTimeout(function, delayInMillisecond);
and the function will be called out in delay specified.

### spread operator (...)

we can break an array into components using spread.

```js
const arr = [1, 2, 3, 4];
const arr2 = [1, 2, ...arr];
```

so spread operator expands the array seperated with commnas :)😀

hence ...arr = 1,2,3,4

and we can also use it when we pass arguments

```js
const newArr = [1, 2, 3, 4];

console.log(...newArr);
```

it will print 1 2 3 4(since console.log(...newArr) will become console.log(1,2,3,4) and seperated by, elements in console.log() are logged that way )

NOTE: difference in destructuring and spread operator is that, destructuring breaks the elements in seperate elements whereas spread operator can only be used when array elements are to be written seperated by commas.

**MAJOR USES OF SPREAD OPERATOR :**

1.) Copy Arrays : we can make shallow copy using

```js
const arr = [...arr];
//or
const arr = new Array(...arr);
```

2.) Join two Arrays : we can merge two arrays :

```js
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
array1 = [...array1, ...array2];
```

IMPORTANT: spread operator works on all iterables !!!

ie. we can work on strings also.

we can work using spread in objects also, but note that , console.log(...object1) will not work, as ...object1 = prop1: value, prop2: value and console.log cant print that.

NOTE: ALL in ALL ... just is asif we wrote elements seperated with comas ','s.

we used Object.assign() for swapping values for shallow copy, but now its much simpler with spread operator.

```js
let obj2 = { ...obj1 };
```

### Rest pattern and parameters :

Rest pattern is brother of spread operator.

While spread is to unpack an array, while rest it to pack elements into array.

They are used in the same syntax BUT, when used on left of the assignment operator its rest and on right its spread.

```js
const arr = [1, 2, ...[3, 4]]; // spread
const [a, b, ...others] = [1, 2, 3, 4, 5]; // rest
```

NOTE: rest pattern, takse the elements seperated by commas into a single variable.

we can easily use the rest operator and spread operator together.

```js
const arr = [1, 2, 3, 4, 5, 6];
const arr0 = [7, 8, 9, 10];
const [...arr2] = [...arr, ...arr0];
```

we can go very fancy with these :

```js
const arr = ["sunday", "monday", "tuesday", "wednesday"];

const [day1, ...arr1] = arr;
```

in the above, day 1 gets sunday and rest are taken by rest operator.

Its also OPE for passing n number of parameters and accepting them in an array. Its pretty impressive how that works.

```js
const add = function (...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
};

add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7);
```

ALL IN ALL NOTE : spread operator is used where we would use values seperated by comma, whereas, rest operator is used where we would use variables seperated by commas.

### Short Circuiting (&& and ||)

In js, outcome of || and && is not always boolean !!!!

We already know that working on truthy and falsey value is that when we convert truthy value to boolean, they give true and falsey values do the opposite. But what if operands of || or && operators are non boolean ?

Logical operators can work on any data type.

**When we use non boolean operands with || and && operators, the result is non boolean. **

and

**Short circuiting is when an expression is not evaluated fully and result is determined before full evaluation of expression**

eg.

```js
console.log(true || false);
```

because of the OR gate in the above code, the expression will not be read after the || since the result will be true anyways.

1.) in case of OR(||) operator : if the first value is truthy, that value is returned and the second operator wont even be checked **and this is short circuiting**.

and if the first is falsey and the second value is truthy, that will be the outcome.

and if both values are falsey, the second falsey value will be returned.

OR operator shortcircuits when a true value is present at the start.

IMPORTANT NOTE : this behavior will work with any number of operands !!! eg.

```js
console.log(undefined || 0 || "" || "Hello" || 23 || null);
```

Hello will be the outcome, since hello is the first truthy value in the chain of operations.

use Case :

```js
const value = num1 ? num1 : 10;
// or
value = num1 || 10;
```

if we want to give value 10 if variable is not defined, this works.

2.) in case of AND(&&) : and works opposite of OR.

AND operator shortcircuits, when a flase value is present at the start.

if the first value is falsey, the returned value is the first value.

if the first is truthy and the second is truthy, the returned value is second value.

if both the values are truthy, the second value is returned.

use case :

```js
if (function1) {
    function1();
}

// or

function1 && function1();
```

in the above case, we want to call a function if it exists, and this code works well wih && short circuiting.

NOTE : So how to know what value will be returned all in all?

the value at which the net result is evaluated, i.e. the value at which the outcome is fixed and determined and we dont need to go further :)

### Coalescing Operator(??) (ES 2020)

in the code :

```js
const num1 = 0;
const val = num1 || 10;
```

we want to give val value 10, only when num1 is not defiend, but since 0 if a falsey value, even if num1 is defined but has value 0 it will return 10. NOT IDEAL !!

**NULLISH COALESCING operator works not on truthy or falsey value but on Nullish values**

only Null and Undefined are NULLISH values.(not 0 or '')

NOTE: ?? is like OR for NULL values !!.

HENCE :

if first value is NOT nullish, returns that value.

if the first value IS nullish but the second is not, returns second value.

if both the values are nullish, returns the second value.

IMPORTANT TRICK :

```js
let greater = (num1 < num2 && num2) || num1;
```

the above code can be used to find the bigger number among two numbers without using If Else or ternary opeartor.

### Logical Assignment operator (ES 2021)

```js
const num = num || 10;
//or
num ||= 10;
```

lol, ||= , &&= and ??= do exist :)

### FOR-OF loop (ES 6)

```js

for(const var of arr)
{
    console.log(item);
}
```

new way of iterating over elements :). Somewhat like advanced for loop.

NOTE: for of loop supports break and continue.

### entries()

=) arr.entries() method in array returns an object of array iterator type.

NOTE: iterators are DS which store data in sequence that can be accessed in sequence.

the iterator returned consists of arrays with [index, element] format.

```js
const arr = ["Preetam", "Singh", "Sahil", "Dartz"];
arr.entries();
```

here the format of data stored inside of the iterator returned by entires will be :
[ 0, 'Preetam']
[ 1, 'Singh']
[ 2, 'Sahil']
[ 3, 'Dartz']

and we can iterate through iterator using for-of loop (NOTE normal indexing dosent work for iterator object but we can access the individual internal arrays using for-of loop)

IMPORTANT: we can use destructuring to easily access the elements of an array using .entries()

```js
const students = ["Preetam", "Singh", "Sahil", "Dartz"];

for (let [rollNumber, name] of students.entries()) {
    console.log(`The student with roll number ${rollNumber + 1} is ${name}`);
}
```

NOTE: not all iterable features in JS can use accessed using indexing, but they all respond well to for of loop

=) fromEntries() : this is the reverse of entries and wil convert the tuple of array format back to Object format Eg :

```js
[[1,2],[2,3],[4,5]]
// will becomes :
{
    1:2,
    2:3,
    4:5
}
```

<br>

### Enhanced Object Literals

ES6 made 3 ways to make object literals(object literals are when objects are declared like variables.)
so the enhancement are :

1.) Copying external stuff inside object :

if we want to initialise a paramenter inside of object literal and that parameter exists outside of object literal , we can simply do this.

```js
const num1 = 12;
let obj1 = {
    num0: 13,
    num1,
};
```

this will automatically make a parameter named num1 inside of object literal and that too with the same value as mentioned in 'const num1'.

2.) Declaring functions :

we dont need function keyword and ':' inside of object literal to setup a function.

```js
let obj2 = {
    funct(arg1, arg2) {
        return arg1 + arg2;
    },
};
```

and this is kinda lit.

3.) IMPORTANT : Compute properties name !!!

yes, we can compute object name based on calcualtion !!!

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let object1 = {
    [`variable-${arr[0]}`]: "Preetam",
    [`variable-${arr[1]}`]: "Singh",
    [`variable-${arr[2]}`]: "Kathait",
};
```

This iscrazy good !!!.

<br>

### Optional Chaining (?.) ES 2020

NOTE: remember, when we try to access a property of 'undefined' object using '.' operator, we get error 'cannot read property of undefiend'!!

Optional chaining ensures that this is avoided and checks if the object exists in the first place. WE can even chain many ?. in same statement.

```js
let obj1 = {
    name: "preetam",
    class: "MCA",
    obj0: { x: 12 },
};
console.log(obj1.obj2.y); // gives error
console.log(obj1.obj2?.name); // returns undefiend since obj2 does not exist as a property in the obj1
```

in the above code, inside scope of an object, we dont know if an object property exists or not, and we know that accessing element of a property that does not exist gives error. _Hence optional chaining operator will check the property name written before the ?. and if it does not exist, will short circuit and return undefiend and will not go to the statement after ?._

IMPORTANT: Optional chaining only checks for existance of object parameters, and hence will not work for objects defined within global or function scope. HENCE only check for existance of objects within objects !!!!. This is because, if we try using it for normal objects, the error is direct!! that "not defined".

NOTE: this is very useful incase of where we dont know if there exists a property or not, and YES we can use if else to check if its defined or not, but this is shorthand way.

Optional chaining also works on Nullish values(Undefined and null).

**_OPTIONAL CHAINING WITH METHOD ?_**

yes, we can pass in functions in a method inside object, based on if it exists or not,

eg

```js
let obj1 = {
    prop1: 12,
    prop2: 13,
    prop3: 14,
    fun(a, b) {
        console.log("lets go", a, b);
    },
};

obj1.fun?.(0, 0);
```

in the above code, it will return undefined incase the fun() does not exist.

**_OPTIONAL CHAINING WITH ARRAYS?_**

we can use optional chaining to check if certain index elements exists, eg.

```js
const arr = [{ name: "preetam" }];
console.log(arr[0]?.name);
```

if index 0 does not exist, name will not be called !!.

HENCE AVOIDING ARRAY INDEX OUT OF BOUNDS, This is LIT AFFFF.

NOTE: we can do all this with help of if else and stuff, but these things save a lot of time.

<br>

### Looping over objects. Keys Values Entries

NOTE: properties are also called Keys.

we can indirectly loop over an object using for of loop.

=)Object.keys(object_name) : returns an array containing all the property names present in the object in string format :).

```js
let obj1 = {
    p1: 1,
    p2: 2,
    p3: 3,
    p4: 4,
};

for (let a of Object.keys(obj1)) {
    console.log(a);
}
```

this array with property names is handy as now we can find the number of elements and a lotof stuff and this is very usefull.

=)Object.values(object_name) : this gives out an array containing all the values of object properties.

=)Object.entries(object_name) : actually gives out the entires in form of array inside of an array. eg. [ [ key1, value1],[ key2, value2], [ key3,value3]].

NOTE: this is somewhat like the arr.entries() function inside of arrays, but here, array is returned, and there iterator was returned.

### SETS

in ES6 two DS were introduced in JS

Set is a collection of unique values and has no duplicates.
we can make a set by passing an array into the constructor of the Set.

```js
let arr = [1, 2, 3, 4, 5];

const orderSet = new Set(arr);
```

We can simply make a set using curly braces also :
eg :

```js

let setA = {1,2,3,4,5};
```

NOTE: not just array, it can take any iterable, eg string arrays etc.

there are methods like =)set.add(), =)set.has() and =)set.clear()

there are also variables like =)set.size.

NOTE: indexing does not work in set. Since we are storing unique values. Hence we use array only for storing and checking if another value exists.

IMPORTANT : Order is not there in set, nor is indexing but we can use 'for-of' loop for iteration.

The main usecase of a set is to remove duplicate values from an array.

**IMPORTANT : spread operator works on all iterables and hence its possible to use it on sets.**

the main advantage is that we can use it to copy data from set to array and vice versa.

```js
let st = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
let [...arr] = [...st];
```

here is a shortcode to remove all unique values out of an array.

```js
let arrayWithDupe = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let [...newArrNoDupe] = new Set(arrayWithDupe);
```

**Number of unique elements in an array ?**

```js
let arr = [1, 2, 3, 4, 4, 3, 2, 1];
console.log(new Set(arr).size);
```

### MAPS

Maps are lot more useful than sets !

in JS map is a ds used to map values to keys.

NOTE: DIFFERENCE BETWEEN Maps and Objects? in Objects keys are strings wheres in Maps keys can be of any type !!

easiest way to create a map, its best to create empty map, and them pass inn key values pairs using =)map.set(key, value) method.

```js
const rest = new Map();
rest.set("key1", "value1");
rest.set(2, 2);
rest.set(3, true);
```

NOW set method returns the new map after adding the key value pair, which makes the CHAINING POSSIBLE !!!.

NOTE: chaining can be done in the case of sets =)add() method also. Since we dont have to worry about the order of elements aswell.

```js
const mep = new Map();
rest.set(1, 1).set(2, 2).set(3, 3);
```

on map we use =)get(key) method to get value.

map also contains =)has(key) method.

=)delete(key) is used to delete elements.

=)size and =)clear() also exist.

IMPORTANT NOTE:

```js
const mep = new Map();
mep.set([1, 2], "array");

console.log(mep.get([1, 2]));
```

here, undefined will be logged !! this is because the array in set method and the one in get are seperate in heap !! hence 😀😀😀

we can even set a DOM element as a key wkwkwk

NOTE: set method is a bit cumberomes, since calling if mulitple time is tedious

there is a better way of making keys.

**We can pass inn an array containing arrays with key values pairs in constructor of the MAP.**

```js
let newMap = new Map([
    [1, "c"],
    [2, "java"],
    [3, "javascript"],
]);
```

this format looks familiar ?? Object.entires();

IMPORTANT : hence it is possible now to actually to easily convert an object into Map.

```js
let obj = {
    a: "apple",
    b: "ball",
    c: "cat",
};

let objMap = new Map(Object.entries(obj));
```

so easy ;)

Also for-of loops works in maps

```js
for (let [key1, value1] of setMap) {
    console.log(`KEY : ${key1} | VALUE : ${value1}`);
}
```

NOTE: like objects, we can use =)map.keys() =)map.values() =)map.entries() which return iterables.

### DS Overview :

Data can come from :

1.) Our own code
2.) user interaction with UI
3.) external API

for storing this data we use DS.

IMPORTANT NOTE : the most common form of data is that given by web API in form of JSON format.

Json fomat data can be easily formatted since, its in fomr of objects and arrays

json contains objects, that contain variaous key values pairs. Here values can be array containing various objects eg. :

```JSON
{
    "count" : 3,
    "recepies" : [
        {
            "publisher" : "Preetam",
            "ingredients" : "lemon"
        },
        {
             "publisher" : "Sahil",
            "ingredients" : "Salt"
        },
        {
             "publisher" : "Sahil singh",
            "ingredients" : "Soda"
        },
    ],

}

```

NOTE : there are other built in ds in js like : weakmap and weakset.

JS does not include Data structures like : Stack , Queues, LinkedList, Trees and HashSets.

USE CASES FOR DS in JS :

1.) Arrays : structured data where manipulation is needed

2.) Sets : High performance and duplicate removal.(Search and deletion is 10 times faster than in Arrays )

3.) Objects : Traditional and not just for key value storing. Easier to access using [] and . Use when storing functions as values and while working on JSON.

4.) Maps : new key value storing DS with better performance and any datatype key. Use when simple key value is needed.

<br>

### Strings(IMPORTANT)

We work with strings all the time.

Indexing works with strings.

=) indexOf('element'); gets the index of first occurance an element in the strings.
=) lastindexOf('r'); gest the index from last.

if not found , returns -1.

=) slice(start, end) : takes index and returns a substring.
there exist some overloadings like slice(start) which takes all the remaining string from start index.(note: end is exclusive)

NOTE: methods in strings dont change the original string since mutating a string is not possible as its a primitive type.

We can pass nevagive values in slice, and it will start from the back.

IMPORTANT NOTE : if strings are primitive, how do methods work ????

its beacuse JS is smart, it actually takes the primitive and converts it into a Strings class object that has the methods.

**THIS IS CALLED AUTOBOXING**

hence :
_whenever we call a method for a primitive string, it is converted to object String and then after operation converted back to primitive. NOTE : the methods in String class return primitive strings !_

**Some string methods :**

=) toLowerCase()
=) toUpperCase()

we can concat strings using + operator.

=) trim() : removes all spaces and linebreaks(\n) from start and end.
=) trimStart() : do the same but only start
=) trimEnd() : do the same but at end.

NOTE: since the methods return the new string, we can chain methods.

=) replace('a', 'b') : replaces first occurance of a substring with another.
=) replaceAll('a','b') : replaces all occuances.

=) includes('element') : returns boolean to check if element exists or not.
=) startsWith() : to check if it starts with
=) endsWith() : to check if it ends with.

when working on strings its a general practice to convert a string into lowecase. since it becomes much easier to inspect the string.

=) split('+'): splits array into smaller parts based on substring passed, and returns an array containing the split substrings.

=) array_containing_strings.join('-') : will join elements in a strings with the specified parameter in between.

**Padding in strings**

padding is adding certain characters to end and start of a string to make it of a desired size.

IMPORTANT :

=) .padStart(12, "_") : will make the string 12 long and if he string is short, will padd using the _.

=) .padEnd(20, '+') : will padd the end to reach the desired size.

what if the padding size is smaller than the size specified ? NOTHING HAPPENS LOL.

NOTE this can be used incases like how a credit card number always begins with 0's to show what the range can be. eg. 0111 indicates that the number can range from 0000 to 9999.

=) .repeat(number) : will repeat a string number of times.

IMPORTANT NOTE : note that, if we want to keep track of elements and index of array at the same time, we san use the entries() method and [ key, value].

<br>

## FUNCTIONS

### Default parameters :

Suppose, in a function with multiple parameters, user dosent pass enough values. In such cases, the value of the parameters will be set undefined.

IN ES6 default parameters were introduced.

```js
let newFunction = function (a = 1, b = "b") {
    console.log(a + b);
};
```

in the above case, incase the user does not pass values of a and b then the value will be the default one.

and the second parametere can use the value of the first parametere also.

```js
let newFunction = function (a = 1, b = 2 * a) {
    console.log(a + b);
};
```

NOTE passing undefined as a parameter, is same as not passing anything, and hence will trigger the default values.

### Call by value and call by reference :

primitive types are passed in as values whereas, non primitive types are passed as refereneces.

IMPORTANT NOTE : remember that in the stack, primitive values have their values stored whereas reference types store

Passing primitive types means passing in the value(since stack has the value) whereas passing in reference, we know the value of it in stack is the address in heap hence: passing primitive is passing value, whereas passing reference is passing address to an object in heap.

VERY IMPORTANT NOTE: JS does not have pure pass by reference, in languages like c++, we can pass reference to a primitive type also since we can make pointers to address. In JS it looks like we are passing a reference but what we are doing is passing an address stored as value in stack. Hence JS only has pass by value. Since we are only able to pass address of values in the heap and not the primitive type in JS whereas in languages like C++ we can pass the reference of the primitive types aswell.(Since address of heap itlself is a value in the stack).

<br>

### First class function and Higher order functions

First class means that functions are treated as values. Since in js, functions behave like objects and hence we can do so much.

and we can pass functions also to other functions. we can return a function.

AND there are Methods for functions ??????????????????????? WHATTTTTTTTT

**Higher order functions :**

these are function that recieve another function or return a new function or does both.
eg. addEventlistener() is a higher order function. Since it takes in a function.

NOTE : in practice, there are no first class function, its just a concept where functions are treated as values. But in practice we have higher order function that work with first class functions.

=) funtion.name : we know that function have methods and even properties, name is a function property that is used to fetch the name of the function.

=) array.forEach(to_be_executed) : for each element fo the array to_be_executed code will be called.

**Why are callback useful ?**

There are like so many things that callback functions can be used for. One of them is Abstraction.

HOW abstraction? : the higher level function that gets the function as argument, does not care about how the function in argument operates. DOES NOT HAVE TO KNOW. and that is the abstraction.

```js
const oneWord = function (str) {
    return str.replace(" ", "").toLowerCase(); // removes spaces
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" "); // makes the first word upper case
};

// Higher-order function
const transformer = function (str, fn) {
    // the transformer function does not have to know how fn works
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`Javascript is the best!`, oneWord);
```

the above code is one of the usecases of JS

NOTE : arrow function returning another arrow function looks kinda funny :

```js
const fn = () => () => console.log("this was done :)");

fn()();
```

#### The call , apply and bind methods :

imagine a case where there exists a method inside of object, now , in the method we can use this keyword since it exists within an object. but what if we store the method using the high order function inside another variable?

```js

let obj = {
    data : 12;
    printData(){
        console.log(this.data);
    },
};

let newFunction = obj.printData;
newFunction(); // throws error
```

this will throw error since the value of this for a function in global scope is undefined.

so what is the fix ?

WE have to mention what this keyword does in explicitly.

=) call : we can call newFunction in above code using : newFunction(object_this_points_to, arg1, arg2, arg3,....);

hence the first argument is the object that this points to in an external function :).

=) apply : apply works like call but, call accepts the remaining arguments whereas, apply accepts the argument list in array format.

IMPORTANT : =) bind : bind is more important that call and apply method, now bind will take in a object that is to be considered this keyword but, will not call the function and instead return a new function. Also bind does not accept the arguments as they are to be specified later once the this keyword equivalent is set. : bindFunction(object_this_points_to, ...arguments)(...arguments);

```js

let obj = {
    data : 12;
    printData(){
        console.log(this.data);
    },
};

let newFunction = obj.printData;
let bindFunction = newFunction.bind(obj);
bindFunction();
```

we can pass the arguments too but they become the default in the resulting function
eg. :

```js
let obj = {
    number1: 12,
    printSum(number2, number3) {
        console.log(`${this.number1 + number2 + number3}`);
    },
};
let newFunction = obj.printSum;
let bindFunction = newFunction.bind(obj, 0);
bindFunction(12);
```

in the above code, the 0 that we have specified will be the fixed value of the argumnet number2 for the function bindFunction. :)

**Other uses of bind method** :

IMPORTANT NOTE : remember , in an event listener function, this keyword always points to the query the event handler is atatched to !!!

eg. in document.querySelector('.class1').addEventListener('click', function_event);

in the above code, if there is a this keyword in the function_event, it will point to the query(tag) that function is attatched to.

hence, we need to define what this points to :)

the reason why we cant use call method for this and bind is the one to be used? : since call calls th function aswell whereas, bind returns a new function.

hence the above code will be fixed by : document.querySelector('.class1').addEventListener('click', function_event.bind(obj1)).

#### Partial Application for bind()

we can use bind to set predefined values of arguments too.

eg :

```js
const addTax = (rate, value) => value + value * rate;
const addVat = addTax.bind(null, 0.23);
```

so we can set the value of this to be null, or the function even and preset the value of the argument, But NOTE: the value that we want to be predefined, we need it to be the first one in arguments or it wont work, eg. we have to make rate as the first argument in the above example for this to work :)

NOTE : what if we want the method with this keywords in code to work for a global scope :)

```js
let obj = {
    arr: [1, 2, 3, 4, 5],
    method1() {
        console.log(this.arr);
    },
};

arr = [1, 2, 3, 4, 5, 6, 67];

obj.method1.call({ arr });
```

in the above code, we made a temporary obj :)

### Immediately Invoked Function Expressions :

```js
(function () {
    console.log("Preetam");
})();
//or
(() => console.log("Preetam"))();
```

hence in the above code we are immidiately callin the function, by binding the whole function body in brackets and then just calling it immediately. Hence, the function will only run once :)

not used very much now :)

### Closures (IMPORTANT)

Closure is the concept in which a function preserves an outer variable value even if it is no more in memory.
We can say in a way, that closure helps a function remember all the other references that existed when the function were created, and even after the scope of those references ends, the function remembers them.

```js
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
```

in the above code, once secureBooking() is called to be stored in booker, the scope of the function secureBooking ends, and hence passenger count should no more be in memory but, when booker is called it will be able to use the passengerCount and make chenges to it even though it it not in the parent scope. this is the concept of closure.

This behaviour can not simply be explained by the scope chaining alone.

secret : every function has access to the elements of the scope it was originally defined in even if the scope is no longer in the memory.

Hence CLOSURE is the variable environment attatched to a function based on the scope it was defined originally. Event after the scope is destroyed meaning even if the scope is destroyed, the variable environment keeps living.

=) console.dir() : gives a list of properties that exist within a JS object.

when we inspect a function using console.dir, we are able to see closure section containing the variables in the scope.

```js
let f;

const g = function () {
    // the function g when called, will define the body of function f.
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

g();
f();
```

NOTE : that even when f is delared in global scope, the closure is that of where the function body was defined.

```js
let f;

const g = function () {
    // the function g when called, will define the body of function f.
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    // the function h when called, will redefine the body of function f.
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
h();
f();
console.dir(f);
```

in the above code we will notice that , the closure will change based on where we define the body for the function and since we redefined it in the h function, the closure will change for f() after h() is called and we lost value of a in closure.

```js
let printIt;
const fun = function () {
    const a = 12;
    (function () {
        console.log(a);
    })();
};
let a = 13;
fun();
```

in the above code, the closure variable a will have more priority than the global a, incase we remove the closure variable a then the global a value will be considered for printIt();
this implies that the closure has more priority than scope chain.

IMPORTANT NOTE :

```js
(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";

    document.querySelector("body").addEventListener("click", function () {
        header.style.color = "blue";
    });
})();
```

in the above code note that in the function inside of querySelector, we are able to access header even when we know that by the time callback function is called the original IIFY scope will be gone, but closure helps, implying that closure will be there for the function passed in the callback function.

### ARRAYS :

arrays have methods in JS by default, since array in JS are objects themselves.

=) arr.slice(end_index) : gets a chunk of array from start to the end_index.
=) arr.slice(start_index, end_index) : so we can also mention a start index and end ends where, end_index is exclusive.

in the above we can pass -ve index to fetch fron the end.

=) arr.splice(end_index) : this affects the original array :).
=) arr.splice(start_index, number_of_elements_to_be_removed) : here we mention the starting index and then the ending index.

=) arr.reverse() : this one mutates the original array :)

=) arr.concat(arr2) : returns a new array that is additive both 1st and 2nd array.

=) arr.join(symbol_in_string) : returns a string that comprises of all the elements of arr, combined with a symbol in between.

=) arr.at(index) : will return the value at specified index in array. Why use this inplace of square brackets?

we can use negative index here to fetch elements from the end of the array. also helps in method chaining that we will learn later about. NOTE : at() also works on strings.

#### forEach() method ?

=) array.forEach(call_back_function(element)) : for each method will call the callback function for each iteration of the array. also the call_back_function will recieve the element of the array as argument.

=) array.forEach(call_back_function(element, index, array )) : we can actually fetch the index also using forEach and also the original array. This can come in handy because in for of loop, we need to use array.entries() to access the index, where as this is just convenient :).

but, for each can not break out of iteration whereas in for of loop can break.

NOTE : for each also wroks with maps and sets :)

_For each on maps :_ =) map.forEach(value, key, map) so the for each will pass in value, key and original map as arguments in the callback function.

_For each on sets :_ =) set.forEach(value, value, set) IMPORTANT NOTE : set does not have key and value, so why is ther value twice?
both will have same value. this was done to keep the same signature of 3 parameters as other hence.

### NEW DOM ? POG?

=) html_tag.insertAdjecentHTML(position_wrt_tag, html_code_string); : this is used to insert html code in a query and there are 4 positions :
'beforebegin' : before beginign the selected query
, 'afterbegin' : after begining the selected query
, 'beforeending' : before the neding of the selected query
, 'afterending' : after begining the selected query

=) html_tag.insertAdjecentText(position_wrt_tag, string); : used for inserting normal text

=) html_tag.innerHTML : we can set the whole code inside of the tag using this, we can even override the current code :) IN THE TAG !!! it is kinda similar to textContent but, textContent gives the text only whereas innerHTML gives out tags and everything else too.

### DATA Transformation in JS :

In JS some array method share very important : Map, Filter and Reduce.

_Map :_ similar to forEach but, it creates a brand new array based on array, so it will apply a callback function to the current array elements one by one. we say _"we map the value of one array into a new array based on a callback funciton"_.
=) arr.map(callbackFUnction(current_element, index, array)) and the callback function should return the new value for the new array.

_Filter :_ used to filter some elements into a new array based on a condition.
the callback function in this case should return true or false based on if the element is to be included in the new array.

_Reduce :_ returns a single value after working on the array.(eg. sum of all elements of an array)
NOTE : in filter method, the first parameter is not the current array element BUT, accumulator !!!
arr.reduce(function(accumulator, element, index, arr){ return new accumulator }, accumulator_initial_value);

so the accumulator is the value of accumulator returned in the previous instance. Also the first value of accumulator will be 0 by default, but can be passed as the 2nd argument in reduce function after the callback function.

```js
const arr = [1, 2, 3, 4, 5];

const newArray = arr.map(function (element) {
    return element + 2; // the value we return will be the value that is given to the corresponging position in new array.
});
```

```js
const arr = [1, 2, 3, 4, 5];

const newArray = arr.filter();
```

now, why do we need these functions when we can simply use the for method ?, so that we can simply chain these methods :)
and that chaining comes in handy

**Other important Methods :**

=) arr.find( callback_function(element, index, array) ) : find is used to return a single element, And the first element that satisfies the condition in the callback_function and returns true will be returned. Hence this is somewhat like filter but instead of returning an array, it returns the first occurence of element.

if no such element is found, it returns undefined.(use optional chaining incase there can be issue with undefined)

=) html_element.blur() : helps the element to lose focus when we dont want tags like input field(with blinking cursor).

=) arr.findIndex(function(element, index, array)) : returns the element index based on the boolean returned by the callback function.

alternatively if we know the value we are looking for we can call =) arr.indexOf(element) to fetch the index.

**_some() and every() :_**

we check if array contains element using =)arr.includes() , but, what if we want to check a range?

=)arr.some(function(element, index, array){}) => will return true or false if there exists any element that satisfies the condition in function() also, the callback function must return boolean.

=)arr.every(function(element, index, array){}) => returns true only if all the elements in the array satisfy a condition. The function returns true/false and if all values are ture, that means arr.every will be true.

**_flat and flatMap :_**

if we have an array that contains array containing subarrays, and we want to make a single array with all the elements what do we do ?

=)arr.flat(depth) : will open up all arrays into a single array. we can pass the depth that will tell to what level of nesting can the array be flatened. NOTE : by default depth is 1 and hence will only unlock 1 level of nested arrays.

=)arr.flatMap(callback_function) : combines the map and flat method. Hence its just a map that will flatten the array BUT only 1 level.

**Sorting arrays :**

=) arr.sort() : NOTE : sort method, does sorting by converting stuff into strings and hence messess up when we feed it negative values.(it sorts alphabetically so that it can sort strings also).

=) srr.sort(function(parameter1, parameter2){}) : we can use a callback funtction that accepts 2 parameters and actually define the logic for conparison. (NOTE : remember, the element that returns +vs when its greater will be prioratiaed.):

```js
array.sort(function (a, b) {
    if (a > b) {
        return 1; // any positive number will do
    }
    if (b > a) {
        return -1; // any negative number will do even 0
    }
});

// OR

array.sort(function (a, b) {
    return a - b;
});
```

NOTE : the trick above is god tier lmao since if a is greater than b, a-b will always be positive and if a is smaller it will always be negative hence.

=) arr.fill(value) : fills entire array with the given value.
=) arr.fill(value, begin) : overloading
=) arr.fill(value, being, end) : note that the end in non enclusive.

=) Array.from({length: 7}, (value, index)=> value); will return an array with size 7 and all the values fileld with value. note , we are passing an object with length propert and in 2nd we pass a mapping function.

NOTE : if there is a parameter that you are not using, u can place an \_ there so that its redable that the parameter is un readable.

IMPORTANTNOTE : The main use of =)Array.from() is to convert one iterable to another. so =) Array.from(itreable, callBack(value, index){ operation_on_individual_elements}) : and this actually returns an array from any types of itrealble.
This comes in handy when say we used querySelectorAll and got an NodeList of all the query, then we can use the from method to actually convert it into array and use the other OP array methods like, map(), filter() & reduce() etc. or :)
WE can always use the spread operator lol.

#### Which Array methods to use when !!

1.) To Mutate Original Array : > Adding to the original : .push .unshift > Removing from original : .pop .shift . splice > Others : .reverse .sort .fill

2.) A New Array : > Computed from original : .map > Filtered using conditions : .filter > Portion of original : .slice > Adding original to other : .concat > Flattening the original : .flat .flatMap

3.) An Array Index : > Based on value : .indexOf > Based on test condition : .findIndex

4.) An Array Element : > Based on test contdition : .find

5.) Know if array includes : > Based on value : .includes > Based on test condtions : .some .every

6.) A new string : > Based on separator string : .join

7.) To transform to value : > Based on accumulator : .reduce (to boil down array to single value of any type: number, string, boolean or even new array or object)

8.) To just loop array : > Based on callback : .forEach Does not create a new array, just loops over it.

<br>

### NUMBERS AND DATES :

#### Numbers :

in js, numbers are stored as 64 bit floating point numbers.
LMAO : in js console.log(0.1 + 0.2); gives 0.3000000000000004 lmao and (0.1+0.3 === 0.3) IS FALSE !!!!!!!!!!!!
this is because js does some -\_- rounding off .

we can convert string to number using =)Number("string"). or

=) +string : will make the string into a number hehe

// Parsing :
but what if we want to extract number out number of a string starging with numbers?

=) Number.parseInt('30px') : is capable of xtracting numeric part of strings if the number is a prefix. If string does not start with numer we get NaN.(NOTE: it can even start with spaces followed by numbers :)

=) Number.parseInt("string", base/radix) : we can pass onn a radix/Base of the number system we want to extract from the string.

=) Number.paserFloat("String", '2.3rem');

=) Number.isNaN(input)// Depricated : helps determine if an input is a Number. 23/0 is NOT a NAN.and equals infinity. and hence this same method returns infinity if the input is infinity.

NOTE : Infinity in js is infinity :)

=) Number.isFinite(input) : can be used not just to check if a value is non infinite but also, used to determine if the value is a number, hence use this :) in place of isNaN.

=) Number.isInteger(input) : used to check if number is integer. IE. does not have a fraction part :)

=) Math.sqrt(value) : to find the square root. or (23 \*\* (1/2))

NOTE the only way to evaluate cubic root or below is using : number \*\*(1/3)

=) Math.max(...numbers) : returns the biggest number and remember, it does type coersion hence if there is a number in string format, it will be converted and compared.

=) Math.min(...numbers)

=) Math.PI : value of pi

=) Math.random() : gives a number between 0 and 1

=) Math.trunc() : remove the decimal part

=) ( Math.trunc(Math.random()\*(max-min) + 1) + min ) : will generate a random number between min and max.

=) Math.ceil(value) : the larger value . with type cohersion

=) Math.floor(value) : the smaller value.

trunk vs floor : floor will always round towards 0 whereas trunk will just remove decimal.

NOTE : its better to use floor while random number generator since that way it will work for negative values too.

=) decimal_number.toFixed(number_of_decimal_parts) : return a rounded off decimal number but in string and note.
NOTE : the number of decimal parts takes the decimal places till which rounding is to be done. eg. passing 3 will round off so that max digits after decimal will be 3. And passing 0 will work like ceil() from Math.

#### Remainder opeartor :

we can use % and we can divide index with %n for actions at nth time. eg. %2 for every 2nd index :O

#### Numeric Seperators :

we can store numbers using \_ eg. 100_100_100 is 100100100 but to readers this gives redability.
Under score can only be used between numbers and not after or before decimal exactly nor at the end of a number and starting REMEMBER ONLY IN BETWEEN NUMERAL LITERALS.

also NOTE : if string number has it in betwen eg. "123_123" this will not convert to 123123 but NaN if we use the Number() but if we use parseInt its all good :)

### BigInt

Big Int was introduced in ES 2020.
IMPORTANTNOTE, normal numbers are made of 64 bits Only 53 store the number while the rest store the sign and decimal position.
hence limit of largest int is -2^52 - 2^53-1.

=)Number.MAX_SAFE_INTEGER : gives the largest possible value of Numbers in java script.

so how to store numbers this big? WE put a suffix n

hence

```js
console.log(3524523452345234523452345324532452345345n);
console.log(typeof 20n);
```

we can convert using constructor BigInt() too but ... aint reliable.
multiplication of any type of number with BigInt will be BigInt.

note that math operations from Math class dont work well with bigint.

NOTE : Big int cant work with decimals and hence will floor.

### DATES AND TIMES :

can be a little messy in JS.

**_HOW TO CREATE DATE : _**

=) new Date() : creates new date :)

=) new Date(string) : we can pass in a string with date and time and javascript will parse the string with its intelligent function.

```js
console.log(new Date("aug 02 2020 18:05:41"));
console.log(new Date("December 23, 2015"));
```

BUT its quiet reliable hence its better to use better stuff.

=) new Date(year, month, day, hour, minute, second) : NOTE : when we pass month, THE MONTH IS 0 based hence the month we can pass from 0-11.

IMPORTANT : =) new Date(time_after_in_ms) : we can pass a number that will be the ms after the date : Thu Jan 021 1979 01:00:00 GMT+0100(Western European Standard Time).
NOTE : 1 day = 24*60*60\*1000 ms.

=) date.getFullYear() : will fetch the year.
=) date.getMonth() : NOTE : this will give the 0 based month number.
=) date.getDate() : will fetch the day of month
=) date.getDay() : will bring the day of the week.
=) date.getHours() :
=) date.getMinutes() :
=) date.getSeconds() :
=) date.toISOString() : will giveout a useful string containing all the date regarding a date object.

=) Date.now() : gives the time stamp.(milliseconds of time past since Thu Jan 021 1979 01:00:00 GMT+0100(Western European Standard Time)).

=) future.setFullYear(2040) : will set the date :) and set function exits for every other property too.

NOTE : when we convert a date to number, it becomes into milliseconds. and this is useful since we can then delete one date from another and get the difference in milliseconds. That can then be converted into day and then :) nice.

IMPORTANT NOTE : **Moment.js** is a date library free for java script users that is used in order to perform more operations on dates and stuff.

### Internationalization API (Intl) :

JS has an API that converts dates and currency into other formats.

=) new Intl.DateTimeFormat("en-US").format(date); : gives a newDate string formating date passed into english-US format.

```js
const now = new Date();
const dateString = `${new Intl.DateTimeFormat("en-US").format(now)}`;
```

the above will convert a date object 'now' into the specified format.

```js
const now = new Date();
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long', // for text format of month
    // month : '2-digit' for the 2 digit format of month
    year : 'numric' // we can use 2-digit here too
    weekday: 'long',// we can use short / narrow also here
}
const str = `${new Intl.DateTimeFormat('en-US', options).format(now)}`;
```

_OUTPUT : Wednesday, August 12,2022, 8:44 AM_

=) new Intl.DateTimeFormat('en-US', options).format(date) : we can pass options :)

in the above code, we pass an object which has the date format of date and time specified that we can use :).

IMPORTANT NOTE : we can fetch the locale(i.e. the en-US , en-IN etc ) from the browser using =)navigator.language;

We can check further about Intl in MDN.

#### Internationalising Numbres with Intl

we know that we can use , to seperate numbers with respect to the different Format of number counting in different countries.

=) Intl.NumberFormat('de-DE').format(num) : formats a given number with proper commas. wrt passed in regiion.

=) Intl.NumberFormat(navigator.languages).format(num) : we can use navigator.langauges to fetch the region from the browser.

```js
const options = {
    style: "unit", /// unit, percent or currency
    unit: "mile-per-hour", // there are tons of unit eg.celcius
    // currency : "EUR",
    useGrouping: false, // used to determine if the grouping with comma is needed or not.
};

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
```

=) Intl.NumberFormat('de-DE', options).format(num) : we can pass in an object that contains units and other stuff and that would adapt the unit according to region and display the unit after formatted number.

### Timers :

we have 2 types of timers in JS :

=) setTimeout(function(){}, amount_of_millisecond) : the setTimeout function will evoke the callback function after the amount_of_milliseconds specified pass.

IMPORTANT NOTE : the code writtern after the setTimeout evocation will be executed and in the background the timer will be present hence in the below example :

```js
setTimeout(() => console.log("hello"), 2000000);
console.log("hi");
```

in the above code, the output will be 'hi' followed by 'hello' since the control will not stop on the setTimeout while the countdown occures. so keep that in mind.
This is called asynchronus javascript and we will see that later. ;)

QUESTION : we are not calling the callback function right? so how do we pass in the arguemnts in them when we cant even call them?
ANSWER : there is a handy way of passing arguments to the callback function in the setTimeout() method .
=) setTimeout(function(arg1, arg2, arg3 ...){}, amount_of_millisecond, arg1, arg2, arg3 ...) : the values we pass inn as arguments int he setTimeout function, will be passed into the callback function inside :)

We can actually cancel the timeout before the timeout ends :)

=) clearTimeout(timer) : will cancel the timeout

```js
const ingredients = ["olives", "pineapple"];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} `),
    3000,
    ...ingredients
);
console.log("Waiting for pizza ...");

if (ingredients.includes("pineapple")) clearTimeout(pizzaTimer);
```

NOTE : the setTimeout function returns an object timer :).

=) setInterval(function(){}, time_in_ms) : will call the callback function every time_in_ms. repeatedly.

<br>

## Advanced DOM manipulation

### HOW THE DOM WORKS?

Dom is the interface between JavaScript and the browser.

WE can use it to make JS interactive.
Note that dom tree is what our JS interacts with.

DOM is a very complex API that contains lots of methods and properties for manipulaion of DOM.
In a DOM there are different types of NODES.

NOW !!!!

Dom is a tree with nodes and every single node in the tree is of type Node, Now this node is actually represented in JS with an object that contains properties and methods like : =).textContent, =).childNode, =).parentNode and =).cloneNode() etc.

There are different types of nodes and they are :

1.) Element : Element node types. are th ones that get the major properties like. .innerHtml, .classList and so onn and methods too. This comprises of the actual tag of the element. > now the element types has its types too : HTML Button Element, HTML Div Element etc and this is since different elemments have differenent configurations and attributes. and hence :).

2.) Text : The text stored by the elements come in these nodes. NOTE : in a paragraph tag, the actual tag is stored in element node and its text in Text node.

3.) Comments : Comments are stored in these nodes.

IMPORTANT NOTE : the types we mention are actual object types eg. Node is parent of Element. Element is parent object of HTMLElement. HTML Element is parent of HTML button Element and so onn. and by the concept of Inheritance, we can actually use the methods and properties of parents in child nodes.

4.) Documents : so the document we use, itself is just an object of Document node type. This node types contains the important methods like .querySelector(), .createElement(), .getElementById() etc.

NOTE : both Element and Document Node type have the querySelector()🤔.

Now How do the DOM Nodes listen to events? THERE IS ANOTHER NODE TYPE.

**_EventTarget :_** Event target is parent of Node and Window(global object, with many methods and properties.) !!!!!!!!!!!!!!!!!!
contains elements like : .addEventListener() and .removeEventListener() and thanks to inheritance, we are able to call the methods in EventListener in any Node type .

```
> EventTarget
    > Window
    > Node
        > Element
            > HTML Element
                > HTML Button Element
                > HTMLE Div Element
                > ...
        > Text
        > Comment
        > Document
```

#### Selecting, Creating and Deleting Elements :

=) document.documentElement : selects the entire html of the webpage.

=) document.head : selects the head of page.
=) document.body : selects the body of page.

IMPORTANT NOTE : what is different about document.querySelector() and getElementById ? in one we have to specify either # or . and in other we dont since its not obvious in queryselector if we are passing class or id.

=) document.getElementsByTagName('button') : will return HTMLCollection of all the button elements(note, its elements).

**NodeList vs HTMLCollection :** HTML collection gets updated in real time. ie, if we make changes to the actual html, the HTMLCollection elements will be changed.

=) document.getElementsByCLassName('class') : returns HTMLCOllection of all the elements with the class specified.

=) html_tag.insertAdjecentHTML(position_wrt_tag, html_code_string); : this is used to insert html code in a query and there are 4 positions :
'beforebegin' : before beginign the selected query
, 'afterbegin' : after begining the selected query
, 'beforeending' : before the neding of the selected query
, 'afterending' : after begining the selected query

=) let created_element = document.createElement(tag_name_in_string) : will create a new dom element that can be added to html.
we can do the stuff below to now work on the new created tag and adding it to page.
=) created_element.classList.add('className');
=) created_element.textContent('text here');
=) created_element.innerHTML = 'html'.

IMPORTANT NOTE : the innerHTML actually edits the text written in between the starting and closing tags and hence makes the following line of code possible.

```js
message.innerHTML = 'DO YOU ACCEPT ? <button class='.btn'> got it ! </button>';
```

hence we can add text content and even any nested element using innerHTML too :)

=) element_tag.prepend(created_element) : will add the created element as the first child fo the element.
=) element_tag.append(created_element) : will be added to the last child of the element.

=) created_element.cloneNode(true/false) : will return a clone of the created_element and true/false will determine if the child nodes will be cloned as well or not.

=) element_tag.before(created_element) : will add element before the specified element_tag.
=) element_tag.after(created_element) : will add element after the specified element_tag.

=) element_tag.remove() : does what it says :)

=) element.parentElement() : selects the parent element
=) element.removeChild(child) : removes child .

NOTE : the styles set in DOM are actually accepted as inline CSS.

IMPORTANT NOTE : if a style value is actually set in a seperate CSS file(external CSS) or any other except for inline CSS, WE CANT ACCESS IT USING tag.style.styleName. We can set it but then it will be saved as inline but if its already set in seperate file we cant call it or do console.log(tag.style.backgroundColor); if the background for tag is not specifield inline :).

=) getComputedStyle(element) : will fetch all the attributes and properties for the specified element be it in a stylesheet or anywhere.

=) getComputedStyle(element).styleName : we can then access seperate styles.

**CSS Custom properties :**

```css
:root {
    --cool-color: #111;
    --chill-color: #222;
}
```

we can create actual variables that hold the value of certain attribute values in css so that changing one value we can change whereever that variable is used.
:root is documnet root.

in JS we can access these using the document object.

now eg. if we have used the custom properties throughout the HTML file how do we change all of them using JS?

=)document.documentElement.style.setProperty('--color-primary', 'organge') : will change all occurence of --color-primary to orange.

IMPORTANT : if we mention a property in JS that is viable for a given tag(eg. img, is not viable in a div tag), and also not initialised, it will be initialised.

eg. : =) document.querySelector('.class').alt : just writing that much will create an alt for the selected property if it does not exist in the html code.

=) element.className : will fetch className of the specified element.

NOTE : using '.' to access elements can only be done for standard attributes(eg. src, is not a standard attribute for div but is standard for img tag). And hence even if html code has non standard attributes specified, we cant fetch them with this.

=) element.getAttribute('attribute'): for fetching attribute values specified :) even if they are non standard.

=) element.setAttribute('attribute name', 'attribute value'): for setting the value of an attribute.

IMPORTANT OBSERVATION :

```js
console.log(image.src);
console.log(image.getAttribute("src"));
```

in the above code, image.src will be the absolute value of the src that is http://127.0.0.1:800/img/logo.png, whereas the getAttribute will fetch the relative value i.e. img/logo.png. Since one fetches the value of the attribute and other just fetches the text value specified in the html file.(explains why we can fetch the specified non standard attributes using getAttribute, since we have written it in html).
NOTE Also if we have set 'src' value to #, then getAttribute will fetch # hehe.

QUESTION : so summarise . vs getAttribute().
ANSWER : using . we can only fetch the standard attribtues and not custom or non standard whereas using getAttribute() we can access any attribute and even set the attributes not preset(alternative is tag.dataset). Also . fetches absolute values where getAttribtute() will give us the relative attribute values.

**_Data attribute :_** in web development data attributes are special attributes used to store info regarding the page in attributes. WE can make custom name for these data attribute BUT they must start with data- . eg

```html

<p
    data-numer-of : 'hi' ,
    data-preetam : 'hello'
>

</p>

now these are used to store temporary values in the html page.

for an html element, we can fetch all the data attribtues using :

=) tag.dataset.numberOf : will fetch data-number-of.

NOTE : how we use camel case afer dataset.
```

=) element.classList.add('value1', 'value2'...) : we can add multiple classes using multiple pased stuff.
=) element.classList.remove(...classArr) :

=) element.classList.toggle('class') : toggles a class on or off for the element.

=) element.classList.contains() : returns true false.

IMPORTANT : DONT USE : logo.className = 'class' for adding class !!!!!!!!!!!!!!!! since it will rename all the classNames to the specified value.

<br>

#### SMOOTH SCROLLING :

press of button will smoothly scroll and take to the next component of webpage.

we just select the two tags we want the scroll to occur and set the event listener on the button.

=) section1.getBoundingClientRect() : fetches coordinates of specified element section1.

it returns DOMRect object that contains all the position related info like x coordinate, width, etc.

IMPORTANT NOTE : in an EventListener, e => the event object , e.target is the element that the event listener is attatched to.

using the above getBoundingClinetRect, we can actually evaluate the distance between two elements in real time.

=) window.pageXOffset : gets the length page was scrolled from original position on X axis. another name is =)window.scrollX(WRT the viewport)
=) window.pageYOffset : gets the length of page scrolled vertically another name is =)window.scrollY(WRT the viewport)
=) document.documentElement.clientHeight : for height of viewport
=) document.documentElement.clientWidth : for Width of viewport

<!-- Scrolling -->

in =) tag.getBoundingClientRect() object, there is a property called **left** that is the distance from left most of the viewport to the tag. and, "top" gets the position from top of viewport to that tag.
(NOTE: just like in absolute objects we position, here the top and left are that but in relation to the viewport)

=) window.scrollTo(left + pageXOffset , top + pageYOffset) : this method takes the coordinate of the point to scroll to from top.

IMPORTANT NOTE : the vertical distance of a page to scroll = the amount that we have already scrolled + the distance of element from the top of viewport.
**i.e. : from top to bottom, position of element on page = window.pageYOffset + element.getBoundingClientRect().top;**

**OLDSCHOOL WAY**

NOW :
=) window.scrollTo({left, top, behavior}) : we can pass an object in scrollTo containing values of left and top along with behavior = 'smooth'.

```js
window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
});
```

**NEW WAY**

=) section1.scrollIntoView({behavior: 'smooth'}); : for scrolling

NOTE : the above only works in modern browser.

<hr>

### Events and Event Handlers :

Event is anything that happens on our webpage, and we can listen for these event on the page using event listeners.

#### TYPES OF EVENTS :

_Mouse enter event :_ =) h1.addEventListner('mouseenter', function(e){}) : its just like hover.

we can check event listener types on MDN userful.

there is also 'mouseleave' , 'mousedown' etc.

we can even detect if page was made fullscreen etc. too. FANCY!!!

earlier we could use =) h1.onmouseenter = function(e){}; but its oldschool.

Advantage of addEventListener is that , when we store the event in a variable, then we can actually remove eventlistener.

```js
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
    alert("this is alertH1");
};
h1.addEventListner("mouseenter", alertH1);

h1.removeEventListner("mouseenter", alertH1);
```

NOTE : for removing event listerner, its seeential we store the callback function and the dom element in a seperate variable first since, WE NEED THEM LATER TO REMOVE EVENT hence they cannot be anonymous.

also, how do we write logic so that an event listener only listenes once? we remove event listener inside the callback function, at the end. hence after executaion once, the event listener goes down. as shown below.

```js
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
    alert("this is alertH1");
    h1.removeEventListner("mouseenter", alertH1);
};
h1.addEventListner("mouseenter", alertH1);
```

note that we can even use timers to remove event listener after a timeout.

**_WE can use HTML for event listener too?_**

```html
<h1 onclick="alert("html")"> Hello </h1>
```

#### Event Propogation : Bubbling and Capturing

take a DOM sub tree for a link :

DOCUMENT -> html -> body -> section -> p -> a

note that if link is clicked, the event is generated at Document and is passed down till it reaches the link(a).

PHASE 1 : CAPTURING PHASE : an event occures and is captured at Document and starts being passed down the tree

PHASE 2 : TARGET PHASE : the event reaches the target element, a in this case.
HERE : event listener is sitting at to execute a functionality once link is clicked.

PHASE 3 : BUBBLING PHASE : now the event goes back to the Document, this is called bubbling.

QUESTION : Why is this important ?
ANSWER : its since, its asif the event occured in all the ancistors of a too.

IMPORTANT : hence, if event is for link a, and if there is an event listener waiting even at any of the parent element, its event listener calls the respective callback function.

NOTE : by default, events can be handled only during target phase(when event reaches the target element) and bubbling phase, but we can work around that and handle event in capture phase too.

Some events dont have capture and bubble phase.

=) e.target : returns the event where the event handler was targeted in the callback function.(returns element). Hence during bubbling even if the eventhandler of parents catch the event, this will return the targeted element.

=) e.currentTarget() : returns the element whose event listener was triggerd(its equal to this keyword since this in an event listener points to the element the listener is attatched to.)

=) e.stopPropagation() : while bubbling up, this method stops the propogation of the bubbling up. in general we dont stop propogation but, sometimes its needed.

now what about caputure phase? NOTE : event listeners of parents will only listen in bubbling phase.

note that bubbling phase is important for event delegation whereas, the capture event is not so useful. However if we want to, we can add a 3rd parameter in the event listener.

=) tag.addEventListener('click', function(e){}, true/false) : if we pass true, in the target element event listener, then the event handlers of parent will be triggerd during capture phase and not during bubbling.(This reverses the order of event listener calls in the DOM tree)

VERY VERY IMPORTANT NOTE : its not necessary for child to have an event listener for parent to listen to the event trigerred in child. If a parent has click event listner and child does not , when we click child, parent will get trigerred since child is a part of parent and SINCE CLICK EVENT OCCURS IRRESPECTIVE OF EVENT LISTENERS ATTATCHED OR NOT.

#### Event Delegation :

We can use Event delegation to help in smooth scrolling since it helpes make stuff less repetetive.

NOTE : in an anchor tag, we go to the specified link but if we use e.preventDefault() it will not go to the specified link.

the issue with the normal smooth scrolling is, we need to attatch event listener to each individual link for smooth scroling. and that impacts the performance.

now how does event delegation help? BOOM !!!!!!! we place the event listener for smooth scrolling on the parent of the buttons !!! and because of event bubbling, the parent will hear the event too and scroll !!!!

IMPORTANT NOTE : this is OP since in navigation bar we need to just attatch event listener to the parent of navigation buttons and that is sufficient.(also note we can find the particular anchor for which the event was trigerred, using e.target() and also access the section to scroll to by fetchign the value in href attribute in anchor.)

### Dom Traversing

we can select one element using other element by using the DOM tree.

**SELECTING CHILDREN**

=) h1.querySelectorAll(id_or_class) : if we use querySelector method on an element(and not on document) we fetch the elements that are under h1 in the DOM tree that have the mentioned id or class.

NOTE : this explains the reason why all elements can be selected using document, since document is on top of the DOM tree.

=) element.childNodes : returns direct children of the element in NodeList including comments and all in accordance to the DOM tree.

=) element.children : returns an HTMLCollection containing all the child TAGS that are direct children of the element.(not including comment or text and stuff but the direct children tags).

=) element.firstElementChild : returns the first tag direct children of element.

=) element.lastElementChild : returns the last tag direct children of element.

**SELECTING PARENTS :**

=) element.parentNode : gives Direct parent node (remember)

=) element.parentElement : gives the direct parent element(NOTE : its not always necesarry that an element has parentNode that is an element itself. Hence we use parentElement not parentNode in most cases),

=) element.closest(selector) : returns The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.
NOTE : closest will find the specified id or class containing the parent no matter how high it has to go up in the dom tree, and even if there are many with the same selector, it returns the closest one.

IMPORTANT NOTE : one usecase for closest is when we use event delegation, imagine there is dom tree **tab > div > span**, now for all div, we can setup eventListener in tab, but what happens when span is clicked?? So when span is clicked, do we have to give seperate logic to handle that ? NO, we can simply use closest, in the eventListener of tab we can right e.target().closest(div) , now even if the span is clicked, this will point to the div and when div is clicked, it will still be div :)

**Siblings :**

=) element.previousElementSibling : returns the previous element that is sibling of element if there is none, returns null

=) element.nextElementSibling : returns th enext element sibling.

=) element.previousSibling : returns the previous NODE sibling.

=) element.nextSibling : returns the next Node sibling.

NOTE : one neat trick to select all siblings is :
=) element.parentElement.children : NEAT !!

IMPORTANT NOTE : we can convert itreables like HTMLCollection using for each loop by converting them to an array like : [... htmlcollection].forEach();
pretty neat.

**Guard Clause :** its an if statement, that breaks sequence, either loop or function if a certain condition is met.

#### Passing arguments to event handler functions :

callback functions have issue, how do we pass arguments into them ?
in addEventListener function if we write a predefined event handler callback function , we know that addEventListener will pass in the first argument as the event object , but what if we have mentioned a 2nd argument? how is this handled?

OPTION 1 : we can wrap one function inside of other function hence making an anonymous function.

```js
nav.addEventListener("click", function (e) {
    eventHandler(e, 1);
});
```

OPTION 2 : using the bind method.

```js
nav.addEventListener("click", eventHandler.bind(1));
```

in the above code, eventHandler.bind returns a new function with value of parameter set to 1.

IMPORTANT NOTE : we can use scroll event also but, its not used since its very intensive as it is trigerred every time page is scrolled. Ideally, we can use the window.scrollX to determine at what instance of scroll event the event listener must be trigerred. WE can use it to implement sticky navigation also since we want the navigation to be sticky once we scroll through banner.

### Intersection Observer API

Intersection Observer API allows code to observe changes to how a certain target element intersects another element. Or we can even check how target element intersects the viewport.

=) new IntersectionObserver(); : this is how we create an observer
=) new IntersectionObserver(obsCallback, obsOptions); : we can pass in two functions here, one containing the callback to trigger and one containing the settings.

=) obsOption{
root : ,
threshold : ,
}

in the above,
root : element that target is intersecting(can be null meaning it will observe for the viewport)
threshold : (0 <= threshold <= 1) this is the amount of intersection after which the callback function is called. here 10% = 0.1 :)
NOTE : we can pass an array in threshold too !!!!

=) observer.observe(section1) : for setting the observer on any element.

```js
const obsCallback = funciton(){
    console.log("I was called");
};

const obsOption = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

```

in the above code, after section1 has intersected with viewport by 10%, the obsCallback will be triggered.

=) obsCallback(entries, observer) => the callback function will get entries and observer. entries here will be an array of the various thresholds passed in options.(observer type : IntersectionObserverEntry)

we can iterate through entries using foreach loop.
now IntersectionObserverEntry object contains the following important properties :

**intersectionRatio** : the threshold ratio

**isIntersecting** : this helps determine if the intersection is happening or not.

**target** : specifies the target element incase the observer was on multiple elements, we can check.

VVVVV IMPORTANT NOTE : the callback function gets called twice for one ratio, when the target intersects by the given ratio and when target exits the given ratio. Hence we can check isIntersecting to determine if the target entered or left the ratio.(also one occures when scrolling down, and another when scrolling up.)

also NOTE : intersection happens from top or bottom so the callback happens eveytime intersection happens either from top or bottom.

hence the callback funtion will be trigerred eveytime the target leaves or enteres the root and we can check the passed in entries array to check state of all the ratios specified in the observation option object using forEach.

Below is the better code for sticky navigation upon leaving the banner:

```js
const banner = document.querySelector(".banner");
const nav = document.querySelector(".header");

const stickyNav = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting === false) {
        nav.setAttribute("position", "sticky");
    } else {
        nav.setAttribute("position", "static");
    }
};
const bannerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});
bannerObserver.observe(banner);
```

when we say that root is viewport and threshold is 0, it means that the callback will be called once the banner is out of view i.e. there is 0 intersection between banner and the viewport.

the callback will be called twice, once when the banner is intersecting and 2nd when its not.

=) obsOption{ root, threshold, rootMargin: '-90px', } : here , rootMargin will pretend asif the target element was bigger by the spefied margin.(i.e it pretents that the target element is bigger by the specified 90px).

this can be used in sticky navigation to make sure that the navigation does not overlap. check if 90 works or -90 works.

Hence this Intersection Observer can be used to give the fancy page loading animation.

IMPORTANT NOTE : it is possible for a person to disable javascript and so dont do stuff like making page opacity 0 in html if its for page loading stuff, just add that kinda stuff in js.

=) observer.unobserve(targetElement) : removes observer from given element.

### Lazy Loading Image :

In js, loading time is very heavily impacted by images. and hence lazy loading is important, we do this by having low resolution images as placeholders and later replace them with high res ones. so we can initially have low res image in src and create a non-standard attribute of any name to store the original image address. Then we also add an blurry overlay that gets removed after original has loaded.

So what we do is we load the images in browser not when website is opened, but when user scrolls to them, hence we use the intersection observer for that.

QUESTION : how do we load the image?
ANSWER : BY CHANGING THE src ATTRIBUTE VALUE !!! when we change the src value the image gets loaded hence our target is too, as the user is scrolling and almost reaches the image, load the image by changing the value of src to the one stored in the non standard attribute.

after that we also remove the blurry overlay once the image has loaded

how to find when image has loaded ? well we can remove the overlay easily BUT !! if the internet is slow, the blurr will get removed immidiately and the loading still happening. Hence we need to load once the image has completed loading.

=) addEventListener('load'); so we can actually use the event listener load on the image we are working on to remove the overlay.

QUESTION : how will we add the eventListener to the specific element inside of the IntersectionObserver's callback function?
ANSWER : we use entry.target !!! NOTE : target will specify the entry for which the specific intersection occured with the viewport incase there are multiple elements getting the intersection observer.

```js
const imgTargets = document.querySelectorAll("img[data-src]"); // selecting all images with the extra data-src containing the additional directory of highrez image.
const loadImg = function (entries, observer) {
    const [entry] = entries; // since there is only one specified threshold value, we need to fetch the one vale in the array entries.
    console.log(entry);
    if (!entry.isIntersecting) return; // to ensure the event is when the image enters the viewport and not when it leaves it.

    // replace src with data-src incase of intersection with root

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        // selecting the image that got intersected

        entry.target.classList.remove("lazy-img"); // the highrez image is loading and this lazy-img overlay will only be removed once, image has loaded.
    });

    observer.unobserve(entry.target); // removing intersection observer from the element that has loaded the image.
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img)); // adding image to eacy image with data-src.
```

### THE EPIC SLIDER COMPONENT :

just make a slider component, add side by side slides and set the slider component to overflow hidden.

then we just use translateX(100%) to move stuff 100% right. and -100% to move slides left.

IMPORTANT NOTE : to move images or components on page, without actually expanding the page size, use translateX or translateY or scale in transform !!!!

NOTE : for logic of how the slides changes the translateX value, check the video !!

### Lifecycle Dom Events :

life cycle of a page :)

1> DomContentLoaded : when the html has been parsed i.e. HTML has been downloaded and converted to DOM tree. =) document.addEventListener('DOMContentLoaded', function(e){});

QUESTION : this event occures as soon as the html is paresed and not when images have loaded and stuff. So should we wrap whole javascript in this eventListener???????????
ANSWER : NOPE not needed since, we add script.js to the html code at the end of the html code so that javascrip gets added at the end after page has been parsed.
So, browser will only parse the script after the above html code has loaded. OTHERWISE, we have to bind.

also note that DomContentLoaded gets trigerred on document

2> Load : is trigerred after the complete page, even images and css has parsed. =) window.addEventListener('load', function(e){});
trigerred on window

3> BeforeUnload : is trigerred before the page is closed !!! =) window.addEventListener('beforeunload', function(e){});
we can actually use this code to do a confirmation page before closing.

```js
window.addEventListener("beforeunload", function (e) {
    e.preventDefault(); // sometimes needed for a few browsers.
    e.returnValue = ""; // some prehistoric code
});
```

NOTE: some browsers(not in chrome) need preventDefault :) AND e.returnValue should be given as empty string for a closing prompt window :). THIS WAS ADDED LONG TIME AGO . And we could add closing prompts but some people misused it. Use only when really necessary eg. when data could be lost by accident.

### Other ways of loading JS in browser : Async and Defer

In js, we can write the script in either head, or in body so here is the table depicting stuff ::

1.) in regular script : we can either include the regular script in the head or at the end of body, including in head leads to issues, since the html page will only become visible once the script has been fetched and executed. Hence we should write it other way around.

2.) in async script loading : here also we can load in head or body. when the script is mentioned using async in head, the script is fetched async(i.e. with parsing html simultaniously) but, once fetched , the html parsing is stopped and script exicution begins. Async in body makes no practical effect.

3.) in defer script loading : here too if in head, the script is loaded asynch with HTML parsing and once the script is fetched fully, the first the html is parsed, and after that script is exicuted. defer has no practical affect.

QUESTION : why is it essential that the javascript is parsed after the html and css is parsed?
ANSWER : its because our javascript could be making use of some elements from html and css and its necesarry that those pages are loaded for script.js.

```html
<script src="script.js">
<script async src="script.js">
<script defer src="script.js">
```

generally DOMContentLoaded event will wait for the scripts to be fetched and exicuted since that is part of loading
BUT, that is not the case in async is fired as soon as html is finished parsing and not wait for complete fetching of the script.
and in defer its traditional and DOMContentLoaded will triger only once the script has been downloaded and executed.

also in async, the scripts are not executed in the order they are declared, whereas in defer the script are executed in the sequence.

NOTE : conclusion? hence use DEFER since that is much reliable. And hence if we want to use a library, include its script before the script that uses the library.

IMPORTANT NOTE : Only modern browsers use async or defer

<hr>

## Object Oriented Programming :

Spaghetti code : unorganised code that is not good. OOP resolves this.

**Abstraction, Encapsulation, Inheritance and Polymorphism :** :) i am familiar with this stuff.

#### Classic OOP vs JS Prototypes :

In js, classes work in different manner :

In oops : Objects are instantiated from class which function like blueprint and behavior(method) is copied from class to all instances.
CLASS -> INSTANCE

In JS Prototypes : Objects are linked to prototype object and there is prototypal inheritance (the prototype cotains methods(behavior) that are accessible to all objects linked to that prototype). Also called Delegation(prototypal inheritance)
PROTOTYPE <- OBJECT

NOTE : In js there are prototypes and every object is linked to a prototype, now the prototype contains methods and stuff that is inherited by the object that is liked. This inheritance is called prototypal inheriance. This is different from normal inheritance in normal oops.

We say that behavior is delegated to linked prototype object.

SO my take is, in normal oops, a class does not exist in memory and is just BP for making instances in memory, whereas,
in prototypal inheritance/delegation, there is an existing prototype object in memory and, objects just link to it and access its contents.

Hence we dont make BP, just make an actual prototype object and link other classes to it.

eg. in js, the array we create come from Array.prototype !!! its a prototype object and we just borrow from it in our arrays.

How do we implement OOPS in JS ?

**1.) Constructor Function** : to create objects from a function. This is how build in objects like arrays etc. are implemented.

**2.) ES6 Classes** : Modern ways, "Syntactic sugar" : behind the scenes ES6 works like constructor functions. ES6 class do not behave like classes in "classical OOP" and use prototypal inheritance.

**3.) Object.create()** : the easient and most straightForward way of linking an object to a prototype object.

NOTE : the 4 pillars of OOPS are still valid. Abstration, Encapsulation, Inheritance and Polymorphism

### Constructor Functions and new Keyword :

difference between normal function and constructor function is that, we call constructor function with new keyword AND, their naming convension start with capital letter.

NOTE : funciton declaration and expressions will work and not arrow, since , arrow does not get arrow funciton.

```js
const Person = function (firstName, birthYear) {
    console.log(this); // this will point to the empty object that we created.

    // instance properties :
    this.firstName = firstName;
    this.birthYear = birthYear;

    // instance methods(NEVER USE THIS) :
    this.calcAge = function () {
        console.log(2033 - this.birthYear);
    };
};

const preetam = new Person("Preetam", 1999); // we create an object.
```

so when we do this following happens :

1.) New {} empty object is created
2.) function is called and this will poin to the new created object.
3.) this object gets linked to prototype
4.) object created in the begining is returned.

so this keywork will work inside of the function when we make objects using it.

So using constructor function, we create an object with reference to the function and the objects we make get linked to the function(since that is our prototype).

NOTE : In normal OOPs we call objects as instance, here in JS too we can call them instance.

=) obj instanceOf Object : instanceOf operator checks if lhs is instance of rhs and returns true or false.

IMPORTANT NOTE : never create methods inside of constructor functions since every object we make will dupe them !!!!

### Prototypes :

every object we create using the Constructor function will inherit the protype property.

Hence for every constructor function we can change the properties it has inherited using .prototype.

```js
const Person = function (firstName, birthYear) {
    console.log(this); // this will point to the empty object that we created.

    // instance properties :
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.currentYear = 2022; // adding new properties to Person Prototype.

// good way of adding functions to constructor functions.
Person.prototype.calcAge = function () {
    console.log(2033 - this.birthYear);
};
```

So if we add any property, we can access it for the instance we create.
Hence always add functions to constructor functions using this.

IMPORTANT NOTE : when we add calcAge to the prototype, there exists only one instance of the method that will be shared by all the instances we make, whereas, the properties we define in the constructor function body, will have different copies for different instances.

also note that Person is not the prototype of the instances BUT Person.prototype is the prototype.

#### prototype vs **proto**

for the original Constructor, we can access the prototype using =)Original.prototype, whereas on individual instances, we can call =) instance. \_\_proto\_\_

\_ -> underscore

=) prototype1.isPrototypeOf(anyInstance) : returns true if prototype1 is prototype of anyInstance

when does \_\_proto\_\_ property get added to instance? after we use new keyword, new keyword links the instance to the prototype adding this property to the instance.

=) instance.hasOwnProperty('property_name_in_string') : returns true based on if the property mentioned is defined in the Constructor function, or the prototype.(since if its defined in constructor function, instance will get it as its own property whereas for prototype, its shared)

=) prototype.constructor : a prototype funciton has a reference back to the original Constructor function using .constructor property.

#### overview of how object is made in memory :

1.) Once we make constructor function, it creates a prototype property pointing to a prototype method.

2.) once we call the constructor function with new keyrowd, it instanciates an empty object in heap and the this keyword for the object sets to the newly created object.

3.) in the empty memory, the values of the variables is set to default or the one passed in constructor.

4.) now the new object is linked to the constructor's prototype property using \_\_proto\_\_

5.) then the new keyword along with the constructor function call returns a new object refernce.

IMPORTANT : why is this technique so powerful? Since unlike in java, now there can be shared methods using prototype.

NOTE : if we call obj.function1(), if function1() is not present in obj but is present in the prototype, then it will be inherited(deligated) and we can access it from obj function.

#### The prototype chain :

SO, the prototype for any constructor function itself is an object, and as we know EVERY OBJECT HAS A PROTOTYPE ! meaning that even prototype will have a property called \_\_proto\_\_.
BUT, where will it poin us ?

TO =) Object.prototype : Object.prototype is prototype of Constructor Function **Object** and prototype of any constructor function is linked to it meaning :

```js
const Person = function (firstName, birthYear) {
    console.log(this); // this will point to the empty object that we created.

    // instance properties :
    this.firstName = firstName;
    this.birthYear = birthYear;
};

let preetam = new Person("preetam", 1999);
```

For the above :

Constructor Function(Person) --> Prototype(Person.prototype) <-- Object(preetam)

and

Prototype(Person.prototype) --> Prototype(Object.prototype) <-- Constructor Function(Object)

NOTE : Person.prototype.\_\_proto\_\_ == Object.prototype and Person.prototype.\_\_proto\_\_.constructor = Object

This chain is called Prototype chain.

NOTE : Object.prototype.\_\_proto\_\_ == null. Hence marking the end of chain.

#### Object Literal

QUESTION : when we create an object literal, without any constructor function, what is the prototype of those objects?

```js
let obj = {
    name: "preetam",
    class: 12,
};
```

ANSWER : in the above obj.\_\_proto\_\_ will be Object.prototype and obj.\_\_proto\_\_.constructor will be Object class itself.

so essentially, { } is shortcut to write new Object(...)

IMPORTANT NOTE : just like scope chain, if js cant find a certain property or method in current object, it looks up the scope chain.

eg. when we call =)obj.hasOwnProperty() method, that property is not defined in obj hence js will look for property in parent and will find it in **Object.prototype**

#### Prototypal inheritance on built in objects.

```js
const arr = [2, 4, 5];
console.log(arr.__proto__);
```

in the above we will notice, that prototype of Array will be returned, where we can see the listing of all the functions present in the prototype of the Array.

we can simply add any new functionaliy to Array.prototype too :) BUT ITS NOT A GOOD IDEA !!!
js may add the method that we added later and then we are ruined since that might break the code.

QUESTION : what is the prototype for say a simple h1 tag ?

```js
const h1 = document.querySelector("h1");
console.log(h1.__proto__);
```

ANSWER : for h1, the prototype is HTMLHeadingElement and HTMLHeadingElement.\_\_proto\_\_ = HTMLElement !!!! and HTMLHeadingElement.\_\_proto\_\_ = Element
and Element.\_\_proto\_\_ = Node and Node.\_\_proto\_\_ = EventTarget and EventTarget.\_\_proto\_\_ = Object and Object.\_\_proto\_\_ = null.

and this is what we saw previously when we looked at types of DOM elements.

```
> EventTarget
    > Window
    > Node
        > Element
            > HTML Element
                > HTML Button Element
                > HTMLE Div Element
                > ...
        > Text
        > Comment
        > Document
```

NOTE : this is classic example of prototype chain and Delegation.

#### HIGH LEVEL FUNCTIONS hence FUNCTIONS ARE ALSO OBJECTS :

since functions are treated as objects, lets have a look on what is prototype for a normal function.
Hence the reason why are could call functions on function was because, functions themselves have prototypes containing all the methods since they are treated as object !!!

IMPORTANT NOTE : this keyword works in prototype.

### ES6 Classes :

Internally works like constructor function only but, with a better syntax.

```js
class Person {
    // class declaration
    constructor(fistName, birthYear) {}
}

// or

const Person = class {
    // class Expressions
};
```

NOTE : the methods we delcare within the class, will actually be declared in its prototype !!!!

#### some properties of class :

class declaration or, class expression they are not hoisted.
clases are first class citizens !!! i.e. we can return them and even pass them.
classes are executed in strict mode

QUESTION : which syntax to use? class or constuctor function?
ANSWER : we can use any, but its good to know the concept of how constructor function work.

#### setters and getters :

```js
// in objects :
const account = {
    owner: "preetam",
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        {
            this.movements.push(mov);
        }
    },
};

console.log(account.latest);
account.latest = 15;
```

=) get : for getting a property from object and we can just call it like a property even though its declared like a method.

=) set : used for making setter, later the specified setter can be accessed with just the name like a property.

```js
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName; // this will create new variables
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }
    get age() {
        return 2022 - this.birthYear;
    }
}
const preetam = new Person("preetam", 1999);
console.log(preetam.age);
```

in the normal class, getters and setters work with the same syntax.

#### REAL SIGNIFICANCE OF GETTERS AND SETTERS :

```js
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName; // this will trigger the setter
        this.birthYear = birthYear;
    }
    get age() {
        return 2022 - this.birthYear;
    }
    set firstName(fn) {
        this.firstName = fn; // since setter and the variable have same name, this will be called infinitely !!!
    }
}
const preetam = new Person("preetam", 1999);
```

in the above we see an example of a paradox.

QUESTION : what happens in this code ?

```js
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    get age() {
        return 2022 - this.birthYear;
    }
    set firstName(fn) {
        this._firstName = fn;
    }
    get firstName() {
        return this._firstName;
    }
}
const preetam = new Person("preetam", 1999);
```

ANSWER : the constructor is calling this.firstName and that is name of the setter hence, the firstName passed in the constructor will go into the setter firstName and then the set firstName(fn) will actually create a new propert called as \_firstName in the class with the passed in fn.
if the getter is called, it will return the \_firstName.

#### static methods :

eg. Array.from();

NOTE : we cannot use from method relying on delegation even when its declared in Array class. This is because its static method and static methods are not delegated, instead can be accessed from parent.

Number.parseFloat is only available on Number.
(NOTE : in java, we could access static methods with objects, but here we cant, we need the original class.)

### Object.create() :

Object.create still has the concept of prototypal inheritance, however there are no prototype properties or constructors or new keyword.

```js
const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },
};

const preetam = Object.create(PersonProto);
preetam.birthYear = 1999; // adding property manually hehe but this is not ideal
```

using Object.create(), we can simply create prototype and simply use Object.create to return an object(that can be used as a prototype) that is linked to the specified prototype.

QUESTION : how is this different from constructor Function ?
ANSWER :
in constructor functions, the prototypes are created automatically without us mentioning by new keyword whereas,

in Object.create() we can manually give prototype :)

this is pretty straightforward and we dont need the Constructor function and all that BS.

QUESTION : they where will we use this?
ANSWER : to achieve inheritance !!!!

QUESTION :But if there is no constructor, then how do we add properties?
ANSWER : we make additional mehtods in the prototype function.

```js
const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const preetam = Object.create(PersonProto);
preetam.init("sarah", 1979);
preetam.calcAge();
```

### Inheritance between classes :

Delegation was object linking and getting features from prototypes with prototypal chaining.

inheritance is when prototype in one class points to prototyps of other class.

NOTE : we can setup inhritance using Construtor functions, ES6 classes , and even using Object.create.

#### Inheritance using constructor functions :

```js
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear); // student getting properties of firstName and birthYear from parent.
    this.course = course;
};

const preetam = new Student("Preetam", 2022, "Computer Science");
```

QUESTION : what and why above stuff?
ANSWER : note that we want inheritance between Person and Student i.e. Student to have all properies of parent Person. so for that we simply called the Constructor function as regular function, BUT the catch is that we need to use call to set the value of this keyword, and then its asif we have made the variables in the current Student contructor function.

BUT

There are better ways. using Object.create hence :

```js
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear); // student getting properties of firstName and birthYear from parent.
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // fixing constructor poroperty

const preetam = new Student("Preetam", 2022, "Computer Science");
```

QUESTION : do we still need to call the Parent class constructor function ?
ANSWER : even after setting the prototypal inheritance, we do indeed need to setup the values for firstName and birthYear using the parent class constructor function.

NOTE: this is just like how in Java we could evoke parent class constructor using super() for setting up constructor variables. CONSTRUCTORS ARE JUST LIKE CONSTRUCTORS FROM JAVA !!!

IMPORTANT NOTE: use Object.create right after the declaration of child constructor function and after that add any functions to the child, this is because Object.create(Person.prototype) returns a new empty object hence if we have given Student any new function using Student.prototype.method1 = function(){}; this will be overwritten.

QUESTION : why did we not write Student.prototype = Person.prototype ?
ANSWER : this will be complete chaos, we need there to be a chain of prototype pointing to a prototype whereas in the above code, both Person and Student constructor functions have the same prototype !!!

QUESTION : what is the significance of the line : Student.prototype = Object.create(Person.prototype);
ANSWER : Object.create returns an object that has its prototype set to the passed object, hence we are reinitialising the value of Student.prototype to a new object that has its prototype set to prototype of parent constructor function.

QUESTION : why did we need to fix the constructure of child class ??
ANSWER : after using Object.create to give a new prototype to Child, note that the new prototype will have the constructor property set to the Parent , and hence we need to change that to Child.

**STEPS :**

1.) Create child class and call the parent class Constructor without new. Use call() method to setup the value for this keyword eg. Parent.call(this, ...args);

2.) Outside the child class now, use Object.create(Parent.prototype) to create an object that is Linked to prototype of parent class and set it in Child.prototype. eg. Child.prototype = Object.create(Parent.prototype);

3.) The new prototype originally has its constructor property set to Parent, Set it to Child eg . Child.prototype.constructor = Child.

#### ES6 inheritance :

```js
class Parent {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
}
class Child extends Parent {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }
}
```

NOTE : if we dont specify a constructor for Child , there will be default and we can pass fullName and birthYear since such constructor exists in parent.

Hence if child class needs no new property, dont bother to make a constructor

```js
class Parent {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
}
class Child extends Parent {
    // constructor(fullName, birthYear) {
    //     super(fullName, birthYear);
    // }
}
```

NOTE : in the above code, if we dont make a construtor, the constructor that is commented will be there by default.

#### Object.create() for making a complex prototype chain.

```js
const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

let StudentProto = Object.create(PersonProto);
let PreetamProto = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this.firstName, birthYear);
    this.course = course;
};
```

in the above code, we just created a prototype chain without involving any class !!!!

NOTE: in this method since there is no constructor hence we make init method and then if we need to initialise any new variable we just update the init in child object.

Hence Object.create() is used to make prototype chaining between Objects without involving classes.

QUESTION : is this way good ?
ANSWER : some people prefer this to be the way of achieving OOP in java rather than any other, since. We are not faking OOPS. We are able to link objects to each other using this and hence this is pretty lit.

BUT

use ES6 classes since, they are much more used and ABSTRACTION !

#### FAKE ENCAPSULATION WITH CONVENTION :

1.) start protected properties with \_.(this is just a convention) eg. \_password.
2.) binding methods using methods :)

#### Real encapsulation : Class Fields

Class Fields : new features !!!

This does not work in every browser.

Public fields/methods
Private fields/methods

```js
class Account {
    // public fields :
    locale = navigatior.language;

    // private fields :
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
    }

    // private methods :
    #approoveLoan(val) {}
}
```

private fields can only be accessed inside the same class AND start with #. Also they are available only in the instance and not on the prototype.

NOTE: remember, properties are made on the constructor function, whereas the methods are on the prototype :)

Private fields cannot be defined in the constructor and hence must be defined in the class scope.

also,
Private methods are not available right now, and even if they work they will be treated like private fields, meaning they will be in instance and not in prototype.

QUESTION : should this be used right now?
ANSWER : NO !!! they are not in use right now hence.

NOTE : make getters and setters start with \_

<br>

## Working on Projects :

#### How to plan a project with diagram.

User Story -> Features -> FlowChart -> Architecture -> Development Step

**1.) User Story :** Description of the application's functionality from the user's perspective. ALl user stories put together describe the entire application.

**2.) Features :** features that are needed to be added.

**3.) Flowchart** of all features and sequence.

**4.) Architecture :** technology and internal stuff which projet will require.

**5.) Development Step :** Implementation of our plan using code.

IMPORTANT NOTE : there aer various free api persent in JS and also we can embed services like maps etc, pretty neat :)

When we draw charts, we can color them eg. user input events as yellow, display changes as red , async process in white etc.

### GEOLOCATION API:

Geolocation is a browser API for timers, internationalisation etc. And its pretty modern one.

=) navigator.geolocation.getCurrentPosition(firstCallback(position), secondCallback) : this takes 2 callback functions, first for case in which user location was found, and that gets a position parameter and second incase of errors.

This will prompt on browser for location access.

=) position.coords.latitude : the position attribute can help fetch the coordinates.

=) position.coords.longitude : longitude :)

IMPORTANT NOTE: in google maps link, we can copy and paste the latitude and longitude to create a link with the specified location.

```js
navigator.geolocation.getCurrentPosition(
    function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(
            `https://www.google.com/maps/@${latitude},${longitude},15z`
        );
    },
    function () {
        alert("Could not get your position !");
    }
);
```

#### MAP using LeafLet.

Leaflet is an open source map library, that we can download or use its already hosted service on internet.

CDN : Content delivery network.(online hosted services.)

http://leaflet-extras.github.io/leaflet-providers/preview/ : here are lots of maps :)

we can even use NPM but for now.

IMPORTANT NOTE: since our script makes use of other libraries, we must make sure to include scripts of libraries before script.js in html file !! this is because we want the library to be downloaded first. **Also use defer attribute in the script files.**

QUESTION : how to setup leaflet ?
ANSWER : just go to their site and check overview site.

> include the css file and the script
> make a div where we want map, and give it class of map
> copy the leaflet code from preview page and paste the code into the geolocation callback.
> we can use L namespace for the features in leaflet library.

NOTE: NAMESPACE ? Namespace is biding features under umbrella of a single name like, binding all featuers with L in case of leaflet. This is useful in case of libraries since many libraries might have functions with same name and hence.

IN leaflet, we are by default usign openstreetmap, that is an open source map :). WE CAN EVEN USE GOOGLE MAPS !!

we can changes coordinates and even zoom levels. There is even given logic for placing a marker. and Even an attribute for adding layer to map.

**HANDLING CLICK ON MAP :** in leaflet, we created map object, and it will contain a few methods :

=) map.on('click', function(mapEvent)) : for listening for events on map the callback function will get mapEvent
=) mapEvent.latlng : is an object that contains latitude and longitude of the ponits :0

We can customise the markers also :)

We can check the documentation to see how we can edit properties of popups and stuff.

for centring on a coordinate location leaflet has a function called : =)map.setView()

```js
this._map.setView(workout.coords, this._mapZoomLevel, {
    animate: true,
    pan: {
        duration: 1,
    },
});
```

its kinda complex, since we pass options object inside option object and so onn.

CHECK LEAFLET DOCUMENTATION FOR MORE !!!!

IMPORTANT NOTE: make sure to include this css file in the html file : These are the styles of the map and map wont render properly without this.

```html
<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
/>
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
```

#### WORKING WITH FORMS :

=) formElement.focus(); calling this function makes the formElement active and cursor gets inside the form.

=) form.addEventListener('submit', function(e){
e.preventDefault();
});

NOTE: when working on forms, thing to note is that when we press enter, it registers as submit and also by default, 'submit' event reloads the page and hence its important to use e.preventDefault();

QUESTION : what are default behaviors ?
ANSWER : eg. in a checkbox default behavior is that upon click event on checkbox, the checkbox gets toogled. and on form is that upon submission, page is reloaded in submit event.

=) inputList.addEventListener('change', function()) : used to check if the list component of form is changed.

IMPORTANT OBSERVATION : when we call a function from a class, within the same class, it gets treated like a normal function call and hence, we need to use =).bind(this). This happens a lot in callback functions inside calsses since this will point to the dom element.

When we submit a form info, we can access the value of the form fields simple querySelectors since submiting does not change the content of form lol.

(NOTE: convert string to number ? =)+stringName will do it )

=) Number.isFinite(num) : will return true / flase based on if num is a number or not.

QUESTION : what is the advantage of giving custon id attribute to html tags that we insert that we insert?
ANSWER : there are times that actually Javascript code will contain html code and javascript will insert html when needed, its good practice to give data-id to tags from js if possible to distinguish.

NOTE: =) // prettier-ignore will ignore the next line from being formatted!!!

QUESTION : on the topic of inserting html using JS, how do we add event listener to elements that are not yet being displayed?
ANSWER : Event Delegation :)

#### LOCAL STORAGE !!!

generally we creat a backend for storing data, but, we can store in local storage of the browser!!!!!!!!!

localStorage stores data in key value pairs and both keys and values must be Strings.

IMPORTANT NOTE : we can convert any object into string using : =)JSON.stringify(object);

=)localStorage.setItem('name', 'value');

we can actually check the data stored in local storage by going into the browser inspect element > application > local storage.

The browser maintains local storage for each page :) and local storage stays till we want it to.

=) localStorage.getItem('key') : we can fetch value of certain values here from local storage.
=) JSON.parse('object') : converts objects in string from back to objects.

NOTE : ONCE MAJOR ISSUE !!!! after being converted to string, the objects when converted back to object, loose their prototypal chain. They dont have type and hence become anonymous objects without class !!!!!!!!

We can set the class again, there are ways to do it but its some work hehe.

=)localStorage.removeItem('key') : removes items :)
=)localStorage.clear() : clears all local storage.

FINALLY : =) location.reload() : RELOADS THE PAGE !!!

#### COPING WITH PROJECT :

Note that when working on api and using OOPS, one major issue is to sequence the code, i.e. figuring out the sequence of calling stuff. EG. we cannot call marker on map before loading the map.(Hence we loose the Class of object and with that the methods in parent class prototype is lost.)

Hence code must be organised in a very nice way for it working properly.

<hr>

## Asynchronus javascript :

QUESTION : what is Synchronous code ?
ANSWER : Code that is excuded line by line. Hence each line will wait for previous line to execute. But what if a piece of line of code takes too long to execute?

```js
alert("alert");
console.log("This is blocked by alert");
```

EG. Alert window stops the execution of rest of the code below !!

LOOK : setTimeout() function is asynchronous , it will take a callback function and the function wont block execution of next code. HENCE some callback functions are non blocking.

NOTE : another example is, the img.src attribute was made to load in asynchronous way and hence its non blocking. WE can later put an event listener for load event on the image to find when its loaded.(hence remember, we can change src in images.)

QUESTION : is event listener asynchronous when it waits for events?
ANSWER : NO, asynchronous means that two peaces of code executing at the same time, however, in case of event listener, it is not executing and just waiting. what made img.src asynchronous was the fact that the image loads while code runs and not the event listener for load.

SOME MORE EXAMPLES : geolocation api, Ajax calls.

#### AJAX (Asynchronous JavaSCript And XML) :

allows us to communicate with remote web servers in an asynchronous way. IE> Helps us request data from web servers dynamically.

QUESTION : what is working of AJAX ?
ANSWER : CLIENT <-----> SERVER the request(get/ post/ etc) and response from server happen asynchronously between the running javascript and the web server.Hence its non blocking.

QUESTION : what is an API ?
ANSWER : Application Programming INterface : Piece of software that can be used by another piece of software in order to allow applications to talk to each other. eg. Geolocation, Dom, etc. NOTE how thees were made by different people and used in our code.

so what does ajax work on ?
**Online API**

QUESTION : what is an online API ?
ANSWER : online api are applications running on web server for acepting requests for data and sends data back as response.

IMPORTANT NOTE : WE WILL study how to build our own online api in next course.

But for now we can use other api that are hosted online by other companies and stuff.

EG of some api>
1.) weather data
2.) data about countries
3.) flights data
4.) currency conversion data
5.) api for sending email or SMS
6.) Google Maps
etc.

QUESTION : what is xml?
ANSWER : XML is a data format used in old days.

IMPORTANT NOTE : earlier, xml used to be the way data was sent and fetched BUT not anymore. AJAX is called AJAX for legacy purposes.

RIP XML.

QUESTION : JSON ?
ANSWER : xml was replaced by json. that is just javascript object format.

WE can find all the apis here :

https://github.com/public-apis/public-apis

### our first AJAX call using restcountries.eu

the resource page of restcountires provides instructions on how to fetch information about countries.

Note, there are various ways of making an ajax call :

**1.) =)XMLHttpRequest() : old school**

request to get data is called 'GET'

=) new XMLHttpRequest(); : for creating request

=) request.open(requestType, URL); : for opening request

=) request.send(); : for sending request

=) request.responseText : afer load event, the responseText will contain the json text for the data fetched from server.

after sending the request, we wait for the load event !!!

```js
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/India");
request.send();
request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
});
```

QUESTION : what is the use of 'load' event?
ANSWER : after request has been sent to the server, we wont get the request immidiately and will have to wait. Its non blocking and the load event will trigger once we have fetched the request from the server.

IMPORTANT NOTE : we should only use resopnseText once it has been fetched hence after the load event.

we can convet the respons using =)JSON.parse()

NOTE : make sure to check types and stuff when workign on json data.

when we call two ajax calls at the same time, to fetch data of countries, they run asynchronously.

<br>

## How the web works ? REQUESTS AND RESPONSES

the client - server architecture :)

we can break down a url into following :
https://restcountries.eu/rest/v2/alpha/PT

here https is the protocol, restcountries.eu is the domainname and the remaining is the resource.

the real IP address before DNS lookup looks like :
https://140.27.142.889:443 : where 443 is the port number. and the number is ip address.

NOTE: 443 is for HTTPS and 80 for HTTP.

1.) so a TCP/IP socket connect is made between client and server.

2.) after that http request is made by client to the server, that is request to fetch a webpage. below is how a http request looks like :

```
    GET /rest/v2/alpha/PT HTTP/1.1 // start line :HTTP method +request target + HTTP version

    Host : www.google.com
    User-agent: Mozilla/5.0  // request headers(many different possibilities)
    Accept-Language: en-US

    <BODY>                   // request body (only when sending data using POST)
```

NOTE : some HTTP methods are : GET, PUSH, PUT and PATCH

QUESTION : what is major difference between HTTP and HTTPS ?
ANSWER : HTTPS is encrypted using TLS and SSL protocols.(end to end encryption)

3.) after the server recieves the requets, it will prepare, process the request and then once ready it will send an HTTP RESPONSE.

```
    HTTP/1.1 200 OK         // start line : HTTP version + status code + status message.

    Date: Fri, 18 Jan 2021
    Content-Type: text/html      // response header (many different possibilities)
    Transfer-Encoding: chunked

    <BODY>                      // response body : contains JSON file or html page
```

every status has its own code eg. NOTE : 404 page not found !

IMPORTANT NOTE : now this is simpl but there is a catch when it comes to requesting webpages. When we request a page first comes the HTML file upon first request. then the HTML file is loaded(parsed) and scanning for assets like JS, CSS and images etc happens.
EACH OF WHICH ARE FETCHED USING SEPERATE HTTPS REQUEST AGAIN.

This is logical and justifiable.

QUESTION : TCP/ IP ?
ANSWER : TCP and IP are the communication protocols that define how data travels across the web. TCP breaks the requests and responses into smaller chunks and reassembles them at the destination device.(Networking :). IP protocol is responsible ensures that small data packets the destination with help of IP addresses.

<br>

### Welcome to Callback Hell :

what if one AJAX call depends on another(eg. we need to display info of border of a county, hence we have to ajax call for the country and then using the data that comes, we do the ajax call for the neigbour).

This means that when we listen for event load on one request and then trigger the next one right. Hence in callback function of first, we do the callback for the second.

QUESTION : what is callback hell ?
ANSWER : callback hell is when there is nested dependancy betwen various AJAX calls and hence the load callbacks have to be nested. This is done for giving order to callback functions.

```js
setTimeout(() => {
    console.log("1 second passed");
    setTimeout(() => {
        console.log("2 second passed");
        setTimeout(() => {
            console.log("3 second passed");
            setTimeout(() => {
                console.log("4 second passed");
                setTimeout(() => {
                    console.log("5 second passed");
                    setTimeout(() => {
                        console.log("6 second passed");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
```

NOTE : above is code for counding down 6 seconds using setTimeout(). NOTICE THE CALLBACK HELL !!!!!!!!!!!
Makes code hard to maintain and difficult to read.

### Promises and Fetch API :

MODERN way of making Ajax Call :

=) fetch(URL) : to make a simple GET request and returns a Promise !

QUESTION : what are promises ?
ANSWER : Promise in a object that is used as a placeholder for the future resulte of an asynchronous operation. Its advantages are :

1.) we dont need to rely on Events and callback functions to log async results.
2.) we can chain promises to make a sequence of async operations instead of callback hell.
Promises are ES6 feature.

**The promise lifecycle :**

1.) PENDING : before the future value is available and is still happening in async way.
2.) SETTLED : When the asynchronous task has finished happening in the background. it can further be of the following types :
a) Fulfilled : when async AJAX call is fulfilled(eg. making ajax to fetch data of country, if it is fetched successfully)
b) Rejected : when async AJAX call is not fulfilled(eg. when the data does not get fetched successfull )

IMPORTANT QUESTION : what is role of fetch ?
ANSWER : fetch() function returns a promise and we CONSUME the promise.

Most of the time we consume the promise, and sometimes we need to build a promise that we will do later.

#### Consuming promise :

we assume that the promise will be fullfilled !!

**for resolved values :**

=)promise.then(callbackFunction(result_of_promise){}) : this is how fulfilled promsie is handled and the callback function will revieve the response that will be there after the promise. they type of the result_of_promise in case of ajax call will be Response.

NOTE : the Response revieved from promise, will comprise of values like headers body etc also that we studied in the section above about HTTP requests.

=)response.json(); this method is for all the resolved values and is used so we can read data from response. the json() function itself is an async method(lmao confusing) hence response.json() itself IS A FRIKIN PROMISE !!!! hence we need to handle it like a promise by using another then.

to summarise :

1.) fetch() function will give a promise
2.) then() will resolve promise and the callback it has will recieve the response that will be generated by the promise.
3.) response.json() will return the response in a readable format but it must be used with .then since, the .json() function itself is async and returns a promise.

```js
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(function (response) {
            console.log(response); // this whole section itself is a promise since it returns a promise
            return response.json();
        })
        .then(function (data) {
            //
            console.log(data);
        });
};
getCountryData("portugal");
```

QUESTION : how to chain promises ?
ANSWER : when result of one ajax call is needed for the second one, in that case se can return the response like we did in the above one and chain very conviniently.

IMPORTANT NOTE : in the callback function of the promise, whatever we return will become the fullfilled vlaues of the promise i.e :

```js
fetch(`URL`)
    .then(function (result) {
        // first then
        return 10;
    })
    .then(function (result) {
        // second then
        console.log(result);
    });
```

in the above code, since the callback function of first then returns 10, now the then itself will return a promsie that is futher handled using a second then and the return value of the first then will bet he result value for the second then.

QUESTION : what is resolved value ?
ANSWER : resolved value is the value that is returned by the promise and the value that is then passed on into the callback function of the then() method.

IMPORTANT NOTE : then() function returns a promise itself that can be resolved.

this enables us to chain the methods and hence we can keep chaining then() functions.

also NOTE : dont put then inside another then hahahah, or we are back to callback hell.

**Handling rejected promises**

NOTE: The only way user can get handling rejected in fetch() function is, if user loses internet connection.

QUESTION : what happens if we fail to handle rejected promiese ?
ANSWER: the error we get is Uncaught(in promise) !!

=) fetch(url).then(acceptedPromiseCallback(response){}, rejectedPromisecallback(error){}) :

so we can pass a rejected case function too.
the second callback is called wit the error argument.

BUT then we have to handle the error for each then() used in the promise chain. there is a solution.

=) .then.catch(errorCallback(err)) : we can attatch catch at the last of the promise chain so as to handle error in all at once.

NOTE : this err is an object, and we can make our own errors using Error object class.

=).finally(callback()) : finally is called in both of the rejected and accepted case :)

IMPORTANT NOTE: the reason finally works after catch is since, catch() also returns a promise. Hence then(), catch( ) and finally can only work on promises and they themselves return a promise.

QUESTION: suppose a user using getch tries to fetch information about a country that does not exist from rest countries, in that case wii the promise be rejected or accepted ?
ANSWER : promise is only rejected when there is no response from the server, but when we fetch an unknown country then() will work since the server did respond with code 404.

SO there exists this issue where even invalid response from server is cunted as rejected.
These types of errors need to be handled manually by checking =) response.ok(true/flase) when the promise gets resolved we can check the ok attribute to see if the response is correct or not.
(in some cases we can even check status : 404)

=) throw new Error(`error message`); we can use this to throw a custom error on console. and whenever, the error is hit(ie.whenever throw nwe Error() is encounterd) it goes to the catch block directly!!!!

HENCE NOTE : catch block is there to catch errors :) and its logical that when we hit our own error it goes to catch.

=) err.message : in the catch() err.message will point to the message that we defined custom in our own error.

the issue ehre is that we need to define error in every then() function.

NOTE: one good practice is to make a helper function that does :
a) checking if response throws error(response.ok == true)
b) converts the response to json and return it.

it is becaues this logic is repeated often in the promise chain in case of AJAX calls.

```js
const getJSON = function (url, errorMsg = "Someting went wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
        return response.json();
    });
};
```

Hence we can make a function that returns a promise :).

### Asynchronous JavaScript Behind the scenes :

**Javascript Runtime :** Container that inclues all the pieces are executed in js code(comprises of Enging, webapi and callback queue)

We know that JS is single threaded and there can be no multithreading.
The callstack can only execute one thread at a time.

QUESTION : Then, how is asysnchronous JS happening ?
ANSWER : using the EVENT Loop- Callback Queue. NOTE that , event loop maintains a callback queue and is capable of sending any callback from the queue to callstack top when event is trigered. This behaviour makes JS non blocking and concurrent.

#### IMPORTANT Why is event loop so important = Its working.

IMPORTANT QUESTION : how can async code be executed in non blocking way if there is only one thread ?
ANSWER : Lets look at behind the scenes of Event Loop :
Now all the tasks that look Asynchronous, eg. changing img.src(for loading images), fetch etc. Happen using the Web API's. img.src() is part of DOM() api.
HENCE NOTE: the tasks that run asynch run in the environment of WEB APIs and not in CallStack hence not blocking the Callstack. same is true for allll apis like timers etc.

In case of Event listeners, when we attatch an event listener like 'load', Note how event listeners are attatched to the DOM elements or Fetch() api etc. hence being attatched to WEB API's, the event listeners are actually executed in the environment of API hence preventing the blocking in callstack.

NOTE: hence loading event, listening event, fetching event etc, all run concurrent to callstack since they run in different environment.

QUESTION : how are then the asynch event put on the callstack upon resolving ?
ANSWER : When event like say loading of image finishes in the environment of Web API DOM, the event is put in the callback queue. The queue hence will get filled with events from the API's that have resolved and will wait to be called up by the callstack.

QUESTION : is queue always followed and maintained what about in case of timers?
ANSWER : NOTE: times gets resolved after the time period is elapsed in the environment of WEB API after that once resolved, it goes in the back of callback queue AND WAITS!!! HENCE IMPORTANT : ITS NOT fixed that timer will be resolved in the given time !!!! its just that it wont be resolved before the time mentioned !!!

QUESTION: what is the role of event loop in the bigger picture ?
ANSWER : Event loop checks the Callstack and if the callstack is empty(except of global context), the callbacks are put there else not!!!!

NOTE: every time Event Loop takes a callback from Callback queue, its called event loop tick.

Event loop decides when callbacks are executed.

IMPORTANT : Javascript itself does not have a sense of time since its Event Loop and Runtime that manage the asynch behavior and not the engine.

IMPORTANT NOTE: Promises work a bit different incase of concurrency :

#### Callback of Promises and asynch behavior :

callbacks used with Promises dont resolve in Callback Queue But in MICROTASKS QUEUE !!!!

QUESTION : what is featuer of microtask queue?
ANSWER: microtask queue has more priority than callback queue, and hence, when we Evet Loop checks if callstack is empty, it will perform all microrasks queue operations before moving onn to the callback queue.

#### MISC :

```js
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return (
            navigator.userAgent.match(/IEMobile/i) ||
            navigator.userAgent.match(/WPDesktop/i)
        );
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
```

above is JS code to detect mobile devices which can come in handy.

<br>

### Building our own Promise :

=) new Promise(executorFunction(resolveFunction, rejectFunction){}) : this created a new promise and the executor function will produce a result value.

IMPORTANT NOTE: HERE ARE SOME STUFF :
a) the executorFunction() contains logic based on which either resolveFunction or rejectFunction will be called, just like incase of fetch API.
b) resolveFunction(fullfilledValue) : fullfilledValue will be the value that is resolved and sent to the then handler.
c) rejectFunction(rejectedValue) : we pass the effor message we want for the catch handler.

NOTE that : This means that the fetch() function is a Promise where executorFunction() contains logic to determine if fetching URL GET request was successful or not and based on that called resolveFunction or rejectFunction. and will pass the JSON returned by the webpage in response to resolve function and will pass error code incase of rejectFunction to then() callback or catch() callback respectiverly.

HENCE, resolve/ reject functions determine if then() or catch() will be called in a Promise.

below is a promise for 50% chance lottery win

```js
const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5) {
        resolve("you Win");
    } else {
        reject("you lost");
    }
});

lotteryPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
```

so just call the resolve function when wanting to resolve the case and reject when want to reject.

We generally dont create promises too much

**Promicifying :** promicifying i convertion of old style callback functions into promises. This is generally why we create new promises.
below is promicifying setTimeout() function.

```js
const wait = function (seconds) {
    // promisifying setTimeout
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
```

in the above code, just like fetch() function, we build a wait function that returns a promise with timer functionality.

=) Promise.resolve('resolve value') : will resolve immidiately and detected by then().
=) Promise.reject('error') : will reject immidiately and detected by catch().

#### Promisifying the Geolocation API :

```js
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (err) => reject(err)
        );
    });
};

//OR

const getPosition2 = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject); // since the getCurrentPosition automatically passes position in its first callback function.
    });
};

getPosition()
    .then((pos) => console.log(pos))
    .catch((err) => console.log(err));
```

### Async/Await Consuming promises

we simply add =) async in front of a function to make it async this simply means that the function will run in background now and is async, the function when done automaically return a promise.

The async function can have 1 or more =)await that take promises. In an async function, await will wait for the promises to deliver.

The await after promise been has the promise resolved will return the resolved value.

```js
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await res.json();
    console.log(data);
};
whereAmI("portugal");
```

this looks so fancy, and without any complications of then() and catch()
however, this is just syntactical sugar over then and catch

BUT ITS SO NICE, NO MORE CALLBACK FUNCTIONS!!!!!!!!!!!!!!!

NOTE REMEMBER : await, will take a promise and upon its complition will return its resolved value.

QUESTION : what is ur takeaway from all this ?
ANSWER : we can make asynchronous code my making promises to wrap callbacks and then resolve them using async & await.

QUESTION : How to handle unfulfilled promises or errors ?
ANSWER : using error handling below :)

#### Error Handling using : try catch

=) try{code} : will check the following code
=) catch(err){} : will catch any error in try and will recieve object of the error type.

IMPORTANT NOTE : in case of Async await, we bind our code(entire of it ) in a try block and catch it in catch block :)

if we want our custom errors to be thrown at catch, we can simply throw our own errors :)

#### Building a realistic and good async function

QUESTION : what does an async function return ?
ANSWER: : IT RETURNS A PROMISE !

```js
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await res.json();
    return `Your country is ${data.countryName}`;
};
const city = whereAmI("portugal");
console.log(city);
```

NOTE: in the above example, the console will log Promise{< pending>} and not what we return, THAT IS BECAUSE ASYNC FUNCTIONS RETURN PROMISE.

Hence what will happen to the value returned? That will be the resolved value of the promise returned by function.

hence we have to do this :

```js
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await res.json();
    return `Your country is ${data.countryName}`;
};
const city = whereAmI("portugal");
city.then((city) => console.log(city));
```

NOTE: now, make sure to account for the fact that incase if the async function has error and goes to catch() the return value in try will not be encountered so. undefiend will become the resolved value for the whole function. Hence make sure to look into that.

QUESTION : incase of going into catch() block in async function because of error, is the promise returned by async function rejected?
ANSWER : NO, it wont be rejected and will fully function like a fulfilled promise even if some await promise had issues.

QUESTION : how to resolve that issue?
ANSWER: at the end of the catch block, RETHROW THE ERROR and that way it will go in the catch() block.

```js
const whereAmI = async function (country) {
    try {
        const res = await fetch(
            `https://restcountries.eu/rest/v2/name/${country}`
        );
        if (!res.ok) throw new Error("problem getting country"); // throwing error
        const data = await res.json();
        return `Your country is ${data.countryName}`;
    } catch (err) {
        console.log(err);
        throw err; // rethrowing error
    }
};
const city = whereAmI("portugal");
city.then((city) => console.log(city))
    .catch((err) => console.err(err)) // catching the error.
    .finally(() => console.log("finished getting location"));
```

IMPORTANT : its not a good idea to mix then() and catch() with async await and hence its prefered to handle even the callback returned by async function with another async function. Best is to use iffy's(IMMEDIATELY EVEOKED FUNCTION EXPRESSION). and this is one of the only usecase for iffy left :(

here goes :

```js
const whereAmI = async function (country) {
    try {
        const res = await fetch(
            `https://restcountries.eu/rest/v2/name/${country}`
        );
        if (!res.ok) throw new Error("problem getting country"); // throwing error
        const data = await res.json();
        return `Your country is ${data.countryName}`;
    } catch (err) {
        throw err; // rethrowing error
    }
};
(async function () {
    try {
        const cos = await whereAmI("portugal"); // note that if error is returned here, then catch will be trigerred.
        console.log(cos);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("finished getting location");
    }
})();
```

#### Running promices in parallell :

in a single async function, we can run promices being processed in parallell.

QUESTION : are various await promises in an async function resolved parallell?
ANSWER: no they are resolved one after another, this was incase if one depended on result of other.

=) Promise.all(array of promises) => takes array of promises and returns a new promise that executes all the mentioned promises in array.

```js
const get3Countires = async function () {
    const data = await Promise.all([
        fetch(`https://restcountries.eu/rest/v2/name/preetamasia`),
        fetch(`https://restcountries.eu/rest/v2/name/waganda`),
        fetch(`https://restcountries.eu/rest/v2/name/india`),
    ]);
};
```

IMPORTANT NOTE : here we will get an array containing the data we try to fetch.

QUESTION : what happens incase of rejection?
ANSWER : its like shortcircuiting, if one promise rejects in the Promise.all() the whole is rejected and goes to catch block.

#### Other Promise conbinators :

=) Promise.race(array of promise) : the fastest promise to get settled will be the fulfilled result of the Promise.race(). IE if it first fails, then too it will be the winner.
QUESTION : can this be useful?
ANSWER: imagine there is a fetch that is taking too much time to load for a user, in that case, we can use race and setup a sencond promicifyed timeout function, and if the loading of a fetch takes too long, the timeout will be called. HENCE CAN BE USEFULL !!.
ITS KINDA RACE AGAINST TIMER.

=) Promise.allSettled(array of promises) : returns array of all setteled promises.
QUESTION : difference from Promise.all() ??
ANSWER : promise.all() shortcircuits upon a rejected promise whereas Promise.allSettled will go onn and check all the promises.

=) Promise.any(array of promises) : returns the first fullfilled promise.
QUESTION : difference from Promise.race ??
ANSWER: promise.race() will shortcircuit at a rejected first promice too but this one wont.

<hr>

## Build Tools and HOW TO JAVASCTIPT

#### an overview of Modern JS

In old days only one script was used, but now, we break our code into varios modules along with 3rd party modules.
Modules are also called Packages.

Some examples of 3rd party packages that are used throughout are :
1.) React
2.) JQuery
3.) Leaflet
etc

we can import these packages using NPM.

**NPM :** NPM is a program that with help of command line helps us manage libraries.

JS modules go throught the followingng Build process steps :

1.) IN the end though, the small js modules will be built inot a JS Bundle that has all.
This step of bundling is imp because :
a.) this compreees the code
b.) old browsers dont support module format and need single file and hence.
c.) better to send single file than multiple.

2.) The next step is **Transpiling/Polyfilliing**, this is used to convert the modern JS back to ES5 for backward compatibility.

This is done using **webpack or parcel**. these are called Bundler.(we will use parcel since it has no setup requirements.) These we will find in NPM.

#### Modules in JS

A module is a reusable piece of code that encapsulates implementation details. It s a standalone file.

we can Import or Export values from a module

NOTE: a module that exports its called Public API.

we create dependancy on other module by importing those modules.

QUESTION : USE OF MODULES ? :
ANSWER:
a.) COMPOSE SOFTWARE : modulea re small building blocks we put together to make complex apps.
b.) ISOLATE COMPONENTS : modules can be developed in isolation without thinking about the entire codebase.
c.) ABSTRACT CODE : Implement low-level code in modules and import these abstractions into other modules.
d.) ORGANIZE CODE : modules naturally lead to a more organized codebase.
e.) REUSE CODE : Modules allow us to easily reuse the same code, even across multiple projects.

ES6 modules are modulta that are sotred in files and one module per file.

QUESTION : ES6 modules vs Scripts.
ANSWER: a.) variables are private to the module and only visible outside when exported VS in script the global variables are global :)
b.) By default ES6 modules are in strict mode VS Scripts are in "Sloppy" mode by default.
c.) Top level this value is undefined in modules VS this points to window in top level in script
d.) We can import and export VS we dont do that here( :) )
e.) < script type="module"> VS < script>
f.) File downloading happend in ASYNCHRONOUES WAY when we import or when we use < script> in html file VS Synchronous in case of normal script sunless we use async or defer.

IMPORTANT NOTE : here, importing and Downloading scripts that are imported, are two different operations.

NOTE: import are hoisted meaning whereever we write them, they will be on top :) AND imports must always be made in the top level

QUESTION : if imports are hoisted and are downloaded in async, how do they work?
ANSWER : NOTE that they are hoisted and downloaded while parsing and not while execution hence it does not affect execution. Remember that a module only executes afeter the imports have been downloaded.

NOTE : this explains why imports must be top level, since if they are suppose inside a function, the module will be downloaded only when the function is executed and not while parsing.

#### Importing Modules :

NOTE that, when we use a function that is from another module like rand from math.js, the following happens :

a.) while parsing the code JS find that we used rand() function that is in math.js library
b.) after finding all the imports they are hoisted and then
c.) the importing of modules is done synchronously with respect to execution of the module

QUESTION : what does that mean?
ANSWER : suppose file A.js is importing rand() from math.js, in that case execution of A.js will only happen after the imported files have been downloaded and executed(synchronous behavior) so that before A.js is executed we know all the libraries and stuff needed.

QUESTION : how is this synchronous behavior good?
ANSWER: its very important to know the dependancies before execution of a module, this also comes in very handy for Babel, parcel etc file bundlers later.

QUESTION : wait wait wait !!! can you again explain what is happening ? in steps ?
ANSWER: Let us assume a file.js that has 3 imports. In this case :
a.) Before file.js is executed, all 3 imports must execute making a synchronous behavior.(hence imports are executed before the module itself)
b.) all 3 imports are downloaded in an ASYNCHRONOUS BEHAVIOR.(the imports with respect to each other are downloaded and executed in asynch)
c.) the imports are hoisted on top of the code and must only be written in top level code.

#### IMPORTANT :JS importing is live and different !!!

unlike importing in other languages, in JS the imported values dont get a copy from the exporting modules instead modules that use import actually get a reference to the library like a live connection.

NOTE : EXAMPLE OF ABOVE : Suppose file.js imports rand() from math.js. in that case :
a.) math.js will export
b.) file.js will import
c.) import in math.js is just a reference to the value of export in math.js.

THIS IS FRIKIN AWESOME.
NOTE: so take note that, the changes made in the export state will be reflected in import state and vice versa since both are actually the same stuff.

in comparison to java or C, the code from the other imported library is copied in the final product :)

=) import './module1.js'; : for importing an entire script :)

=) import {importedStuff} from './moduleName.js'; for importin particular stuff

=) import {importedStuff as stuff} from './moduleName.js'; for renaming the imported stuff.

=) import \* as NameOfEverything from './moduleName.js'; : this will create NameOfEveryting object that will contain everything from moduleName.js

=) import name from './moduleName.js' : for importing the default into name

QUESTION : why do we use curly braces{} when importing ?
ANSWER: when we import from a module, every element that is exported by that module COMES IN OBJECT FORMAT !!!! hence we are actually using destructuring kind of for getting stuff, we can hence get multiple files from same module using =)import {a,b} from './moduleA.js';

#### Exports and types :

a) Names exports : we have to intentionally add export in front of stuff that can be exported.

```js
export const fun = function () {
    return "hello";
}; // named export
```

```js
import { fun } from "./hello.js"; // importing in another file
```

we can even export multiple stuff using named exports and that too with a new name.

```js
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice as price, totalQuantity as quan }; // exporting and renaming too
```

b) Default exports :
when we want to export only one thiing from a module

```js
export default function (product, quantity) {
    console.log(`${quantity} ${product} added to cart`);
}
```

```js
import add from "./shoppingCart.js";
```

in the above, we have set what will be added by default value when we simply import from a module.

NOTE : we can call default imports and named imports in the same line eg :

```js
import add, { addToCar, totalPrice as price } from "./shoppingCart.js";
```

but its not recomended

IMPORTANT NOTE : remember that when we actually import stuff, we are in reality creating a live connection to the module we are importing and not just creating a copy of the code.

#### TOP level await(ES2022)

WE can now use await outside of async function called top level await, and it only works in modules.
hence we need to set type="module" for this .

THIS IS SO EPIC !!!!!!

BUT :
NOTE : the await is now blocking the execution of code since now its no longer a part of MICROTASK queue and directly in the callstack.

QUESTION : can you tell one case this is useful ?
ANSWER : when we fetch data from an async function, it is a promise and to handle that we use then() BUT, now instead we can use top level await!!!

```js
const getCoords = async function () {
    const res = await fetch("getLocation.com");
    const data = await res.json();

    return data;
};
const finalData = await getCoords();
console.log(finalData);
```

And hence we can simply await, instead of other stuff :)

QUESTION : is there other implication of top level await in case of Modules ?
ANSWER : if the exporting module, has some top level await, the importing module will not execute before the top levle await in importing module has been resolved(since top level await has blocking behavior).

NOTE : make sure to keep this in mind :)

#### The Module Pattern(DEPRICATED) :

its important to understand how old modules worked, since they are still present in old code.

```js
// below is code for old modules pattern

const ShoppingCart2 = (function(){
    const cart - [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({porduct, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };
    const orderStock =function(prduct,quantityy){
        console.log(`${quanityt} ${product} ordered from supplier`);
    };

    return{  // returnign all functionality.
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

```

QUESTION : How and Why does this work ?
ANSWER : we make an IFFY and store its value in an object and then we can use the objects returned by the funtion.

QUESTION : BUT HOW DOES THIS WORK AFTER THE IFFY HAS ALREADY EXECUTED ?!!!
ANSWER : Closures, even if the scope ends, the function that were defined can access the elements that were in the scope when they were defined.

#### CommonJS modules ? another moduling pattern

QUESTION : why are CommonJs modules important ?
ANSWER: they have been used in Node js like forever and only recently ES6 modules have been implemented in NODE JS.

NOTE : all the modules that we will use from NPM are still in CommonJs modules format !!!

```js
// How to export ?

export.fun = function(){
    code;
};

// How to import ?

const { fun } = require(`./fun.js`);

```

NOTE: we will study this in Node tutorial later but lets stick to this for now.

#### A brief intro to the command line

=) dir : contents of current folder
=) cd : change directory
=) cd .. : to go up in directory
=) cls
=) mkdir name : creates a new folder
=) rmdir name : deltes empty directory
=) edit name.extension : create a file , we can create multiple files seperated by space.
=) del fileName : delete file
=) mv fileName location : moving file to relative location
=) rm -R directoryName : deletes all files and the directory too.
=) ctrl + c : stop execution

### NPM :

NPM is both a software and a package

QUESTION : why NPM ?
ANSWER : In earlier times we simply used to use script and import a library and that will give us a global variables that we can use in our own scipt(like in mappy we used leaftet). But this is very messy.

The issuse is that what if a new version comes out? then we have to redownload or relink. NPM just makes our life eazy af man.

=) npm -v : to check if npm is installed.
=) npm init : to initialise npm for a project(this will create a package.json file) This will give some options and questions taht we can answer.

Now NPM has created a project file for us.
we can install leaflet using NPM :)

=) npm install leaflet :

NOTE : when we install stuff using NPM, there will be a fiels in package.json called "dependencies" that will take note of our installs.
also there will be a folder called node_modules taht will have the library that we installed for our program :)

in the above example, THERE WILL BE EVERYTHING WE NEED INTO A FOLDER CALLED leaflet !!!!

IMPORTANT : **Lodash** is a very useful library that inclues a lot of functions and other useful stuff for arrays and stuff etc !!! THERE IS A FUNCTION TO CLONE OBJECTS TOO !!!!!!!! =) Object.assign({}, state) : this does create a new object but does not deal with nested objects

IMPORTANT NOTE : remember, we need CommonJS modules to import the libraries form NPM !!!

QUESTION : but JavaScript cant read CommonJs modules ??? they how and why?
ANSWER: for working of CommonJs modules importing , we need to use BUNDLESRS !!! we will see how that works later. However some libraries like Loadash has a way to include it using ES6 Modules as well !! check documentation.

=) npm i lodash-es : this installs a lodash that can be imported with ES6 modules.

QUESTION : what is the real use of package.json ?
ANSWER: when we move our project, WE DONT HAVE TO CARRY THE NPM LIBRARY , JUST THE files and package.json file. and use command :

=) npm install : will install the packags from package.json. dependancies !!!!!!!!!!!!!!!

#### Parcel - Package Bundler(there have been changes in the latest version see below this section)

Webpack is alternate and is a very famous bundler in react world, but we will use parcel since its ready to use right out of package. IT EVEN CONVERTS SASS files BACK TO CSS.

=) npm install parcel --save-dev :(we can write -D too) (NOTE: we can install particular version using =) npm install parcel@1.12.4)
=) npm install parcel@next -D : will download the experimental next vrsion instead of latest stable one.

QUESTION : what is a dev dependancy (--save-dev)?
ANSWER : a dependancy that we need to build our project and wont be included in the library. It creates a new attribute in the package.jsonn called "devDependencies".

now the catch is, that generally to use programs on terminal, we have to set environment variable BUT, we installed parcel locally so what do we do?

=) npx parcel index.html : used to run bundler and index.html is the entry point. (alternate : =)sudo parcel index.html)

QUESTION : what is npx ?
ANSWER : npx enables us to use parcel without setting environment variable. It is just another programm that is installed with Node.

QUESTION : What will parcel do ?
ANSWER : parcel will combine the dependancies and all the modules taking the script in index.html as entry point.

NOTE: Parcel actually will start another development server on localhost:1234 :) (just like live-server)

=) npm uninstall parcel : for uninstalling

IMPORTANT NOTE: Parcel will combine all modules and libraries to form a script hence make sure to mention the < script defer src=""> without the type attibute!!

Parcel will create a folder dist that will have our project finalised and ready for distibution.
NOTE: IT WILL GIVE US THE FINAL PRODUCT :)

Parcel will get rid of all the stuff that is not needed and compress code :)

IMPORTANT **HOT MODULE RELOADING**

```js
// in any module, this code only parcel can understand
if (module.hot) {
    module.hot.accept();
}
```

One issue we had in the live server was, reloading page :(
THIS WILL FIX THAT !!!! The server run by parcel will without reloading reflect changes on webpage !!!!
NOTE: this will be at port 1234

QUESTION: what will be an example of state not changing ?
ANSWER : if we are adding somethign to object, or loging inn, we wont be logged out upon saving changes since it will persist the state.

**Another use :**
we no longer need to specify the complete directory or import, eg :

```js
import cloneDeep from "loadash-es";
```

THIS EVEN WORKS FOR IMAGES AND ALL THAT STUFF

NOTE: if loadash-es was not installed, Parcel is even smart enough to install it !!!!!

##### npm scripts :

in the package.json, there is a field called scripts, in which we can setup some shortcut terms eg :
NOTE: we use this instead of =) npx parcel index.html

```js
// package.json
"scripts":{
"start": "parcel index.html",
"build": "parcel build index.html",
},
```

this will allow us to =) npm run start : this is how we run script commands hence from the above code we can run "npm run start" and that is eqivalent to : "npm parcel index.html",
=) npm run build : from above code will build the project finally and will also display size stats.

=) npx parcel build index.html(depricated) : use the above method :)

IMPORTANT NOTE : we can install on global using : =) npm install parcel -g : this will install parcel globally and we can use parcel command without script or npx and stuff HOWEVER : the devs of these tools advice to install them on seperate projects so that we can stay on latest versions.

#### Latest changes in Parcel IMPORTANT

-> if using Parcel version 2, remove the main property completely from Package.json

-> now in the < script type="module" src="">, since now modules are accepted in place of scripts hence replace defer and use type = "module"

-> IMPORTANT NOTE : Suppose we include src to images in local directory of the script file, in that case remember that parcel will make a seperate script file in new folder dist HOWEVER, the directory is no more valid hence we in import images folder also :)

=) import icons from 'url:../img/icons.svg';(yes we need to place the url for images, videos or audios and even the icons files)

NOTE: remember to import all the asset folders in the script that are being used in the script like images etc.

#### Babel for Transpiling and core-js for Polyfiling:

Babel works with pluggins and features that we can configure. In case of Babel, pluggins would be the fatures we want to downgrade to es5 like arrow functions only etc.
BUT we transpile all :)

=) npm install --save-dev @babel/preset-react

QUESTION: Transpiling vs Polyfiling
ANSWER : Transpiling is the process of converting new syntax code to old syntax whereas, polyfiling is converting new features with the help of old javascript logic.

QUESTION: one more time in english please :)
ANSWER: in babel we can select the modern features we want to converted to ES5 for old browser support BUT we instead use the PRESETS in Babel that converts all features to ES5(@babel/preset-env). check babel documentation for more. The catch is that some expreimantal features, that have not been approved fully by ECMA are not int he preset of babel, and hence we must go into documentations and then include the presets. so chck incase of exprimental features.

IMPORTANT NOTE: Transpiling just works for converting stuff that is new syntax to old WE CANNOT CONVERT EVERY FEATURE BACK TO ES5!!!!! eg. we cannot convert Promsie or Array.find() to backward features since we cant just changes syntax to obtain their functionality. But we can

earlie Babel used to give features of polyflll to but now they suggest core-js

=) npm install --save-dev core-js;

we then =) import 'core-js/stable'

QUESTION: what will core-js do ?
ANSWER: it will remake the features not present in es5 !!! hence it will recreates methods like Array.find() etc in the Array.prototype while compilation !!!! It will even do stuff with Promise !!!

we can check int eh script that is created to see the working of core-js.

ONE LAST PACKAGE :

=) npm install regenerator-runtime and =) import 'regenerator-runtime/runtime';

QUESTION: why import this ?
ANSWER : for polifilling async functions we need to have regenerator-runtime/runtime :)

<hr>

### Writing clean and modern JS :

a.) Readable Code
write code so that others can understand it.
write code that you can understand
avoid too clevel and overcomplicated solutions
use descriptive variable names : what they contain
use descriptive functions names : what they do

b.) General
use DRY principle(refactor your code)
Don't pollute global namespace, encapsulate instead
Dont use var
use strong type checks (=== and !== )

c.) Functions
Generally functiosn should do only one thing
dont use more than 3 function parameters
use default parameters whenever possible
generally return same data type as received
use arrow functions when they make code more readable

d.) OOP
Use ES6 classes
Encapsulate data and dont mutate it from outside the class
Implement method chaining
Do not use arrow functions as methods (in regular objects)

e.) Avoid nested code(code inside block inside block etc)
Use early return (guard clauses)
Use ternary(conditional) or logical operators instead of if
Use multiple if instead of if/else-if
Avoid for loops, use arry methods instead
Avoid callback=based asynchronous API's

f.) Asynchronous code
Consume promises with async/await for best redability
Whenver possible, run promises in parallel(Promise.all)(when not dependant on one another)
Handle errors and promise rejections

NOTE: emogis take 2 slots in strings :)

### Deccrative and Functional JavaScript Principles :

IMPORTANT : There are two main paraadigms of writing code, and they are :

**a.) IMPERATIVE :** In this paradigm we need to instruct computer on _how to do_ EVERYTING. and we explain computer every single step it has to follow to achieev a result. EG> if we are baking a cake, WE TELL EVERY SIGLE STEP IN ORDER TO ACHIEVE A RESULT.
eg. below is a code to double an arry in imperative way :

```js
// imperative double array values
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
    doubled[i] = arr[i] * 2;
}
```

here we tell computer every single setp, declare, loop, increment, assign etc.

**b.) DECLARATIVE :** in this padigmn we only tell the computer _what to do_. and we simply describe the way the computer should achieve the result. The HOW step is abstarcted away. EG > if we are baking a cake, WE ONLY TELL HOW THE CAKE SHOULD TASTE AND LOOK
eg. below is a code to double arrar in declarative way

```js
// declarative double array values
const arr = [2, 4, 6, 8];
const doubled = arr.map((n) => n * 2);
```

here we are simply telling it what to do :)

one sub of declarative programming paradigm is FUNCTIONAL PROGRAMMING

#### Functional Programming (META in JS):

Its a Declarative programming paradigm

**Based on the idea of writing software by combining many pure functions, avoiding side effects and avoiding mutating data.**

NOTE: a **side effect** is modification(mutation) of any data outside of the function(mutating external variables, logging to console, writing DOM, etc.)
NOTE: a **pure function** is function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs.
NOTE: **immutability :** State(data ) is never modified! instead, state is copied and the copy is mutated and returned.

VERY DIFFICULT TO IMPLEMENT !!!

QUESTION: so do we go 100% functional ?
ANSWER : no, we should mix match the imperative and declarative paradigmn. Here are a few we can follow :
-> Try to avoid data Mutations
-> use build-in methods that dont produce side effects
-> do data transformations with methods such as .map(), .filter() and .reduce()
-> try to avoid side effects in functions: this is ofcourse not always possible.

Declarative additions :
-> use array an dobject destructuring
-> use the spread opeartor(...)
-> uset he ternary contitional operator
-> use template literals

=) Object.freeze({ object body}) : makes an immutable object :) BUT
NOTE: object.freeze only freezes the first level and its not deep freeze and this can bse used in a very well way :)

there are 3rd party libraries that do deep freeze :)

IMPORTANT NOTE : JS libraries like React are heavily dependant on functional programming concepts.

### MISC

```css
.spinner svg {
    height: 6rem;
    width: 6rem;
    fill: #f38e82;
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
```

code for css for rotating spinner.

#### Hash Change :

when we click on a link in our project, if our < a href="#id" > and we click on the link, in that case the page hash will change in the URL of the page. ANS WE CAN LISTEN FOR THAT EVENT !!!

=) window.addEventListener('hashchange', callbcakFunction(){}) : will listen for the change of hash on the window.
=) window.location.hash; for fetching the current hash of page(WITH HASH)

QUESTION : how is this useful?
ANSWER : we can setup links on page such that their href changes the hash and we can get that hash and then based on it make changes to the page !! Suppose fetch some information from another API etc.(like in forkify, we used the button press to change the page hash and based on the hash, we changed the reciepie on display and even change the data being fetched from the api)

```html
<a href="#5ed6604591c37cdc054bca10">RECIPE 1</a>
```

```js
 window.addEventListener('hashchange', callbcakFunction(){})
 const id = window.location.hash;
```

NOTE: when we implement page changes using hashchange, we should also listen for load event of page initially, this is because IMPORTANT : hashchange only triggers when hash changes and wont trigger the first time page loads on original hash!! also window.location. wont find any hash !! The reason why we need load event is since it may happen that user can copy the link with hash and paste it with hash so in that scinario we need to listen for load event inplace of hash change. meaning following are the 2 types of page loading :
-> when user copies the link of website with hash (we need load event)
-> when user opens page with a link without hash (we need to break out of load callback incase of this or force insert hash if dependant on it)

QUESTION : how to handle this ?
ANSWER: just use a guard clause and either force insert a hash on page loading OR, if there is no need of initial hash(like in forkify) break out :).

=) window.addEventListener('load', showRecipe);

QUESTION : why do we need good architecture ?
ANSWER : Structure, Maintainability and Expandibility

##### Project architectures :

We can create our own project architecture for a small scale project, however, the most famous patterns are :

-> MVC : Model View Controller

-> MVP : Model View Presenter

-> Flux

We can use frameworks like :

-> React

-> Angular

-> Vue

-> Svlte, etc.

in these frameworks we dont have to worry too much about architecture since they just work :)

**COMPONENTS OF Project ARCHITECUTURE** :

-> Business Logic : Code that acutally solves the business problem, eg. sending messages in Whatsapp.

-> State : Stores all the data about application that is running(FRONT END DATA), data like api used, page viewer is looking at.If there are changes in state, then UI should reflect that.NOTE: since storking data and sync are essential, There are tools like Redux or Mobx.

-> HTTP library : For making and recieveing AJAX requests.

-> Application Logic(Router) : Only contains the implementation of application itself(UNLIKE BUSINESS LOGIC) eg. how click should animate etc. This is why this state is also called router.

-> Presentation Logic(UI latyer) : All about the visible part of the applcation. NOTE : Essentially displays application state and stays in sync with State.

#### Model- View -Controller(MVC) Architecture :

The MVC consists of :

**WEB | <---> MODEL <--- CONTROLLER ---> VIEW ---> | USER**

-> MODEL : Business Logic, State and HTTP Library(logic code, storing data about front end and the data fetched from server, changes to me made in view start to occur from here)

-> CONTROLLER : Application Logic( controls how the complete application will work and will direct MODEL and VIEW on how to work, also will use the publisher subscriber patter to attatch event handlers from view)

-> VIEW(visible to viewer logic like DOM, adding html, removing html, making changes to html and css) : Presentation Logic , this is generally a class that exports its own objects AND for different sections of page, we can make several Views.

NOTE: in this modal we essentially seperate the LOGIC with PRESENTATION but then we need to connect them somehow, and hence we use Applicaiton Logic.

IMPORTANT : CONTROLLER dispatches tasks to model and view

QUESTION : Can you explain with example of a click ?
ANSWER : Suppose a click happens on User end :

a.) CONTROLLER will handle the click event

b.) handling may involve updating VIEW and asking MODEL for some data

c.) suppose MODEL makes an Ajax call, in that case

d.) CONTROLLER will take the result of Ajax call from MODEL and will pass it to VIEW for displaying.

e.) VIEW will render data in the UI.

IMPORTANT NOTE: HENCE , only CONTROLLER will import MODEL and VIEW !!!!

QUESTION: but again there is an issue :), why is event handler not in VIEW ? and even if it was in VIEW, it uses code from CONTROLLER as callback .
ANSWER : The issue are :

-> Event should be handled in the CONTROLLER(otherwise we would have application logic in view)

-> Events should be listened for in the VIEW(otherwise we would need DOM elements in CONTROLLER)

IMPORTANT NOTE : another issue is that, we cant call the function from CONTROLLER module into VIEW module since VIEW cant import from CONTROLLER.

hence making it a deadlock BUT NOTE: we have Publisher-Subscriber Pattern !

#### PUBLISHHER-SUBSCRIBER PATTERN :

PUBLISHER is the code that knows when to react(i.e. Event Handler in VIEW)
SUBSCRIBER is the code that wants to react(i.e. The callback funciton in CONTROLLER)

QUESTION : so how dooes this work?
ANSWER : in the controller, we make a function(say init()) and that function will call the event handling function(say addHandlerFun()). When the program runs, init() will also pass down the callback function into the addHandlerFun() and addHandlerFun() will then use the passed in callback into the event listener inside it. HENCE, the event handler will be attatched on the DOM with the callback function

NOTE: this wont disrupt the law of 'VIEW cant import MODULE' !!

IMPORTANT QUESTION: what is the bigger indication here?
ANSWER: NOTE : the catch is that CONTROLLER is the brain and wont listen to others and hence when event handler is attatched, its not the VIEW that is doing it !!! using init CONTROLLER is demanding VIEW to call an eventHandler on its own code!!!!!

<br>

**npm fractional** can be used to convert decimals to fractions :)

NOTE: when we import from libraries in parcel, we dont need to specify the directory in case of the librariy we install using npm, since parcel will find them auto :)

#### the config.js and helpers. js file :

we make a file called config.js that contains the variables that are important and to use used in a shared and global way.
HENCE THIS IS OUR GLOBAL SCOPE.

QUESTION : what woule be some good exaple of data that can be kept in config.js?
ANSWER : one good example would be to keep data that is prone to change and repeated across other files. like URL that may change in future and needs to be updated throughout.

helpers.js has functions used throughout the function

QUESTION : what woule be some good exaple of data that can be kept in helpers.js?
ANSWER : one good candidate would be to create a function that would get json from a fetch API.

IMPORTANT NOTE: make sure to use .js extension when importing self made modules.

-> NOTE: many times we had to restart parcel server inorder for stuff to work :). SO make sure to restart sometiems. Alternatively keep live server also onn.
IT can also be caused by HOT module reload. hence turn that off !!!

<hr>

## Structuring an actual project and Forkify Observations

### Project Folder Distribution :

```
📁project main folder
    📂dist
    📂node_modules
    📂src
        📷img
        📂js
            📂views
                📄view1.js
                📄view2.js
                📄View.js
            📄config.js
            📄controller.js
            📄helpers.js
            📄model.js
        📂saas
    📄index.html
    📄package.json
    🌐README.md
```

in this structure, -> dist folder will contain the complete project in a single directory after parcel is done bundling

-> node_modules will comprise of all the imported npm modules

-> src folder contains all th efiles for the project

-> img will have all the iamges

-> js folder will have the modules

-> sass will have css and sass files

-> view folder will have various VIEWS

-> package.json will contain the settings for the project for npm

### Project working points

=) controller.js : Application Logic( controls how the complete application will work and will direct MODEL and VIEW on how to work, also will use the publisher subscriber patter to attatch event handlers from view)

-> conttoller.js imports from all views and model.js too and also needs regenerator-runtime since its uses async and core-js/stable too

-> contains init function that is responsible for attatching the event handler with the help of function persent in view. init() is evoked immediately.

-> contains variour functions that call functions in model and view in order to change logic or ui.

-> all an all controller calls off the strings and has the order in which crutial functions are called.

-> also NOTE: error handling is done here.

=) model.js : logic code, storing data about front end and the data fetched from server, changes to me made in view start to occur from here

-> contains various functions that include making api request along with storking data that is on display on the page !.

-> IMPORTANT : will contain an object called state that will store data that is to be sent to VIEW using CONTROLLER. this object will be exported.

-> contains the handler function, that will when DOM event is evoked, call the updateData function in MODEL and renderChanges in the VIEW.

-> has logical functions that work on the page data eg. data fetched from the api

-> can also make changes to data stored after getting it from the api.

=) various views : visible to viewer logic like DOM, adding html, removing html, making changes to html and css.

-> various sections of a page need to be changed and we can distribute the changes to be made there in various modules too.

-> these modules will have a class with thhe various methods and their object will be exported for the CONTROLLER to use.

-> will also include methods that attatch DOM manipulators that will be evoked by the CONTROLLER.

-> there will be a parent View.js module, this will contain common to all view modules method slike, render(data), the \_parentElement attribute etc.

=) helpers.js :

-> will contain various methods that are needed by any modules and are just helper

=) config.js :

-> includes global variables that might be needed by all the modules and contain common data that might be changed.

#### Important Observations :

-> datasets can be used very well to keep track of some things in the html itself and is pretty pog.(used in pagination to keep track of the page the button will lead to.)

<hr>

#### IMPORTANT : DOM UPDATING ALGOx

```js
const newDOM = document.createRange().createContextualFragment(newMarkup);
const newElements = Array.from(newDOM.querySelectorAll("*"));
const curElements = Array.from(this._parentElement.querySelectorAll("*"));

newElements.forEach((newEl, i) => {
    const curEl = curElements[i];
    if (!newEl.isEqualNode(curEl) && newEl.firstChild.nodeValue.trim() !== "") {
        curEl.textContent = newEl.textContent;
    }
});
```

QUESTION: why and what and how?
ANSWER: DOM updating algorithm is used to find the elements that have changed state from original state and then only update them instead of any other dom element. it is done by following :

-> upon triggering of event that changes the DOM, we take the newMarkup to be inserted, this markup is generated with some changes in the code and almost most of the code intact, then we convert that into a virtual dom so as to compare it with original DOm. we do this using =) document.createRange().createContextualFragment(newMarkup);. A virtual dom is a dom that is just in memory and not a part of DOM tree.

-> then, we select all the elements from the virtual DOM using querySelectorAll('\*') and same for curElements. We do this so as to get all the seperate DOM elements so that we can compare them !.

-> we convert the NodeList returned by querySelectorAll into an array.

-> now we simply iterate over the two arrays comparing the respevtive index elements to find changed DOM

-> IMPORTANT : the isse here is that, if changes are in an element, ALL ancistors of that element will reflect that change

QUESTION : so how do we tackle that ?
ANSWER : most of the time, the element that need changing will have certain properties that make them unique, eg, maybe they are ithe only elements that have text in them. in that case we can use the logic newEl.firstChild.nodeValue.trim() !== ""

IMPORTANT =) nodeValue : if the Node type is document type, it returns null AND for the Node types like comments, text etc(NOTE: in a DOM tree everything from text to comment are in Nodes) it returns text HENCE newEl.firstChild.nodeValue.trim() !== "" if an element that has a child Node of text (eg a span containing text), this condition will satisfy and then we can change the textContent of that newEL !!!!! THIS IS POG AF.

=) newEl.firstChild.nodeValue.trim() !== "" is the logic to find an element that has its first child as plain text NODE!!!!

###### =) FormData() :

we can use =) [...new FormData(formDomElement)]; this will give us all the form elements in an array format(array with tuple of arrays), this is because FormData actually gives us an object and then its better to break it into an array using destructuring.

```js
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = [...new FormData(this)];
});
```

in the above we passed in this, since in an event handler callback function, this will point to the element itself.

#### POST request in fetch API

=) fetch(url, {
method : 'POST',
headers : {
'Content-Type' : 'application/json',
},
body: JSON.stringify(data);
});

The above is how we send JSON data to srvers, and the mentioned settings are compulsory.

-> NOTE, we can await the fetch request as some servers will send back data :)(EG. forkify returns the data se POST as a response).

-> check documentaion of API to find the post url or any other requirements

### HISTORY API

history API enables us to change URL # without reloading the webpage :O.

=) window.history.pushState(state, title, URL); : state and title are not important and are set to null and '' respectively, however, the important part is the URL hashtag :)

eg : window.history.pushState(null, '', `#${hashvalue}`);

=) window.history.back() : This will work like we pressed the back button on browser window !!!

#### JS DOCKS :

we can create documentation :) and we can visit jsdoc.app for more info

```js
/**
 * description text
 * @param {daatatype} parameter name    description
 * @param {datatype} [parameter = default value] description
 * @returns {return type} description
 * @this {type of this} description
 * @author name
 * @todo what needs to be done
 */
```

eg. :

```js
/**
 * Render the recieved  object
 * @param {Object | Object[]}  data The data to be rendered (eg recipe)
 * @param {boolean} [render = true] if false , create markup string instead of rendering to DOM
 * @returns {undefined | string} A marrkup strin is returned if render = false
 * @this {Object} View instance
 * @author Preetam Singh
 * @todo Finish impementation
 */
```

-> here we seperate parameter datatype with | incase it can be of multiple types.

NOTE: its compulsory to use import Paradise from "url:./../../resources/music/Paradise.mp3"; url before including music files link

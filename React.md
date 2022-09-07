# React.js(Project driven way)

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
```

this is how we include react in project the ez way.

once we have included react in project library, we can simply use :

for this we use index.js file.

=) (DEPRICATED) ReactDOM.render(htmlElement , element that we what the code in) : so we can simply put react code in any element by this render. below is an example of how.
NOTE: the htmlElement is an actual element and not a string here.

```html
//index.html file
<html>
    <head>
        <link rel="stylesheet" href="index.css" />
        <script
            crossorigin
            src="https://unpkg.com/react@17/umd/react.development.js"
        ></script>
        <script
            crossorigin
            src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
        ></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script src="index.js" type="text/babel"></script>
    </body>
</html>
```

```js
// index.js
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
```

hence in the above code, NOTE: that the entire of div with id root, will be replaced by the code specified in render methos.

### WHY react ?

-> React allows us to write composable code.

QUESTION : what is composable code ?
ANSWER : statue of david, was made from a single big marbel then sculpted down to make statue of david. But what if we use small brics to join and make statud of david? well with react we can create our own Custom components and then combine them later to create a bigger project.

```html
<body>
    <MyNavBar />
    <MainContent />
    <MyFooter />
</body>
```

in the above example we can see how we have added custom html elements and now we can simply use the render method to render each one of them seperately.

it looks somewhat like this :

```js
function MainContent() {
    return <h1>I'm learning React!</h1>;
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
);
```

-> React is Declarative :

i.e. we just have to tell react what to do and not how to do it.
NOTE: in vanilla js, creating a new element and then changing its properties is imparative and we have to do everyting.

```js
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
```

and NOTE: we are making the entire page in react using JS so it would be so cumbersome to just use vanilla JS to make individual elements.

QUESTION : BUT how does REACT make it ez ?
ANSWER :

```js
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"));
```

so we are simply able to write HTML like JAVASCRIPT !!!!!!!!!!

### JSX

-> JSX is JavaScript XML.

-> JSX is there in react and hence writing normal HTML is possible inside of javasript. However, there are small changes eg. instead of class, we write className

```js
ReactDOM.render(
    <h1 className="header">This is JSX</h1>,
    document.getElementById("root")
);
```

QUESTION : what is the different between DOM elements and JSX in react? or what will happen if we log the jsx into console ?

```js
const element = <h1 className="header"> This is JSX</h1>;
console.log(element);
```

ANSWER : It will print an object :

```
{
    type : "h1",
    key : null,
    ref: null,
    props:{
        className: "header",
        children: "this is jsx"
    },
    _owner: null,
    _store:{}
}
```

if there are childre, then children section will be filled here and stuff.

whereas a dom element is printed as, html element, Hence meanign that JSX code is actually treated as an object.

NOTE IMPORTANT PRACTICE : with JSX in render method note that we only place a single parent code i.e < h1>code< /h1> is single parent wehereas,
< h1>code< /h1>< p>code< /p> is multi parent code.

OR this will give render error !. hence incase we have multiparent code, just wrap it in a div.

#### how to import react the good way.(after update 18 of react)

we install react and reactDOM using NPM and then

=) import ReactDOM from 'react-dom/client';
=) import React = from 'react';

NOTE: we import ReactDOM not from react-dom but from react-dom/client(after react update 18 of react)

and if we dont import react even JSX will give error. since its a thing only inside of a react environment.

NOTE: there have been changes to how we render using =) ReactDOM.render(navbar, queryselector) is depricated now we follow the following.

=) ReactDOM.createRoot(rootElement).render(JSX) : This is the new way of working with react 18 !!!!!!!!

QUESTION : why are we using render method when we can simply insert html using .append() ?
ANSWER: vanilla append() method cannot work with JSX :(

<br>
<hr>

### Custom Compmonents

its not a good practice what we have been doing, i.e. saving valiables inside of a normal const variable. Hence we create custom components.

QUESTION : So how is this improved upon?
ANSWER : We create custom components using a function that returns the JSX we need. Also the convention of that function os pacscel case : TemporaryName(), AND we wrap it in angle brackets when we call it in render function. eg : < TemporaryName />

```js
function HeaderFunction() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" height="100px" width="100px" />
                </nav>
            </header>
        </div>
    );
}

ReactDom.createRoot(document.getElementById("root")).render(<TemporaryName />);
```

### parent child components :

NOTE: that we can actually make a custom component and actually use it like a JSX element inside other custom components !! eg.

```js
function Header(){
    return(
        <header>
            <nav>
                <img src="./img.jpg" />
            </nav>
        </header>
    )
}

function Page(){
    return(
        <div>
            <Header />
            <h1> Reasons I love React</h1>
        <div>
    )
}
```

This is how we can use instance of one custom component inside of other custom components.

```js
import React from "react";
import ReactDOM from "react-dom";

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    );
}
function Body() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>
                    It's a popular library, so I'll be able to fit in with the
                    cool kids!
                </li>
                <li>
                    I'm more likely to get a job as a developer if I know React
                </li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    );
}

function Page() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
```

<hr>

### Styling with classes :

adding class is done by, just adding className="style" and whatever style we want to add.
-> NOTE: just make sure the style.css was imported in the html file :)

### Project layout :

In a modern react project we generally place different react components into different files

NOTE : in any component file that uses JSX make sure to import React or it wont make sense to JS.

### Run react locally with Vite :

Vite can be installed using =) npm create vite@latest
Vite is kinda a fancy bundler :)

But i will stick to Parcel :)

<hr>

### Laying out a simple project :

So in general,
-> we have a folder called components that contains the various components in seperate files,
-> a component called app.js that contains the accumilation of all the custom components.
-> app.js is imported in index.js where it is added to the html.

NOTE: when returning a JSX, make sure if binding the data in between paranthesis, the first one should be infront of return statement.

```js

function Main(){
    return   // this will throw error :)
    (<span>hello</hello>);
}
```

### NOTE NOTE NOTE NOTE NOTE NOTE NOTE IMPORTANT :

```js
import React from "react";
import pic from "./../resources/profile-pic.jpg";

export default function Photo() {
    return (
        <div className="photo">
            <img src={pic} className="photo-img" />
        </div>
    );
}
```

this is how relative address are used and imported so that parcel can better convert them.

-> this is to import the actual resource in the dist folder in the final step.

<hr>

### PROPS in React :

PROBLEM : The problem we face it that, the components we build uptil now are not reusable ! what if a layout is repetetive? how do we fix this issue?
we use props.

### **Javascript inside of JSX**

-> we can insert js variables inside of JSX by binding it within {} !!!!!!

-> not only that, we can put any JS code inside of {} inside of JSX.

-> its only obvious that the code must return something.

NOTE: although a good practice is to keep js minimal inside of the JSX and do the logic opeartions outside of JSX.

IMPORTANT -> JSX allows us to pass any custom attribute when we call a component !!!! this is not allowed in HTML but is possible in JSX.

IMPORTANT QUESTION : what is the big catch about being able to pass custom arguemnts?
ANSWER : we can reuse the components by passing different values of attributes.

```js

<Contact whatever="preetam">
```

-> these custom properties in react are called Props !

QUESTION: how do we recieve props in components ?
ANSWER: they are recieved as an object as an argument.

```js
function component1(props) {
    console.log(prop);
}
```

NOTE : in the above code props will be an object that contains all the attribtues passed in when calling the custom component.

QUESTION : what if some of the arguments are not passed in some of the components?
ANSWER :

```js
return <div>{props.setup && <h3>Setup: {props.setup}</h3>}</div>;
```

NOTE : YEPP empty arguments are falsey values :) and hence this works.
:)

#### Passing non string props :

QUESTION : how do we pass props that are not string?
ANSWER : USING CURLY BRACES !!!! we can pass data binded in {}

```js
<JOKE setup="two girls were sitting quietly" isPun={true} jokeNumber={1} comments={[{author : "preetam", body : "nice"},{author:"wamen", body: "thats racist"}]}>
```

We just sent a boolean value as a parameter in above code along with an integer value and then pased in an array containing objects.

##### Arrays for JSX :

a good layout for project is to simply put the data to be put in components in an array and iterate over it and putting the data in custom components.

NOTE: so in general we can make an array that contains all the repetetive JSX that uses same components and just iterate over it when it needs to be displayed in a grid of flexbox.

### INLINE CSS IN REACT :

The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example:

```js
const divStyle = {
    color: "blue",
    backgroundImage: "url(" + imgUrl + ")",
};
let theJSX = <div style={divStyle}>hello</div>;

or;

let newArr = boxes.map((ele) => {
    return <div style={{ width: "20px", height: "20px" }}></div>;
});
```

QUESTION : what is the format?
ANSWER : the format is camel casing name of style name and then the value in pure String.

<hr>
<hr>

## Interactive/Dynamic webpages with React.

QUESTION: what will be some properties of dynamic apps using react?
ANSWER : Following :
-> Read-write: ability to change data
-> Highly interactive
-> Displays your data
-> Examples : Bank website, AirBNB

#### adding event listeners using react :

=) onClick = {function(){}}
=) onMouseHover = {function(){}}

```js
export default function App() {
    function handleClick() {
        console.log("I was clicked!");
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
```

NOTE: although, it is must faster to use vanilla event listeners as they are much faster.

NOTE: we can check for more event listeners in react documentations.

onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp

NOTE: you must have noticed by now that attribtues in JSX are all in camel casing.

### React with states :

NOTE: one of the major usecase of react is its ability of find the changes in state(either data change, or updataion) and updating the visuals in real time.

QUESTION : what is a state and state change?
ANSWER : a state is where data is unchanged and change in state means making any kind of change to actual data.

imagine a case where a page displays object from an array. NOTE that if we add suppose another element to the array. The page needs to be refreshed. Not if we use react state.

below are a few IMPORTANT QUESTIONs answered :

QUESTION : How would you describe the concept of "state"?
ANSWER : A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)

QUESTION : When would you want to use props instead of state?
ANSWER :Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.

QUESTION: When would you want to use state instead of props?
ANSWER :Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).

QUESTION : What does "immutable" mean? Are props immutable? Is state immutable?
ANSWER : Unchanging. Props are immutable. State is mutable.

=) React.useState(stateValue) : this is one of many hooks in react :).
OR
=) import React, {useState} from "react" : calling this function actually returns an array that contains, the states that are stored.

NOTE: in easy way, the array returned is of the format [ stateValue, some()] and hence to access the current state or we need to access the index 0

-> So what happens is that the user interacts with components.
-> based on the interaction the function is called to change value of state at index 0.
-> react component will access the state at index 0 and update the component visually.

```
const [stateValue, func] = React.useState("hi");
```

this is the common way of accessing the state value sicne its on first index always :).

QUESTION : what is the function at index 1?
ANSWER : it is the function that is used to make changes to the state !!!!
Hence to make changes to the state, use use the function at the index 1 and simply pass the value of new state !!!

NOTE: if the value of state is used anywhere in the react element, changing the state value using the function wil chaange the actual component in real time.

IMPORTANT NOTE : dont use ++ opeartor with the count variable !!!!! why? this is because count++ changes the actual value of count !!!! and we dont want that. hence use count+1 which does not effect count.

NOTE: when we need to use the old value of state the best practice is to :

```js
function add(){
    setStateValueFuntion(function(oldValue)=> oldValue+1);
}
```

Hence its better to use callback function when the new value of state depends on the old value of state.

The callback function recieves the old value of state and we have to return the new value of state.

NOTE: when we have objects saved as state, and we need to make a single changes we can use spread and the changed value :)

```js
return {
    ...oldObject,
    changedValiable: value,
};
```

QUESTION : we know that react refreshes the component on the visual side whenever changes are made to the state, what about the internal nested Custom components ?

```js
<div>
    <Custom />
</div>
```

ANSWER : react refreshes the internal custom components too !!! IMPORTANT NOTE : we can even pass inn state as a parameter to the component.

IMPORTANT QUESTION : Can we make changes to state of parent from within a child custom component?
ANSWER : YES take for eg :

```js
return (
    <div>
        <Custom theParentEventFunction={parentFunction} />
    </div>
);
```

in such an example we can pass inn the function that makes changes to the state of the outter parent into the child component as a property, recieve it in the body where Custom component is defined and then can call it within the cusom component!!!.

NOTE : normal properties like onClick dont work on custom components and will only work on Native dom components.

#### How data is passed in react components :

supposing there is a hierarchy of custom components nested one inside other, in such aa case :

-> siblings(components sharing same parent) have no way of sharing data regarding their state :)
-> infact siblings dont even know they have sibling.

QUESTION : is there a way ?
ANSWER we can pass data from parent to child so its better to keep states in parent components that way :

-> parent components passes states to child component and hence siblings can have some idea about the states.

-> this needs to be planned thoroughly :)

IMPORTANT NOTE: =) Redux is a frikin library used to manage states :) so as to prevent this mess.

IMPORTANT -> so we can pass the state and state function into child so they can access state, or even change it.

-> NOTE: remember how we can pass inn styles in JSX using objects ? that is os helpful if used in states :)

The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example:

```js
const divStyle = {
    color: "blue",
    backgroundImage: "url(" + imgUrl + ")",
};
let theJSX = <div style={divStyle}>hello</div>;

or;

let newArr = boxes.map((ele) => {
    return <div style={{ width: "20px", height: "20px" }}></div>;
});
```

-> we can set darkmode using this very easily :)

NOTE -> when passing in a function as prop for child component to use, make sure its called in child withing a callback function. eg : onClick={()=>props.toggle(props.id)} , here the function is toggle and is bound withing another callback function.

#### Conditional Rendering in React :

-> States can also be used to determine if we want to display certain elements or not. Here is a small hand way to do it with && operator in javascript.

```
{isShown && <p>hello</p>}
```

#### Working with forms in react !!!

IN OLD TIMES :
-> in olde times, form had action attribute that had link to where the form will be submitted, along with method.
-> the form components had a name and value type.

IN VANILLA JS :
-> on form event listener for "submit" event is attatched and then the data for form is passed onto a server that will process the form

```js
document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const { firstName, lastName } = formElements;
    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value,
    });
});

function submitViaAPI(data) {
    console.log(data);
    console.log("Submitted!");
}
```

QUESTION : what will be different in react thatn vanilla js ?
ANSWER : the main difference will be that, in Normal JS the form data is sent after the submit button is clicked, Whereas in react we will process the form data on every key stroke in form !!

NOTE: this explains how in certain websites, the username we enter is processed in real time with every keystroke to tell if the username is valid or not :).

-> in react this change notice with every keystroke is done using states :).

-> VERY IMPORTANT : the event that we listen for to see changes in form elements is =)onChange

```js
<form>
    <input type="text" placeholder="First Name" onChange={handleChange} />
</form>
```

-> how the callback function above hendleChange will get an event.
-> hence the value of the form element can be accessed using =)event.target.value

```js
function handleChange(event) {
    console.log(event.target.value);
}
```

#### Controlled components and single source of truth :

**Single source of truth :** there should be no contradiction in state values, ie. a child and parent may share same data but with seperate value. And this leads to contradiction.

-> take example of an input box, the catch is that input box has its own state(whats typed in it) and we maintain another state in the valiable that we define. NOTE: we are copying the state from the input box to our variable !!

-> this is not good and to maintain single source of truth we want the state we create to be mirrored in the input box !!

QUESTION : how do we make it such that whats stroed in the state we create is what is reflected in the input box ?
ANSWER : we use the value property !!! eg.

```js
<input
    type="text"
    placeholder="First Name"
    onChange={handleChange}
    name="firstName"
    value={formData.firstName}
/>
```

in the example above, we do the following :
-> after every change in input, the value is stored in local state that we have made, and then that value is put into the value atteribute of the form !!! Hence NOTE: the value being shown in the input field is not the value that user typed but the value that is stored in state!!!

IMPORTANT QUESTION : why do we do this ?
ANSWER : if we make interally changes to the state, IT WONT BE REFLECTED ON THE INPUT FIELD SINCE IT MAINTAINS ITS OWN STATE AND ONLY KEEPS THE USER INPUT !!!! whereas doing this will make sure that even without users will if changes need to be made in internal state, they are reflected in the input tag !!!

NOTE: so all in all we did this so that if internal state changes, the change is reflected in the controlled components.

#### NOTE: text area :

a normal text area is just < textarea>Placeholder text< /textarea> and has a closing tag aswell

WHEREAS

in react they made text area similar to input tags like :

< textarea />

making text area just similar to input field.

NOTE: =) < label htmlFor="isFriendly">Are you friendly?< /label> using htmlFor will make so that clicking on label will send us to the input that has isFriendly id.

#### checkboxes :

=) < input type="checkbox" checked />

-> checkboxes hold boolean value and has a property called checked

#### radiobutton :

-> only one radiobutton is active at a time and hence
-> all raido buttons will have same name, but different values
-> when one of them is selected, the value for the name in state is saved !

QUESTION : how do we control radiobuttons and make them controlled ?
ANSWER : there is no attribute in radio buttons where we can reflect the changes that are in the state. so here we simply make an attribute called checked(just like checkboxes) and then simply save true at the checkbox that is selected and for all the radiobuttons that are not selected the property is false.

#### SelectBoxes :

```html
<select id="favColor">
    <option value="red">Red</option>
    <option value="orange">Orange</option>
    <option value="yellow">Yellow</option>
    <option selected value="green">Green</option>
    <option value="blue">Blue</option>
    <option value="indigo">Indigo</option>
    <option value="violet">Violet</option>
</select>
```

-> above is how regular selectbox looks like in normal HTML
-> the selected attribute will get the selected attribute.

HOWEVER in React :

-> for chenge to be reflecetd, we simply update the value attiribute in the select :

```js
<select
    id="favColor"
    value={formData.favColor}
    onChange={handleChange}
    name="favColor"
>
    <option value="red">Red</option>
    <option value="orange">Orange</option>
    <option value="yellow">Yellow</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    <option value="indigo">Indigo</option>
    <option value="violet">Violet</option>
</select>
```

QUESTION : what is happening here ?
ANSWER : when an option is selected the following happens :
-> the state is selected and the value of the select tag changes
-> the value is stored in state
-> the state changes the text value in the select :)

#### Submitting :

in old times :)
< input type="submit" value="sent it in">

BUT

in HTML 5
-> A button inside of a from will automatically have type="submit"

NOTE: to make a non submit type button inside of a form, just set type="button"

-> we setup a form and on it we add the event handler onSubmit and pass event handler

QUESTION : what will this event handler for onSubmit do?
ANSWER : process the inputs , send to API or whatever we want :)

IMPORTANT NOTE: in that function make sure to use evetn.preventDefault() to prevent refresh.

here is a form :

```js
import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // submitToApi(formData)
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
}
```

#### Making api calls in react(DONT USE INSIDE REACT !!!) :

Consists of 2 steps :

1.) getting data : using fetch
2.) save the data to state.

QUESTION : what is wrong with making fetch requests in react and then storing the data in state?
ANSWER : it causes infinite loop. Data is fetched, sotred, storing causes changes in state, the component is reloaded, again causing the fetch request to be made and so onn.This is side effects.

#### Side effects :

to understand this lets look at reacts primary tasks :
-> Working with the DOM/browser to render UI to the page
-> Manage state for us between render cycles(i.e. state values are "remembered" from one render to the next)
-> Keep the ui updated whenever state changes occur.

What react cant handle on its own ?
-> (Out) side effects!(anything outside react react)
eg. Local storage, API/database interactions, subscriptions(eg. web sockets), syncing 2 different internal states.

HENCE IMPORTANT NOTE : REACT CANT HANDLE ANYTHIGN OTHER THAN WHAT REACT CAN HANDLE

and doing stuff that react cant handle inside of react, causes side effects.

NOTE: this is why making api calls in react causes side effects.

### useEffects() solution to react side effects.

useEffects is used to help react interact with the stuff that react cant work with and help avoid side effects.
=) React.useEffect(callbackFunction, dependenciesArray) :
->the callback function contains the code that can cause side effect(NOTE: this code will be called after react has rendered the JSX on screen)
-> the dependencies array will contain values that if change will cause the callback function to run.So it will help control the running of the side effect code.

QUESTION : simplyfy what is going on ?!
ANSWER : so the React.useEffects() will call the callback function after rendering the JSX. But we know that depending on state, the JSX might refresh on page. But should the code in the callback of useEffects also rerender? It sometimes depends on the components of state that changed. Hence in the useEffects function, along with the callback that contains the code that will be run after the jsx is displayed, we pass inn an array of elements. So the code in callback function will be executed the first time JSX runs but it will only be executed a second time if the elements mentioned inside of the array change.

eg. : React.useEffect(()=> console.log("Hello"), [ pre, tree]);
in the above code suppose pre and tree are two variables inside of state. Now following will happen :
-> first time jsx will render and console.log is printed.
-> upon changes in state the JSX is rendered again and only if pre and tree change will the console.log be run again.

NOTE: if the dependencies array is empty, the code in callback function will only execute once.

IMPORTANT NOTE: we can not make the callback function inside of useEffect as an async function !!!!!

NOTE : there exists resize event :)

#### Unmounted components and memory leak :

IMPORTANT : Imagine a scenario where we have an event listener inside of useEffect. The first time the component renders, the event listener will get attatched and will stay till the end of program. But NOTE : what if the component we used the values of listener on is dismounted?

QUESTION : what is dismounted component?
ANSWER : dismounted components are components that are no longer present in the dom and are removed based on comditions.

Addressing the above issue, even when the element that makes use of the value that is provided by the callback function is dismounted THE CALLBACK FUNCTION STAYS !!!!!!!!!!!!!!!!!!

THIS IS A MEMORY LEAK !!

```js
import React from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    return (
        <h1>Window width: {windowWidth}</h1> // the element that will cause memory leak
    );
}
```

in the above code, incase the < h1> element is dismounted, the callback function in useEffect will be of no use, BUT still exist.

NOTE : for this we use useEffect cleanup

QUESTION : so what do we do about this memory leak?
ANSWER : we return a function in the callback that cleans the sideeffect !!!!
NOTE: in the above example we can remove the event listener using removeEvent listener in the following way !!!

```js
React.useEffect(() => {
    function watchWidth() {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
        // cleanup function
        window.removeEventListener("resize", watchWidth);
    };
}, []);
```

NOTE : so all in all, we are closing the resource that we have opened for the component incase the component is closed.

IMPORTANT QUESTION : why cant we use async infront of the callback in useEffect ?
ANSWER : We know that an async function should return a promise and what we return will be the resolved value of the promise. BUT HOLD ONN!!!!!!!!! react expects a function for resolving cleanup from this function and this is the issue. :) Hence the syntax for async function will bother us. although we can use another function inside of this function and make it async but its just better to use then() syntax.

#### Lazy state initialization :

consider this line of code inside of any component :

```js
const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")) || []
);
```

-> above is code for fetching the data stored in localStorage the first time the state is initalised.

HOWEVER!! NOTE that every time we make changes to the state, the component will rerender and along with that it will reinitialize and call local storage !!!!!

This is not insignificant as operations like JSON.parse(localStorage.getItem()) are quiet intensive and hence its an issue.

QUESTION : so what is the solution to this issue ?
ANSWER : we use lazy state initialization : this is done by simply binding the only once to be initialized data in state into a callback function that returns what needs to be the initial value of the state. eg

```js
const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
);
```

Hence the above code will only call the localStorage once :)

IMPORTANT IMPORTANT NOTE : Learning more advance react is upto you read documantation what is other stuff possible with react? react is just for visuals

QUESTION : what is the warning that react throws regarding key attribute?
ANSWER : Generally, we use the id provided by the API in case we want to assign keys to components. React likes to have a key attribute in the custom components for uniquely identifying them incase of changes and stuff. Its always to give a unique id and for that we can use an module called =)nanoid . It simply generates random keys :).

NOTE: bets practice is to make an object for Dynamic styles on a custom component.

#### TON MORE TO LEARN !!!!

-> take advance React cource on Scrimba
-> Class components in React
-> React Router(Allows to make multiplage website)
-> CSS-in-JS(libraries allow to put CSS in JS)(PF : styled components)
-> Next.js/Gatsby (Build over react :)
-> Performance/ optimization
-> More hooks (we looked at 2 of them only)

##### updating videos in react 

when working with react, one issue is that if we try and update the src of a video to change video dynamically, it does not refresh the video although it will change src value. in that case just simply change the key attribute of the video to refresh the video and force a rerender. 

#### links in react 

```js
<a href="link1" target="_blank" onclick="preventDefault1”>
```

and the function should be :
```js
    const preventingDefault1 = function (event) {
        event.preventDefault();
        window.open(params.data.link, "_blank");
    };
```

the issue arrises due to react not being able to call preventDefault function :)

also her eis how to just simulate click and download by making an anchor in the click event 
```js 
const tempLink = document.createElement("a");
        tempLink.href = resumeLol;
        tempLink.download = "Preetam-Singh-Resume.gif";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink); 
```
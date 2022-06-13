# CSS info

### basic format :

     format ==> selector{property:value;property:value}<

### 3 ways to use css :

-   _inline_

        inline css sucks as its for adding properties to single tag at a time and hence its very troublesome to work with since what if same attribtues are to be given to multiple tags ?
        eg :

    `<h1 style="color: greenyellow; font-size: 3rem">Hello World</h1>`

-   _internal_

    internal css is when we define the default looks of attributes in the head of the page. But what about the other pages in same project??
    Internal css is efficient for single page , for multiple pages external css is used.
    eg :

```css
   <head>
        <style>
           h1 {
               color: blue;
               font-size: 3rem;
           }
       </style>
   </head>
```

-   _external_

    external css comes into play when we need to apply css styles to multiple pages. we create a seperate css file.
    now in the html head tag we give a link tag :

        `<link rel="stylesheet" href="./styles.css" />`

and our styles.css file :

```css
h1 {
    color: crimson;
}
h2 {
    color: purple;
}
```

and using external css we can simply give the link attribut in the head of files that we want the style sheet to apply to

<hr>

### priority in inline,internal and external CSS

_what happens if inline, internal and external css at the same time ?_
incase, if there are same styles for same attribute in inline, inline will override internal and internal will override external.

INLINE > INTERNAL > EXTERNAL

eg .
if we have set -
h1 color : blue inline
h1 color : pink internal
h1 color : green external
the external h1 attribute will be overwritten by internal and internal will be overwritten by inline.

**note : this is somewhat like the class and children from OOPS**

<hr>

### selectors and declarators :

**selectors** : are the text that comes before curly braces in styles sheet. eg h1

**property** : property is the actual feature that we are giving value eg. color

**value** : the actual value that we are giving to the property eg. red

**declarators** : property and value together form declarators

**declarator block** : the code within {}

```css
h1{             ---> here h1 is selector
color: blue;    ---> this is one declarator = property+value
}               ---> the whole block is declaration box
```

## SELECTORS :

selectors are of various types :

### Type/Element Selectors :

type selector is simple and in this we just write the name of tag that we want of change. This would apply to all the tag type. This is kinda handy for giving tags a global look.

eg : if we want to change style of heading 1 we use the selector h1 to change for paragraph, we write p and so onn.

this is the most basic type of selector.

suppose we want to change the color of text in whole html page what do we do?

we use body selector since the whole page falls under body tag.

```css
body {
    color: green;
}
h1 {
    color: blue;
}
h2 {
    color: purple;
}
```

in the above note that the body sets the color to green but the child tag sets it to blue so what will happen? the child tag particular attribute will be prioratised

we can group multiple selectors seperated by , eg

```css
h1,
h2,
p {
    color: blue;
}
```

### ID selector :

we can use the id of a tag and use #tagid as the selector

using this we can ID specifically change looks of elements

and id is unique for every element

```css
#id1 {
    color: blue;
}
```

### Class selector :

every tag in html can have a class attribute.

a tag can have multiple class

the css format of class selector comprises of .clasname
eg.

```css
.green {
    color: red;
}
```

**NOTE :** a tag can have id and class selectors both working at the same time. BUT its recomended to keep them seperate and keep id be element specific.

### Div and Span selector :

div and span work in save way, but one is for block level elements and another is for inline elements

we can bind tags within div or span and simply give the div or span a style and style applies to all the children.

eg.

```html
<div style="color: blue">
    <h1>preetam</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti
        sequi sapiente possimus culpa in porro! Doloribus delectus suscipit odit
        facilis asperiores nesciunt at temporibus ipsam porro
    </p>
</div>
```

### Inheritance :

in css , the styles of parent tag are taken in by the children.
eg. giving body element

the priority of child is greater than parent :)

CSS :

```css
body {
    font-family: monospace;
    line-height: 1.5em;
}
div {
    color: blue;
    border: 3px solid black;
}
p {
    color: green;
}
```

HTML:

```html
<body>
    <div>
        <p>
            Preetam is the best north to south, east to west preetam is the
            best, oh yeah.
        </p>
    </div>
</body>
```

in the above case note that the font-family is not defined for <div> an <body> and hence it will not be overwritten and inherited by the child tags whereas color is defined by <div> and <p> both and hence color style for child will be overwritten by parent.

BUT SOME PROPERTIES ARE NOT INHERITED BY CHILDREN :
eg. border: 3px solid black;

the whole section under div will get the border but the other elements inside the box will not get their seperate box

### CSS overwrite priority :

if there are Multiple styles defined for same element which one will be prioratised?

1.) id vs class : id

2.) upper vs bottom : incase same priority selectors come, bottom one is used.(last rule)

3.) specifics vs non specifics : most specific (eg. tag id is more specific than tag name)

4.) important is more important

### Last Rule & Specificity

in a scenario where for id="preetam" suppose there are two id selectors, one give color green and another gives color blue.

which will be used????

THE ONE WHICH CAME LATER.

Specificity states that the more specific selector process will be prioretised.
eg. id selector is more specific than class selectors and type selecrors.

class is more specific than tag :)

NOTE: even a:link has higher priority than a selector.

### !important selector :

this selector has the highest priority but should only be used incase when there is bug and there is no solution to be found. ALWAYS USE AS LAST RESORT.

this has more priority than the inline css also !!!

```css
footer p {
    color: green !important;
}
```

### Universal Selector :

universal selector is true for all the elements but Universal selector has the least specificity and hence mostly overwritten.

```css
* {
    color: blue;
}
<!-- universal selector -->
```

note that if we set border in a universal selector, all of the elements will get the border. So note how its difference from :root or body element selector.

### End selector :

when the selector determines that the element has multiple class or id.

eg.

```css
.class1.class2 {
    /* End selector*/
    color: blue;
}
.class1 .class2 {
    /* Descendant selector*/
    color: white;
}
```

in the above example, the first selector is end selector which covers all the elements that have class1 and class2 whereas the 2nd selector covers all the class2 inside of class1.

we can combine multiple of these or can work around with id class both eg. .class#id.class, #id#id, #id.class

<hr>

## CSS properties :

### Coloring :

for giving color following properties exist :

**1.) color :** for setting color of content of element.

**2.) background-color :** for setting the color of background of element.

**3.) background:** takes color as well as image url(image part will be seen later)

for value of color attributes, we can simply write a color name, or we can simply give the needed rgb value

eg . color: rgb(255,255,255);

**_rgba_** : is used to give color values + opacity/transparancy. The last value ranges from 0 to 1 from 0 is full transparent while 1 is fully opaque.(here a is alpha but stands for value of transparency)

`color: rgba(255,0,0,0.5 )`

**_hex_** : a hex value is hexadesimal 6 digits after #. They also convey rgb
for every r, g and b there is 2 characters

`color: hex(#ababab);`

**_HSL and HSLA_** : HSLA stands for Hue,Saturation,Lightness and Alpha

Hue is a number from 0 to 255 representing colors, saturation is color strength and lightness is white color amount, alpha is opacity. Saturation and Lightness are written in percent 0 to 100%.

```css
color-palet1 {
    color: hsl(244, 80%, 80%);
    background-color: hsla(123, 70%, 70%, 0.6);
}
```

<hr>

### Layout and units :

**_font-size_** : for size of text

**_width and height_** : for height and width of the element.

**_UNITS_**: units is the unit of measurement of layout values eg, cm,pixels etc.

font-size,width and height are given using pixels(px).

```css
.layout {
    font-size: 60px;
    width: 400px;
    height: 600px;
}
```

Pixels is absolute unit but for Responsive designs, we will use other things.
This is because pixel unit is used for absolute sizes.

**_Relative value_** :

we use percent values for giving relative values.
now one thing to note is that relative values are made in relation to parent element.

```css
.outer {
    font-size: 60px;
    width: 400px;
    height: 600px;
    /* above are absolute units */
}
.inner {
    width: 50%;
    height: 50%;
    background: red;
    /* the above are relative and responsive */
}
```

in the above code , if outer class belongs to parent element and inner class belongs to child element, then the inner element will be dependant on outer and will take 50% the values of the parent respective attribtues.

NOTE : for the body tag, the parent is the display size or window size.

**_EM_** : VVVIMP :

< body> tag, carries the default browser style by that means that the body tag will have the size of whole browser screen and yadi yada that we will cover later.
one such value that browser has given by default to body is em value. Now by default in chrome browser, 1em=16 pixels for text size. if we change the browser setting and change the size of the browser text size, em will change for body tag.

every size based property can be given a size and the child will treat the size of the same property as em. If we give parent font-size: 20px, the child given font-size: 0.5em will be 0.5 the size of parent.

just remember that body tag is actually the one that gets the browser set em value so its best to start with that and chain.

when this unit is used in child of body class for text size eg.

```html
<body>
    <div style="font-size: 2em">
        <h1>Preetam Singh</h1>
        <div style="font-size: 2em">
            <h1>is the best</h1>
        </div>
    </div>
</body>
```

**_REM_** :

Rem is just a unit like above, but instead of parent, REM is the size set in the ROOT element i.e < html> tag.

this is very useful and less confusing.

NOTE : 1rem = 16px again, default browser style

so for size changing in relation to the rem that browser provides, its best to work with rem. and page element will change size accordance to rem of the page.

**_Vh and Vw_** :

VH and VW are relative to screen size

vh is for view height and vw is for view width

so 50vh will be 50percent of window height and 50vw will be 50 percent of window width.

<hr>

### Where to use px, %, em/rem & vh/vw.

px can be used for absolute sizing where we dont want the size to be motivated by paretn, settings or window size.

% is best when we want to size things with respect to the parent class.eg. for a box insize of another box the inner box can be sized in accordance to parent box.

em/rem are useful in cases where the user changes the text size so we dont wanna change the size of images and logos but change the text size, wrt parent or the root ez.
note: EM and REM are used for text but can be used for images also altough other options are available to make responsive for images.!!!

vh/vw are best used for making changes to size in accordance to the size of device or browser window.

<hr>

### Default browser styles :

our browser comes inn with some default browser styles. these are default styles given to html elements. this can be seen by inserting a normal element and then simply going to chrome webtools to checkout the styles section for the styles that are given to that element.
eg. text-alignment: left, font-style: bold; etc.

<hr>

### Other Properties :

**_calc :_** : calc is used to perform calculations on units of measurement like px,vh etc.

its kind of handy in cases where we dont know what the fixed value of size will be when we are using relative height measurements.

eg.

```css
.banner {
    background: red;
    min-height: calc(100vh - 100px);
}
```

in the above code the value for vh can be variable based on case and hence calc comes to rescue.we can perform +,-,/ and \*

**_min-height_** : in a responsive element, we can fix the minimum size an element will be using min height parameter.
(in cases where we want to give the minimum an element will responsively shrink according to the scenario)

<hr>

## Typography

**_font-family_** : font family tells the font we want to use.
the issue is that some browsers dont support some fonts so its best to mention many backup fonts incase of issues like these.
fome fonts are generic, i.e. they have various fonts under them what we can do is mention many fonts and in the end mention a generic font. eg. monosapce, cursive, sans-serif, fantasy, serif.

so incase all the backup fonts fail, the browser can pick any font available under generic family.

```css
h1{
    font-family: Verdana, Courier, monospace;
    <!-- the last font monospace is generic-->
}

```

**GOOGLE FONTS** :
we can look for fonts on google fonts resource.
it tells load time of font and we can customise fonts and its awesome.
we can even check loadtime of fonts!!!! so pick carefully.

we can copy embed code form google and it will be link tag, we paste the code in head of our page and now we can freely use the font name in css.

eg.

```html
<link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
    rel="stylesheet"
/>
```

placing this link in html head, we can simply use Roboto to use the font in our stylesheet.

OR

we can add an import statement in the css file

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

body {
    font-family: "Roboto", sans-serif;
}
```

OR

we can even import in html head and use in css eg.

```html
<head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
    </style>
</head>
```

<hr>

**_font-weight_** : can be made bold,bolder,inheit, lighter etc, using this parameter

```css
.head {
    font-family: sans-serif;
    font-weight: 700;
    font-weight: bolder;
    font-weight: lighter;
}
```

although the bold amount can be given as number also, there is a limit of bold so its better to test if numberic bold we have given is available for the font.

**_font-style_** : bold, italic, normal, oblique etc.

```css
.head {
    font-family: sans-serif;
    font-style: italic;
    font-style: normal;
}
```

the child inherit the font property so keep in mind to change the child style to normal if its not needed in the child element.

**_text-aligh_**: center, left, right;

for aligning the text

**_text-indent_** : is the space left before the text of line begins, kind of like we see in a letter next paragraph.

```css
.class {
    text-indent: 10px;
    text-indent: 2em;
}
```

**_line-height_** : line height is the distance between two lines, and line-height : 1.5; means that line height is 1.5 times the size of the text.(it includes the text itself)

```css
.class {
    line-height: 0.5 em;
}
```

**_letter-spacing_** : for spacing in letters.

```css
.two {
    letter-spacing: 5px;
}
```

**_word-spacing_** : for spacing in individual words.

```css
.class {
    word-spacing: 20px;
}
```

**_text-transform_** : for making some sort changes to the text contnent. eg. capitalize, makes the first letter capital.

uppercase, will make the text uppercase.(block letters)
lowercase, will make the text lowercase.

```css
.head {
    font-family: sans-serif;
    text-transform: capitalize;
}
```

**_text-decoration_** : for making certain look changes to the text. eg.

if a link text is given text-decoration: none, it will not have the underline(browser default style gives links color blue and text-decoration: underline)

some more values for the attributes are :
line-through : there will be line through text
overline : line above text
underline : line under text

```css
.style1 {
    font-family: sans-serif;
    text-decoration: underline;
    text-decoration: underline dotted red;
    /* we can give in a single line : decoration styles color */
}
```

<hr>

## CSS box model

Content > Padding > Border > Outline > Margin

padding is the spacing of content form its borders, borders are the edges of a content and margin is the distance of one element form another.
note that the border and padding are part of element area only.

and evey element has its space in a box shape.

### Padding :

Padding is the spacing of content from the edges of the area given to element.
in box model, padding can be given from left,right, top and bottom

to give a padding from all the sides, just type padding:50px;

or

padding:top-bottom left-right;

eg. padding:30px 60px; ==> 30px padding top and bottm and 60 on left and right

or

padding:top right bottom left;

eg. padding: 30px 20px 30px 23px;

```css
.text {
    padding-top: 30px;
    padding-bottom: 60px;
    padding-left: 25px;
    padding-right: 50px;
    padding: 30px;
    padding: 30px 60px;
    padding: 12px 12px 13px 13px;
}
```

increasing the padding more than the element size will increase the size of actual element.

<hr>

### Margin :

Distance between two seperate elements is called margin

margin-left, margin-right, margin-top and margin-bottom.

```css
.margin1 {
    margin-left: 10px;
    margin-right: 12px;
    margin-bottom: 13px;
    margin-top: 13px;
    margin: 10px;
    margin: 10px 13px;
    margin: 10px 20px 30px 40px;
}
```

margins given by default browser styles is somewhat annoying so we can use global selector to simply set margin:0;

```css
* {
    margin: 0;
}
```

margins actually move the elements in order to maintain the spacing.

**_negative margins_** : margins can be negative also and this can be used to overlap!!!!

setting a negative margin will decrease the space between elements.

```css
.margin {
    margin-top: -100px;
}
```

NOTE: when we set the margin of the whole page 0, the bullets of the li actually dissapear since the li bullet is not part of the content box. SO NO PANIC.

**_Margin Collision_** :

incase there are 2 elements, the upper element gave a margin-bottom and lower element gave a margin-top. which margin will actually be implemented??

whichever is the bigger margin and this is called margin collision/merge.

not added but the bigger one is selected.

<br>

### Border :

Boreder has various attribtues for selecting the type of border.

border-style, border-width, border-color.

or

border:width style color;

we can also give side specific borders, eg. border-bottom-style: dashed,
border-top-color: blue;
etc

NOTE : properites like border, margins etc are not inherited by child. as that will not be pleasant.

```css
.border1 {
    border-style: solid;
    border-width: 1px;
    border-color: red;
    border: 1px solid red;
    border-bottom-color: blue;
}
```

**_border-radius_** : property is used for making curved edges in borders. and if we incresase the border-radius a lot, it becomes ellipse and eventually circle.

we can give border radius in percentage also. 50% will be elipse and 100% is a circle

```css
.border2 {
    border-radius: 10px;
    border-radius: 50%;
}
```

<br>

**_cursor_**:

in this property we can set the value for cursor type which comes when we hover over the element. eg. cursor:pointer;

### OUTLINE :

Outline will look just like the border... But it has some nifty property.

in Outline, we can set a value called offset, that can move the outline inside or more outside.

```css
outline-width: 0.2rem;
outline-style: solid;
outline-color: #222;
outline: 0.2rem solid #222;
outline-offset: 10px; /*for moving outline outside */
outline-offset: -10px; /*for moving outline inside */
```

<hr>

## Display :

elements are set blocklevel and in line by the browser itself.

inline: only take the amount of space needed
changing the size of the window does not effect inline element size.

block: occupy the whole block i.e. one side of screen to another fully.
if we increase size of window, the block element size increases.

we can change elements display cateogory uisng display property.

eg. display: inline; display: block;

### Semantic tags and displays :

**_Block-level semantic elements in html5_** :

article, aside, nav, section.
there elements can have their own header and footer.

**_Flow elements that dont do anything_** :

main, header, footer, audio, video, figure.

**_Inline semantic elements_** :

strong, em, progress, mark.

<hr>

**_changing centring_** :
for changing for centring , we will study flexbox and grid later but for now, lets center using good ol css.

issue is with block level element since they span form left to right irrespective of the content in them. But we can use margin to our rescue.

we use margin: top/bottom left/right property.

```css
.centring {
    margin: 0 auto;
}
```

in the above code up and right padding is 0 and right let is auto, auto will automatically make pading from both the sides equal. so this is handy.

for inline elements, we can just use text-aligh: center;

<hr>

### Lists :

in css there are ways of styling a list. in a ul or ol, we know that li tag is the child so for name selector we write : ul li

eg.

```css
ul li {
    list-style-type: none;
}
```

if the list contains links , how do we use name selector?? ul li a

```css
ul li a {
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 2px;
    background: #222;
    color: #f15025;
    list-style-position: inside;
}
```

so this is how we can individually edit the elements within a list to make it look good.

NOTE : for the bullets to be treated as part of content we set the list-style-position: inside;

<br>

## discrimination in block vs inline :

the browser does not respect vertical padding and margins for inline element.

i.e. if we try and increment the up and bottom padding or margins for inline elements, the browser will not respect it . So we have to convert into block level elements.

this is because browser does not want the inline element to influence up and bottom because its inline.

<hr>

**_Inline-Block_** :

inline-block is another display parameter value. inline block elements are like inline but with capability of expanding top and bottom. so browser till respect the inline element and grant them permission to expand up and bottom.

```css
a {
    display: inline-block;
}
```

<hr>

### box-sizing :

box-sizing has type : border-box and content-box.

content-box : this is when we want the border and padding to be applied outside the element specified width i.e. if width and height are x,y pixels then the padding and border will be added outside x,y area. So as the name suggests, the width and height of the element are actually that of the content within and not include the border and padding.
This does not affect the actual element content, but will affect the outer orientation.

border-box : this is used when we want the padding and border to be applied within the element width spefied eg. if width and height are x,y, the padding and border are given inside the x,y range. SO border-box means that the width and height will be that of the border and padding will be inside. This does not affect the outer orientation but will affect the inner content of element.

<hr>

### display:none, Opacity and visibility :

**_Opacity_** : is used to set opacity of elements in range of 0-1. In colors, we used rgba or hsla to set the opacity.
but this can be used for any element.

```css
.opacity {
    opacity: 1;
    opacity: 0;
    opacity: 0.5;
}
```

**_Visibility_** : is uesd to set visiblility on or off. So the element is invisible i.e. we cannot see it but its there taking its space. so if a link esists in that spot, we can still click it but its invisible.

```css
.visibility {
    visibility: visible;
    visibility: hidden;
}
```

**_display:none_** :
we can set dispalay to none for an element, what this will do is, that the element is actually removed from the page and it space will not even be there. ie. if there is a link that has display:none, we cant click it and the browser will not even leave empty space for it in the code.

So opacity and visibility are just set the visibility while display sets if its present at all.

<hr>

### Background:

background property can be used to set image as background of an element.

```css
.background1 {
    background: url("./big.jpeg");
}
```

note that if the whole image is not enough to cover the entire element background then the image will be repeated until the whole element is filled.

for setting this , we can use background-repeat. we can set this to repeat,no-repeat,repeat-x,repeat-y,space, round etc.

space will give space between repeating images, round will show half image if there is only space for partition of image.

```css
.background {
    background: url("./big.jpef");
    background-repeat: repeat;
    background-repeat: no-repeat;
    background-repeat: repeat-x;
    background-repeat: repeat-y;
    background-repeat: space;
    background-repeat: round;
}
```

**_background-size_** : this attribute can be used to set the background imae style. eg. cover, covers the whole background.(whatever the image quality size.)

contain(default) : keeps the image aspect ratio but will repeat images if space not there.(but if repeat is off then wont repeat.)

```css
.background {
    background: url("./big.jpef");
    background-size: cover;
    background-size: contain;

```

**_background-position_**: used to set the position of background eg. center,bottom,left,right,top etc.

center is handy because in the normal position image is aligned the uper left corner with element, but with center, image aligns with the center of image to center of the element.

```css
.background {
    background-position: center;
    background-position: top;
    background-position: bottom;
    background-position: left;
    background-position: right;
}
```

we can also set the position using measuring values like % etc.
eg. background-position: x,y;

```css
.background {
    background-position: 50px 70px;
    background-position: 50% 50%;
}
```

**_background-attachment_** :

Using the background-attachment as fixed, we can make it so that the background images does not scroll along with the text and stays as it is. This is a cool feature for the banner.

```css
.background-attachment {
    background-attachment: fixed;
}
```

NOTE : there is a shorter way of giving background attribute values position, size, attatchment and repeat:

background: url("url") position/size attatchment repeat.

we can shuffle the formant of position/size , attachment and repeat but remember position and size always come together with / and in that order only.

```css
.bg1 {
    background: url("./image/img.jpeg") center/cover fixed no-repeat;
}
```

<hr>

### Gradients :

Gradients are shades, and are awesom. Gradients starts from one color and transition to another.

we give a direction and then colors we want in the gradient.
we can give direction like to top, to bottom, to right, to left, to top left,to bottom right etc.

or

we can give the degree eg. 150deg, 315 deg.

```css
.gradient {
    background: linear-gradient(red);
    background: linear-gradient(to top, red, green, blue);
    background: linear-gradient(to top right, red, blue);
    background: linear-gradient(345deg, red, blue);
    background: linear-gradient(to top, rgba(1, 2, 3, 0.5), rgba(1, 2, 3, 0.5));
}
```

here too we can work with rgba for transpirancy.

**_Image-Gradient_** :

When using an image as banner, sometimes image is too overpowering in comparison to the actual text content. In such cases, we can actually set a gradient on the background image so that the actual content is displayed clearly. Ofcourse we will use the rgba so as to control the tranparency of the gradient so that image is visible lol.

background: linear-gradient(rgba(0,0,0,0.4)), url(../image/Hotel.jpg) center/cover fixed no-repeat;

```css
.banner {
    background: linear-gradient(rgba(0, 0, 0, 0.5)),
        url(../image/Hotel.jpg) center/cover fixed no-repeat;
}
```

**_ NOTE: we can stack properties one above other, using the comma in between, this is opposite to overwriting, both the properties values will exist one above another._**

the gradient applies above the image since its mentioned before the image and also both can coexist since they are mentioned in one property seperated by a ,.

we can look for ultimate css gradient generator online and its handy.(kinda)

<hr>

**filter**: Filter can be used to give images filter.

```css
img {
    height: 3.2rem;
    filter: grayscale(100%);
    filter: brightness(0);

    opacity: 50%;
}
```

in the above greyscale makes the image grey scaled :) with different shades of grey

setting brightness to 0 makes the image black and works quiet well for making logos black uniformly;

later we can add opacity for making black to grey.

<hr>

**_Overflow: hidden_** : suppose if our content size exceeds the size of the parent container, then setting overflow:hidden will hide the part that leaks out so as to avoid the annoying conent leaking out of the desired parent parameters.

### Overflow : scroll

we can set the overflow to scroll for a scrollbar incase of overflow.
(note : remember to set the scrollable item height and width non relative, i.e. absolute or auto :) )

<hr>

### float and clear:

float is a very useful element that takes element out of the normal flow of html and places them on the extreme right or left. when this is done the element stays at left or right and the block and inline element will take position to its right or left like the element is a part of page border. This is very handy and we will use it to give page partitions.

```css
.float-right {
    float: right;
}
```

if we want the elments with block level or inline elemnts to treat the float element as a normal entity, we set their clear. now we can set their clear to the direction of the float element we want it to treat normally. if we want it to treat float of both side normally, we set it to both.

```css
.block {
    clear: left;
    clear: right;
    clear: both;
}
```

the float element is used to make those cool side menus which are treated differently by the flow of the page. eg in w3schools, there is a side ads and course info rolling.

<hr>

**_Viewport :_** is the part of screen that is visible.

## Positioning :

position is how the elements are positioned in the page. There are valious customisations that can be given and this is fascinating.

**_static_** :

static position is the default position of any element, This is how optimally position of different displays or alignment or padding or margin will be positioned.

**_relative_** :

when we set position of an element as relative, we can change its position in relation to its static position. for shifting posiion we have additional properties like : top,bottom, left and right.

```css
.pos {
    position: relative;
    top: 50px;
    left: 20rem;
    bottom: 70px;
    right: 80px;
}
```

in the above, setting the top to 50px will actually shift the top 50px to bottom of static position. similarly, setting it to left: 20 rem will move it 20 rem to right from relative position.

NOTE : these properties can take negative units too. and also note that the relativity is to the static position.

**_Absolute_** : the king is this <h>&copy;</h>

absolute position is itself a relative position but not to its static self, but the ansistor element that was set relative. eg. if there is h1 inside a div, and div is relative and h1 is absolute then the h1 position we give will be in accordance to div.

so what if none of the ancistors have the relative position set??? In this case the absolute positioned element will position itself in accordance to viewport at page loading !!! i.e the part of page that is visible when we load the page !!!!!.

Absolute element will not affect the position or flow of other elements. and will simply overlap or underlap them(based on z axes)

```html
<body>
    <div style="position:relative">
        <div>
            <h1
                style="position:absolute; 
                top: 15px; 
                right: 17px"
            >
                hello
            </h1>
        </div>
    </div>
</body>
```

in the above case, absolute will position itself in accordance to the parent's parent div tag. and incase div did not have relative position, the h1 would have positioned at the bottom of screen(not page) and when we scroll down, will remain there.

so we can set element positions within relative elements using absolute. And that would be the best case of absolute.

point to be noted is that, the absolute element can be given values such that it gets placed outside the boundary of the parent relative tag. Which is mind blowing. Not caring about margins or anything.

going outside the scope of :root will expand the page size..!!

**_Fixed_** :

position fixed is also op since what it does is, sets the relativity to the whole document, and fixes the position on screen.... handy.

```css
.class1 {
    position: fixed;
    top: 50px;
    right: 40px;
}
```

the above code will fix the class1 element to the screen at the pos specified.

Relative based on Viewport.

<hr>

## MEDIA QUERIES and RESPONSIVE DESIGN :

Media query is used to work up with different sized devices. In media query we can set the changes in content based on a minimum or max screen size.

```css
@media screen and (min-width: 500px) {
    body {
        color: black;
    }
}
```

in the above code, if the size of screen goes above 500px, the background color will change to black.

i.e. these styles get added to html code, once the media query is satisfied.

NOTE that the syntax is very crucial while giving media query.

min-width: ---starting from
max-width: ---up to

Overriding can happen with media queries too. The one specifying the bigger range will be considered eg. max-width : 200px will be overwritten by max-width: 300px because, 200px range lies within 300px.

**_Z index_** :
when multiple elements are overlapping, partially or fully, the order of their nearness to screen is decided by the order they were placed.

how to control this?

using z-index.

by default z-index is set to 0 for all and in that case, the preference is based on the order the elements appear in the code.

```css
.class {
    position: relative;
    z-index: 12;
}
```

BUT !!!!! this does not work with position static. static elements will have z-index as 0 only.

<hr>

### Pseudo elements :

**_after and before_** :

Pseudo elements are used to actually used to manipulate the parts of elements. eg. words inside of a text element. etc.

after and before pseudo elements help add content before or after the original element. eg.(actually after gives an inline child after the current tag elements, whereas before will give an inline child before the elements of the current tag)

remember

note after the element but inside the element only at the end.

```css
p::before {
    content: "hello";
    font-weight: bold;
    font-size: 2rem;
    color: red;
    display: block;
}
```

the above code will add hello text before every paragraph element.

we can use ::after also later.

NOTE : even if we are inserting something that does not have a text, its mandatory to write content:'' atleast.

We cannot insert after and before around image.
but we can add image inside a div and we can give div before and after.
the reason is that image itself is a content.

pseudo elements can be used to attatch some content to original element and we can give the pseudo elements all kind of cool attributes like position, width, height etc.

also remember that the pseudo element become the child of their element.(JIC when using absolute position remember that parent of p::before is p itself.)

<hr>

**_Adjecent element selector(+)_**: the element that is next to the current element in the same scope are called adjecent element selector.

```css
h3 + p::first-line {
    color: red;
}
```

here it means first-line of the paragraph right next to h3(note, that comes after h3)

**_::first-line ::first-letter_** :

these are for changing the first letter and first line of a text based element.

```css
p::first-letter {
    font-size: 3rem;
}

p::first-line {
    font-weight: bold;
}
```

<hr>

## MORE SELECTORS!!!

**_Descendant and Child Combinators_** :

Descendants are the children,grandchildren, great grand children and so onn whereas, Child are just the direct children.

```css
div h1 {
    font-family: sans-serif;
}

div > h2 {
    font-family: sans-serif;
}
```

in the above code, the difference is that

for 1st div : all the descendants, i.e. all h1 that lie inside div will be font-family sans-serif;

for 2nd div : all the direct children, that are h2 will be sans-serif.

we can combine any class tag or name for various selectors. eg. .class #tag > h1

### Pseudo Classes :

pseudo element is what we studies earlier where we added some pseudo elements before and after normal elements.(elements had :: while class has :)

NOW

pseudo class are used to insert some functionality into elements

**_:hover_** : hover is used to define what will happen to element if mouse hovers above it.

```css
a:hover {
    font-weight: bold;
    text-decoration: none;
}
```

what above text will do is, that if user hovers mouse over a link, font becomes bold and underline dissapears.

```css
.btn:hover .btn-icon {
    stroke: blue;
}
```

in the above there code there is a trick, when we hover over the button class, we are changing its child color.(this is handy when working with icons inside of button and hovering over button changed icon color).

NOTE: its not possible to give height to pseudo elements in % and hence one trick is to just give padding bottom as percent, and vallah.

<br>

**_:link :visited :hover :active_** :

link, visited, hover and active are used with links because a link can have various states.

```css
a:link {
    color: blue;
    /* when anchor has an href */
}

a:visited {
    color: red;
}

a:hover {
    font-weight: bold;
}

a:active {
    font-weight: black;
}
```

active is when we hold the leftclick on a link.

so in the above, the links will be given the following property based on the state of link.

note: if we make href="#", it will always be shown visited. So when practicing, input real links.

**_:root_** :

used solo to mark changes to root i.e. <html> tag. This affects the whole document.

```css
:root {
    background: red;
}
```

the above code will make the whole page red.

BUT what is its use ????

we generally build our website in perspective of root using rem, percentage values etc.
so if our whole webpage is affected by the parameter values in the root, we can edit the root values and that will affect the whole page

```css
:root {
    font-size: 150%;
    width: 95vw;
}
```

in the above code, 1 rem = 16px in browser default fontsize, but since we set the font-size: 150%, the rem value will change and all the descendant attributes that were using the rem value will be affected. similarly, all the elements that were using width:100% wrt root, will be affected since root width:95vw.

**_more Pseudo Classes_** :

```css
li:first-child {
    /* for selecting all li that are first child*/
}

li:last-child {
    /* for li that are last child*/
}

li:nth-child(2) {
    /* for seclecting a particular child */
}

li:nth-child(odd) {
    /*for li that are at odd number odd child */
}

li:not(:last-child) {
    /*for li that are not the last child*/
}
```

NOTE: We can even chain pseudo classes eg. list a:link:first-child;

```css
article li:first-child {
    color: red;
}
```

in the above, it does NOT mean first child of li that is child of article!!!!!!

instead it means, all li that are first child of article !!!!!

<hr>

**_:focus_** :

for accessability, buttons get a outline when using tag or forms also get outline when selecting the various input fields.

for accessability its important that it stays.

:focus pseudo class helps define style for it and using the bellow code, we can actully style the :focus looks for the whole page.

```css
*:focus {
    outline: none;
    outline: 4px dotted #e67e22;
    outline-offset: 8px;

    box-shadow: 0 0 0 0.8rem rgba(230, 125, 34, 0.507);
}
```

in the above code, we can set an outline for the whole page and even style the offset.

problem is that outline attribute dosent get border radius and hence we can use the box-shadow attributes and that gets the roundness form the particular tag it is attatched to.

we can even do fancy stuff and change other values for focused tags.

<hr>

## Transform, Transition and Animation :

Transform is used for rotating, scaling,and these types of changes.

Transition is change over time form point a to b

Animation is same as transition, but there are not 2 points but multiple.

### Transform :

**_translate()_** : translate function can be of various types. eg: translateX(), translateY(), translateZ(), translate() etc

```css
.one {
    transfrom: translateX(-20px);
    transfrom: translateX(50%);

    transfrom: translateY(-20px);
    transfrom: translateY(50%);

    transfrom: translate(15px 15px);
}
```

translateX and Y are used to move the element in X or Y axis respectively. we can give the value in px or other. But using %, % will be in reference to the width or height of the element itself, in the above eg. 50% means that element will move right by 50% its width.

and ofcource translate() takes x and y respectively to move in angles.

and translatez is probably used to set the nearness to screen from other elements that overlap the current element.

**_scale()_** : scale resizes, and it has types : scaleX(), scaleY() and scale(). Their values is the number of times the size should scale to normal size like 5 or 7 or 0.5, or in percentage.

```css
.one {
    transfrom: scaleX(0.5);
    transfrom: scaleX(20%);

    transfrom: scaleY(2);
    transfrom: scaleY(30%);

    trasnform: scale(0.5); // will scale both x and y at the same time
    transform: scale(0.5 5);
}
```

its obvious that scaleX and scaleY can be used to increase or decrease size in x and y directions.

**_rotate()_** :

rotating on z axis will be the normal clock and anticlock rotation. Note that rotate() and rotateZ() will do the same stuff.

```css
.one {
    transfrom: rotateZ(35deg);
    transfrom: rotate(35deg);

    transfrom: rotateX(35deg);

    transfrom: rotateY(35deg);
}
```

now rotation on x axis and y axis is quite awesome and cool.

**_skew()_** :

this just tilts the orientation using : skewX(), skewY() and skew()

```css
.one {
    transform: skewX(15deg);
    transform: skewY(15deg);
    transform: skew(15deg 15deg);
}
```

<hr>

### Transition :

Transition does not make the change happen instantly, but slowly, with time.

we set this using : transition-property: , transition-duration:,

```css
a:hover {
    background: coral;
    border-radius: 50%;
    transition-property: background, border-radius;
    transition-duration: 15s;
}
```

in the above case, once we hover over link, for 15 seconds background and radius of link will transition from current to mentioned one. suppose if transition-duration:15,16; was set, then, for 15 seconds background will change and then 16 seconds radius will change.

so we tell the transition-property that will transiion and we need to tell the transition-duration that tells duration of transestion taking place.

**_Transition-delay_** :

transition delay can be set so the transition will occur after the mentioned dealy time.

and how do we set all the transition properties at the same time ??

format --> transition: transition-property1 transtion-time transition-delay, transition-property2 transition-time, transition-delay,..... ;

```css
.one:hover {
    background: coral;
    border-radius: 50%;
}
.one {
    background: blue;
    transition: background 4s 5s, background 4s 5s, border-radius 4s 5s;
}
/* or */
.one {
    transition: all 4s 5s;
}
```

in the above code, what will happen???

> page loads and after delay of 5s background will change to blue for 4 seconds

> when we hover on page, after 5 seconds, background changes to coral for 4 seconds and at the same time border-radius changes to 50% for 4 seconds.

NOTE: same property types follow the same property values. unless, we write background again

<hr>

**_important observations_**

```css
div {
    width: 100px;
    height: 100px;
}

.div1 {
    background: blue;
    transition-property: background, background, border-radius;
    transition-duration: 3s, 5s;
    transition-delay: 3s, 8s;
}

.div1:hover {
    background: red;
    border-radius: 50%;
}
```

in the above :

-   border-radius not given its transition-duration and delay will follow the duration and delay of the first background(NOT THE 2nd but 1st).

-   since we have mentioned 2nd background, both background color changes will have different property values.

-   incase we only wrote for one background, the same propety will be for all background changes.

-   incase there was a 3rd background change somewhere, the 1st background transition properties will be taken as the default one.

-   ITS BETTER TO DEFINE A SEPERATE TRANSITION EFFECT FOR HOVER INSIDE OF HOVER CLASS RATHER THAN GIVEN TWO SEPERATE BACKGROUND TRANSITION PROPERTIES IN SAME DECLARATOR BLOCK.

<hr>

**_transition-timing-function :_** :
this property, defiens the flow of transition.

by default its : ease

possible : linear, ease-in, ease-out, ease-in-out

```css
.div {
    transition: background 5s ease 5s;
}
```

the above one shows the easy way of inserting ease in short form.

we can combine transform with transition to get even cooler stuff.

eg.

```css
.transform-with-transition {
    transform: rotate(45deg);
    transition: transform 4s ease 2s;
}
```

in the above code, transfrom will actually be able to get the transition.

<br>

### ANIMATION :

animation does not go from 0 to 100% directly like transition, instead we can control the various aspects in between, eg. at 1% 2% etc.

for animations we setup keyframes :

```css
.animation {
    background: blue;
    animation-name: move;
    animation-duration: 12s;
    animation-iteration-count: 2; // Number of times animation must run
    animation-delay: 3s;

    animation: move 5s infinite;
}

@keyframes move {
    0% {
        transform: translateX(20px);
    }
    50% {
        transfrom: translateX(100px);
        background: red;
    }
    75% {
        transfrom: translateX(-200px);
        background: yellow;
    }
    100% {
        transfrom: translateX(20px);
        background: green;
    }
}
```

we can set the keyframe and give it a name , that will be name of animation.

**_animation-fill-mode_** :

used to define what happens to the element once the animation is finished.

Weather it goes back to its original state or it remains the way it is at the end of the animation.

animation-fill-mode : forwards, keeps the value after the animation.

<hr>

### CSS variables :

we can make variable like : --varName: value

we can make global variables in :root{} or we can make local variables in elments.

```css
:root {
    --primaryColor: #1313f1;
}

.heading {
    color: var(--primaryColor);
}
```

<hr>

### ICONS :

we can go to font awesome.com, copy their proided link in the css or html code and use < i>
for icon.

```html
<head>
    <script
        src="https://kit.fontawesome.com/007b8dda5c.js"
        crossorigin="anonymous"
    ></script>
</head>
<body>
    <i class="fas fa-space-shuttle"></i>
</body>
```

in i we give class name of the icon on their website

in the above class name, we can increase icon size by

<i class="fas fa-space-shuttle fa-5x"></i>

or

to actually customise our class, we can change the class properties, eg. in fas fa-space-shuttle is the class name.

```css
.fa-space-shuttle {
    color: blue;
    width: 15px;
    height: 17px;
}
```

if we dont want to actually give a link, we can simply download font awesome file that is all.css and link it like we link css files using link.

<hr>

### Text Shadow and Box Shadow.

text-shadow : x-axis y-axis blur shadow-color;
box-shadow : x y blur color;

```css
h1 {
    text-shadow: 1px 2px 3px red;
    box-shadow: 1px 2px 3px red;
}
```

again we can use text shadow geenrator or box shadow generator. lol

<hr>

## Browser pre-fixes(aka vendor prefixes) :

this is for the latest css 3 compatibility

we can go to caniuse.con for checking for a property and browser compatibility.

the webpage we make can run pretty good on our side with latest features, but in old versions, we need pre-fixes to resolve a lot of things.

eg. in some browsers , box shadow is not supported so we type :

```css
.box:hover {
    -webkit-box-shadow: 10px 10px 5px 0px red;
    -moz-box-shadow: 10px 10px 5px 0px red;
    box-shadow: 10px 10px 5px 0px red;
}
```

so in older versions, now shadow can be used in chrome and mozerella.

note that these exist because new css features are not compatible with browsers right away, so these come in handy.

**_NOTE that we wont have to write these pre-fixes, tools like GULP and NPM exist to help us, these tools change css files and insert the required pre-fixes automatically but if we want to check JIC what are some prefixes for a css code, we can go to auto prefixer css online_**

<hr>

we can use emmet for shortcuts eg. h1#id will become : h1#main --> <h1 id="main"></h1>

div>ul>li\*5 : will make a ul inside div, with 5 li inside the ul.

<hr>

### Transform :

```css
img {
    transform: scale(1.5);
}
```

trasnfrom can be given a function scale so as to multiply the size of a component without affecting neigbouring elements, neigbouring elements will act asif the item has its original size while transform will make it look bigger.

<hr>

## CSS Extra :

### HOW TO CENTER PAGE ??

we can add the whole body inside of a div and set the div css property :

```css
div {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    /* or */

    margin: 0 auto;
}
```

this works for any element.

### vertical alignment in position absolute :

```css
.btn {
    top: 50%;
    transform: translate(0, -50%);
}
```

using the above code, we can center a button vertically .
this is since 50% wont center the element exactly as it centers the top left corner of the absolute element wrt vertical center of the relative parent.

<hr>
<hr>

### Scroll Pane !!!!!!!!!!!!! :

set the overflow to scroll !!

<hr>
<hr>

## Layouts :

Layout is the easy text, images and other content is palced and arranged on a webpage.

and layout gives the page a visual structure, in which we place content.

### Page vs Component layout :

bigger components of the page are what define page layout, and the bigger components themself have layout within called as component layout.

### Types of Layouts :

**_Float layouts_** : are the old way of building layouts of all sizes, usin gthe float CSS propery. Still used but getting outdated fast.

**_Flex Box_** : MOdern way of laying out elements in a 1d row withoud using floats. Perfect for component layouts.

**_CSS GRID_**: for 2d layouts and used fro page layouts and complex components.

### Float Layouts :

we have seen floats before, but this is an addon.

inline and text wrap around float layouts.

Its better to actually place only floats next to float instead of normal flow elements.

if a paragraph comes after float element, the paragraph element will ignore the existance of the floats and take space of a block level in normal flow, but the text will wrap around so as to no overlap the float even if it means stretching the element further.

Hence use left or right floats next to one other rather than normal flow and left.

**_NOTE:_** : in case of giving dimensions to absolute or relative, the other normal elements dont respect the existance of the relative or absolute elements and hence they overlap, but in float layouts the inline elements and text elements will wrap around the float element.

also,

Container element will not adjust its height to the element.

**_Collapsing elements_** : when all child of an element, become float, the element dosent exist. Since it has no normal flow conenet. This phenomenon is called Collapsing elements.

**_Clearing Float_**: to stop the wraping of elments around the float elements, and making them behave normally, we use clear.

this can be done in html file by giving an empty div with clear:left/right/both;

this was done in old times a lot to show end of one floating layout. and note that adjecent floats move to next line if there is not enough display, giving the responsive nature.

or

**CLEAR FIX HACK** : we can make a class in the parent element of float elements and give it a pseudo after, and giving it a clear:both.

```css
.clearfix::after {
    content: "";
    clear: both;
    display: block;
}
```

This clearfix class can be given to parent of all the float elements or the divs seperating the contents.

note : making the display as block since by default ::after is inline and if next element is inline..... it will wrap around.

<hr>

### Flex-Box :

used to set related CSS properties for building 1-dimentional layouts.

For modern css and majorly used for layout inside of page components.

main idea behind flexbox is that empty space inside a container element can automatically divided by its child elements.

it also fixes vertical centring and creating equal height columns.

to set it, we set display: flex;

Flex is given to components and the elements in the component are called flex items.

flex items have an adaptive width according to the element width needed BUT have height that of the tallest element.

```css
.flexbox {
    display: flex;
    align-items: stretch;
    align-items: center;
    align-items: flex-start;
    align-items: flex-end;
}
```

**_aligh-items:center_** : for aligning the items vertically !!!!!!!
Doing this, the items will now have their respcetive neede height only and not that of the tallest item. BUT the flex container will take the height of the tallest item only.

**_align-items: flex-start /flex-end_** : flex end is used to put the put the elements on vertical botoom of the container, flex-start is used to align at the top vertically.

**_align-items: stretch_** : the default layout where the flex container and elements will take width according to requirement, but will take height that of the tallest element.

NOTE : this is cause of lot of confusion so if you dont want stretch, make sure this isnt set to stretch.

```css
.flexbox {
    display: flex;
    justify-content: center;
    justify-content: space-between;
}
```

**_justify-content:center_** : used to center the elements vertically.

**_justify-content:space-between_** : used to give horizontal spacing between elements automatically so that each element has same spacing in between, and cover the whole width of the parent flex container.

**_Cross axis and Main axis : _**

Cross axis is the horizontal access and vertical is called cross axis.

#### **FLEX CONTAINER** :

Flex container properties are what work on overall elements inside of the container.

```css
.flex-container {
    display: flex;

    gap: 0;

    justify-content: flex-start/ flex-end/ center/ space-between/ space-around/
        space-evenly;

    align-items: stretch/ flex-start/ flex-end/ center/ baseline;

    flex-direction: row/ row-reverse/ column/ column-reverse;

    flex-wrap: nowrap/ wrap/ wrap-reverse;

    align-content: stretch/ flex-start/ flex-end/ center/ space-between/
        space-around;
}
```

sometimes its better to give spacing manually between flex elements.
we can do that using margin, but gap is far better

**_gap_** : 0 by default : used to give gap between items without using margin.

**_justify-content_** : by default flex-start, used to align items across main axis.

**_align-items_** : by default stretch : used to align items across cross axix.

**_flex-direction_** : by default row : we can make a flex horizontally too !!! This defines what main axis is.

**_flex-wrap_** : by default no wrap : used to wrap into a new line if they are too large.

**_align-content_** : by default stretch: only applies when there are multiple lines when flex-wrap : wrap.

NOTE : flex-wrap and align content are advanced topics which must be studied later.(ADANCED CSS)

#### **FLEX ITEMS** :

flex item properties apply to individual items in flex container.

```css
.flex-item {
    align-self: auto/ stretch/ flex-start/ flex-end/ center/ baseline;

    flex-grow: 0;

    flex-shrink: 1;

    flex-basis: auto;

    flex: 0 1 auto;
    /* grow shrink basis */

    order: 0;
}
```

**_order_** : default is 0: we can select the order in which flex items appear.

**_align-self_** : used to align the element individually(by default auto and will adapt the overall alignment).

**_flex-basis_** :by default auto: used to define width of flex elements without just like width property. But if the contenet is larger than the basis, the element width will extend to fit the content.

**_flex-shrink_** : default 0: permission to allow shrinking elements to the size of container.(0 = no and 1 = yes)

**_flex-grow_** : default 0: permission to allow growth of elements to full size of container.(0 = no and 1 = yes)

if a single element has flex grow or shrink on, it will grow to the full size of the container or shrink.

note, what happens when one element has flex-grow : 2 and another has flex-grow : 1 ??

the element with grow :2 will get double the size of the remaining size, then the one with grow: 1;
hence shrink and grow can have values other than 0 and 1, and these values will define the amount of contribution they put so as to fit the display.

Buts its cool to set the elements to flex-grow 1.

```css
.flex {
    flex: 1;
    flex: 1 1;
    flex: 1 1 auto;
}
```

<hr>

### CSS GRID

easy and sexy.

grid also has grid container and grid elements.

```css
.grid {
    display: grid;
    grid-template-columns: 250px 150px;
    grid-template-columns: auto auto;
    grid-template-rows: 100px;
    gap: 20px; // previously called grid-gap
    column-gap: 30px;
    row-gap: 30px;
}
```

in the above the container will be split into two columns of specified withs, we can add more widths to increaese the number of columns.

setting auto, will actually stretch the elements to the container size.

NOTE : making too many rows or columns when there are no elements to fill those spots will stretch the container!!!

In grid row and column gap can be given which is dope.

Gridlines : seperate columns and roes , and gridliens for column = no. of columns+1. and same for row gridlines.

the cells of area are called grid cells

ITS not mandatory to fill all grid cells.

the gap in grid are called gutters.

a single row or column can be called tracks and to be more precise row and column tracks.

#### Grid Container :

```css
.container {
    grid-template-rows: 0px;
    grid-template-rows: ;

    row-gap: ;
    column-gap: ;

    justify-items: ;
    align-items: ;

    justify-content: ;
    align-content: ;
}
```

**_Justify and Align CONTENT : _** : this is used for moving all the elements inside of the container just incase, there is any additional space left in the container.(NOTE: all the containers move in synch inside the container maintaining their width height and gaps .)

**_Justify and align items :_** : this is used to move all the items inside of their respcetive cells.(BIG BRAIN)

NOTE: we didnt need to use align-conent in flex box since flexbox is one d and hence occupies the whole height of the container. SO to move items up we actually have to move items up in their individual cells only. Whereas

#### Grid Items :

```css
.item {
    grid-column: ;
    grid-row: ;

    justify-self: ;
    align-self: ;
}
```

**_grid-column and grid-row :_** is used to specify the position of the perticular gird item . and we can specify the span also.

```css
.grid {
    grid-column: 3/5;
    grid-row: 3/5;
    grid-column: 3 / span 3;
    grid-column: 3/ -1;
}
```

the above means that the column should start form 3 and end at column 5 hence spanning the column across 2 columns.
we can also write the number of cells to be spanend across.
and writing -1 in the span area, will actually span the element across the width space.

this is because in the grid layout, grid lines are number positively from left to right, and negatively from right to left,, hence the right most grid is -1 and second last grid is -2 and so onn!!!! handy.

and this is fkin osm and can be used in very funky ways to palce items.

and note that the other elements whose grid-column and row values are not set, they position accordingly. eg. if we move an element away, they will fill its space etc.

### new unit FR :

fr unit is used to represent the fraction and can be used to give row and column sizes such that if a single row is given 1fr, it will occupy the whole extra space. and if all have 1 fr, space will be divided evenly.

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
}
```

NOTE : if suppose width is absolutely given for a single element, that becomes equal to 1 fr. and if no width is given, 1 fr is auto which is as we know, occupy all space.

fr also becomes the height of the tallest container in some cases where fraction is to be maintained.

_repeat_ can be used here so as to repeat 1fr 4 times.

**_auto vs fr_** : using auto and fr at the same time, auto will take the required size while fr will consume all the spacing.

**_implicit rows :_** are rows that are assigned even if not given in grid-template-rows because of spacing not being there to fit in the given number of rows. and hence this happens.

we can style implicit rows. but not needed now.

NOTE: its recomended to set only the rows using grid-templates-rows, and let the columns take height of the biggest element in most of the cases.

<hr>

## DESIGNING :

### Designers vs Developers :

Developers implement using HTML, CSS and JavaScript code.
Designers create the overall look and feel of a website.

We wanna know both :)

<hr>

### web designing ingredients :

> Typography
> Colors
> Images/illustrations
> Icons
> Shadows
> Border Radius
> WhiteSpace
> Visual Hierarchy
> user Experience
> Components/Layouts

## TYPOGRAPHY :

Typography is the art and texhinque of arranging type to make written language legible, redable and appealing.

**Serif** : type fonts have a type face which has serifs or, tails like things. at edges. used for classic designs and are god for long text.

**Sans-serif typeface** : without the serifs at the edges, Modern look and feel clean and simple.

Both the above typefaces, have different vibe.

### Rules :

1.) use only good and popular typefaces and play it safe.

Sans-Serif : Inter, Open Sans, Roboto, Montserrat, Work Sans, Lato.

Serif : Merriweather, Aleo, Playfair Display, Cormorant, Cardo, Lora.

chose the type face based on the website personality.

2.) use a font size between 16px and 32px for "normal" text.

3.) for long text(like a blog post), a size of 20px or even bigger

4.) for headlines, you can go really big(50px+) and bold(600+), depending on personality.

5.) for any text, dont use a font weight under 400(regular).

6.) use less than 75 characters per line because long text lines suck to read.

7.) for normal size text, use a line height 1.5 to 2 and for big text go below 1.5.
(the smaller or longer the text, the larger the line height needs to be.)

8.) if headlines look unnatural, decrease the letterspacing in the text.

9.) try using all caps for short titles. Make them small and bold and increase letter spacing.

10.) Usually, dont justify text.

11.) Dont venter long text blocks. Small block are fine.

we can use a type scale online and it will give us certain sizes for typography that should be used. AND DONT USE ANY FONTSIZE OTHER THAN THE ONE MENTIONED IN THE TYPE SCALE.

SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

<hr>

## Colors :

1.) main website color should match website personality.

RED : draws a lot of attention and symbolizes power, passion, and excitment

ORANGE: is less aggressive, conveys happiness, cheerfulnes and creativity

YELLOW : means joy, brightness, and intelligence

GREENS : repreents harmony, nature, growth, and health

BLUE : peace, trustworthiness and professionalism

PURPLE : wealth, wisdom and magic

PINK : romance, care and affection

BROWN : nature, durability and comfort

BLACK : Power, elegance and minimalism but also grief and sorrow.

2.) Dont chose a random tone or CSS named Colors. Use Open Color or Tailwind CSS framework.. or Flat UI Colors.

3.) You need atleast two types of colors in your color palatte: a main color and a grey color(any dark color)

4.) With more experience we can add accent(secondary) colors.

we can use Coolors for accents colors.

there should be some relationship between main and accent colors.
accents are used to markup or hilight some important

5.) when colors are selected, use the tints and shades of the selected colors in the page and use the grey colors for text.

tints : lighter color of a given color.

shades : darker color of a given color

we can use tint and shade generator.

6.) use the main colors to draw attention to the main important features of the page eg. links or buttons.

7.) use colors to add interesting accents or make entire components or sections stand out.

8.) use colors startegically in images and illustrations.

**Typography and Colors** : when there is a background color, we can use a tint of that background color for the texts and it looks fancy.

9.) text should not be completely black. lighten up it looks heavya nd uninviting.

10.) Dont make text too light or too dark compared to background !!!!!!!!!! for accessability(poor visioned people)

eg. dont use light gray text on a white background.

Contast ratio, 4.5:1 for normal textand 3:1 for large text.

<hr>

## Images and Illustrations :

1.) TYPES :

Product photos : photos of what website sells or is based on.

Storytelling photos : someone using the product or the message (psychologically good.)

Illustrations : Abstrat styles and uses cool images, eg. 3d illustrations or modern abstract non related images.

Patterns : Patterns are like background images for creativity and visual details

2.) use images that are relevant.

3.) use original images and non Plagurism .

4.) crop your images to fit your message.

5.) Handling text on images.

darkning images or using gradients for dimming the images is best way of setting up constrast between text and images.

6.) if needed move the text to neutral image area(less noisy area)

7.) we can even place text inside of box with a solid color inside of the image sometimes.

8.) account for high resolution screens

hence make image dimensions 2x bigger than the displayed size.

9.) Compressing images for a lower file size is possible without loosing much resolution.

10.) Using multiple images next to each other, make sure their aspect ratio and dimentions are same.

<hr>

## ICONS :

1.) use a good icon pack or we can use emogi too.

2.) use only one icon pack. Dont mix icon packs !!

3.) use svg icons or icon fonts. dont use jpg or png

this is since .svg icons are vector based and can be scaled indefinitely.

.jpg and .png are BitMap formats

4.) Adjust to webisite personality !

5.) use icons in accordance to typography

eg. if typography is round, use round icons.

6.) when to use icons ?

when visual assistance is needed in text.

we can use for feature box, eg. bluetooth symbol before telling that product has bluetooth capability.

7.) use icons with menu, buttons or links.

8.) use icons as bullet points.

9.) keep icons neutral, hence keep its color similar to text.

10.) dont make icons larger than what they were designed for. instead, enclose them in a shape.(ie. the width of icon lines should resemble that of text width.)

we can either copy the svg code, or we can download and include like images.

**SVG code** is actual html code and it can be included where the component is needed.

NOTE : svg is an element
which has a path tag inside which contains the code for the icon.

we can give a class to svg class and then resize and change color using

```css
.icon {
    stroke: red;
    color: blue;
    fill: red;
    width: 20px;
    height: 30px;
}
```

here stroke is a property, that defines color of the icon.
we can use color also, but color will affect the text color also whereas storke will only change the icon color.
ALSO stroke is a layer above color hence even if color is defined after storke, stroke defined color will be visible.

when using solid icons use the FILL property !!!!
fill will fill the interior of the icons.

<hr>

## Shadows :

back in the days icons were skeuomorphic and had lots of details, but then came flat design icons with minimal icons.

Shadows help add 3rd dimention and creates depth !

the more shadow we add, the farther the component will look from the page.

1.) Dont use shadows if they dont fit the desktop personality.

2.) if a webpage has more playfullness/fun , the shadow is much needed. and if the page is serious/elegant, shadows are used less.

3.) use shaddows in small doses: dont add shadow to everything.

4.) keep shadow light and not too dark.

5.) use small shadows for smaller elements that should stand out(to draw attention) eg. login button, input forms etc.

6.) use medium-sized shadows for larger areas that should stand out a bit more. Also use Medium shadows for making cards.

7.) use large shadows for elements that should really cloat above, eg.
navigation windows, popups, prompts, slide down menu etc.

8.) shadows can be used with mouse interaction. since it makes an illusion like we are actually pressing the button as it moves down.

9.) GLOWS are the custom colored shadows. And we can expriment with that.

10.) text above images can be given shadows, to create kind of contrast.

**_IMPLEMENTING SHADOWS :_**

### _box-shadow :_

```css
.shadow {
    box-shadow: horizontal_offset vertical_offset blur_value(in px) shadow_scale_up(
            optional
        )
        color;
}
```

_horizontal and vertical offsets :_ used to set the width of horizontal and vertical shadows, and can influence the direction of light source.This will define the large, medium or small scale of shadows.

_*blur_value :*_ we can set a blur value for shadow and leaving it 1 will lead to boxy shadow.

_*shadow_scale_up :*_ will be used to increase the shadow width from all the sides and even the ones set by vertical and horizontal offsets.This is optional and can be ommited. In case of creating glows, we can set the horizontal and vertical offsets off and set this value so that the glow is uniform across all sides.

_color :_ we can set the color of the page and using rgba, also set the transpirancy of shadows.

### **text-shadow :**

same as box shadow, but there is no shadow_scale_up value.

```css
.text-shadow {
    text_shadow: 10px 10px 5px blue;
}
```

<hr>

## Border Radius :

We use border radius to add more fun. A serious and elegant website has less border radius.

1.) Typefaces have a certain roundness then match the roudness with border radius.

3.) buttons, images, around icons, standout sections and other elements use border radius.

```css
.border-radius {
    border-radius: 12px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 12px;
    border-top-left-radius: 13px;
}
```

we can individually set each corner of the border this way.

to set a square circle, set the border-radius: 50%;
and to get the sexy round edge on right and left of a rectangle button, just give a large value .

<hr>

## White Space

right amount of whitespace makes a design look clean, and modern and polished.

whitespace tells how info on page is related, eg. which heading belongs to which piece of text.

invisible relationship set using whitespace.

1.) use a lot of whitespace between sections.

2.) between groups of elements need whitespace too. Here use medium amount of whitespace so that the element look part of same section.

3.) elements also have whitespace, but less than the group.

4.) inside groups of elements, tru to use whitespace instead of lines.

since whitepace can help seperate or group content.

5.) Law of Proximity : the more some elements belong together, the closer they should be.

6.) start with a lot of whitespace, maybe even too much and decrease gradually.

7.) with big sized content, add more whitespace, and with smaller size, use less.

8.) Try hard rule, eg. use only multiple of 16 for the whitespace.
BUT we can use 1 2 or ones smaller than 16 too.

<hr>

## Visual Heirarchy :

Visual hierarchy is about establishing which elements of a design are the most important ones.

visual hierarchy is also about defininf a "Path" for users, to guide them through the page.

a combination of position, size, colors, spacing, borders, and shadows to establish meaningful visual hierarchy between elements/ components.

1.) Position important elements closer to the top of the page, where they get more attention.
since attention flows from top to bottom.

2.) use images mindfully, as they draw a lot of attention(larger images get more attention)

3.) whitespace creates separation, so use whitespace strategically to emphasize elements.

put lot of whitespace around important elements.

4.) for text elements, use font size, font weight, color, and whitespace to convey importance.

5.) What text elements to emphasize ? Titles, sub-titles, links, buttons, data point, icons

we can even de-emphasize less importatnt text, like labels or secondary/ additional information.

6.) Between Components, background color, shadow, or border(or multiple) is used to emphasise.

7.) Try emphasizing some components A over By de emphasizing component B.

8.) What components to emphasize? Testimonials, login or register sections, preview cards, forms, pricing tables, important rows/ columns in tables, etc.

<hr>

## User Experience :

this is a seperate field whith specialisation, so lets scratch the surface.

What is user experience ?

_"Design is not just what it looks like and feels like. Design is how it works. Design is how it works"_ - **Steve Jobs**

UI is the visual presentation of a product. It's how the graphical interface looks and feels like.

UX is the overall experience the user has while interacting with the product.

There are some rules associated with how to improve UX through UI designing.

1.) Use layouts that users are already familiar with. Dont re-invent the wheel.

2.) Make your call-to-action button the most prominent element, and make the text descriptive.
call-to-aciton button are the submit, or register etc. type imp buttons that user finds when coming on the page.

3.) use blue text and underlined text, only for links!

4.) Animations should have a purpose and be fast: between 200 and 500ms.

5.) in forms, align lables and fields in a single vertical line, to make the form easier to scan.

6.) offer good feedback for all actions: form errors, form success, etc.[web apps]

7.) palce action buttons where they will create an effect(law of locality) [web apps].

8.) use a descriptive, keyword-focused headline on your main page.
Dont be vafue or fancy.
eg. the ai assitant that grows your money, is a good headline

do you have ai assistant? , is a bad headline LMAO

9.) Only inlcude relevant information, efficiently ! Cut out fluffy and make the content 100% clear.

10.) Use simple words! Avoid technical jargon and "smart-sounding" words.

11.) Break up long text with sub-heading, images, blcok quotes, bullet points, etc.

<hr>

## Website Personalities :

1> Serious/ Elegant

2> Minimalist/ Simple

3> Plain/ Neutral

4> Bold/ Confident

5> Calm/ Peaceful

6> Startup/ Upbeat

7> Playful/ Fun

This is essential because the first step for making website and gives a certain rules.

eg. Elegant/ Serious websites have less shadows and Border Radius.

## Stealing like an artist :

Get inspired from other websites !

Take good parts of one website and adapt and use in our project.

<hr>
<hr>

## Layout and Components !

Elements are bound together to form a component.

Various components are placed into a Layout

various layouts are placed on the page to form a webpage.

1.) Use common elements and components to convery website info

2.) combine compnents into layouts using common layou patterns.

3.) Assemble different layouts areas into a complete, final page.

**ELEMENTS :**

1. Text
2. Buttons
3. Images
4. Input elements
5. Tags : tags associated with page.

**COMPONENTS :**

1. Breadcrumbs : the navigation eg. main > Men > A to Z Brands
2. Pagination : Page number showing component.

3. Alert and status bars : small components at top of page eg. added to list prompt or learn more icons.

4. Statistics : stats about product or service. eg. ratings, users stats etc.

5. Gallery : contain various images and vidoes associated.

6. Feature box : box groups information about something grouped. they generally have image or icon, then heading text and then some text. Multiple feature boxes are put side by side.

7. Preview and profile cards : similar to feature box, but contain product info and profile giving a preview. Contains buttons or forms too and Data points also..

8. Accordion : Accordion contains various titles and content appears once we click on them and expand them. These are used to hide information and only reveal once clicked, eg. faq section contains and upon clicking on the question the question expands revealing the answer.

9. Tabs : Tabs are used to switch content in a given section. its like menu but we are not navigating away from the page, but the content underneath the tab changes. eg. liscence, terms and condition, user aggriment tabs when one is selected, the content below changes.

only one tab canbe selected at a time.
can be vertical too ;)

10. Carousel : slide menu, clicking on the left and right icons on the screen changes slide.

11. Customer testimonials : customer review sections... BORING !!!

12. Customer logos : take logos of the wellknown customers, eg. adobe symbol and other symbols.

13. Featured-in logos : featured in logos is newspaper, magazine or blog logos and quotes by them.

14. Steps : contains steps giving instructions based on the company product or. other details eg. how to register.

15. Forms : forms are used for the users to submit information. It can be login froms, signup forms, feedback froms etc.

16. Tables : Tables are used to dislay tabular data.(Not used there anymore)

-   in tables setting border-collapse : collapse, will ensure that the elements within have their borders collapse or overlap.

-   we can give width to the head elements and the td will take the same width.

17. Pricing tables : shows various price for various items or different plans. eg. table in jio containing the features available at various plans.

18. Modal windows : Modal windows are the popup pages that come above the page. eg. signup or popups of marketing, or prompts. with a cross button.

**SECTION COMPONENTS :**

1. Navigation
2. Hero section
3. Footer
4. Call-to-action section
5. Feature row

**LAYOUT PATTERNS :**

1. Row of boxes or cards : very common pattern like seen in shopping websites.(flexbox)

2. Grid of boxes or cards: here its boxes but in 2d, (using grid layout)

3. Z-pattern : Z pattern has a layout that forms z pattern and configuraiton of element alternates eg.

image text

text image

image text

text image.

since our eyes have tendancy to scan opposite rows.
most times 3 rows are used.

4. F-Pattern : f patterns is simple pattern with no alternation. eg.

image text

image text

image text

image text

5. Single-column : the single column pattern we see in mobiles. in responsive design, the muliple column pattern changes from multiple columns to single column when switching from desktop to mobile.

6. Sidebar : side bar is used for summary, blogs, and navigations etc.

7. Multi-column/magazine : combining multiple columns of differet sizes like in newspaper. used in blog and newspaper website.

8. Asymmetry/Experimental : these layouts are made using grids and are very exprimental and complex. They have strange symmetry.

<hr>

## 7 steps for making websites :

1.) Define : w's of the project

2.) Plan : getting components and resources(get images and videos, determine the website personality)

3.) Sketch : dummy page(components and layout patterns and arrangement.)pen and paper layout.

4.) Design and Build : Building the website(Code and make the website )

5.) Test and Optimize : Testing and Optimize(chekck on various browsers and also check responsive design on phone)
we also perform Lighthouse performace test in chrome devtools.

6.) Launch : upload the code on server

7.) Maintain and Update : :)

we can use analytic software to keep track of traffic.

we also maintain a blog that is updated regularly.

### STEP 1 : DEFINE THE PROJECT

> Define who the website is for : For a client

> Define what the website is for

> Define Target Audience : Define business goal and user goal

### STEP 2 : Plan and gather website content

> Plan and gather website content

> Plan out the sitemap(links and where they lead etc) - incase of multiple pages

> Define website personality

### STEP 3 : Draw the layout somewhere with dimensions

> Determine the various sections of webpage and list them in order of appearance.

> draw a rough sketch of the layout

<hr>

## Responsive Design :

> Responsive design is to audgest the webpage according to viewport.

### Responsive Design Ingredients :

**> Fluid Layouts :**

to audgest the element on the page according to viewport, we use %, vw or vh for scaling elements.

also use max-width instead of width.

**> Responsive Units :**

to scale the whole page automatically

TRICK : set rem to 10px for easy calculations

**> Flexible Images :**

images dont scale and hence we muct make them responsive

by using % and max-width

**> Media Queries :**

Brings responsive sites to life

To change styles on certain viewport widths(called breakpoints)

### Desktop-First vs Mobile-First Development

in Desktop First, we make the website for the Desktop first and then adapt the website responsive using media query.

in Mobile first, we make the website for mobile first and then expand the website to large screen.

Both are much better so choose any.

### rem and max-width :

**max-width :** max-width starts occupying the complete width of parent, if the viewport is smaller than max-width.
hence its adaptive and occupies 100% only when the width is not enough for the max width.

**rem :** rem can be changed by changing the font-size in the html tag.
if we set font-size : 10px.

but to make it such that the user can toogle the font size in browser settings.

```css
html {
    font-size: 62.5%;
}
```

<hr>

## Media Query :

when we start responisve design with PC first, we use Max Width and starting working with mobile first, we use Min Width.

max-width : 600px means 600 and below.
max-widht: 1200px means 1200 and below

But, in case of two media queries being true, both are applied and incase of conflict, the one coming later will be applied.

### Selecting Breakpoints :

Breakpoint is the various values of media queries applied in a project.

we can either select a few ranges based on screen width ranges, eg.

smartphone(300px - 500px), tablets(600-900) tablests, landscape tablet(900-1100), desktop( > 1200). hence suitable breakpoints : 600, 900 and 1200.

or

we can give each section breakpoints, based on what happens when we start decreasing the width. this is how we go to inspect and decrease the width to find the breakpoint for each section.

### Step by step responsive :

for responsive webdesign, we need the meta tag :

```html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
</html>
```

the above meta tag is a must write to define the viewport width.

DONT use px in media query and use the rem value BUT the trick of font-size: 62.5% wont work !! instead 1rem = 1em = 16px.

hence we need to use em in media query.

in a media query to make everything smaller, we can set the rem value in HTML tag smaller!!!! and it is advantage of making everything using rem.

<hr>

## TRICKS :

> When we give border on hover, the whole layouts gets moved and there is a wacky stuff going onn, hence how to fix ?

USE SHADOW INSTEAD OF BORDER

```css
.btn:hover {
    /* border: 2px solid white; this is a NOPE*/
    box-shadow: inset 0 0 0 3px #fff; /*this is dope*/
}
```

NOTE : inset is again a property for making the shadow we a part of the element body instead of casting outside

>

```css
.link:visitd {
    color: orange;
    border: 1px solid currentColor;
}
```

the above currentColor tag will automatically take the currentColor keyword value. and if we change the color later, border will automatically change using currentColor attribute.

> Transparent keyword can be used instead of color value and comes in very handy.

> role attribute :

sometimes when we use tags like background-image, the screen readers wont be able to read those since its background image and hence we can use role attribute to tell what the tag is acting like.

eg. < div role="img">

here div is for img containing.

> aria-label attribute :

new attribute for accessability used for describing a tag content

eg. < div class="div" aria-label="woman having food">

> required :

required attribute without any value in an input tag makes filling the input mandatory for submission.

> inherit keyword :

values like font family are not inherited by input tags and hence to force them to inherit, we can write inherit to force inherit.

```css
input {
    font-family: inherit;
}
```

> placeholder pseudo element :

used to give color to placeholders

```css
.cta-form input::placeholder {
    color: #aaa;
}
```

> Links containing numbers and emails :

```html
<a href="tel:415-201-6370">415-201-6370</a>
<a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
```

the above 2 can be used for linking a phonenumber and email and will open corresponding apps for phone call and email which is frikin awesome.

<hr>
<hr>

#### Videos on HTML as background ?

```html
<video autoplay muted loop id="myVideo">
    <source src="rain.mp4" type="video/mp4" />
</video>
```

NOTE: muted essential for autoplay to work

### the attribute selector :

writing img[data-src] will select all images with the attribute data-src

```css
img[src] {
    background-color: blue;
}
```

OR even

```css
img[src="12"] {
    background-color: red;
}
```

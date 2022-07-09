# Sass :)

its a CSS extension language

Better than plain CSS :)

### Browse wont read sass :)

hence we can use Node.js, Gulp, Parcel for convertion of sass to css

i know css so lets see :)

SASS has 2 syntax and we will be using SCSS : Sassy CSS LMAO(this is much trending format)
in SCSS, normal CSS works as normal

### SCSS variables

they are much better than css variables.

```css
$primary-color: blue;
$secondary-colro: green;
```

just $ sign before sass

QUESTION : major difference between SASS variables and CSS variables ?
ANSWER : css variabels exist in code whereas, when sass is compiled, the variabeles take the actual position in the respective positions :).

### Maps ?

we can create a map ?

```css
$font-weights: (
    "regular": 400,
    "mediium": 500,
    "bold": 700
);

body {
    font-weight: map-get($font-weights, bold);
}
```

NOTE: format is kinda like objects :)

=) map-get($variable name, key) : we can fetch a map value using this

### Nesting

normally we nest in css like :

parent child{ } but in sass :

```css
.main {
    margin: 90%;
    p {
        font-weight: 20rem;
    }
}
```

### &

```css
.main {
    margin: 90%;
    &__paragraph {
        font-weight: 20rem;
    }
}
```

in the above case, &\_\_paragraph is eqivalent to .main_paragraph :) hence this is kinda thrash

IMPORTANT : in sass **&** inside of any body is replaced by the selector eg : in a body of .main selector, & will be replaced by the text .main .

### short form of nesting : interpolation

```css
.main {
    margin: 90%;
    #{&}__paragraph {
        // eqivalent to .main .main__paragraph{}
        font-weight: 20rem;
    }
}
```

interpolation is used to actually insert variables in between stirngs just like in `${}` in javascript.

QUESTION : again difference between &**para and #{&}**para again
ANSWER : during nesting somehow using &**para wont lead to nesting hence we need to use interpolated name #{&}**para for the element to act as nesting.

NOTE: in the abvoe example, its called interpolation, so basically, this kinda explains the naming convension of starting names with parent class name :)

actual use of interpolation is, to insert

#### check this out :)

```css
.main {
    #{&}__paragraph {
        &:hover {
            color: pink;
        }
    }
}
```

IMPORTANT NOTE that in the above example, the value of & will not be .main**paragraph BUT .main .maain**pargraph !!!!

remember this HENCE we can say that

-> & will be the full selector text used for the block !!

### Partial file !!!

Sass files name start with \_ and compilers wont generate css for those files !!!
we import those partial fieles into a single main file in our workflow

=) @import './directory';

IMPORTANT : we dont need the etension even OR the underscore :)

### function !!!

yep we can make functions

```css
@function weights($weight-name) {
    @return map-get($font-weights, $weight-name);
}

p {
    font-weight: weights(bold); // note dont pass in string format
}
```

### mixins

kinda similar to functions

```css
@mixin flexCenter {
    // mixin without parameter
    background: blue;
    color: white;
}

@mixin flexCenter2($direction) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
}

p {
    @include flexCenter;
    @incldue flexCenter2(row);
}
```

NOTE: hence its just like adding multiple lines of code whereas functions are used for computation

### if else

```css
@mixin theme($light-theme: true) {
    @if $light-theme {
        background: lighten($primary-color, 100%);
        color: darken($text-color, 100%);
    }
}

.light {
    @include theme(
        $light-theme: true
    ); // NOTE : dont need to type $light-theme in the parameter,but we can
}
```

##### Another mixin example :)

we can pass the content of a mixin too !! using =)@content

```css
@mixin mobile {
    @media (max-width: 800px) {
        @content;
    }
}

.main {
    @include mobile {
        flex-direction: column;
    }
}
```

the above code will simply setup a media query in the .main class element for width 800px and the @content annotation will be replaced by the code we write within.

### Extends :

we can inherit the properties of one selector to another.

NOTE: extends propeties from same scope, meaning !

```css
.main {
    #{&}__para1 {
        color: white;
        background-color: blue;

        &:hover {
            color: pink;
        }
    }
    #{&}__para2 {
        @extend .main__para1;
    }
}
```

IMPORTANT NOTE: in the abvoe , @extend .main**paragarph1, will actually extend (.main .main**para1) and not .main_para1 !!!!

### maths in css :)

in sass we can simplay use, -, + , \* etc

NOTE: in css use can use =) calc() and using that we can mix up different types aswell, like % with px etc but in sass we cant hence it has to be same type.

# BoxerJS (a jquery modal library built for developers)

You may say: OMG ANOTHER JAVASCRIPT MODAL LIBRARY, TAKE A BREATH WHILE I SUICIDE MYSELF IN A COCA COLA CUP.
Yes, you are right, its just another guy, but i can surely say that 90% of all javascript modal libraries IN THE WORLD are not covered by unit tests.
Its not a difficult thing to be covered, but good things, have tests. Unit Tests.

I also want to say that 90% of all javascript modal libraries IN THE WORLD are binded by CSS rules and Images.
I was tired of this binding thing, and i wanted something that i could use everywhere, regardless of what kind of CSS rules i was setting, and what kind of images iam loading.

Boxer does not let it explicit for you. It assumes that your a good developer and you know how to create the classic Modal centered effect.
I dont wanted a CSS library, i wanted a Javascript library.

This mindset is important, because it breaks things appart. You start doing things well when you learn to break things.

I know, doesnt matter what kind of logic, structural or practical errors you find on my library, im not a perfect coder, but i built the mindset. Thats the point.

## How to use

Its logical, how it should be.

1. Instantiate the class.
2. Set the Background div (the black one)
3. Set the content div (the white box with content inside)
4. Show everything

```javascript
var bjs = new Boxer;
bjs.setBackground('.test-bg')
bjs.setContent('.register-cta-content')		
bjs.show()
```

Its still very raw, you will see that by doing this, you will not be able to close the modal, you asked for a modal, thats what you got, theres no default closing button, theres no default border radius, theres simply no default.

## Make the modal Closeable

If you want to make the modal closeable, theres a guy for it:

```javascript
bjs.getBackground().closeable();
```

Just call it before showing, and you will be abble to close the modal by clicking on the background.

## Creating the classic Modal Close button

Oh right, dont panic. If you want to create a close button, all you need is to keep the Boxer instance somewhere, in which way you could call it after modal is opened.
When you do it, just call:

```javascript
bjs.hide();
```

## Requirements

It basic jQuery manipulation to grab the DOM reference and do the append proccess.
jQuery 1.7+ should do the trick. 

## Known issues

1. Actually, Boxer modules are global variables, its bad and ugly, but i had no time to fix it.
2. Theres also no check for the jQuery variable and its using the global instance of $ var, which is very ugly too.
3. Its a bit difficult to open the modal, because it requires 4 lines of code, there should a way to make it smarter without messing or binding everything.
4. Theres no jslint validation, i should do it, probably there are several issues.

Problably more..i just built it in a few hours, but had not bug ever since.

## Contact

My name is Renato Alves (renatodex@gmail.com), and im the only developer behind BoxerJS.
I would love to gather help to improve the library, i made this based on a very ancient question on webdeveloper world, which is : What Lightbox system should i use for my project?
I dont know you, but today i have a clearly answer for that question.
Any questions, any critics, any any, just mail me, im still alive since the last commit of this repository.
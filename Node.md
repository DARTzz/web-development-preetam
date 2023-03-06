# Node.js Mongo.db and Express.js

NOTE: lets use node and later see how it works :)

## what is node and why ?

Node.js is a JS runtime build on googles open source V8 engine.

QUESTION : what is runtime?
ANSWER : runtime is the environment in which we can run program

Here NODE.js acts like a container that allows to run JS outside a browser.

QUESTION : who executes this code ?
ANSWER : the V8 engine will parse and run the code.

QUESTION : why use JS outside ?
ANSWER : so that we can now access featurs like file system and build servers.

#### Node.js pros :

-> Single threaded based on event driven non-blocking I/O model.(later lets see what this means)

-> helps make super fast scalable data intensive apps.

-> we can build API with database behind it(preferably noSQL) eg. MongoDB

-> Data streaming apps like YT can be build

-> real time chat apps and server side web applications.

MAIN RESON ?? USING SAME LANGUAGE !!!! more efficient.

-> libraries like NPM are available :)

#### when to not use node ?

APPLICATIONS WITH HEAVY SERVER-SIDE processing (CPU-intensive)
eg. Image manipulation, file compression, video manipulation.
for this php, pyton, ruby on rails exist.

#### running node in terminal

typing =) node : in terminal opens Read Eval Print Loop (repl) and we can run JS code like in normal terminal.
its like the normal terminal expression execution like other languages.(hence read eval print loop)

to exit repl use =) .exit or ctrl+d

NOTE: hitting TAB in repl will introduce us to the global available stuff available in JS and even node exclusive modules.
if we hit eg. String.TAB, it opens up all the available functions in String class.

```node.js
> 3*8
> _+6
```

the =) \_ in the above code, uses the result of previous operation

if we have a file containing js code to execute =) node fileName.js

#### require() :

One additional of JS in node rather than browser is, file reading.

In node these functinalities are achieved using modules.

=) fs = require(); require function in node is used for calling modules

eg. to call file system module, we say =) const fs = require('fs');

NOTE: this returns an object that will contain lots and lots of functions to work on file system.

#### Node documentations :

its essential to read node documentations to read about all kinds of modules !!!
we can use these modules and these modules are addons!!!

#### File system :

=) fs.readFileSync('./txt/input.txt', 'utf-8'); : selecting the file and also passing the file format, or else NOTE: we get a buffer if not mentioning the encoding format !!!

also this is the synchronous read file function and there exists asynchronous ones too.

=) fs.writeFileSync('./txt/output.txt', text); : will save content of text onto the file mentioned in the directory.

NOTE: if the specified does not exist, a new file is created.

### Asynchronous nature of NODE.js

In files system, the functions with Sync postfix are synchronous in nature or we can say blocking in nature.

=) fs.readFile(directory, encoding type, callbackFunction(err, data){} ) : for reading file in asychronous way and the callback function will be called after the code has been executed.We can skip the encoding parameter in this.

QUESTION : what is the issue with blocking code ?
ANSWER: this question has been answered already :) in JS course.

Node js is single threaded and and hence if in an example, in case there are multiple users then, in synchronous code, users can block code and other users will have to wait. Hence Asynchronous js is essential.

Hence the code that can be blocking, is then handled in background simultaniously. NOTE: node js is single threaded, hence the background execution is out of the single thread and in the environment of the libraries.

IMPORTANT NOTE: in node js, there is a common pattern in callback functions and that is that first parameter is error then its the data.

=) fs.readFile(directory, optionalEncoding, (err, data)=>{}); here data will be the string that is being read from the file and err is the object of error if encounterd.

we can handle the error incase the file does not exist or other types of issues.

### Creating our first web server :

using http module
=) require('http');

=) http.createServer(callback(request, response){
response.end("hello from the server"); // simplest way of sending response
});

NOTE: response.end wills send response to the browser and browser will accept it as a webpage and hence :) hello from the server will be printed.

anytime a request hits our server, this callback function will be called.

the response object gives a lots of tools to deal with responsing to the request.

http.createServer() function returns an object of Server.

=) server.listen(portNumber,'local host address', callBack(){} ) : in node port is generally 8000.
callback function runs as soon as server starts to listen.

```js
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("the server is running !");
});
```

from the above code, if we run 'localhost:8000', the message hello from server will be the message.

this is because calling the address will be a req, NOTE: the request object in createServer is of the type socket: and upon anyone sending a request on the server, request can be accessed to check the data of the request.

### Routing

Routing in Node is the process of implimenting different action for different URL, i.e. different url are treated as different request types.

In a big real world application, we use Express for this.

=) requre('url') : URL is used to analyse the url so as to work on the URL.

=) request.url : in the http.createServer callback, the request object has an attribute called url, and we can check the specific url sent by the user.

IMPORTANT NOTE: when we call the "localhost:8000", note that the browser will send request twice, once for the page and 2nd time for the favicon.ico !!! This can be observed.

QUESTION : what are some other uses of url module ?
ANSWER : url module can help parse the complex url data eg, sometimes we send data in url eg. /overview?id=23&abc=4256. And url module can parse this data into nicely formated object. We wills ee it later.

Routing for now can be achieved using simple if else :)
Hence NOTE: in the end do handle the case in which wrong url is passed.

=)response.writeHead(404): we can use this to return the error of 404 page not found incase of wrong URL being called up.

QUESTION : what is the use of writeHead?
ANSWER : it can help send headers as response. Headers are the parameters about response we send.

=) res.writeHead(404,{
'Content-type' : 'text/html',
});  
: in the above code,by passing the content-type, our browser will know what types of data is to be expected and browser will seek that data type.

->we can make our own custom headers too :(

then we can finally send :
=) res.end('<h1>Page not found!</h1>');

IMPORTANT NOTE : always set the header before sending the response.

NOTE: we can go to network tab and click on the request to check the response header and request header.

IMPORTANT QUESTION: so wait! is the url not actual directory ?
ANSWER : MYTH BUSTED!!!!!!!!! the url has nothing to do with directory :( and it is actually the routing that controls what will be accessed🥲.

QUESTION : what is an API ?
ANSWER : it is a service from which we can request data.

### Creating simple api.

We have a JSON file that contains the api data that will be sent to the client.

NOTE: we can read JSON data using file system.

=) `${__dirname}/dev-data/data.json` : java script gets access to \_\_dirname variable that always points to the directory in which the script that is using the variable is present and hence this is an alternative to dot.

the server always sends data in JSON format. here is an example

```js
if (pathName === "/api") {
        fs.readFile(`${__dirname}/dev-data/data.json`, 'htf-8', (err, data)=>{
            const productData = JSON.parse(data);
            res.writeHead(200, { 'Content-type': 'application/json'});
            res.end(data);
        });
```

in the above code, 200 is the code for successfull response sending and =)application/json is the content type for sending out a json file.

-> IMPORTANT NOTE: in HTML files, we add placeholder text like : {%PRODUCTNAME%}

-> so in our entire HTML files, we create lots of place holder in cases where simple data changes for different parameters.

-> also we can make seperate template html files for code pieces that repeat with placeholders in order to remove repetition of code.

-> later in JS server, we can read the template files and work on the placeholders using the File System and then using the replace method in strings :).

IMPORTANT NOTE: what is regular expression ?
ANSWER: lets see that later.

#### parsing URL

we can parse url using : =) url.parse(req.url, true) : used to parse the url into components and hence we pass the request URL into it along with true in order to get an object out of the query string.

NOTE: the ?id=13 part of the URL is called the query string.

QUESTION : what will that true do again ?
ANSWER : when we parse the url, there will be a query object present in the parsed object that will contain the query part of the URL string. eg. ?id=13 will give an object : query {id : '0'}

IMPORTANT NOTE: website.com/PathName?id=12 : in this URL, the /PathName is the path name and id=12 is the query.

#### Using our own modules(Common.js) :

NOTE: remmeber from JS notes, importing modules has a pattern called common.js. That is what we follow in Node.js

In node js every single file is treated as module.
we will look at all the ways to export later but, for now

=) module.exports = {class or function body}; this is how we can export :

```js
module.exports = (temp, product) => {
    return temp + product;
};
```

then we can simply import using the simple require function.

### NPM(returns :) :

Node package manager is a CLI : command line interface app.
AND
is the repository as well

in NPM there are 2 types of package imports that we can do :

-> 1.) Simple/regular dependancy : Code that we include in our own code. EG. Express

=)**Sluggify :** is a package used to make more redable urls out of name.

=) npm install < packageName> : this is how we install simple dependancy

-> 2.) Development Dependencies : These dependancy are used to development and do functions like bundling, parsing etc like eg. Parcel.

=) npm install DevDependency --save-dev : this is how we save development dependacy.

**Nodemon** is a helpful dev dependancy that reloads node programs incase of any changes made in the program code.

we can have global installs :) =) npm i packageName --global

nodemon can be installed globally :)

NOTE: from now on run every node program using =) nodemon index.js for global execution

IMPORTANT NOTE : the local dev dependencies cannot be run using simple terminal command, and for them we need to setup scripts in the scripts field in package.json.

```json
"scripts" :{
    "start" : "nodemon index.js",
}
```

and now we can just run using =) npm run start.

QUESTION : How to import 3rd party module ?
ANSWER : once we have installed package like sluggify, we can just write :
-> const slugify = require('slugify'); : and node will automatically add slugify later.

slugify works on slugs.
QUESTION : what are slugs ?
ANSWER: slugs are unique strings that we use inplace of numbers eg. we can replace ?id=1 by a slug like /one. This is more redable :)

we can check documentaion on npm website for slugify

```js
const slugify = require("slugify");
slugify(el.productName, { lower: true });
```

hence the slugify will create a slug for the product name with lower case(the lowe: true are options).
eg. if productName was Preetam Singh, the slug will be preetam-singh

NOTE: the ^ infront of package number, means that the pacakge will accept updates.

=) npm outdated : shows outdated packages.

QUESTION : what is the breakdown of version number ?
ANSWER : in a version number 01:22:13, the 1 is the major version, 22 is the minor version and 13 is the patch release, NOTE that ^ allows for minor version to be installed whereas placing ~ will make it so that minor version will not be updates but, only path can be updated.

QUESTION : major vs minor vs patch :
ANSWER: minor version are the functionality changing releases whereas patch are just bug fixes.

**\* ^ ~** these are the 3 :)

The node modules contains the additional added libraries and dont need to be exported . BUT package.json must be carried and when we move project, just install the libraries mentioned in package.json using =) npm install

the package-lock.json contains the info about the versions used :)

NOTE : .prettierrc

<hr>
<hr>

## Welcome to Backend Development

### How the web works ?

-> Client(browser) sends request to server
-> the Server will send response

this is the Client-Server architecture

https://www.google.com/maps : here
1.) https is the protocol
2.) www.google.com is the Domain name
3.) /maps is the resource

DNS : Domain name servers basically lookup the ip address corresponding to the domain name. This happends through the ISP.

https://216.58.211.206:443 is the real address.
NOTE: here 443 ist he HTTPS port numnber and 80 is the HTTP port number.

after sending the request, there is TCP/IP socket connection established between server

TCP/IP defines how data travells across the web.

after the connection is established, HTTP request is sent to the server.

-> HTTP request looks like :

```
GET / maps HTTP/1.1

Host : www.google.com
User-Agent : Mozilla/5.0
Accept-Language : en-US

<BODY>
```

Start line : HTTP methods(GET, PUT, PATCH, POST) + request target(the resource) + HTTP version
HTTP request headers
< Body> will have stuff in it incase of post.

-> HTTP response looks like :

```
HTTP/1.1 200 OK

Date: Fri, 18 Jan 2021
Content-Type : text/html
Transfer-Encoding: chunked

<BODY>
```

Start Line : HTTP version + Status Code + status Message
HTTP request headers
RESPONSE BODY : contains the response(in JS it contains the response.end() data)

QUESTION : what is the role of TCP/IP ?
ANSWER : TCP breaks the data into small packet and then sends them across. IP routs the packets and ensures all arrive at the destination.

We can inspect the requests in the Network tab and see the requests and responses.

There are list of resources requested from the server and responses correspondint to them is sent.

#### Front end vs Back end :

-> Front end is about all that happens in the web browser, Front end devs use : HTML/ CSS/ JS and we can add react, angular etc.

-> Backend is the part that is abstract from the user.
STATIC BACKEND : A server stores the HTTP server and the files that will be requested. this is a simple server
DYNAMIC BACKEND : A server capable of running application, HTTP server and files running and there is DATABASE also.

NOTE: we will use NODE js as dynamic webserver and MONGO.DB as database.

### **STATIC VS DYNAMIC VS API : **

-> Static website : when developer send ready to run files to the server, and there is only HTTP server needed to run the website.

-> Dynamic websites : Are customly built on the server side ! we just give the template and according to database, template will be filled up.

-> API : in API is same as Dynamic website BUT only data in JSON format is sent and no website is sent. The forntend then makes use of the API data to then build the website actully in the browser usign tools like react angular etc.

IMPORTANT NOTE: hence the API powered website is built at the client side after fetching JSON from api, whereas, A dynamic website fetches the website from server and then simply displays it ont he browser side.

NODE can be used for both types of website !

QUESTION : is there an advantage of API powered website ?
ANSWER: the api just sends the data and hence the data can be consumed by any language or platform and there are no restrictions !!!. The api data can be used by anyone since its just JSON file.

<hr>
<hr>

## How node works :

NODE has many dependencies : it depends on V8 engine and libuv.

QUESTION: what is libuv ?
ANSWER: libuv is an open source library with strong focus on asynch IO helping in file system, netoworking etc. It also helps in Event loop and Thread pool. It is fully written in C++.

even V8 engine is written in JS and C++.

NOTE: its beautiful that node.js helps us access even the C++ function access using JS.

Other dependencies :
1.) http-parser : for parsing HTTP
2.) c-ares : for DNS request stuff.
3.) OpenSSL : for cryptography
4.) zLib : for compression.

#### Process, Threads and the Thread Pool :

-> Node when runs like a programm is a process.
-> in that process, NODE.js runs as a single thread(single sequence of instructions) which can cause blocking.
-> The following happens : > initialize program > Execute "top level" code > require modules import > register event callbacks > Start event loop.

IMPORTANT -> for tasks that are blocking, libuv gives us 4 seperate thread pools(can be configured to 128 too !!). These heavy tasks comprise of : File system API's, Cryptography, Compression and DNS lookups.

-> this offloading of blocking task is done automatically by node.

#### the Node.js event loop :

Event loop is the heart of the Node.js architecture.

-> Event loop is where all the application code that is inside callback functions(non-top-level code) will be executed and some parts of this gets offloaded to thread pool.

some of these tasks that requre callback function are : New http request, timer expired, finished file reading etc. These tasks need time to be executed and hence get a callback function for the time they are done executing and then event loop executes their callbacks once they are triggered.

-> there are actually 6 queues maintained for 6 types of callbacks and every quere has seperate priority :

> Exipred timer callbacks Queue : This queue has the highest priority :
> I/O polling and callbacks : polling means looking for IO process.(networking and file access)
> set immediage callbacks : these are called after IO/Polling
> CLose Callabcks : in this phase all the closing stuff like sockests or servers etc.
> 2 other not so important : Process.nexttick(), Other microtasks queue(for Resolved promises)

NOTE: Other Microtasks happens after any of the main 4 phases is done, eg. if a promise is resolved and currently, exipred timer callback queue is being handled, promise will be next.

Process.NextTick() is used in desprate cases when we want to just execute a callback assoon as a queue is finished.(microtasks does just this)

NOTE: after all queues are resolved, node checks if there are any pending timesr or tasks that may resolve and add to callback queue. If not, the application exits.

IMPORTANT NOTE: Event loop makes asynch features in JS. Single thread is very less resource intensive.

IMPORTANT QUESTION: how to not block the code ?
ANSWER: Here are a few tips :
-> Dont use synch versions of functions in fs, crypto and zlib modules in callback functions.(note can be used in TOp level)
-> dont perform complex calcualtions, eg. loops inside loops
-> Be careful of JSON in large objects.(can take long time to stringify)
-> dont use too complex regular expressions(eg. nested quantifiers.)

=) process.env.UV_THREADPOOL_SIZE = 1 : used to set the number of threads in the libuv.

remember that the heavy tasks are sent to these threads.
by default they are 4 and if we reduce them, there will be difference in performance

#### Events and Event-Driven architecture :

most of nodes core modules , are built around event driven architecture.

In Node there are **Event emmmiters** that emmit events like request hitting server, or timer expireing etc. These events can be picked by **Event listeners** which listen for these emmited events and then provoke the **callback function** attatched with them.

=) server.on('request', ()-> res.end()) : server onn is an event listener listening for request and when new request is made, the server will Emmit and listener will listen and provoke the callback function.

EventEmitter --emits--> EventListener --calls--> CallbackFunction

NOTE : the above in JS is famously called Observer Pattern

#### Event Emmiter in practice :

NOTE: remember in JS, we can attatch EventListener to DOM events and in that scenario an emmiter automatically detects changes in the DOM and emmit.

We can create our own emmiters.

=) const emmiter = new EventEmmiter();
=) emmiter.emit("newSale"); : IMPORTANT : will emmit an event named newSale
=) emmiter.on('newSale', ()=> callback function); : will look for an event named newSale.

NOTE: We can even pass argutments in emit() which get passed to the on() function.
=) emmiter.emit("newSale", 9); and them =) emmiter.on('newSale,(stock)=> ).

neat.

Multiple listeners on the same event run in synchronous way WRT one another.

IMPORTANT QUESTION : how do http and other modules emmit ?
ANSWER: they are classes internally and they just inherit from EventEmmiter class !!

```js
class HTTP extends EventEmitter {
    constructor() {
        super();
    }
}
```

we are able to listen to request in http using :

```js
const server = http.createServer();

server.on("request", (req, res) => {
    console.log("request recieved !");
    res.end("req recieved!");
});

server.on("close", () => {
    console.log("Server Closed");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("waiting for requests");
});
```

hence NOTE: in the above code, listening to request and close event is only possible in http because it inherits the EventEmitter class.
=) server.on("type", (req, res)=>) is ther better way of listening for requests on server than passing callback in http.createServer() !!!

IMPORTANT NOTE: the browsers request for a page twice, once for page and second time for favicon !!.

hence http automatically emmits events and we just lsiten to them.

### Introduction to Streams :

what are streams, Used to read and write data piece by piece(in chunks), without completing the whole read or write operation and therefore without keeping all the data in memory.

eg. in Youtube, processing is done in small chunk hence we dont wait for entire video but just process the chunk we have.
-> it saves memory
-> it saves time.

NOTE: all streams are instances of eventemmiter class!! and gives us listeners.
In node there are 4 types of Streams :

-> READABLE STREAMS : From these streams we can read(consue data), eg http requests and File read system. there is Data and End event where data event is emmited when there is new piece of data to consume and when there is no data to consume end is emmited. We get =)pipe() and =) read() function.

-> WRITABLE STREAMS : We can write data eg. http responses and file write stream. there is Drain and Finish event. =) write() and =) end() functions.

-> DUPLEX STREAMS : both readable and writable streams eg. net web Socket(stays in both client and servers direction)

-> TRANSFORM STREAMS : Are Duplex but at the same time can modify data while its being written or read. eg. is zlib Gzib creation which is used to compress data.

#### Understanding Streams :

when we use fs.readFile(), it works and we are able to then send the data and stuff BUT!!! node has to read the file entirely.

NOTE: hence if the file is big, this is a big issue since Node will have no resources left.

So in production, we use Streams

QUESTION : how is this different from readFile() ?
ANSWER : the read file function actually copies the entire file into a single variable whereas, Stream will process a chunk of data at a time.

=) const readable = fs.createReadStream('test-file.txt') : this function creates a readable stream and NOTE: upon getting new data to consume emmits an event that we can handle with callbak function.

=) readable.on('data',(dataChunk)) is for listening to recieving next chunk
=) readable.on('end',()=>) is for listening when no more data is left !!!!!
=) redable.on('error), err=>) : to handle the case where there is error.

VERY IMPORTANT NOTE : in a server, the response object is actually a writable stream and hence we can write the data we read from that stream into the response stream.

```js
server.on("request", (req, res) => {
    const readable = fs.createReadStream("test-file.txt");
    readable.on("data", (chunk) => {
        res.write(chunk);
    });
    readable.on("end", () => {
        res.end();
    });
    readable.on("error", (err) => {
        res.status(500);
        res.end("file not found");
    });
});
```

in the above code following happen :
-> readable stream is created and upon a chunk is recieved the data event is emmited.
-> this data event is handled in a manner such at at a time only a chunk of data is stored in response.
-> in the end when no more data is left to stream, end event is emmited.
-> the end event is then handled by callback function that ends the server response and finally sends the stream of data piled.

NOTE: makes sense right, before we were sending a single file and inside of function end() which meant no more response is left. now we use end() when the stream has chunk by chunk got the response built.

=) response.statusCode = 500 : lets us directly set the response status in header.instead of .writeHead(statusCode).

##### Back Pressure :

There still is a problem with the approach of reading from READABLE STREAM and then sending it over RESPONSE WRITABLE STREAM in the network like we did before. the reason being ?

**BACK PRESSURE :** The speed of Readable Stream is way faster than response writable stream and that overburdens and is called back pressure. Data cant be sent as fast as it is recieved.

Hence we use =) pipe() : pipe operator is available on all input streams and allows us to pipe output of a readable stream right into a writable stream.

This automatically handles speed of data coming inn and speed of data going out.
=) readableStream.pipe(Writable/Duplex/TransformableStream) this is all we need :)

```js
server.on("request", (req, res) => {
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
});
```

NOTE : pipeTo() is used more since it returns a promise and is Asynchronous.

#### Working of requiring modules :

QUESTION: what happens when we require a module ?
ANSWER : following steps happen :
-> Resolving a loading : this looks for a core module in the library like http. if path begins with ./ or ../ etc, it looks for folder since its a developer module. incase this file is not found, it looks for it in npm forlder called node_modules.(Hence we dont need to write directory in node_modeuls :). Not finding anywhere gives error.

-> Wrapping : after the module is loaded, the code of module is wrapped inside of a special function which gives access to special objects like : require, module etc. This function is an iffy and gets evoked.

```js
(function (exports, require, module, __filename, __dirname) {
    // MODULE BODY
    // require : for requiring imports
    // module : reference to current module(used to export )
    // exports : a reference to module.exports used to export modules
    // __filename : absolute path of the current module
    // __dirname : directory name of the current module.
});
```

this gives us access to the require function LMAO smart but it also keeps the import private in the current module only.

-> Execution : execution by runtime

-> Returning Exports : now the rqeuire function returns the actual imported variable(for function or class etc).

-> Caching : modules are cached meaning that the module is only imported once for the file and then stored in cache.

IMPORTANT QUESTION : can you explain wrapping part again ?
ANSWER: the thing to wonder is how does every module in node get the variables like exports, require, module etc. It is because node automatically puts the code we write in a module inside an IFFY and passed these function in to elaborate, eg :

```js
console.log(arguments);
```

OUTPUT : argumentsArray

so when we run console.log(arguments), Node will wrap it inside an iffy and then execute the file and hence argument that returns arguments inside of a function call actually shows arguments. Hence node is doing this.

```js
(function (exports, require, module, __filename, __dirname) {
    console.log(arguments);
});
```

and hence we can use all those variabels which are not part of normal JS since node does this and passes int eh arguments.

=) module.exports = Calculator; : to export single file. :
can be accessed like : let calculator = require("moduleName");

=) exports.add = (a,b) => a+b; exports.sub = (a,b) => a-b;
-> can be accessed like : let calculator = require("moduleName"); and then calculator.add(1,2);
or  
-> const {add, sub} = require("module.name");

so using exports, we actually get an object containing all the exports with which we can all each one of the exports. NOTE: this is why we are able to export :)

<hr>

#### Promises(revision) :

NOTE : although there is HTTP, we can use a module in JS called as SuperAgent for requesting data from a server.

=) superagent.get(url).end(err, res)=>{ }; In Client side for making a get request.

remmeber that get() here returs a promise.

a promise is only available after the value has been fetched.

=) .then(callback(res)) calls the callback when the data has been fetched(Fullfilled promise)
=) .catch(callback(err)) called incaes of error.

NOTE : superagent has support for .then() and .catch() so can be used after that

QUESTION : how to promicify a read file function ?
ANSWER : we construct a new promise using new Promise(executorFunction(resolve, reject));

this new promise takes a function that it will call immediately and that function takes inn resolve and reject arguments.

```js
const readFilePro = (file) => {
    return new Promsie((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("I could not find the file !");
            resolve(data);
        });
    });
};

readFilePro("file.txt").then((data) => {
    console.log(data);
});
```

-> Whatever we pass in resolve function in the promise contructor, will be the data returned in .then() incase of fullfilled promsie and whatever we pass in rejct will be the data returned in the .catch() function.

Remember, we resolve callback hell by returning a promise in callback function then attatchign then, the then will again return a promise and we attatch another then and so onn.
In the end we need only one catch handler.

<hr>
<hr>

## EXPRESS :

Express is a minimal node.js framework(Built on top of node js) as a higher level of abstraction. Behind the scene is written fully in Node js. Express is the most famous JS framework :).

Express contains :
-> Complex routing
-> Easier handling of requests and responses,
-> middleware, server-side rendering, etc

Express makes it easier to organize our application into the MVS architecture and allows for rapid development of node.js applications.

#### install Postman :)

Postman allows us to do API testing but without a browser, eg. we can send requests and see what is the response and hence test stuff out.

NOTE: in a browser we can only do GET request whereas postman allows us to do everystuff.

we can set headers and so much more :)

### Setup Express

=) npm i express@4 : initialise npm and install the version 4 of express.

IMPORTANT NOTE: now, the configuration of Express is always made in app.js and project starting point is app.js and not index.js now.

```js
const express = require("express");

const app = express();
```

=) const app = express(); this is a common convention and what express function does it that it gives app lots of functionalities.

**how to setup server with express :**

=) app.listen(port, ()=> {}); for starting server.

routing is done differently in express.

=) app.get(url, (request, response)=> {}); for listening for GET requests.

=) response.status(status code).send('sending data'); : to pass status code and send response.

=) response.json( ); : to response with json. Ans this in reasponse header automatically sets the content type to Appliction/JSON. that we did manually previously.

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello from the server");
});
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
```

IMPORTANT NOTE : when we use app.get('url') is only trigerred when a get method is called for that given url.

=) app.post('/', (req, res)=>{}); for listening for post requests

=) res.send() : )

Hence sending request and stuff is super easy now :)

### RESTful API architecture :

it is the most use api architecture .

An api is what other applications can interface with.

**REST** : Representaional States Transfer is a way of making api in a structural and logical way. some principle are :

-> Seperate API into logical resources : the data that we want to share through the api must be seperated. Resourece is an object or representation of something which has data associated to it.
Any object that can be named can be a resource. eg. tours, users, reviews etc.

-> Expore structured, resource-based URL's : the url convention must be like this https://www.natours.com/reviews where addNewTour is the endpoint and there can be other endpoints like : /Tours, /reviews etc. Each of these endpoints does different things.

-> use HTTP methods(verbs) : NOTE: the endpoints cannot be actions like getReviews, setReviews etc and must be Strictrly nouns!!!(HTTP methods are : GET, POST etc.)

IMPORTANT NOTE: for actions like addNewTour etc, use HTTP methods and not url endpoints. eg. suppose we have /getTour and /addTour, in that case what we do is :
/addTour : POST request on endpoint /tours
/getTour : GET requst on endpoint /tours/7 : Here the endpoint name is tours only but we send the data that is to be added.
/updateTour : PUT request on endpoint /tours/7 : PUT is used to update entire data and hence entire data is sent
PATCH request on endpoint /tours/7 used to update a segment and hence only a segment of data is sent.
/deleteTour : DELETE request on endpoint /tours/7

in the above cases 7 is the data that is sent by client side to api.

NOTE : its common practice to use resource names/ endpoints in plural i.e in place of tour use tours.

QUESTION : what is CRUD opeations ?
ANSWER : Create Read Update Delete operations to apis.

there are some cases that cannot be resolved with good endpoint names eg. login etc but lets see that later.

we can combine resources too :

/getToursByUser : GET request on the endpoint /users/3/tours
/deleteToursByUsers : DELETE /users/3/tours/9

-> Send data as JSON(usually) : Json is a lightweight data sending format and is very easy to read and understand. Now we have data stored in json format, but we generally dont send it as it is : eg.

suppose user reqeust the url : https://www.natours.com/tours/5 and we have the following json data in the API database :

```json
{
    "id": 5,
    "tourName": "The Park Camper",
    "rating": "4.9",
    "guides": [
        {
            "name": "Steven Miller",
            "role": "Lead Guide"
        },
        {
            "name": "Lisa Brown",
            "role": "Tour Guide"
        }
    ]
}
```

we use the -> JSend format with status and data. Hence response will look like :

```json
{
    "status": "sucess",
    "data": {
        "id": 5,
        "tourName": "The Park Camper",
        "rating": "4.9",
        "guides": [
            {
                "name": "Steven Miller",
                "role": "Lead Guide"
            },
            {
                "name": "Lisa Brown",
                "role": "Tour Guide"
            }
        ]
    }
}
```

This binding of data into data object in json is called Enveloping.

-> API must be stateless : Stateless means that , All state is handled on the client. This means that each request must contain all the information necessary to process a certain request. The server should not have to remember previous requests.

eg. of states : loggedIn, currentPage , previousDataRequested.
hence : GET /tours/nextPage is not good practice since we dont have to remember which page we sent to a particular client at a time :)
instead we should send the particular page we want like : GET/tours/page/6 and hence its client that has to remember which page it was on.

QUESTION : what is statelessness and statefullness ?
ANSWER : these are 2 very important concepts in CS relating to if application keeps track of state or not.

#### NATOURS part1 :

check the code of NATOURS for more details and coding practices.

PRACTICE : when working on an application that can have multiple versions create api on app.get('/api/v1/tours'); so that exrerience for people using other versions is not ruined. Then we can branch off the api :)

NOTE: callback inside of a handler for HTTP requests is called rout handler in express eg. app.get('/app', routHandler(req, res))

-> when we recieve a post request, to read the data sent on the app.post((req, res)), we need to setup a **MIDDLEWARE**

=) app.use(express.json()); : this is setting up middleware, we will see what that is later.(Its basically just a function that can modify the request data before being processed. Lets see later)

=) request.body in the callback of app.post() for accessing the data sent using post request.(NOTE: json converted to object)

IMPORTANT NOTE : request.body an only be used after setting up the middleware.

-> in postman we can create a new collection to save all the reqeusts that we are making :)

-> in postman to actually send some data, simply in a post request, go to _body_ -> _raw_ -> select JSON(application/json) and then we can simulate sending data.

-> status code for a sucessfull POST request is 201

IMPORTANT NOTE : sometimes the POST data sent on server is only visible after the server is restarted, this is because like in case of Natours, readfile function is only called once at the starging of program and will only refer to the old file :). This wont be visible with nodemon, since nodemon restarts server everytime a change is made in the sever.

#### parameters in URL :

NOTE: we can define variables in url using _:varName_ eg. '/api/v1/tours/:id' here :id is the variable.
and then we can fetch the variables using =) request.params : this will return an object containing all the values of variabels in the url eg .

```js
app.get("/api/v1/tours/:id/:x/:y", (req, res) => {
    console.log(req.params);
});
```

in the above code, if a GET request is sent for /api/v1/tours/5/6/7, then req.params will be {id: '5', x: '6', y: '7'},

IMPORTANT NOTE: this has a catch tho, it now becomes compulsary to pass in 3 parameters in url for a GET request BUT we can make a variable optional too !!!.

-> '/api/v1/tours/:id/:x/:y?' : here y is optional. (in params, y will be undefined if client does not send its value in URL)

NOTE: the value of variables is stored in string format hence be ready to convert.

#### NATOURS part2 :

-> to update data, we can either patch or put :). we recieve json file from client and then upate changes in the json file in the server.

-> 204 is the status code fo sucessfull deletion meaning the data was deleted sucessfully

=) app.route('/api/v1/tours').get(getCallback).post(postCallback) : this is the neat and clean way of handling all the HTTP methods without the id. and then we can do this too.

=) app.route('/api/v1/tours/:id').patch(patchCallback).delete(deleteCallback).get(singleTourCallback) : for handilng the other HTTP methods with id's.

#### Middleware and request response cycle

QUESTION : what is the request response cycle ?
ANSWER :

-> when someone sends request, the express will make request and response objects.

-> These objects are processed in order to send an appropriate response.

-> Middleware are used for manipulation of data in case of resposne request cycle.

NOTE **MIDDLEWARE** in case of Express works between Recieving the request and sending the response.

IMPORTANT NOTE : we say that in express every thing is a middleware, even the routers !!!(the route handler functions.) Since they are executed between request and response.

QUESTION : what is routing and routes ?
ANSWER : Routes are the actual Endpoints of a URL in conjunction with the http method they are attatched to and Routing is how the server responds to different routes.

some example use of middle ware are :
-> Parsing body of response
-> logging
-> setting headers
-> router

**MIDDLEWARE STACK :** All the middleware collectively are called as Middlewaer stack and NOTE that the middleware are executed in middleware stack in the order they are mentioned in the code.

QUESTION : what do the middleware function effect ?
ANSWER : Middleware function work on the request and response objects. Hence the request and response object will go through every middleware function in sequence. (NOTE: every middleware function has a next() function that will pass the request and response onto the next middleware.)

This whole porocess can be thought of as a pipeline that the request and resposne are passed through.

IMPORTANT : the last handler is generally Router and then the data is finally sent to the client. Hence if we add a middleware after a app.route, it will not execute.(Which makes sense since in the routers there are controller functions that will send the response and hence the end of the request-response cycle)

THIS ENTIRE THING TOGETHER IS CALLED AS REQUEST RESPONSE CYCLE INCLUDEING :
-> revieving request
-> going through entire middleware stack
-> sending the request.

=) app.use() : is used to add middleware to middleware.stack.

=) app.use(express.json()) : adds the function express.json() to the middleware stack.

=) app.use((request, resposne, next)=>{ next();}) : to add any function to middleware stack. NOTE : next is the 3rd parameter in the middleware function.

NOTE: dont forget to call the next() function at the end of middleware function.

QUESTION : what is a playload ?
ANSWER : payload is data sent in request and response that can be of many format eg. in format of JSON.

IMPORTANT QUESTION : what is the use of express.json() function ?
ANSWER: the express.json() function is responsible for parsing the json payload of a request and putting it inside of =)request.body so that it can be accessed :)

So one of the usecases can be, incase we want to keep track of when a request is made, we can actually attatch a Middleware function that notes time of th eincoming request.

#### 3rd party Middlewares :

-> **Morgan** : =) npm i morgan

morgan is a middlewaer used for logging data =) app.use(morgan('dev')); we can pass in options other than dev like common, short, tiny etc.

on express website we can check the resources page and check the middleware that express recomends :)

#### Natours continue

-> status code 500 is for internal Server error(eg. missing files or data etc).

IMPORTANT -> in a real life project note that there are various routes for different things, eg. route for users, route for tours etc.

QUESTION : what is route in the code ?
ANSWER : by having different routes means to distribute code into different files and each file having its own instance of app variable. so we will create different route for different resources. eg. tours will have tourRouter, user will ahve userRouter.

=) const tourRouter = express.Router(); used for creating a middleware and seperate routers.
=) app.use('/api/v1/tours', tourRouter); takes in the url to work on and the name of router, this middleware is used to setup a router.

NOTE: now we dont need to specify the url in the .route()

IMPORTANT NOTE : hence the new syntax :

```js
const tourRouter = express.Router();
app.use("/api/v1/tours", tourRouter);

tourRouter
    .route("/") // NOTE how we dnt ened to specify the entire url :)
    .get(getAllTours)
    .post(createTour);

tourRouter.route("/:id").get(getAllTour).post(updateTour).delete(deleteTour);
```

NOTE when we make this type of seperate routes for resources, we say its a sub application.

-> NOTE: app.js file is generally used for middleware declarations and we actually

#### IMPORTANT : current project architecture :

-> app.js file will contain all the Middleware declarations where we add the middleware in sequence.
-> server.js will be responsible for starting the server
-> controllers folder will contain all the route handler functions(functions that handle various types of HTTP requests on different urls for different resources.)
-> route folder will contain different files for different resources that have the functiosn from controllers handling different types of HTTP requests.

#### **Param Middleware function:**

=) router.param('id', (req, res, next, val)=>{ code next();}) : param is a special type of middleware function that gets access to the value also incase there is a variable at th end of url eg. app/v1/tours/:id. In such scenario, val will be the value of the particular id passed in in url. NOTE: this can be used to check if the id passed in is valid for not. Incase there is no parameter passed in the URL, this middleware will still be executed.
(same can be handled normally using route(':id') also but this is kinda good to know.)

IMPORTANT QUESTION : why do the middleware functions return the response to be sent ?

```js
exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }
    next();
};
```

ANSWER : Its quiet simple to understand. NOTE that the middleware is a long chain and goes from one to another using next(). our API is ment to send only one response at a time. and how we write middleware is that it either returns response OR goes to next(). And this is valid since we dont want to go to other middleware incase the response is sent. HENCE NOTE : there is no point in returning the response, its just so that next() can be avoided.

```js
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
```

this is a kind of middleware that must hit next since it is not related to sending response.

IMPORTANT NOTE: so all in all we use that pattern so that once a response is sent by our api, the middleware pipe stops.

-> Status code 400 is for bad request from client

#### Chaining multiple middleware functions.

Imagine a sinario where the client sends some data with POST requset, and incase the data is valid we want to post and incase its invalid we want to send 400 status code. Given that function for posting and function for sending invalid are different. So how do we chain 2 functions under single .post ?

=) .post(function1, function2) : here incase there is post request, first function1 will be the middleware function that is called and then function2 will be the next one incase function1 does not send a resposne.

NOTE: function1 will hit next() if it is done and if its not sending any resposne.

#### Serving static files :

So inorder to make files available to client if they look for it using url, we actually have to handle every type of URL requests right. BUT do we really need to perform routing for static files too?

QUESTION : what are static files ?
ANSWER : static files are resources like images, HTML etc that wont be chenged by the server and need to be sent as they are.

=) app.use(express.static('folder we want to make accessible.')) : this way we can make files of a folder accessible without having to route EG.

suppose we have a folder called data containing file called index.html. Now in that case app.use(express.static('/data')) will make data folder accessible and then the user can access the index.html by using : url/index.html !!!

NOTE: Hence the content of the folder mentioned in static will be accessible directly.

incase there is a folder inside of folder inside of folder, we can access simply by url/folder1/folder2/folder3/file1 :).

-> hence we have a public folder and its data is actually public and static.

IMPORTANT QUESTION : what is it that seperates app.js and server.js folder ?
ANSWER : app.js is the file where express has complete jurisdiction and where we immport express. Server.js is here Node.js has jurisdiction and we import app.js :)

<hr>

#### Environment Valiables :

NOTE : Environment variables are part of NODE.js and not express.

Environment of a program determines the current state of program. eg. by default it is in development.

=) console.log(app.get('env')) : will actually print the current environment i.e. development.

NOTE : env is set up by express actually to development.

=) console.log(process.env) : this will print out all the current environment valiables.

some examples of environment variables are :
-> PWD : for current directory location.
-> npm_config_editor : version of editor.
-> HOME : home folder location.
etc.

these are the variables used by NODE.js and are globally available.

IMPORTANT : NODE_ENV

It is a convention to make an environment variable called NODE_ENV that tells us weather the program is in development state or production state.

QUESTION : why would we want to know the current state of program ?
ANSWER : we can toggle console logging based on if we are developing or in production etc.

in the console =) NODE_ENV=development nodemon server.js : to define environment valiable and set it to development when server starts.

IMPORTANT NOTE :

```json
    "start:prod": "set NODE_ENV=production&&nodemon server.js",
```

use this formant in windows for it to work, -> use set and replace the space with && so the seccond part also executes

NOTE: we can define various environment variables eg. : x=12 y=12 nodemon server.js

and when we then send the product for production. we set the NODE_ENV to production.

<hr>

#### config.env and dotenv

we create =)config.env file in the root folder of project and

```env
NODE_ENV=development
PORT=3000
USERNAME=preetam
PASSWORD=123456
```

so how do we read these files and add the variables ?
=) npm i dotenv : =) dotenv.config({ path: './config.env' }); : we can import dotenv and then simply mention the file name to add the enviroment variables to NODE from config.env

now we can write logic such that the logger module is only used in development phase.

IMPORTANT NOTE : make sure that the order of requiring a module that used environment variable and actually adding config.env file are correct. Generally add the environment variable at the top.

IMPORTANT QUESTION : okay but how will we change the value of process.env.NODE_ENV from 'development' to 'production' ?
ANSWER : we change the start script in package.json :

```json

"scripts" : {
    "start:dev" : "nodemon server.js",
    "start:prod" :  " NODE_ENV=production nodemon server.js
}
```

so we change the value from development to production this way :)

<hr>

#### Setting up ES LINT

ES lint is a program is a program that finds bad coding practices and potential bugs :) and it is very very configurable.

below is the .eslintrc.json file

```json
{
    "extends": ["airbnb", "prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        "spaced-comment": "off",
        "no-console": "warn",
        "consistent-return": "off",
        "func-names": "off",
        "object-shorthand": "off",
        "no-process-exit": "off",
        "no-param-reassign": "off",
        "no-return-await": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "prefer-destructuring": ["error", { "object": true, "array": false }],
        "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }]
    }
}
```

=) npm install eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev:

-> eslint
-> prettier
-> eslint-config-prettier : to allow prettier to format instead of prettier
-> eslint-plugin-prettier : to allow eslint to show formatting errors
-> eslitn-config-airbnb : is for javascript formatiing and stuff in eslint
-> eslint-config-node : mistakes in node and stuff
-> eslint-plugin-import & eslint-plugin-jsx-a11y & eslint-plugin-react : are for airbnb to work.

these are all essential in all the projects that we work in.

IMPORTANTNOTE: there might be this error when working with Async Await :Async functions are not supported until Node.js 7.6.0. The configured version range is '>=6.0.0'.eslintnode/no-unsupported-features/es-syntax
in that case, in the package.json make the following :

```json
"engines" : {
    "node": ">=10.0.0"
}
```

<hr>

## MONGO DB

-> mongo db is a database also called : NoSQL database.(other more traditional db is Relational database)

-> In Mongo DB(or NoSQL in general), There are Collections(Tables) and Collections have Documents(Rows).

NOTE: eg. each Document will contain a single entity. eg. : collections(Users) has a Document(User).

-> MongoDB is a document database with scalability and flexibility that we want with the querying and indexing that we need.

QUESTION : what are some features of MONGODB?
ANSWER :
-> Document Based : Mongo DB stored data in documents(field-value pairs data structurs, NoSQL)
-> Scalable: Very easy to distribute data across multiple machines as users and amount of data grows.
-> Flexible : No document data schema required, so each document can have different number of type and fields.
-> Performant : Embeded data models, indexing, sharding, flexible documents(Yadi yada)
-> Free and Open source.

#### Documents Structure :

```json

{
    "_id": ObjectID('929439483943'),
    "title":"Rockets, Cars and MongoDB",
    "author": "Elon Musk",
}
```

Its in BSON data format

QUESTION what is BSON data format ?
ANSWER : BSON is similar to JSON except for one catch, although all the keys are strings, The values can have types, eg. int, char , string, object etc. Hence we say data values are typed.

-> Individulal key value pair is called Fields.

QUESTION : what is **EMBEDDING/DENORMALIZING** in MongoDb?
ANSWER : it is the process of storing one document inside of another document !!! which is not posible in relational database(we cant store one table inside another)

```json
{
    "_id": ObjectID('452523523523525235'),
    "comments":[
        {"author": "preetam", "text": "preetam is the best"},
        {"author": "sahil", "text": "sahil is the best"},
    ]
}
```

in the above example there is embedding of documents inside of documents.

NOTE: SOME facts about BSON :
-> max size of a bson documents can be 16MB.
-> each Document gets automatically generated "\_id" attribute.

#### NOTE:

No Need to Install MongoDB Locally
You don't need to install MongoDB on your computer
There have been some problems with installing MongoDB locally, because things change quite frequently.

The truth is, you don't need to install MongoDB in order to go through this course and to build most apps.

You can just use a hosted MongoDB instance using a service called Atlas, as I will teach you in Lecture 80.

#### MONGO DB compass :

there are many ways to using mongodb and we can do it in terminal and stuff BUT

MONGO DB HAS A GUI BASED APP CALLED COMPASS!!!!!!!!!!!! very much useful.

In mongo db also we have CRUD opeartions

QUESTION : why did we not install mongoDB in our computer ?
ANSWER : because we will be using remote hosted databases with ATLAS and not install mongo db in our own device.

#### Mongo DB ATLAS :

it is a service by Mongo db for hosting online databases, Key things to remember are :

-> Clusters are instances of your database.(many databases in single cluster)
-> Default setup a project cluster in ATLAS and dont do too much stuff just go with the flow.
-> after creating a database cluster, just click on connect > and setup connection to either project, compass or shell.

IMPORTANT NOTE : store the value of username and password in config.env file.

To connect to compas then , copy the string provided and just go to compass app and paste the string. Also go to authentication and place the passowrd.

-> By default, there are some default databases admin, config, local etc.

-> just make a database with your project name and start adding the Collectsion we want like : tours, users etc.

and Just like that we can CRUD(Create, Update, Delete, Request)

NOTE: we can whitelist ip that can access the database in atlas site by going to security> ip whitelist and adding IP address.

-> IMPORTANT NOTE when saving password, make sure if it has special characters use percent encoding :)

### MONGOOSE :

QUESTION : how do we connect database to node.js project?
ANSWER : we copy the string from atlas and create a new Environment Variable in config.env called DATABASE, the string can be disected like this :

```
mongodb+srv://preetamsingh:<password>@cluster0.x6mcciu.mongodb.net/?retryWrites=true&w=majority
```

IMPORTANT NOTE : here we need to modify some stuff in this string,
-> make password to PASSWORD so that it pops
-> place the name of database between / and ? making the string :

```
mongodb+srv://preetamsingh:<PASSWORD>@cluster0.x6mcciu.mongodb.net/natours?retryWrites=true&w=majority
```

NOTE : Now we need a MONGO DB driver that allows node code to interact with mongo db.

We use MONGOOSE :) and it adds a couple of features on top of other native drivers.

NOTE : used mongoose 5 in this project.

QUESTION : what is to be done with password with special characters ?
ANSWER : p@ssw0rd'9'! becomes p%40ssw0rd%279%27%21

```
Character	Encoding
':'	         %3A
'/'	         %2F
'?'	         %3F
'#'	         %23
'['	         %5B
']'	         %5D
'@'	         %40
'!'	         %21
'$'	         %24
'&'	         %26
"'"	         %27
'('	         %28
')'	         %29
'*'	         %2A
'+'	         %2B
','	         %2C
';'	         %3B
'='	         %3D
'%'	         %25
' '	         %20 or +
'^'          %5E
```

NOTE: hence dfgert56%^ becomes : dfgert56%25%5E

### All bout mongoose

-> after importing mongoose, we modify the url string for atlas such that we replace < PASSWORD> with actual password.

=) mongoose.connect(URLstring, {options}) : we pass inn the string and also some options, Optiosn are generally just to avoid deprication warnings.

NOTE: this returns a promise that can be handled using .then

```js
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(con.connections);
        console.log("DB connection sucessful!");
    });
```

NOTE: the then hendler gets con attribute that can be used.

-> Mongoose is an Object Data Modeling(ODM) library for MongoDB and Node.js, a higher level of abstraction.
-> Mongoose allows for rapid and simple development of mongoDB database interactions
-> Features: schemas to model data and relationships, easy data validation, simple query API, middleware etc.

-> Mongoose schema: where we model our data, by describing the structure of data, default values and validation;
-> Mongoose model : a wrapper for schema, providing an interface to database for crud operations.

#### Mongoose models

-> Mongoose uses models to create data instances just like classes in js.

```js
=)const tourSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
        trim: true // only available on strings

    },
    rating:{
        type: Number,
        default: 4.5,
        required: false
    },
    price: {
        type: Number,
        required: true,
    }
  });
```

above is how we define a schema in mongoose

NOTE: trim will remove all whitespace from end and begining and only works on string types.

IMPORTANT NOTE: when we save dates here in Date type fields, mongo can understand formats and stuff. eg :

```js
currentDate{
    type: Date,
    default: '10-03-03, 10:30"
}
```

in the above code mongo can read the date :) given the type is set to Date.

=) const Tour = mongoose.model('ModelName', schema); : model name is generally same as the variable name.

NOTE: model names use pascal casing.

now this module can be used to create documents :)

-> A document is created using the contructor anology :

```js
const testTour = new Tour({
    name: "The Forest Hiker",
    rating: 4.7,
    price: 497,
});
```

and then this can be saved using =) testTour.save()

-> testTour.save() returns a promise with the document that gets saved in database as its parameter.

```js
testTour
    .save()
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.log("error");
    });
```

QUESTION: what happens after execution of this code in mongodb?
ANSWER: in mongoDB following steps happen :

-> there will be a collection in our database with the same name as the one we gave to our model BUT in plural and small eg. for mongoose.model('Tour', schema), the collection will be called tours.

-> new document will be created in the newly made collection with the specified fields in the constructor of model.

IMPORTANT NOTE: if we run parcel twice there will be error since it will try to save data twice !!!! and that is problematic.

QUESTION : so in bigger picture how will mongoose be used for creating new tours ?
ANSWER: when client enters a new tour, mongoose will call a special function that will use the model to create a new document in the collection. The code to add new document will only be executed when needed.

#### MVC : Backend architecture :

Model View Controller architecture.

NOTE: on internet, there are various implementations so dont sweat.

-> Model : Business logic
-> Controller : Application Logic
-> View : Presentation logic(in backend, it contains the website we will send back to the client)

here is the flow :

-> the request will be recieved by Router that will call one of the functions in CONTROLLER.
-> based ont he request type, CONTROLLER will interact with either MODEL or VIEW.
eg. to retrieve data from databae, CONTROLLER interacts with MODEL
and to retrieve webpage or make changes to webpage, CONTROLLER interacts with VIEW

NOTE: this explains why we placed request handler functions inside controller function.

QUESTION : what is the difference between Application logic and Business logic ?
ANSWER : The difference is a bit opinionated :
-> Application Logic is code that is only concerned about the applicatoin of implementation and not the underlying business problem. eg. showing and selling tours. Includes concern about managing request and responses. Hence application logic looks after the app's more technical aspects. Also acts like a bridge betwen model and view layers.

-> Business logic is code that actually solvers the business problem we set to solve. Directly related to how business works and business needs. In context to Natours app :
a.) Creating new tours in database
b.) Checking if user's password is correct
c.) validdating user input data;
d.) ensuring only users who bought tour can review it.

IMPORTANT NOTE: It is almost very difficult to reperate Application and business logic and hence we follow the following convention :
-> FAT MODELS/THIN CONTROLLER : offload as much logic as possible into the models and keep the controllers as simple and lean as possible.

### CRUD operations using MONGO :

#### Creating documents :

we are already familiar with :

```js
const newTour = new Tour({ data });
newTour.save();
```

easier way is :

=) Tour.create({data}) : saves the data and returns a promise.
=) Tour.create([ array of objects to store]) : hence an array of data can be stored into database by passing an array.

hence in a real project we simply do this :

```js
exports.createTour = async (req, res) => {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
        status: "sucess",
        data: {
            tour: newTour,
        },
    });
};
```

NOTE : in ths above, we are simply not checking if the request data is correct since that will be handled my mongoDB since it will check the schema and based on that work out.

ALSO the above code will return into Router :)

#### Reading documents :

=) Tour.find() : can be used to find NOTE : when we call find() without any arguments, then it returns all the documents in tour collection. it will return a promise and hence we need to deal with that.

NOTE: the function returns a JS object that contains all the data :)

=) Tour.findById() : used to find data by its id

=) Tour.findOne({\_id : 4151514323}) : NOTE: in this one we can pass inn the filter object and the object in the database that matches the parameters that are in the filter id will be selected and returned.

#### Updading documents :

=) Tour.findByIdAndUpdate(req.param.id, req.body, {
new: true
runValidators : true
});
: used to update data based on id and setting new : true in options will make this function return the newly updated document.
first parameter is the id of element to update and 2nd one is the data that will replace.

NOTE: runValidators is very important since it will check the data to put into updation has proper datatype.

All the options and documentations can be checked on mongoose website :)

#### Deleting documents :

=)Tour.deleteOne({\_id : 4151514323}) : this can be used to delete :)
=) Tour.findByIdAndDelete(req.params.id);
=) Tour.deleteMany() : deletes the entire database clean :)

NOTE: no data is sent to client incase of deletion.

#### Layout of routing with Curd :

```js
// tourRouter.js
const express = require("express");
const tourController = require("./../controllers/tourController"); // importing all routing functions
const router = express.Router();

router
    .route("/")
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route("/:id")
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router; // exportin for use by app.js
```

```js
// tourController
const Tour = require("./../models/tourModel");

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: "sucess",
            data: {
                tour: newTour,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();

        res.status(200).json({
            status: "success",
            results: tours.length,
            data: {
                tours,
            },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

exports.getTour = async (req, res) => {
    try {
        const tour = Tour.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.param.id, req.body, {
            new: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                tour,
            },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

exports.deleteTour = async (req, res) => {
    try {
        Tour.deleteOne({ id: req.param.id });
        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};
```

IMPORTANT NOTE: always make elaborate models for mongoose.

```js
model = new mongoose.schema({
    images: [String],
});
```

-> the above depicts how we can actually store an array into a model in mongoose.

#### Uploading data onto the mongodb server :

NOTE: the initial data we have will always be in a JSON file and then before client can access it using the API, it needs to be uploaded onto the database first.

QUESTION: so how do we upload it onto the online server?
ANSWER : we make a small script that connnects to the Atlas and then we unload the data from the JSON file onto the server.

```js
cosnt fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({path: './config.env'});

const DB = process.eng.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSOWRD);

mongoose.connect(DB, {
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndmodify:false
}).then(()=> console.log('DB connection sucessful!'));

// READ THE JSON FILE
const tours = JSON.parse(fs.reqdFileSync('tours-simple.json', 'utf-8'));

// IMPORT DATA INTO DB
const importData = async()=>{
    try{
        await Tour.create(tours);
        console.log('Data sucessfully loaded!');
    }catch(err){
        console.log(err);
    }
};

// DELETE DATA FROM THE COLLECTION
const deleteData = async()=>{
    try{
        await Tour.deleteMany();
        console.log('Database sucessfully cleaned !');
    }catch(err){
        console.log(err);
    }
}

```

the above script can :
-> unload JSON into the database
-> wipe the entire database
-> should only be used in the entirety of universe.

<hr>

#### process.argv

NOTE: =)process.argv is used to access the command line parameters that are passed while running an application using command line

QUESTION : elaborate process.argv
ANSWER : suppose on console we write ->node dev-data/preetam.js
and with that our code has console.log(process.argv) the result will be : [ '/usr/local/bin/node', ' /users/preetam/dir/dev-data/preetam.js'], NOTE its an array containing the location of node and the file we run respectively. BUT what if we pass in extra arguments ?

-> node dev-data/preetam.js --hello : this will give value of process.argv = [ '/usr/local/bin/node', ' /users/preetam/dir/dev-data/preetam.js', '--hello']

IMPORTANT NOTE : hence its used to access the command line parameters while running programs (just like String[] args in java).

QUESTION : how can this be useful?
ANSWER : we can access these additional variables passed while running using command line and hence modify the program to run in a different manner.

EG. when running the script that we made above, we can specify that

```js
if (process.argv[2] === "--delete") {
    deleteData();
} else if (process.argv[2] === "--import") {
    importData();
}
```

hence in the script which of the delete or upload will be called will be decided by the parameter we pass :)

=) process.exit() : its the aggressive way of ending an application(since node applications sometime keep running while listening for callbacks.)

<hr>

#### Filtering the data :

-> Filtering is used by the client to filter api data by passing certain parameters into the URL when requesting.

the format is : url/api/v1/tours?duration=5&difficulty=easy

NOTE the above can be read as GET tours and after ? are parameters eg. with duration of 5 days and easy difficulty.

QUESTION : but how do we read these parameters?
ANSWER : express got us covered !!!!!!!!!!!! with req.query

=) req.query : inside of a controller(handler function) we can use request.query to acess all the queries in object format hence for : url/api/v1/tours?duration=5&difficulty=easy , console.log(req.query); will return { duration : "5", difficulty : "easy"}.

and then we can simply use =) find() method from mongoose to search the desired results.

BUT mongoose has some strange functions within too eg. we can look for the url/api/v1/tours?duration=5&difficulty=easy using :

=) Tour.find().where('duration').equals(5).where('difficulty').equals('easy');

and this is kinda confusing :) so i would rather switch to normal find() method.

there is also =)lt() =) lte() lessthan, lessthan equals etc.

NOTE: but the best way to find is acually using :

```js
tour = await Tour.find(req.query);
```

this willl automatically store an array containing the tours that have the particular query.
and NOTE that if the req.query is empty, then the entire collection will be sent :)

BUT THERE IS AN ISSUE !!!

although this is good for normal filtering, but what it gets complex.

IMPORTANT QUESTION : what could be the issue?
ANSWER : note that req.query will break the entirety of the query into key value pairs for the object BUT what if the user pases some data not a part of the component?
eg. url/api/v1/tours?duration=5&difficulty=easy&page=2 : in this query we are requesting a page=2, page is not a property in the Tour hence the query of find will return an empty array.

IMPORTANT NOTE: hence we need to figure out which of the parameters in the query are for filtering the tour and which are for other stuff !!!!

-> These parameters in the query other than the filters parameters are called special fields.

QUESTION : how can we remove the special fields from url/api/v1/tours?duration=5&difficulty=easy&page=2 ?
ANSWER : check out the following :

```js
const queryObj = { ...req.query }; // creating copy of the object.
const excludedFields = ["page", "sort", "limit", "fields"]; // finding the fields to be removed from the object
excludedFields.forEach((el) => delete queryObj[el]); // removing with delete operator
```

IMPORTANT =) delete object[ what is to be deleted] : deletes an entry from within an object !!!!

at the end of above operation, the excludedFields will be removed :)

<hr>

#### Working of mongoose functions :

Here is what is going on when we use the mongoose functions :

-> functions like Tour.find() or Tour.delete() etc all return a Query object
-> Query object is an object in mongoose that has many functions and even the functions like equals(), gt() etc.
-> we are able to chan these methods since each of these methods returns another Query.
-> The Query object contains the information regarding the data operation that is to be done on the database.
-> The Query when built after the chained methods, is awaited (promise) and goes to the database(like an sql query)
-> the database performs the operation like get, update etc.

HENCE we are making a query to database but in a more understandable way.

QUESTION : how does understanding the Query object in mongoose help ?
ANSWER: this provides us with better way of making Query to the database instead of just chaining blindly.
-> we can simply store Tour.find() in suppose a variable and perfrom all types of opeations we want on the query
-> when we are done with the Query then only we await
-> this is since awaiting the query is what marks the end of query building.

<hr>

#### Advanced filtering :

Do filters only comprise of equals to ( = ) ? NOpe, they comprisse of other stuff too like <= >= < > etc.

so what does a query with such operations look like. ?

QUESTION : SO how do we write the Query in url to include other symbols ?
ANSWER : like :
-> duration[ gte]=4&difficulty[ gt]6

so we bind the non equals to opeation within square braces.

QUESTION : but using this convention, what will the query object look like ?
ANSWER : for difficulty=easy&duration[ gte]=5, the query object will look like : {difficulty : 'easy', duration: {gte : '5'}}

HENCE this format is kinda readable
-> URL : difficulty=easy&duration[ gte]=5
-> req.query : {difficulty : 'easy', duration: {gte : '5'}}

QUESTION : so what do we need to do so as to make this req.query mongoose compatible ?
ANSWER : we just need to add a $ before gte, gt, lt, lte etc.
hence we need to make {difficulty : 'easy', duration: {gte : '5'}} into {difficulty : 'easy', duration: {$gte : '5'}}

Following is how we do this convertion of adding the dollar sign :

```js
let queryObj = { ...req.query };
const excludedFields = ["page", "sort", "limit", "fields"];
excludedFields.forEach((el) => delete queryObj[el]);

const queryStr = JSON.stringify(queryObj);
const addDollar = ["gte", "gt", "lte", "lt"];
addDollar.forEach((ele) => {
    queryStr = queryStr.replaceAll(ele, $ + ele); // adding $
});
let finalQuery = JSON.parse(queryStr);

const query = Tour.find(finalQuery); // finalizing the query object.

const tours = await query; // passing the query onto the database.
```

NOTE: now after addin gthe dollar sign, now the mongoose will even identify the other opeations !!! which is awesome.

In the above code some observations are :

-> we are building the Query step by step and then finally calling the result into tours.
-> replace opeation is performed after convering the object to string and then the string is made back into object.

<hr>

#### Sorting in mongoose :

sorting of API data is very common eg. data could be sorted based on price or duration etc.

-> A URL asking for sorted data looks like : url/api/v1/tours?sort=price
-> the above is interpreted as, dort data based on price.

QUESTION : so how is sort implemented ?
ANSWER : NOTE; that that sort is done after all the other filtering has happened in the query. Then we can use :
=) query.sort(req.query.sort) : and that will add sorting to the query object NOTE: we are passing the parameter based on which the sorting is to be done.
=) query.sort('parameter name')

IMPORTANT QUESTION : please explain how we are chaining the query together.
ANSWER : Here are the points :
-> request.query gives us an empty query object that currently has no opeation in it.
-> we use the find(), delete(), sort(), equals(), lt() etc methods and these methods themselves return query object
-> every time we call these Query methods, the query updates and in the end we attatch sort()
-> hence in a Async function, the query is only sent off when we await the query after adding all the operations using the methods.

NOTE: we can sort in descending order by adding a - :) url/api/v1/tours?sort=-price

QUESTION : what happens when two items have same price(or the priority)? what if we want a second field ?
ANSWER : its ez :).
=) query.sort('price ratingsAverage') : so we pass inn two fields into the function of sort in order to achieve it

AND

the url will look like this : url/api/v1/tours?sort=price,ratingsAverage

NOTE: SO when we say req.query.sort = 'price,ratingsAverage'.

```js
// for url url/api/v1/tours?sort=price,ratingsAverage
console.log(req.query.sort); // will log : "price,ratingsAverage"
const sortBy = req.query.sort.split(,).join(' ');
query = query.sort(sortBy);
```

-> in the abvoe code we split the string with comma and join the array we get with space in between.

<hr>

#### limiting fields using mongoose :

-> Many a times, we dont want to send all the fields that our model has as resposne
-> hence we limit the fields!!!

NOTE: the url for limiting fields looks like : url/api/v1/tours?fields=name,duration,difficulty,price

for this we use : =) query.select('field1 field2 field3...');

```js
if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
} else {
    query = query.select("-__V");
}
```

QUESTION : how does - work in select?
ANSWER :
-> query.select('-field1') means all fields except field.
-> query.select('field1') meand only field1.

NOTE: HENCE pass a fields=-name,-duration means all fields except name and duration :)

IMPORTANT NOTE: mongo db automatically generates a few additional fields int he component eg **V, and if we dont want to send it to the client, we write query.select("-**V"); in order to not include it.

we can find these extra non required parameters by sending a get request :)

<hr>

#### select in schema :

QUESTION: what if we want a property unselectable when called using query in mongoose ? eg. stuff that should not be sent to the user ?
ANSWER : int he schema, set select : false

```js
const tourSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        select : false
    }
}
```

Hence this is how we permanently hide any property :)

<hr>

#### Pagination in mongoose :

-> Pagination is when api has a lot of data and hence the dta is divided into pages so that client can ask for any particular page at a time.

NOTE: the url with page will look like : url/api/v1/tours?page=2&limit=50

here :
-> page is the page number
-> limit is the number of items per page

NOTE: the client decides the number of documents per page and the page number.

```js
const page = req.query.page * 1 || 1; // convert string to number and default value of 1
const limit = req.query.limit * 1 || 100;
const skip = (page - 1) * limit; // since for page 3 we start from 21 :)
query = query.skip(skip).limit(limit);
```

=) query.skip(number) : is used to skip number documents.
=) query.limit(limit) : is used to limit the number of items that are selected.

QUESTION : what is going on in the code ?
ANSWER : here are the steps :
-> we setup the page and limit with default values and converting the string to number.
-> we need to find number of elements to be skipped inorder to access the page so if page number is 3 , we want elements starting from 21 hence we need to skip 20.(hence the formula : ((page-1)\*limit))
-> now that select operation starts from the desired page start, we want to define an end
-> limit will limit the number of items that are selected and hence we simply pass inn the limit.

NOTE: So we find the start poitn using skip and then select a limited elements using limit to select elements in a page :)

Its also a good practice to handle the case when user selects a page that is not present and out of bounds.

QUESTION : what is handy way of finding out of bounds page number ?
ANSWER: =)await Tour.countDocuments(); returns the number of documents that are in the model. And then we can simply use this logic :

```js
const numTours = await Tour.createDocuments();
if (skip > numTours) throw new Error("this page does not exist");
```

<hr>

##### Alias routes :)

Sometimes we provide additional routes for some additional data filters. Eg. in a tour API, a route for top 5 tours.
etc.

eg. : URL/api/v1/tours?limit=5&sort=ratingsAverage. can be aliased for URL/api/v1/tours?bestFive

NOTE: for this we create a new route all in all :

```js
// in the router
router
    .route("/top-5-cheap")
    .get(tourController.aliasTopTours, tourController.getAllTours);
```

```js
// in tour controller
exports.aliasTopTours = (req, res, next) = {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
};
```

QUESTION : what happened above ?
ANSWER : following :
-> we made a middleware function called aliasTopTours that force sets the limit sort and fields in order to perform the top 5 tours
-> when the route is '/top-5-cheap', first the request will be modified to add this stuff in the query object and it would simulate as if the url included these fields.
-> then the getAllTours gets called which will work on the parameters as we have specified the filtering and all the other operations.

<hr>

#### Making the code more modular :

-> its much better to make a class that takes query and queryString as constructor parameters and then functions like filter, sort, pagination etc.
-> this will allow us to use the class in multiple controllers that have the same opeations being performed on the query:)

<hr>

#### Mongo DB aggrigation pipeline (MATCHING AND GROUPING ):)

-> Aggrigation pipeline is a concept like middleware in express but for all the documents for a collection go through so that they can be processed step by step.(NOTE: we can somewhat compare it to queries that we execute in dbms)

-> eg. finding max min values and stuff and make track of data flwoing inn.

NOTE: although Aggrigatin Pipline is a feature of Mongo DB. Mongoose gives us options to work on it in mongoose.

=) Tour.aggregate([ array of AP stages]) :

```js
exports.getTourStats = async (req, res){
    try{
        const stats = await Tour.aggregate([
            {
                $match: { ratingsAverage : { $gte: 4.5}}
            },
            {
                $group:{
                    _id: null,
                    numTours: { $sum: 1},
                    numRatings : { $sum: '$ratingsQuantity'},
                    avgRating : { $avg: '$ratingsAverage'},
                    avgPrice : { $avg: '$price'},
                    minPrice: { $min: '$price'},
                    maxPrice: { $max: '$price'},
                }
            },
            {
                $sort:{ avgPrice: 1}
            }
        ]);
        res.status(200).json({
            status: 'success',
            data:{
                stats
            }
        })
    }
}
```

IMPORTANT : In the above code snippet following is happening :

-> the =) aggrigate() method takes an array, thaty comprises of objects

-> these objects are actually Aggrigate pipeline stages

-> Every document in the databse will go through each stages and will be filtered, sorted, observed etc in these stages.

-> There are many stages that we can use but in the above ones

-> $match will actually only let the documents that satisfy the condition , pass through

NOTE: the operators in MongoDb start with $(dollar sign) and eg : ratings : { $gte : 25} means ratings greater than 25.

these can be checked on the documentation website

-> after limiting the number of documents using match stage, in $group stage the documents are grouped based on the parameter mentioned in the _id field Eg : we can say : _id: { $toUpper: '$difficulty'}, and there will be 3 sets of data based on difficulty easy, medium, difficult.
-> for easy : every document will pass and update the mentioned parameters numTours, numRatings etc. and in the end the stats when logged after awaiting will show.

```json
{
    "stats": [
        {
            "_id": "DIFFICULT",
            "numTours": 12,
            "numRatings": 70,
            "avgRating": 40,
            "avgPrice": 4.8,
            "minPrice": 12,
            "maxPrice": 12
        },
        {
            "_id": "EASY",
            "numTours": 12,
            "numRatings": 70,
            "avgRating": 40,
            "avgPrice": 4.8,
            "minPrice": 12,
            "maxPrice": 12
        },
        {
            "_id": "MEDIUM",
            "numTours": 12,
            "numRatings": 70,
            "avgRating": 40,
            "avgPrice": 4.8,
            "minPrice": 12,
            "maxPrice": 12
        }
    ]
}
```

NOTE: this is very powerful tool for analytics
also NOTE: writing numTours : $sum : 1 will actually count number of documents that passed through this pipeline.

-> finally $sort : {avgPrice: 1}, will sort the result output of the above code in sorted order based on avgPrice in ascending order(because of 1 as avgPrice).

NOTE: hence the result will be generated based on the documents sotred and after all the documents pass through the pipelines.

IMPORTANT NOTE: this looks quiet overwhelming but, just memorize it and somewhat see the oepartors :) Cheers

The aggrigate method returns an Aggrigate object that is then awaited to get the result of the pipeline stages.

QUESTION : can we repeat a stage ?
ANSWER : sure suppose, we want to only show the data for group 'EASY' in that case at the end, we can add :

```js
{
    $match: {
        _id: {
            $ne: "EASY";
        }
    }
}
```

The final aggrigate code :

```js
exports.getTourStats = catchAsync(async (req, res, next) => {
    const stats = await Tour.aggregate([
        {
            $match: { ratingsAverage: { $gte: 4.5 } },
        },
        {
            $group: {
                _id: { $toUpper: "$difficulty" },
                numTours: { $sum: 1 },
                numRatings: { $sum: "$ratingsQuantity" },
                avgRating: { $avg: "$ratingsAverage" },
                avgPrice: { $avg: "$price" },
                minPrice: { $min: "$price" },
                maxPrice: { $max: "$price" },
            },
        },
        {
            $sort: { avgPrice: 1 },
        },
        // {
        //   $match: { _id: { $ne: 'EASY' } }
        // }
    ]);

    res.status(200).json({
        status: "success",
        data: {
            stats,
        },
    });
});
```

<hr>

#### Aggrigation Pipeline Unwinding and Projecting

QUESTION : What are some uses of Aggrigation Pipeline ?
ANSWER : Aggrigation pipeline helps us sometimes in sorving various business problems. Eg. A tour company has to find the month that sees max number of visitors for touring from the documents. and so onn.

lets look at some additional AP stages :

imagine a situation where we have :

```js
  {
    "startLocation": {
      "coordinates": [-80.185942, 25.774772],
      "address": "301 Biscayne Blvd, Miami, FL 33132, USA"
    },
    "images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
    "startDates": [
      "2021-06-19T09:00:00.000Z",
      "2021-07-20T09:00:00.000Z",
      "2021-08-18T09:00:00.000Z"
    ],

  }
```

so the above document has field startDates that has multivalued attribute called startDates.

QUESTION : what if we wanted every start date to have a seperate document ?
ANSWER : we use $unwind stage.

```js
const plan = await Tour.aggregate([
    {
        $unwind: "$startDates",
    },
]);
```

NOTE: what above code will do is, in plan, it will give us 3 seperate documents for every start date :)

PRACTICE : check the documentatoin for Operators for Aggregations Operators that work on months and so onnn based on the requirements.

=) $addFields { fieldName : value} : is a stage for adding an attribute to every document passing.

=) $project :{ fieldName : 0} : is used to hide certain fields inside all passing docuemnts. EG. if we say \_id=0 then every docuement passing will no longer have \_id field. And we can get those fields back using the value 1.

The stuff to notice is that, the data passes through and is modified on the way by every step.
This is kinda how operations are performend on data :)

=) $limit : number : this field is used just like the limit in the query and will only forward the first few(number) occuring elements through.

QUESTION : in natours find the 5 months that have the most number of tours happening.
ANSWER :

the below solves that business problem

```js
exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
    const year = req.params.year * 1; // 2021

    const plan = await Tour.aggregate([
        {
            $unwind: "$startDates",
        },
        {
            $match: {
                startDates: {
                    $gte: new Date(`${year}-01-01`),
                    $lte: new Date(`${year}-12-31`),
                },
            },
        },
        {
            $group: {
                _id: { $month: "$startDates" }, // $month : is a apecial OPerator for AP that is used for months in dates.
                numTourStarts: { $sum: 1 },
                tours: { $push: "$name" },
            },
        },
        {
            $addFields: { month: "$_id" },
        },
        {
            $project: {
                _id: 0,
            },
        },
        {
            $sort: { numTourStarts: -1 },
        },
        {
            $limit: 12,
        },
    ]);

    res.status(200).json({
        status: "success",
        data: {
            plan,
        },
    });
});
```

<hr>

#### Virtual properties in mongoose :

Lets step back a little and go back to when we made models.

=) tourSchema.virtual('durationWeeks').get(function(){
return this.duration / 7;
});

This is how we work with virual properties.
QUESTION : What is a virtual property ?
ANSWER : a property whose value does not persist in database is derived from value of others and when theose other properties dont exist currently. Eg. in schema, we dont know what value will be holded and hence we have no idea about what a value of virtual property should be since it depends on one fo those fileds like in above example.

AND : for enabling the virtual properties we need to pass inn options that allow virtual properties.

```js
const tourSchema = new mongoose.Schema({
    scema structure;
},{
    toJSON: { virtuals: true} // making virtual properties to be part of output whenever data is sent.
});
```

HENCE : -> after defining the schema, we use the tourSchema.virtual('name of virtual prop').get(function)

IMPORTANT NOTE: the property will not get stored and will only get added onto the tourSchema when someone tries to get the data(explaining the get method.)

Hence the data stored in DB wont have the virtual property but if we make a get request, we will get it :)

<hr>

#### Document middleware :

MONGOOSE ALSO HAS MIDDLEWARE?????????????????????????

NOTE: in mongoose middlewares are used between either Fetching or Saving document onto the database.

-> Document
-> Query
-> Aggrigate
-> Model

these are the types of middlewares in mongoose.

##### DOCUMENT MIDDLEWARE :

=) schema.pre('save', function(next){ this; next(); }) : Pre will make sure that the middlware runs before the data is stored in the database.
NOTE : runs between .save() and .create()

NOTE: The callback function cannot be arrow function since we need to actually use this keyword.

QUESTION : what is this pointing to in the save middleware ?
ANSWER: this points to the currently processed document.Hence its its called the document middleware.

-> we can hence make use of this document before it is saved.
-> so we can add stuff like new properties and slugs etc.

```js
tourSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});
```

-> the next is used :)

IMPORTANT NOTE: for adding the property called slug, the original tourSchema must have a property called slug initialised. We cannot initialise new properties just give new values :).

=)schema.post('save', function(doc, next){ this; next(); }) : post happends after the document has been saved, and hence for obvious reasons post middleware execute after the execution of the pre. Also the function gets first argument as the document that got saved.

NOTE: middlewares are also called hooks sometimes pepega laugh.

IMPORTANT NOTE: ONLY BETWEEN save() and create() methods only and not work for findById, saveMany etc. and we will find a work around for that later.

<hr>

##### QUERY MIDDLEWARE :

As the name suggests the query middleware helps us run a middleware before or after a certain query is executed.

```js
// pre find hook
tourSchema.pre("find", function (next) {
    this.find({ secredTour: { $ne: true } });
    this.next();
});
```

IMPORTANT NOTE: in the query middleware, in the callback the this keyword points to the query that is being executed.

QUESTION : what will be above code snippet do ?
ANSWER : since its a pre hook for find, this will execute between : user send a request to GET and hence find() function is called & the request going to database. Hence when we attatch this code it will modify the find query and add additional restriction to find tour where secretTour is not equals to true.

Hence if anyone makes query to fetch data, the secret tour will be filtered out.

QUESTION : but what is the issue here?
ANSWER : the find pre hook wont work for other find functions like findOne() and hence anyone will be able to find secret tour using the id using findOne :( and hence we need to make pre findOne hook.

```js
// pre find one hook
tourSchema.pre("findOne", function (next) {
    this.find({ secretTour: { $ne: true } });
    this.next();
});
```

-> There is also post query middleware that run after query has been executed and hence it gets access to docs that have been executed too :)

```js
tourSchema.post("find", function (docs, next) {
    console.log(docs);
    next();
});
```

<hr>

##### Aggrigation middleware :

allows to attatch hooks before or after aggrigation happens.

```js
toursSchema.pre("aggregate", function (next) {
    this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
    next();
});
```

NOTE: in this one this will actually point to the aggregation object.
IMPORTANT NOTE : the object contains a function =) aggregateObject.pipeline(); that will return the original aggrigation pipeline.

HENCE we can actually make changes to the aggrigate pipeline to change or add any new stage.

QUESTION: why do we need this middleware when we can make changes in the aggrigation pipeline itself ? eg. in the above code, we are just adding a new match to our aggrigation pipeline and that could be done directly in the aggrigation pipeline code :).

ANSWER :Suppose we want to add an aggrigate pipeline operation to alllll the aggrigation pipeline that have been defined. we can do it with aggrigation middleware and that will save us time :)

<hr>

#### Data Validation : Built inn validators in mongoose :

-> Validation is checking if the inputed values are in right format for the schema and also that values have been entered for the requeired values.

-> we also have a concept called Sanitization, which makes sure that the data is clean.

PRACTICE : very important to not always accept data as it is from the user and actually validate and sanatize it.

one validator is required that we use in the schema.
some other validators are :

-> maxlength[ 40, 'must have max length of 40']: for setting up mex length a string can have
-> minlength
-> min(for Numbers and dates type)
-> amx(for Numbers and dates)
-> enum(for strings only): [ 'option1', 'options2',...] : for setting the limited options that are possible as value
NOTE: for mentioning the error message :
-> enum: [ {
value: [ 'option1', 'options2',...],
message: 'error message'
}]

NOTE that this is acaully the try format for value and error mesage in validators but we use the shorthand :)

```js
const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a schema"],
        maxlength: [40, "must have max length of 40"],
        minlength: [10, "muast have more thatn 10 length"],
    },
    ratings: {
        type: Number,
        default: 6.2,
        min: [1, "Rating must be above 1"],
        max: [10, "Rating must be below 10"],
    },
    difficulty{
        type: String,
        enum:{
            values : ['easy', 'medium', 'difficult'],
            message : 'error message'
        }
    }

});
```

IMPORTANT NOTE: we studied earlier the CRUD operations take a third parameter as an object of options. in there we passed inn :

```js
const tour = await Tour.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
});
```

the runValidators must be true for the validators to work

<hr>

#### Data validators : Custom validators

sometimes we need our own custom validators :

```js
const demoSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: [true, "A tour must have a price"],
    },
    priceDiscount: {
        type: Number,
        validate: function (inputValue) {
            return !(inputValue >= price);
        },
    },
});
```

-> in validate, we pass a callback function, where we get the value inputed by the user and along with that, the this keyword points to the actual document we are working on.
-> we can use the other schema compnents too eg. we used price inside of the price Discount validate function.

QUESTION : but how do we pass inn a message :( ?
ANSWER : the correct syntax :

```js
const demoSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: [true, "A tour must have a price"],
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function (val) {
                return val < this.price;
            },
            message: "Discount price ({VALUE}) should be below regular price",
        },
    },
});
```

IMPORTANT NOTE: there is a very important catch ! notice how we used this.price to fetch it from current document, but the issue here is that incase of update this function will not work!!! since update does not get the current document.

In mongoose there are these small things :( that can give trouble sometimes.

-> NPM also has custom library called =)validator.js it is a good one :)

one of the good validator in this library is :

```js
validate: validator.isAlpha;
```

and we can pass inn an error message too :

```js
validate: [validator.isAlpha, "message"];
```

and it will ensure that only characters are there in the field :)

<hr>
<hr>

### Error handling with Express :

#### Degubbing Node.js with NDB :

-> google released NDB for debugging (Node Debugger)
-> its just a node package : =) npm i ndb --save-dev

we also add script to the package.json file called =) "debug" : "ndb server.js"

NOTE: Now, running the program, with degug will first download Chromium and will open a seperate software for debugging :)

-> we can edit stuff inside of this degubber also !!!! and it will change the original code !!

-> we can add breakpoints in our code :) and then observer the debugging.
-> the code on breakpoint can then be observerd and we can check the various variables and their values.
-> the variables can be seen in the scope on right side.
-> we can also select app and check the stack variables to see the entire middleware stack. inside app > \_router > stack

-> we can either go to next breakpoint or go to the next line of execution of code !!!

#### Handling errors :

-> The first error to handle is non handled routes !

Here are the issues :
-> NOTE: that we have trained our porgram to accept any id with get request and first thing to handle is to just look for invalid stuff !!!.

IMPORTANT QUESTION : at what point in code should we use the handler function for the invalid stuff ?
ANSWER : If user enteres any invalid query, the code will go pass our normal routers and we can catch it at the end in app.js file after the routers that we have defined are executed and they dont sent a response.

Hence add the invalid query handerl after the valid routers.

QUESTION : but do we have to define seperate handler for every type of http request(GET, post etc) ?
ANSWER : no we have a funciton =) app.all('_', handlerFunction); NOTE: we pass _ which stand for everything.

```js
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.all("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        message: `Can't find ${req.originalUrl} on this server`,
    });
});
```

-> in the above code, every request that reached to the point of the app.all, that means it is invalid and hence we make a generaic error :)

<hr>

#### An overview of error handling :

-> Errors are of types :

OPERATIONAL ERRORS : problems that we can predict will ahppen at some point, so we just need to handle them in advance, eg. invalid path accessed, Invalid user input, Failed to connect to server, Failed to connect to server, Failder to connect to database.

PROGRAMMING ERRORS : Bugs that we developers introduce into our code. Difficult to find and handler. eg. Reading properties on undefined, Passing a number hwere an object is expected, Using await without async, Using req. query instead of req.body.

NOTE: when we talk about error handling in express, we mean to handler Opeartional Errors. And handling we will do is just to log the error happening and not fix it :).

QUESTION : So how will express help us deal with Opeartional Errors?
ANSWER : Express comes with inbuilt tools for this and we will define an error handling middleware that deals with all types of erros that come to it.

NOTE : The advantage of having a global error handler is we dont need to worry about scopes and we can access it from anywhere.

<hr>

#### Implimenting Global error handling middleware.

-> the error of user sending invalid request, is also operational error and should be handled by the error handler.

IMPORTANT NOTE: at various points in our current code, we simply have many many catch(err) statements code snippets that are currently handling the errors, and we need to fix that and handle them in one central middleware.

ITS EZ IN EXPRESS!!!!!!!!!! since exprescs oems with these tools.

=) app.use((err, req, res, next)=>{}) : passing a callback function with 4 arguments, express automatically understancds that its and error handling middleware.

```js
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server !`); // creating an error with an error message
    err.status = "fail";
    err.statusCode = 404;

    next(err); // when thrown will skip all middlware and go to the error handling middleware.
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});
```

QUESTION : what is happening hereby ?
ANSWER : The following :
-> this middleare is attatched as the last middleware so that only errors reach it
-> incase we handle any error in our code, we can manually throw an error that will pass the code in pipeline to this middleware that will then handle it.
-> NOTE that the peoperties of err.message, err.status and err. status code are made when we make the error itself.
-> incase the error is not one that we have handled, by default internal server error(500) will be passed.
-> The above code is handling the invalid request error.

IMPORTANT -> =) next(err) : in express, inside of any middleware if we pass next() with an error object express will assume that it is an error and will skip all the other middlewares and go directly to the error handler middelware!!!!!!

NOTE : its so simple !!!

-> But its better to have an error class that will have all the function that create errors :) so that we dont have to write all of the error creating code.

```js
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
```

In the above code :
-> we pass the message in parent constructor(error class constructor)
-> our error class will also accept a status code.
-> we set the status to fail or error (if 404 we send fail)
-> we make a property isOperational to seperate Operational errors from programming one.

IMPORTANT NOTE : =) Error.captureStackTrace(current object, current class) : this will not print the stack trace in console and hence will not polute the console everytime an error happens :)

Hence for error of wrong request :

```js
app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server !`, 404));
});
```

even that global error handler function that we made can be stores in seperate file in controller.
(SINCE its an handler and handler go in controller in MVC)

##### Errors in Async functions :

In async function what we wanna do is, get rid of try and catch block so it looks cleaner and this can be done by formatting our handler like :

```js
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => next(err)); // where all the magic happens
    };
};

exports.createTour = catchAsync(async (req, res, next) => {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            tour: newTour,
        },
    });
});
```

NOTE: in the above code, the end objective is to make create tour a function.

IMPORTANT NOTE : the async functions handle different than normal functions since they return a promise that incase of error goes to catch block. Also in Natours projects all the controllers are async so :)

<hr>

##### handling 404 errors.

There is one issue in mongoose when we are trying to fetch data by id(The id mongoose self generates),

-> there is a certain format of mongoose id eg 5gasdigh
-> incase we just change the last letter of id 5gasdig6, IT WONT GIVE 404 error but will give 200 status with data value equals null.

This behaviour is undesirable.

IMPORTANT QUESTION: well we have handled 404 errors using the error handlers then why is this happening?
ANSWER : our error handler will throw error in the next() function only if it goes to catch() function!!! but since mongoose treats this type of id request as not error and sends data : null, it does not go into catch() hence not going to the error handler middelware.

hence we do this in our tour get controller for id :

```js
exports.getTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour) next(new AppError("no tour found with that ID", 404)); // this line
    res.status(200).json({
        status: "success",
        data: {
            tour,
        },
    });
});
```

-> in the above code after fetching the tour we can simply check if its null and if thats so, we use next() to throw the AppError.

NOTE: do the same for Delete and Update for tours by id also.

IMPORTANT QUESTION : this is the same of get all tours also, if there is no tour with the parameters found, there is no 404 error then why not handle it ?
ANSWER : its because, not finding a search result is not an error, as the result was being searched. !!!! and hence in this case mongoose sending null data is valid.

<hr>

#### Errors during production vs development.

Generally, we dont want to send direct mention of error incase of production and want to send a friendly error and hence we only throw the complex error messages in development, and during production we send good error messages.

hence we simply do this in our error controlelr function:

```js
// errorController.js
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "development") {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    } else if (process.env.NODE_ENV === "production") {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
};
```

-> incase of development, we send the =) err.stack : for stacktrace and even the error itself.

<hr>

##### The Operational Errors :

NOTE: remember how we made an isOperational parameter inside of our appError class.

-> We dont need to send non operational errors like API issues and other things to the client in development. and hence we need to get rid of such errors.

-> hence in production, we only deal with isOpeartional onn types of errors.
-> it can be done with a simple if else in :

```js
// production error handler :
if (err.isOperational) {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
} else {
    console.error("ERROR : ", err);
    res.status(500).json({
        status: "error",
        message: "Something went very wrong!",
    });
}
```

QUESTION : why can we log errors in console in production when we wont be able to see them?
ANSWER : we will be able to see them on the hosting platform like herouku. which comes in handy.

There is one more issue tho !!!

IMPORTANT PRACTICE : all the important operational errors, eg. creating tour with already existing tour name, invalid id are all very common operational errors and hence, it is essential that we handle them with seperate care with seperate error messages in production.

<hr>

##### Handling operational errors seperately :

QUESTION : how do we identify which type of operational error is happening?
ANSWER : we can simply identify the type of error with its name !!! every error thrown by mongoose has a name property and then :

-> we can identyfy the error name eg. name of wrong id search is "CastError"
-> when we have identified the type of error, we can simply read properites for creating the response eg. in CastError we can read the path and value property in the original error to identify the wrong value of wrong variable in url.
-> after this we create our own error that is thrown during the Produciton.

NOTE: to see this in effect, check the errorController file.

-> same is done for other common operational error too eg. invalid value of a property in create, etc

QUESTION : Why do some errors have names and some dont?
ANSWER : This is because, the errors that have name are the one detected by mongoose, and the ones that dont have unique name and are just "MongoError" it is caused by mongo.db driver underlying. eg.
-> Id not found is a mongoose error since id is given by mongoose.
-> Documents with same name already exists error is caused by mongo db driver.

QUESTION : so now how do we identify error in this case where there is no name?
ANSWER : the error code can be used. NOTE: best PRACTICE is to just use postman and generate error and note its error code and utilize that for error detection.

<hr>

#### mongoose validation errors :

another type sof error that are not marked with isOperational are mongoose validation error.
-> So mongoose will throw error upon invalid data being fed and we need to make sure to send valid error messages incase of invalid data formats.
NOTE : -> so the error generated by mongoose will have a property called errors with an 's' incase there are multiple validation parameters that are being voilated.

-> The idea is to tie all these error messages in a single output string so the client gets all the validations errors its making.

<hr>

#### Unhandled rejections :

There are some errors that occur outisde of express. and they are from outside of our express application eg.
-> Database server is on maintainance.
-> Mongo db password is incorrect :(

NOTE: these types of unhandled promise rejections are logged generally on the console rather than detected by our error handlers.

AND THEY CAN SOMETIMES END THE NODE PROGRAMM!!!!!!!!!! that we dont want :(
Altough realisticly speaking, incase of invalid password our application do nothhing and hence its best to shut it down hehe.

eg. : to handle the password being incorrect for mongoose, we can simply place a catch() block right?

IMPORTANT QUESTION : we can but, in a bigger application, we may fail to handle some unhandled exceptions and in that case, HOW do we handle all the unhandled exceptions ?
ANSWER : Each time there is an unhandled rejection somewhere in application, the process will emmit an object called unhandledRejection, and we can listen to that !!!!!!!!!!!!!.

```js
process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    process.exit(1);
});
```

NOTE: we do this after running the app.listen() in the server.js file.
=) process.exit() ends the server program adnwe can pass inn 1 or 0, 0 meaning sucess and 1 meaning uncalled exception.

NOTE: HOWEVER this is not a good practice since it will just force shut without current pending tasks handled and its better to exit gracefully like :

```js
process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log("Shutting down the server");
    server.close(() => {
        process.exit(1);
    });
});
```

=) server.close(callback) : actually first finishes the pending tasks and then execute the callback function, that has the process.exit().

-> this comes handy in a big real life applications.

but QUESTION: this is for the unhandled async code what about synch code ?

<hr>

#### Catching uncaught exceptions :

Exceptions here are errors that occur in Sync code but are not handled are called uncaught expcetions.

-> when there are uncaught expceptions. process will emmit 'unhandledException'
-> quiet similare to how we handle 'unhandledRejection'

```js
process.on("unhandledException", (err) => {
    console.log("UNCAUGHT EXCEPTION! Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});
```

-> this piece of code must be placed at top before any code
-> also since these are async exception, we dont need to worry about server closing.

IMPORTANT NOTE : incase of exception it is essential that we close the application since the environment is polluted. Then we restart the server. For this we need tools but many hosting services do that without us having to do anything.

Ideally, errors must be handled where they occure an dnot like what we just did! but this is for the ones that were sneaky and difficult to catch.

NOTE: Hence, the unhandledException will be at the start and unhandledEception will be at the end of our application.

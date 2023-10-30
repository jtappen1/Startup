The Console:

echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
You can also chain the input and output of commands using special characters

| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists
For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

ls -l | grep ' Nov ' | wc -l
There are also keystrokes that have special meaning in the console.

CTRL-R - Use type ahead to find previous commands
CTRL-C - Kill the currently running command



In the following code, what does the link element do?

The <link> tag defines the relationship between the current document and an external resource.


The <link> tag is most often used to link to external style sheets or to add a favicon to your website.


The <link> element is an empty element, it contains attributes only.


In the following code,  what does a div tag do?
Definition and Usage. The <div> tag defines a division or a section in an HTML document. The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

In the following code, what is the difference between the #title and .grid selector?
ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (#). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.
#physics {
 border-left: solid 1em purple;
}
The next selector we will use is the class selector. Remember that any element can have zero or more classifications applied to it. For example, our document has a class of introduction applied to the first paragraph, and a class of summary applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (.summary).
.summary {
  font-weight: bold;
}
To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the body element we will cascade our declaration down to all the children of the body, which is the whole document.
body {
font-family: sans-serif;
}




In the following code, what is the difference between padding and margin?
Padding represents the amount of inner space an element has, while the margin is whitespace available surrounding an element.

Given this HTML and this CSS how will the images be displayed using flex?
Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.


body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
To get the division of space for the flexbox children correct we add the following flex properties to each of the children.


header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}


footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}


main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.


section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}



What does the following padding CSS do?

What does the following code using arrow syntax function declaration do?
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.
This is a function in arrow syntax that takes no parameters and always returns 3.
() => 3;
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.
() => 3;
// RETURNS: 3


() => {
  3;
};
// RETURNS: undefined


() => {
  return 3;
};



What does the following code using map with an array output?
a.map(i => i+i) Run a function to map an array to a new array

What does the following code output using getElementByID and addEventListener?

What does the following line of Javascript do using a # selector?

Which of the following are true? (mark all that are true about the DOM)

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.



By default, the HTML span element has a default CSS display property value of: 
Since span elements are rendered using display: inline by default, the two width CSS properties are ignored. Here is how the HTML is rendered in the browser: This text contains a span element and another span element and some text.

How would you use CSS to change all the div elements to have a background color of red?
To add background color in HTML, use the CSS background-color property. Set it to the color name or code you want and place it inside a style attribute. Then add this style attribute to an HTML element, like a table, heading, div, or span tag

How would you display an image with a hyperlink in HTML?

Put the anchor tag <a href=””> before the image url, and </a> after.


In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Each of these is a container, or box. Each box has three layers that surround its content. The layers are, in order from inside to outside:
Padding
Border
Margin

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>

What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
The getElementById() returns an element based on its unique ID. You can use it to specify which element you want to change, and the style.color is used to modify the color of an element by accessing its style property. You can change the color of the element’s text by changing the value of the color property.

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page




How do you declare the document type to be html?

All HTML documents must start with a <!DOCTYPE> declaration. The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

What is valid javascript syntax for if, else, for, while, switch statements?
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}





What is the correct syntax for creating a javascript object?

var p1 = { name:"Steve" }; // object literal syntax

var p2 = new Object(); // Object() constructor function
p2.name = "Steve"; // property

Is is possible to add new properties to javascript objects?

You can add new properties to an existing object by simply giving it a value.


Assume that the person object already exists - you can then give it new properties:


person.nationality = "English";

If you want to include JavaScript on an HTML page, which tag do you use?

The <script> Tag
In HTML, JavaScript code is inserted between <script> and </script> tags.

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?
JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
Javascript Object Notation
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.


Here is an example of a JSON document.


{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}



What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

Which of the following console command creates a remote shell session?
ssh [username]@[server IP]

Which of the following is true when the -la parameter is specified for the ls console command?
-rw-r--r--@   1 jtappen  staff        0 Sep 28 12:18 -h
drwxr-x---+  62 jtappen  staff     1984 Oct 29 17:33 .
drwxr-xr-x    5 root     admin      160 May  2 21:32 ..
-r--------    1 jtappen  staff        7 Jun 14  2022 .CFUserTextEncoding
-rw-r--r--@   1 jtappen  staff    22532 Oct 26 14:22 .DS_Store
drwx------+ 279 jtappen  staff     8928 Oct 25 12:00 .Trash
drwxr-xr-x   16 jtappen  staff      512 Aug 16 10:30 .android
-rw-r--r--@   1 jtappen  staff      979 Sep 13 15:03 .bash_profile
drwxrwsr-x@   3 jtappen  staff       96 Sep 16 13:38 .conda
drwxr-xr-x@   3 jtappen  staff       96 Sep 13 15:02 .config
drwx------    3 jtappen  staff       96 Apr 27  2023 .cups
-rw-------    1 jtappen  staff       16 Nov  8  2022 .emulator_console_auth_token
-rw-r--r--    1 jtappen  staff       54 Sep 13 12:39 .gitconfig
drwxr-xr-x   11 jtappen  staff      352 Dec  5  2022 .gradle
-rw-------    1 jtappen  staff       20 Oct 18 15:13 .lesshst
drwxr-xr-x    3 jtappen  staff       96 Sep  2  2022 .m2
drwxr-xr-x    3 jtappen  staff       96 Feb  8  2023 .matplotlib
drwxr-xr-x@   4 jtappen  staff      128 Sep 13 15:02 .micromamba
drwxr-xr-x@   5 jtappen  staff      160 Oct  9 15:54 .npm
drwxr-xr-x    5 jtappen  staff      160 Oct  9 13:54 .ssh
drwxr-xr-x    6 jtappen  staff      192 Feb 24  2023 .subversion
drwxr-xr-x    5 jtappen  staff      160 Oct 15 21:45 .swiftpm
-rw-r--r--@   1 jtappen  staff      314 Sep 13 15:03 .tcshrc
-rw-------@   1 jtappen  staff     3884 Oct 25 16:59 .viminfo
drwxr-xr-x    5 jtappen  staff      160 Aug 14 15:35 .vscode
-rw-r--r--@   1 jtappen  staff     1375 Sep 13 15:03 .xonshrc
-rw-r--r--@   1 jtappen  staff    49215 Sep 13 15:04 .zcompdump
-rw-r--r--    1 jtappen  staff      166 Jan 19  2023 .zprofile
-rw-------@   1 jtappen  staff    28056 Oct 25 16:59 .zsh_history
drwx------    8 jtappen  staff      256 Oct 29 17:33 .zsh_sessions
-rw-r--r--@   1 jtappen  staff      977 Sep 13 15:03 .zshrc
drwxr-xr-x@   6 jtappen  staff      192 Oct 18 15:02 301R
drwx------@   4 jtappen  staff      128 Oct 11 14:43 Applications
drwxr-xr-x   14 jtappen  staff      448 Oct 24  2022 CLionProjects
drwxr-xr-x@   2 jtappen  staff       64 Sep 18 14:20 Class
drwx------@  32 jtappen  staff     1024 Oct 25 16:59 Desktop
drwxr-xr-x@  13 jtappen  staff      416 Oct 11 13:25 Developer
drwx------@  88 jtappen  staff     2816 Oct 15 22:29 Documents
drwx------@ 673 jtappen  staff    21536 Oct 28 14:14 Downloads
-rw-r--r--@   1 jtappen  staff  1399469 Jul 10 21:17 Emma Vogue.heic
drwxr-xr-x@   2 jtappen  staff       64 Sep 18 14:20 Files
drwxr-xr-x   11 jtappen  staff      352 Oct  3  2022 IdeaProjects
drwxr-xr-x    4 jtappen  staff      128 Oct 19 13:27 InterviewPrep
drwx------@  96 jtappen  staff     3072 Oct 25 16:52 Library
drwx------    4 jtappen  staff      128 Jun 15  2022 Movies
drwx------+   6 jtappen  staff      192 Jun 21  2022 Music
drwx------+ 922 jtappen  staff    29504 Jun 30 10:34 Pictures
drwxr-xr-x    7 jtappen  staff      224 Sep 14 16:41 Project 1 - 470
drwxr-xr-x+   4 jtappen  staff      128 Jun 14  2022 Public
drwxr-xr-x    4 jtappen  staff      128 Feb  8  2023 PycharmProjects
drwxr-xr-x   23 jtappen  staff      736 Oct 27 15:48 Startup-Application
drwxr-xr-x    4 jtappen  staff      128 Oct 15 21:44 TrickTracker
drwxr-xr-x    2 jtappen  staff       64 Aug 14 16:09 VSCode
drwxr-xr-x    4 jtappen  staff      128 Feb 24  2023 WordCruncher
drwxr-xr-x    4 jtappen  staff      128 Apr  7  2023 WordCruncher (Old)
drwxr-xr-x    3 jtappen  staff       96 Oct 11 14:05 keys
drwxr-xr-x@  14 jtappen  staff      448 Sep 16 13:38 micromamba
drwxr-xr-x@   8 jtappen  staff      256 Sep 23 11:49 practicePyTorch
drwxr-xr-x@   6 jtappen  staff      192 Oct 24 11:32 simon-260
drwxr-xr-x    7 jtappen  staff      224 Oct 18 15:07 test
-rw-r--r--@   1 jtappen  staff       71 Aug 18 20:03 topK.cpp
drwxr-xr-x    4 jtappen  staff      128 Sep 13 15:04 untitled folder


Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-root-of-your-domain&psig=AOvVaw1DrNvYc_akoLFtGeoSzW4E&ust=1698710672900000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOje08O8nIIDFQAAAAAdAAAAABAE


Is a web certificate is necessary to use HTTPS.
To use HTTPS with your domain name, you need a SSL or TLS certificate installed on your website. Your web host (Web Hosting Provider) may offer HTTPS security or you can request a SSL/TLS certificate from Certificate Authorities and install it yourself. SSL/TLS certificates may need to be renewed periodically.

Can a DNS A record can point to an IP address or another A record.
Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Of course you must also lease the IP address before you can use it to uniquely identify a device on the internet, but that is a topic for another time. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.


The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.


When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.


As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

A DNS A record is the most fundamental type of DNS record. The A stands for “Address,” and it's used to point a domain name to an IP address or host.

Port 443, 80, 22 is reserved for which protocol?

Port 80 refers to HTTP under TCP protocol, while Port 443 refers to HTTPS- a secure protocol. 
Port 22 = Secure Shell (SSH) protocol

What will the following code using Promises output when executed?


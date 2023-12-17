What ports are used for HTTP, HTTPS, SSH?
- port number of 80 for HTTP and 443 for HTTPS
- port 22 for SSH

What do HTTP status codes in the 300, 400, 500 range indicate?
- Redirection messages ( 300 – 399 ) Client error responses ( 400 – 499 ) Server error responses ( 500 – 599 )

What does the HTTP header content-type allows you to do?
- The content type status, part of an HTTP header, can tell a browser what type of content, e.g. a PNG image or an HTML page, is being transmitted.

What do the following attributes of a cookie do?
Domain
Path
SameSite
HTTPOnly

We import the cookieParser object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie, we want to make it as secure as possible, and so we use the httpOnly, secure, and sameSite options.
httpOnly tells the browser to not allow JavaScript running on the browser to read the cookie.
secure requires HTTPS to be used when sending the cookie back to the server.
sameSite will only return the cookie to the domain that generated it.


Cookies are small pieces of data stored on a user's device by their web browser. Each cookie can have various attributes that determine its behavior. Here's an explanation of the attributes you mentioned:
Domain:
Purpose: Specifies the domain for which the cookie is valid.
Usage: The cookie will only be sent to the specified domain and its subdomains. For example, if the domain is set to ".example.com," the cookie will be sent to "example.com," "subdomain.example.com," etc.
Syntax: Domain=example.com
Path:
Purpose: Defines the URL path for which the cookie is valid.
Usage: The cookie will only be sent to the server for requests that match the specified path. It helps restrict the cookie's scope to a specific directory or page.
Syntax: Path=/subdirectory
SameSite:
Purpose: Controls when cookies are sent with cross-origin requests.
Options:
None: Cookies are sent with both same-site and cross-site requests.
Lax: Cookies are sent with same-site requests and top-level navigation (e.g., clicking a link).
Strict: Cookies are only sent with same-site requests.
Usage: Helps prevent cross-site request forgery (CSRF) attacks and improve security.
Syntax: SameSite=None or SameSite=Lax or SameSite=Strict
HTTPOnly:
Purpose: Prevents client-side scripts (e.g., JavaScript) from accessing the cookie.
Usage: Protects the cookie from certain types of attacks, such as cross-site scripting (XSS), where an attacker injects malicious scripts into a website.
Syntax: HttpOnly
Example of a cookie with multiple attributes:
plaintext
Copy code
Set-Cookie: session_id=abc123; Domain=.example.com; Path=/; SameSite=Lax; HttpOnly

In this example:
The cookie is named session_id with the value abc123.
It is valid for the domain ".example.com" and all its subdomains.
It is valid for all paths ("/").
It is set to be sent with same-site requests and top-level navigation only (Lax).
It is marked as HTTPOnly, preventing client-side scripts from accessing it.


Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?

Given the following Express service code: What does the following JavaScript fetch return?

Given the following MongoDB query

{ cost: { $gt: 10 }, name: /fran.*/}
select all of the matching documents.

cost: { $gt: 10 }:
cost is a field or property in the documents you are querying.
{ $gt: 10 } specifies a condition where the value of the cost field must be greater than ($gt) 10.
name: /fran.*/:
name is another field or property in the documents.
/fran.*/ is a regular expression that specifies a pattern for the name field. It matches any string that starts with "fran."
Putting it all together, this query is asking for documents where the cost is greater than 10 and the name starts with "fran." In the context of a database query, this would retrieve records that meet both conditions from the collection or table being queried. Keep in mind that the specific details and interpretation depend on the database system or library you are using.


How should you store user passwords in a database?
we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.
To hash our passwords we will use the bcrypt package. This creates a very secure one-way hash of the password. If you are interested in understanding how bcrypt works, it is definitely worth the time.


Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?

What is the WebSocket protocol used for?
- The WebSocket protocol enables ongoing, full-duplex, bidirectional communication between a web client and a web server over an underlying TCP connection.

What is JSX and how are the curly braces rendered?
- JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);

Hello - “name”
      
Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
    
What does the following React component do?
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
When rendered, it will display a paragraph with the current count and a button that increments the count when clicked.

What are React Hooks used for?
- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component

What is the useEffect hook used for?
- The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.


What does this code do?
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

In summary, this code sets up a basic navigation structure using React Router. It defines different routes for "/", "/blogs", and "/contact", each rendering a specific component when the corresponding path is matched. Additionally, it includes a catch-all route for any paths that do not match the specified routes, rendering the NoPage component.

What role does npm play in web development?
- Using npm allows you to find code packages for web development, but it's also a place for developers to build and maintain their code packages.
- At its core, NPM helps distribute JavaScript code to web and mobile apps, making ongoing improvement possible without forcing users to delete and update their apps 
- Managing Dependencies - npm can manage dependencies. npm can (in one command line) install all the dependencies of a project.

What does package.json do in a npm project?
- It's the package. json file that enables npm to start your project, run scripts, install dependencies, publish to the NPM registry, and many other useful tasks.

What does the fetch function do?
- In JavaScript, the fetch() method is used to make asynchronous requests to the server and load the information that is returned by the server onto the web pages.

What does node.js do?
- Node. js is commonly used to develop real-time applications, also known as RTAs. Its asynchronous, event-driven nature, allows it to handle heavy input-output operations, which makes it much easier for Node. js developers to achieve the level of performance users have come to expect from modern real-time applications
- Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.

It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. Sounds a bit complicated, right?

What does Vite do?
- Vite uses native ES modules and modern browser APIs to compile your code on the fly, providing fast build times and instant updates in the browser. This approach eliminates the need for a bundler during development, which can significantly reduce the time spent on building and deploying your applications. The built-in development server in Vite is optimized for fast reloading and hot module replacement, allowing developers to see the changes they make to their code in real-time without the need for a full page refresh.
- It was developed by Evan You, the creator of Vue.js framework, to provide a fast development experience for modern web projects. The best thing about Vite is that it's platform-agnostic, meaning it can be used to develop JavaScript/Typescript applications.

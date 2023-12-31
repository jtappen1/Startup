# Startup-Application
## Skateboard Trick Tracker
### Elevator Pitch
One of the most satisfying aspects of skateboarding is learning new tricks, but eventually many skaters reach a point where they know so many tricks they have trouble remembering them. Many beginning skaters also do not know how to start skateboarding and give up because there is no clear steps for them to follow to begin riding for real.  Trick Tracker is an application designed to help new skaters begin on their journey and learn tricks and also help vetern skaters remember and use tricks they love but have forgotten about. Trick Tracker contains 3 seperate categories of tricks, easy, medium, and hard and allows for users to easily add and remove tricks from their list.  It will also suggest tricks in an order that other users have learned them so beginning skaters can have a clear path forward when trying to learn to skateboard.

<img width="945" alt="Trick Tracker Design" src="https://github.com/jtappen1/Startup/assets/130516020/6241c416-0bc1-4943-8354-292dcf306acd">

### Key Features
Secure login over HTTPS
Ability to add/remove tricks to easy, medium, or hard sections
Display of set tricks for easy, medium, hard.
Totals trick points from top 5 users displayed in realtime.
New tricks are persistently stored.
Ability for user to add descriptions of tricks and check them off when learning them.
List of possible next tricks.

### Technologies
I am going to use the required technologies in the following ways.

HTML - Uses correct HTML structure for application. Two HTML pages. One for login/register and one for marking down new tricks.
CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
JavaScript - Provides login/register, saving user tricks, displaying other users tricks, backend endpoint calls.
Service - Backend service with endpoints for:
- login
- retrieving tricks
- adding new tricks
- checking off tricks learned
- keeping track of points off tricks learned
DB - Store users, tricks, and trick completions/ points in database.
Login - Register and login users. Credentials securely stored in database. Can't add tricks unless authenticated.
WebSocket - When a new trick is learned, you will receive an amount of points for it.  You can see other user's points and there will be a leaderboard.
React - Application ported to use the React web framework.

HTML
- HTML pages for each component of your application: I made a login, home, leaderboard, and profile pages.  That is all the html for my application
- Links between pages as necessary: I put links at the top of every page that connect to the other pages.
- Application textual content: I added text for the main table that will be used for tracking tricks and every other section that would be used.
- Placeholder for 3rd party service calls: I created a table with next tricks and a table that tracks tricks that currently act as a placeholder for third party calls.
- Application images: I added a picture on the home screen of TrickTracker.
- Login placeholder, including user name display :I created a login page and in profile a place to see your username.
- Database data placeholder showing content stored in the database: I did this in the main tricktracker page, in the table it shows a few tricks that a user could have added and gotten from the database.
- WebSocket data placeholder showing where realtime communication will go:  I created a leaderboards placeholder that will be updated when a new trick is learned.

CSS
- Header, footer, and main content body
- Navigation elements: I am able to navigate between things.
- Responsive to window resizing: My app looks great on all window sizes and devices.
- Application elements: Used good contrast and whitespace.
- Application text content: Made the text good colors and with consistent fonts.
- Application images: The background is an image and there is a picture of a skateboarder on the home page.
- 
Javascript
- JavaScript support for future login: I put in javascript so that when someone logs in it create a user object and stores the tricks associated.  You can also see it on the leaderboard.
- JavaScript support for future database data: I used local storage to save the data.  You can add and remove tricks from the table.  I haven't put in code for the above table because I need a database for that.  That part is going above and beyond what is required.
- JavaScript support for future WebSocket:  The leaderboards will in real time update the leaderboard which other users and their tricks.
- JavaScript support for your application's interaction logic: I can login, add tricks, and show the leaderboard.  Profile is going above and beyond and that is something I am going to implement later on after this class so I haven't built out all the functions for it.

Service
- Create an HTTP service using Node.js and Express:  Done! It runs on 8080
- Frontend served up using express static middleware: I completed this section
- Your frontend calls third party service endpoints: I had it make a quote on the login page that is random
- Your backend provides service endpoints:  I did this for leaderboards and index.js
- Your frontend calls your service endpoints : I did this is leaderboards

Database:
- MongoDB Atlas database created: Created this!
- Provides backend endpoints for manipulating application data : Done, its in my index.js
- Stores application data in MongoDB : This works and is done.

Login
- Supports new user registration: There is a create button that works
- Supports existing user authentication: This works as well!
- Stores and retrieves credentials in MongoDB: This works
- Restricts application functionality based upon authentication: You cant log tricks until you login.

Websocket
- Backend listens for WebSocket connection:  It does this!
- Frontend makes WebSocket connection  It does this!
- Data sent over WebSocket connection: Tells when a player connects and disconnects, as well as their name and when a new trick is added
- WebSocket data displayed in the application interface: At the top it shows a list of the tricks that have been learned. and all other notifications.\


React
- Bundled using WebPack and Babel as generated from using create-react-app: Yes did this when I deployed the app.
- Multiple functional react components : Yes! Changed functionality to the app to be React and changed functions to make the table work and the scoreboard to be React components
- React router: Made a React Router!
- React hooks Did this! made hooks especially for The leaderboards and home functionality.




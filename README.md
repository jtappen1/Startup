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




## EVENTS HUNTER

<p align="center">
  <img src="./img/events-searcher-React-API.png" width="500">
</p>

In this page you can obtain information about events of several categories. Project developed with React, layout applied with UIkit and data obtained from Eventbrite API.

### **Features**

- The web allows to search events information with three optional criteria: the event name, the city, and the category which belongs.
- The searcher finds matches in an external API (Eventbrite API).
- The results are shown in an organized grid layout.
- In every card event has included a 'More information' button to click in to open a new website with all the information about it.
- There is an icon in the left top of every event to mark it as favorite.
- The events are sincronized with the saved favorites when a new search is done showing a red heart.
- Favorites kept saved even when the webpage is closed or reloaded.


### **What I learned**

- Obtain data from Eventbrite API and how to extend the default information.
- Generate layout with UIkit classes.
- Make queries to the API with NPM Axios through async functions.
- Build a favourites section and syncronize them with new searches.
- Save favourites data with LocalStorage.


### **Resources**

- For the data events I utilized an external API: [Eventbrite API](https://www.eventbrite.com/platform/api).
- Layout and styles with [UIkit](https://getuikit.com)
- To make queries to the API with [Axios](https://www.npmjs.com/package/axios), a package from NPM.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), from Facebook.


### **Usage**

To run the game in local, I have included Serve, a local server from an NPM library.

- Install Node.js at the terminal if you haven't yet (https://nodejs.org/es/). Commands for Ubuntu:

```bash
sudo apt-get update
sudo apt-get install nodejs
```
- You will need to install the package manager npm:

```bash
sudo apt-get install npm
```
- Clone or download the repository in your computer.

```bash
git clone https://github.com/diana-moreno/events-searcher-React-API.git`
```
- Download the npm competitions in your own repository and start it.

```bash
npm install
npm start
```

- Otherwise, you can run the final project here: https://diana-moreno.github.io/events-searcher-React-API/


### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



### More

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

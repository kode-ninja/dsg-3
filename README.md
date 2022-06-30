# Cancel upon leave hook

`useCancelOngoingRequestsOnUnmount` is a React hook which cancels any outgoing Web request once a component unmounts.

It is based on the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface which represents a controller object that allows you to abort one or more Web requests as and when desired.

As such, it supports any HTTP client library which supports the [signal](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters) request parameter (e.g. `fetch API`, `axios`).

This project includes the source code of `useCancelOngoingRequestsOnUnmount` as well as a usage example.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Installation

To install the project, run the following the in project directory:
* `npm install`
* `npm install -g json-server`

### Running
In the project directory:

* Run `npm json-server` to start the [json-server](https://www.npmjs.com/package/json-server), which is configured with a delay of 3 seconds.
* Run `npm start` to run the app in the development mode.

## Usage

Add `useCancelOngoingRequestsOnUnmount` to your component:
```
const requestAbortController = useCancelOngoingRequestsOnUnmount();
```

For each outgoing request, create a *cancellation signal*:
```
const signal = requestAbortController.getCancellationSignal();
```

Add the *signal* as an option inside the request's options object:
```
fetch("https://example.com/", {signal})
```

For each completed request, either failed or successful, call `requestCompleted(signal)` (usually in the `finally` block):
```
requestAbortController.requestCompleted(signal);
```

See `PageWithRequests.js` for usage example

## Available Scripts

In the project directory, you can run:
### `npm json-server`

Runs the [json-server](https://www.npmjs.com/package/json-server), which is configured with a delay of 3 seconds.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

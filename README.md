<img alt="logo" src="https://raw.githubusercontent.com/rahul-jha98/Artistify.ai/assets/logowithtext.svg" width="400">

**Web-app to convert your images into art**

## About
Artistify.ai is a web-app that implements neural style transfer right in your browser. At its very core it is a tensorflow.js model 
that implements neural style transfer. So, like any other neural style transfer based model it takes a content image and a style image 
and returns a content image that is **drawn** following the style of style image. So, with an art piece as style image we can convert a normal
content image into an its **artistified** version. 

Then useing React.js and following Google's material-design guidelines, it provides an easy to use and polished interface to interact with the 
model and use it as a full fledged web-app.

> **Checkout the website live at** : https://rahul-jha98.github.io/Artistify.ai/

## Some screenshots

### Home screen
![Screenshot Home](../assets/Home.png)

### Lite Version
![Screenshot Lite](../assets/Lite.png)

### Pro Version
![Screenshot Pro](../assets/Pro.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


# Social Metric Graphic

Project in Node.Js and Vue.js that will display a Graphic getting the values from a Rest API.

## Getting Started

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:


### Prerequisites

To install the application you will need to install.
```
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
```

### Installing

To installing this project will need to open the bash terminal of your preference, examples:

```
 * Power Shell;
 * Git Bash;
 * Linux terminal;
 * Mac Terminal;
```
Then you need to clone the Social Metric Graphic repository from git 

# Command To Clone this repository
```
git clone https://github.com/rafaelAmaralMario/social-metric-graphic.git
```

After clone the git repository go to the repository folder
# Commandd to enter into the repository
```
cd social-metric-graphic
```

In the repository folder, you will need to install project dependencies. 
As this project was separated into a Server and a Client structure, you will need to install both dependencies.

To install the server and client dependencies we have two ways to do that.

# First Way: installing all project dependencies   
```
npm run install-project
```

# Second Way: installing the dependencies separately  

## Installing Client Dependencies
```
npm run install-client
```
## Installing Server Dependencies

```
npm run install-server
```

After that you will need to run the server to the access the project.   

# Command to run the server
```
npm run dev
```

After running the server, you can finally see the project into: 

```
http://localhost:8081/
```

## Deployment

To deploy the Application you will use the deploy command to create the client side configurations.

# Command to build the client
```
npm run build
```
After that will be created the **dist** folder, inside the client folder, with the files minified and configured to deploy.

To run the server in production you will need to start the server with production settings 
# Command to run the server in production
```
npm start
```

## Built With

Client 
* [Vue.js](https://vuejs.org/) - Web Framework used in project
* [Vue-Cli](https://cli.vuejs.org/) - Standard Tooling for Vue.js Development
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Highcharts](https://highcharts.com/) - Standard Tooling for Vue.js Development
* [Webpack](https://webpack.js.org/) - Standard Tooling for Vue.js Development

Server
* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](http://expressjs.com/) - web framework for Node.js

## Authors

* **Rafael Mario** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

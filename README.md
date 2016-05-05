# __* THIS DOCUMENT IS A DRAFT *__
# Angular WebClient Reference Project

This project is a template for future developments and best pratices on developing rich clients using Angular and Typescript.

## Architecture

We suggest regular 3 layer approach with some Angular specific organization of the UI layer.

![alt tag](https://github.com/zbra-solutions/template_angular_webclient/blob/gh-pages/architecture.png)

#### Model

Missing part in many projects, model does what's expected: defines the entities. It may also contain core validations, factories and everything ralated to properly using and creating valid entities.

Nothing Angular related (like services or modules) applies to this layer.

#### Repository

Although it might seem, by the nature of the word being generally associated with databases, something alien to rich web client development, architecturally speaking the Repository is where we store the entities of our application. This layer will interface with the server instead of a database. It will usually perform queries and return instances of entities provided by the model, converting server sent JSON (value objects) into application classes.

Implementation of repositories are mostly done through Angular Services.

#### Services

Not to be mistaken by Angular Services (which are indeed used to implement classes not only in this very layer, but also in many others). This layer is responsible for implementing logic that is critical to the application business by leveraging zero or many repositories and adding value and meaning to complex operations that might be or not shared between multiple parts of the UI.

Like repositories, Services are mostly done by employing Angular Services.

#### UI

Here goes the bulk of the app. All HTML goes here. It's divided in three smaller portions to logically organize and provide foundation for sharing code while isolating one feature from another.

##### Pages

Features go here. Each feature must be isolated from one another and reside in its single Angular Module. Default artifacts found in each feature will include the page HTML, Controller and Module files. Optionally, directives might be added according to particular neccessities, like isolating a specific modal.

##### Components

Components are a single Angular module containing UI components to be shared accross Pages. Members of this module should avoid accessing Services or Repositories, instead being more focused on visual representation and reusability. Usually implemented through Angular Directives.

##### Mediators

Mediators, like Components, live in a single Angular Module. Classes here are responsible for isolating common behavior executed throughout the application UI. Isolate vendor specific services like mdNotification and provide a single point of standardized and simplified interaction with the library is a great use of this layer.

## Auxiliary Tools & Configurations

Project is tailored to be used with WebStorm 11+, but its not obligatory. Although some niceties that are already configured will be lost, it's completely possible to replicate such configurations on other IDEs. Having that said, use of WebStorm is highly favored.

The stack of tools used include: 

* NPM: Tool management
* Bower: Dependency management
* Gulp: Build Scripts
* Typings: Typescript definitions of popular JS libs
* LESS: Less compiler
* WebStorm: IDE, automation of some tasks

Only required pre-installed software is NPM and WebStorm. Check out the project, open it in WebStorm then run __npm install__ on the console and it will:

* Download Bower, Gulp, Typings and LESS compiler
* Download Bower dependencies into  __assets/bower_components__ directory
* Download typings into __typings__ directory
* Compile the empty less file into __assets/css/app.css__

Additionally, every update of any Bower (__bower.json__), Typings (__typings.json__) or any __.less__ file in __/less__ should trigger an automatic update command.

# __THIS DOCUMENT IS A DRAFT__
# Angular WebClient Template

This project is a template for future developments and best pratices on developing rich clients using Angular and Typescript.

## Architectire

We suggest regular 3 layer approach with some Angular specific organizarion of the Ui layer.

![alt tag](https://github.com/zbra-solutions/template_angular_webclient/blob/gh-pages/Untitled%20Diagram.png)

#### Model

Missing part in many projects, model does whats expected: defines the entities. It may also contain core validations, factories and everything ralated to properly using and creating valid entities.

Nothing Angular related (like services or modules) apply to this layer.

#### Repository

Although it might seem, by the nature of the word being generally associated with DataBases, something allien to rich web client development, archtecturaly speaking the Repository is the where we store the entities of our application. This layer will fill the role of the DAO but it will probably be interfacing with the Server instead of a DataBase. It will usually be performing queries and returing instances of entities provided by the model; converting server sent JSON (value objects) into application classes.

Implementation of repositories are mostly done by using Angular services.

#### Services

Not to be mistaken by Angular Services (which are indeed used to implement classes not only in this very layer, but also in manu others), this layer is responsible to implement logic that is critical to the application business by leveraging zero or many repositories and adding value and meaning to complex operations that might be or not shared between muitiple parts of the UI.

Like repositories, Services are mostly done by employing Angular services.

#### UI

Here goes the most of the app. All html goes here. its divided in three smaller portions to logically organize and provide foundation to sharing code while isolating one feature from another.

##### Pages

Features go here. Each feature must be isolated from one another and reside in its single Angular module. Default artefacts found in each feature will include the page html file, controller and module file. Optionally, directives might be added according to particular neccessities, like isolating a specific modal.

##### Components

Components are a single Angular module containing UI components to be shared accross Pages. Components in this module should avoid accessing services or repository or encapsulate, intead being more focused on visual representation and reusability. Usually implemented through Angular directives.

##### Mediators

Mediators, like Components, live in a single Angular module. Classes here are responsible for isolating commun behavior executed throughout the application UI. Isolae vendor specific services like mdNotification and provide a single point of standardized and simplified interaction with the library is great use of this layer.

## Auxiliary Tools & Configurations

Project is tailored to be used with WebStorm 11, but its not obligatory. Although some niceties that are already configured will be lost, its completely possible to replicate such configurations in other IDE. Having that said, use of WebStorm is highly favored.

The stack of tools used include: 

* NPM: Tool management
* Bower: Dependency management
* Gulp: Build Scripts
* Typings: Typescript definitions of popular JS libs
* LESS: Less compiler
* WebStorm: IDE, automation of some tasks

Only required pre-installed software is NPM and WebStorm. Check out the project, open it in WebStorm then run ___npm install___ on the console and it will:

* Download Bower, Gulp, Typings and LESS compiler
* Download Bower dependencies into  __assets/bower_components__ directory
* Download typings into __typings__ directory
* Compile the empty less file into __assets/css/app.css__

Additionally every update of any of the Bower (__bower.json__), Typings (__typings.json__) or any __.less_ file in __/less__ should trigger an automatic update commands such as after you SVN update, updated libraries, css and typings will not go unoticed.



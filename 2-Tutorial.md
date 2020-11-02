![Figure 1](./readme-images/optional/intro.png)
Figure 1: The results page that we are going to add

# Introduction 
Welcome to the optional steps guide of the exercise. The objetive is to use more advance React concepts to build the search bar functionality.

## Prerequisites
1. Finish the main part of the guide. ([README.md](./README.md))
2. Refactor the header to be a separate component.

## Concepts to cover
1. [Basics of handling forms](https://reactjs.org/docs/forms.html) to use the information typed by the user.
1. [React Hooks](https://reactjs.org/docs/hooks-intro.html) to modify info in real time.
2. [Click events](https://reactjs.org/docs/handling-events.html) to run code after pressing a button.
3. [Firebase hosting](https://firebase.google.com) to publish more complex project in a web host.

## Task to do
1. Create a search bar inside the header
2. Create a results page.
3. Capture the text written inside the search bar and send to the results page.
4. Filter the json using the text send from the search bar.
5. Show only the videos from the filtered result.
6. Add router Links to the result cards.

# 1. Basic form
In the Header component, add a input type text and a button to allow users to type wich video they want to play.

Read the guide of React related to [handling forms](https://reactjs.org/docs/forms.html) and focus on:
- `value`: The parameter that shows the text written by the user
- `onChange`: The parameter that allows to listen to the `event` triggered whe the user types inside the input.

![Figure 2](./readme-images/optional/form.png)
Figure 2: The form with reactive data

# 2. React Hooks
To tell React what the user wrote in the input we use the concept of Hooks. It's the React way to dynamically update and display changes in real time inside a webpage that uses React.

It's format is a destructured array `const [value, setValue] = useState(initialValue)` let's analyze it:
1. `value` is the name of our variable. 
2. `setValue` is the name of the setter method that you use change the variable value.
3. `useState()` is the name of another setter method, this one is only used once, to set the value for the first time.
4. `initialValue` the initial value. It can be a string like `hello` a number `55` or even a function that returns any value.

Remember you use `userState()` only to set the value for the first time and the you start using `setValue` instead, when you want to modify the value.

![Figure 3](./readme-images/optional/hooks.png)
Figure 3: React hooks to manage the state

# 3. Click events
On the results page we add 2 buttons one for sorting results by name and the other for sorting by channel.

To add an click event, read about the `onClick` event. 

With the concepts covered to create the search bar, you have the knowledge to apply those concepts to create the results page. And by using your JavaScript lab exercises you should be able to figure out how to sort the results by name or by channel.


# 4. Firebase hosting
Firebase is a cloud service provide by Google, it has many services including non-relational databases, image recognition, login systems, etc. We will focus on the hosting part called Firebase Hosting. To use it you need to create or login to a Google account.

To explain this process a bit easier, we have divided it into the following:
1. Setting up a Firebase project.
2. Creating a hosting service.
3. Build and Deploy

## Setting up a Firebase project:
1. Visit the [Firebase website](https://firebase.google.com) and press the Get started button.
2. Press the Add project button
3. Set a name for the project and press continue
4. Disable the Google Analytics and press Create project

![Figure 4](./readme-images/optional/firebase-1.png)
Figure 4: Step by step guide to set up a project

## Create a hosting service inside the project
On the Firebase webpage
1. Click on Hosting on the left panel.
1. Press the Get started button.

On Visual Studio Code follow this steps listed on the Firebase page
1. Install the node package mention in the page (`npm install -g firebase-tools`).
1. Using the terminal inside your project login using `firebase login` (withouth npm) using your Google account.
1. Using the terminal type `firebase init` (withouth npm) and it will show a command line interface, choose Hosting
1. Select the project you created.
1. Press Enter to use the default settings in each question except...
1. When asked for a public folder, write `build` that is the folder React uses to create the final project.

![Figure 4](./readme-images/optional/firebase-2.png)
Figure 5: Step by step guide to creating a hosting service.

## Build and Deploy
In Visual Studio code and in your project folder open the terminal to write this commands:
1. Type `npm build` it will create a folder called build.
2. On the terminal type `firebase deploy` (withuth npm) and wait until it's finish.
3. Click on the link that appear at the end of the terminal.

Congratulations if everything is fine, you have published your project in Google Firebase hosting. If you want a custom domain, you can use [tinyurl.com](http://www.tinyurl.com) to create a your own name.

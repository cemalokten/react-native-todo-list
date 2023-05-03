# React Native Todo List

This is a simple, cross-platform Todo List application built using React Native and the Metro bundler. 

It allows users to add, delete, and toggle the completion status of tasks. 

#### Prerequisites
- Node.js (>= 14.x.x)
- npm (>= 7.x.x)
- React Native CLI
- Android Studio or Xcode (for running the app on Android or iOS)

#### Installation

1 - Clone the repository:

`git clone https://github.com/yourusername/react-native-todo-list.git`

2 - Navigate to the project directory:

`cd react-native-todo-list`

3 - Install the dependencies:

`npm install`

#### Running the App

##### Android

Open Android Studio and start an Android Virtual Device (AVD).

Run the app in the AVD:

`npm run android`

##### iOS

Navigate to the ios folder and install the iOS dependencies:

`cd ios && pod install`

Return to the project root directory:

`cd ..`

Run the app on an iOS simulator:

`npm run ios`

#### Application Structure

The project is organized as follows:

```bash
react-native-todo-list/
 ├──src/
 │   └──components/
 │       ├── Todo/
 │       │   └── Todo.js
 │       ├── TodoList/
 │       │   └── TodoList.js
 │       └── styles/
 │           └── theme/
 │               ├── global-style.js
 │               └── index.js
 ├── App.js
 ├── app.json
 ├── index.js
 ├── package.json
 ├── react-native.config.js
 └── README.md
```

- `src/components/``: Contains the main UI components of the application.
  - `Todo/`: Folder containing the individual task item component (Todo.js).
  - `TodoList/`: Folder containing the container for the list of tasks (TodoList.js).
  - `styles/theme/`: Contains the global styles and theme used throughout the application (global-style.js and index.js).
`App.js`: Main application component that ties everything together.
`index.js`: Entry point for the application.
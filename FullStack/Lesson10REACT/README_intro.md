# Hooks

## useState

The `useState` hook is a fundamental hook in React for adding state to functional components. It returns an array with two elements: the current state and a function to update the state.

### Syntax

```jsx
const [state, setState] = useState(initialState);
```

### Explanation

State is like a component's memory - it keeps track of information that can change over time, e.g., a game score or whether a button was clicked. When the state changes, React updates the screen to show the new information automatically. Read more [here](https://react.dev/reference/react/useState).

## useEffect

The `useEffect` hook lets you perform side effects in functional components. It can handle data fetching, subscriptions, or manually changing the DOM. It's for synchronization of React with external things

### Syntax

```jsx
useEffect(() => {
  //logic

  return () => {
    // cleanup, if needed
  };
}, [dependencies]);
```

### Explanation

`useEffect` in React is like setting a reminder for your component to do something after it updates, like fetching data. It helps you handle things that happen outside the component, like talking to a server or listening to a user scrolling the page. Read more [here](https://react.dev/reference/react/useEffect).

# Components

- Components are the building blocks of a React app.

- There are many benefits to writing your code using components:

  - They allow you to break down huge files into more manageable smaller parts
  - Creating and using reusable components (e.g., buttons or input fields) can speed up your development
  - You can separate logic from presentation, which helps when testing

## Example

To practice what we've learned so far, I'm going to do an exercise from University of Helsinki's Full Stack Open, which is a great resource to learn React.

[Here](https://fullstackopen.com/en/part2/adding_styles_to_react_app) is the link to the page, and we are going to do exercises 2.18 and 2.19.

If you want to follow along, I suggest that you set up a React project using Vite by running the following command, note that you will have to install axios:

```
npm create vite@latest app-name -- --template react-ts
npm install axios
```

or clone this repository and install dependencies:

```
git clone https://github.com/timmchi/react-lesson.git && cd react-lesson/fullstack-lesson && npm install
```

# My Advice

## 1. You Might Not Need an Effect

Before reaching for `useEffect`, make sure it's necessary. In many cases, side effects can be avoided by restructuring your component logic.

- When you add a useEffect to your code, check the React docs: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) to see if it is really necessary
- Avoid overusing effects for things like transforming data or working with props; state logic can often handle it.

## 2. Understand `useState` and Rerenders

`useState` is central to React's state management. Understanding how it affects rerenders will help you write more efficient components:

- **Rerender Trigger**: Every time you call the state update function (e.g., `setState`), it triggers a rerender of the component.

## 3. Keep Your Console Open

Always have the browser console open during development to catch warnings, errors, and logs:

- Use `console.log` to see what really goes on in your components and to track data flow
- clg command for console.log, utilize your vscode! Learn more [here](https://code.visualstudio.com/docs/getstarted/keybindings)

## 4. If it doesn't make sense yet, keep practicing until it "clicks"

- The only way to learn how to use React or just learn how to code in general is to practice.

- Best way to practice is to make your own projects.

- When you run into errors and fix them, you learn a great deal
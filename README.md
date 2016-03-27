based on work from [redux async example](https://github.com/reactjs/redux/tree/no-babel-hmre/examples/async)

The idea is to explore different features, to have it simpler to browse I created
different branches for each one:

no-redux: plain react example, no redux  
[add-redux](https://github.com/ingoclaro/react-redux-tutorial/compare/no-redux...add-redux): add a redux store  
[add-react-redux](https://github.com/ingoclaro/react-redux-tutorial/compare/add-redux...add-react-redux): using react-redux to connect the store with react  
[simple-action](https://github.com/ingoclaro/react-redux-tutorial/compare/add-react-redux...simple-action): add a simple action  
[add-mapDispatchToProps](https://github.com/ingoclaro/react-redux-tutorial/compare/simple-action...add-mapDispatchToProps): use mapDispatchToProps to handle the actions so App container isn't aware of redux.  

# setup

To run the example in your local machine run the following commands (for osx)

Install node 4:

```
brew update
brew install nvm
nvm install 4
```

In the checked out code:

```
npm install
npm start
```

Then open in your browser http://localhost:3000/

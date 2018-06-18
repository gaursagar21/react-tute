#Making a react app

1. Instead of going the npm init route, use a package called 
`create-react-app`

```bash
npm install -g create-react-app
create-react-app my-app
```
2. Add the following to `index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```
3. Run using `npm start`


# React Classes

```javascript
class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
```

_So.. What is happening here?_
Shopping list is a **React Compomnent Class**, a kind of **React Compomnent Type**. (I'll call it `RCC` from now on.)

```yml
RCC
params: props
return: render() method
``` 

### Render Method:
returns a description of what is to be rendered. Stuff returned is a **React element** in a mixed HTML/String like syntax called `JSX`. It is a shorthanded notation for the otherwise verbose descriptions:
```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```


## Folder Structure:
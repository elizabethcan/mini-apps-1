// you MUST place all of your React components into one file, app.jsx

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>Name:</div>
          <input className="userFormInput" id="userName"></input>
        </div>
        <div>
          <div>Username:</div>
          <input className="userFormInput" id="userEmail"></input>
        </div>
        <div>
          <div>Password:</div>
          <input className="userFormInput" id="userPassword"></input>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <button className="checkOutBtn">Check Out</button>
        <UserForm />
        <button>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
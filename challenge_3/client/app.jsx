// you MUST place all of your React components into one file, app.jsx

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    console.log(event.target.id);
    console.log(`event.target.value: ${event.target.value}`);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="userForm">
          <div>Name:</div>
          <input className="userFormInput" id="name" value={this.state.name} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>Email:</div>
          <input className="userFormInput" id="email" value={this.state.email} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>Password:</div>
          <input className="userFormInput" id="password" value={this.state.password} onChange={this.changeHandler}></input>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.preventDefault();
    alert('click');
  }

  render() {
    return (
      <div>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <button className="checkOutBtn" onClick={this.clickHandler}>Check Out</button>
        <UserForm />
        <button onClick={this.clickHandler}>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
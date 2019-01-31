// you MUST place all of your React components into one file, app.jsx

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
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
      <div className="addressForm">
        <div>
          <div>Address:</div>
          <input className="addressFormInput" id="address1" value={this.state.address1} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>Apt:</div>
          <input className="addressFormInput" id="adress2" value={this.state.address2} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>City:</div>
          <input className="addressFormInput" id="city" value={this.state.city} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>State:</div>
          <input className="addressFormInput" id="state" value={this.state.state} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>Zip Code:</div>
          <input className="addressFormInput" id="zip" value={this.state.zip} onChange={this.changeHandler}></input>
        </div>
        <div>
          <div>Phone Number:</div>
          <input className="addressFormInput" id="phone" value={this.state.phone} onChange={this.changeHandler}></input>
        </div>
      </div>
    )
  }
}

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
      <div className="userForm">
        <div>
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
        <AddressForm />
        <button onClick={this.clickHandler}>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
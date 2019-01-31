// you MUST place all of your React components into one file, app.jsx
class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expDate: '',
      cvv: '',
      cardZip: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    if (this.props.displayForm === 'paymentForm') {
      return (
        <div className="paymentForm">
          <div>
            <div>Card Number:</div>
            <input className="paymentFormInput" id="cardNumber" value={this.state.cardNumber} onChange={this.changeHandler}></input>
          </div>
          <div>
            <div>Expiration Date:</div>
            <input className="paymentFormInput" id="expDate" value={this.state.expDate} onChange={this.changeHandler}></input>
          </div>
          <div>
            <div>CVV:</div>
            <input className="paymentFormInput" id="cvv" value={this.state.cvv} onChange={this.changeHandler}></input>
          </div>
          <div>
            <div>Zip Code:</div>
            <input className="paymentFormInput" id="cardZip" value={this.state.cardZip} onChange={this.changeHandler}></input>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

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
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    if (this.props.displayForm === 'addressForm') {
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
    } else {
      return null;
    }
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
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    if (this.props.displayForm === 'userForm') {
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
          <button onClick={this.clickHandler}>Next</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

function ActionButton(props) {
  return (
    <button className="checkOutBtn" onClick={props.clickHandler}>Check Out</button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      page: ''
    }
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
        <UserForm displayForm={this.state.page}/>
        <AddressForm displayForm={this.state.page}/>
        <PaymentForm displayForm={this.state.page}/>
        <ActionButton clickHandler={this.clickHandler}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// you MUST place all of your React components into one file, app.jsx
function Summary(props) {
  if (props.displayForm === 4) {
    return (
      <div>
        <div>DISPLAY SUMMARY HERE</div>
        <button className="purchaseBtn" onClick={props.clickHandler}>Purchase</button>
      </div>);
  } else {
    return null;
  }
}

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      cardNumber: '',
      expDate: '',
      cvv: '',
      cardZip: ''
    };
  }

  addPayment() {
    console.log(this.state);
  }

  changeHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.addPayment();
    this.props.updatePage();
  }

  render() {
    if (this.props.displayForm === 3) {
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
          <button className="nextBtn" onClick={this.clickHandler}>Next</button>
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
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
  }

  addAddress() {
    console.log(this.state);
  }

  changeHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.addAddress();
    this.props.updatePage();
  }

  render() {
    if (this.props.displayForm === 2) {
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
          <button className="nextBtn" onClick={this.clickHandler}>Next</button>
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
    this.clickHandler = this.clickHandler.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    console.log(this.state);
    // send this info to server to send to db
  }

  changeHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.addUser();
    this.props.updatePage();
  }

  render() {
    if (this.props.displayForm === 1) {
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
          <button className="nextBtn" onClick={this.clickHandler}>Next</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

// function ActionButton(props) {
//   if (props.currentPage === 0) {
//     return (
//       <button className="checkOutBtn" onClick={props.clickHandler}>Check Out</button>
//     )
//   } else if (props.currentPage === 4) {
//     return (
//       <button className="purchaseBtn" onClick={props.clickHandler}>Purchase</button>
//     )
//   } else {
//     return (
//       <button className="nextBtn" onClick={props.clickHandler}>Next</button>
//     )
//   }
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.state = {
      page: 0
    }
  }

  updatePage() {
    if (this.state.page < 4) {
      var newPage = this.state.page + 1;
    } else {
      var newPage = 0;
    }
    this.setState({
      page: newPage
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.updatePage();
  }

  render() {
    if (this.state.page === 0) {
      return (
        <div>
          <div>
            <h1>Shopping Cart</h1>
          </div>
          <UserForm displayForm={this.state.page} updatePage={this.updatePage}/>
          <AddressForm displayForm={this.state.page} updatePage={this.updatePage}/>
          <PaymentForm displayForm={this.state.page} updatePage={this.updatePage}/>
          <Summary displayForm={this.state.page} updatePage={this.updatePage}/>
          <button className="checkOutBtn" onClick={this.clickHandler}>Check Out</button>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <h1>Shopping Cart</h1>
          </div>
          <UserForm displayForm={this.state.page} updatePage={this.updatePage}/>
          <AddressForm displayForm={this.state.page} updatePage={this.updatePage}/>
          <PaymentForm displayForm={this.state.page} updatePage={this.updatePage}/>
          <Summary displayForm={this.state.page} updatePage={this.updatePage}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
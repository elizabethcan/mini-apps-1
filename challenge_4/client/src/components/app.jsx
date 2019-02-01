import TableColumn from "./tableColumn.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.switchPlayer = this.switchPlayer.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      player1 : true
    }
  }

  switchPlayer() {
    this.setState((state) => {
      return {player1: !state.player1}
    });
    console.log(this.state);
  }

  clickHandler(event) {
    event.preventDefault();
    console.log(`eventId: ${event.target.id}`);
    this.switchPlayer();
    // when column is clicked
      // pass click down to column component
      // column component will change state of cell component in order from index 0 to 5
  }

  render() {
    return (
      <div>
        <h1>Connect 4!</h1>
        <table className="column" id="column0" onClick={this.clickHandler}>
          <TableColumn />
        </table>
        <table className="column" id="column1" onClick={this.clickHandler}>
          <TableColumn />
        </table>
        <table className="column" id="column1" onClick={this.clickHandler}>
          <TableColumn />
        </table>
        <table className="column" id="column3" onClick={this.clickHandler}>
          <TableColumn />
        </table>
        <table className="column" id="column4" onClick={this.clickHandler}>
          <TableColumn />
        </table>
        <table className="column" id="column5" onClick={this.clickHandler}>
          <TableColumn />
        </table>
        <table className="column" id="column6" onClick={this.clickHandler}>
          <TableColumn />
        </table>
      </div>
    );
  }
}

export default App;
import TableColumn from "./tableColumn.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.preventDefault();
    console.log(`circleId: ${event.target.id}`);
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
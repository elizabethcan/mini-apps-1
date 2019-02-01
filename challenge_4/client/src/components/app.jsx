import TableColumn from "./tableColumn.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Connect 4!</h1>
        <table className="column">
          <TableColumn />
        </table>
        <table className="column">
          <TableColumn />
        </table>
        <table className="column">
          <TableColumn />
        </table>
        <table className="column">
          <TableColumn />
        </table>
        <table className="column">
          <TableColumn />
        </table>
        <table className="column">
          <TableColumn />
        </table>
        <table className="column">
          <TableColumn />
        </table>
      </div>
    );
  }
}

export default App;
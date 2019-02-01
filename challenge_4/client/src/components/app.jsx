import TableColumn from "./tableColumn.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Connect 4!</h1>
        <table className="inline-block">
          <TableColumn />
        </table>
        <table className="inline-block">
          <TableColumn />
        </table>
        <table className="inline-block">
          <TableColumn />
        </table>
        <table className="inline-block">
          <TableColumn />
        </table>
        <table className="inline-block">
          <TableColumn />
        </table>
        <table className="inline-block">
          <TableColumn />
        </table>
        <table className="inline-block">
          <TableColumn />
        </table>
      </div>
    );
  }
}

export default App;
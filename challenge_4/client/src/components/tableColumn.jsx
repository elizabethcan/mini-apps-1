import TableCell from "./tableCell.jsx";

class TableColumn extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.onclick;
  }

  render() {
    return (
      <tbody onClick={this.clickHandler}>
        <TableCell row="5"/>
        <TableCell row="4"/>
        <TableCell row="3"/>
        <TableCell row="2"/>
        <TableCell row="1"/>
        <TableCell row="0"/>
      </tbody>
    );
  }
}

export default TableColumn;
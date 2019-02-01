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
        <TableCell row="row5"/>
        <TableCell row="row4"/>
        <TableCell row="row3"/>
        <TableCell row="row2"/>
        <TableCell row="row1"/>
        <TableCell row="row0"/>
      </tbody>
    );
  }
}

export default TableColumn;
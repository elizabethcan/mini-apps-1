class TableCell extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      occupied: null,
    }
  }

  clickHandler(event) {
    event.preventDefault();
    this.placePiece();
  }

  placePiece() {
    this.setState({
      occupied: 'player1',
    });
  }

  render() {
    let className = 'cell';
    if (this.state.occupied !== null) {
      className += ' red'
    }
    return (
      <tr className="row">
        <td className={className} id={this.props.row} onClick={this.clickHandler}></td>
      </tr>
    );
  }
}

export default TableCell;
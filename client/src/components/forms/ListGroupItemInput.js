import React, { Component } from 'react';
import { ListGroupItem, Input } from 'reactstrap';

export class ListGroupItemInput extends Component {
  state = {
    clicked: false,
  };

  onClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // still needs onSubmit passed down from parent!

  render() {
    const { item } = this.props;

    if (!this.state.clicked) {
      return (
        <ListGroupItem key={item} onClick={this.onClick}>
          {item}
        </ListGroupItem>
      );
    } else {
      return (
        <ListGroupItem key={item}>
          <Input type="text" name="name" id="name" placeholder={item}></Input>
        </ListGroupItem>
      );
    }
  }
}

export default ListGroupItemInput;

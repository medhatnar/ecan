import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {red500, indigo300} from 'material-ui/styles/colors';
import { bindActionCreators } from 'redux';


const styles = {
  errorStyle: {
    color: red500,
  },
  floatingLabelStyle: {
    color: indigo300,
  },
  floatingLabelFocusStyle: {
    color: indigo300,
  },
};

class ComposeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
}

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});



render() {

  return (
        	 <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={1700}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
           <TextField hintText="Full width" fullWidth={true}/>
        </Drawer>
      </div>
    )
}

}
// function mapDispatchToProps(dispatch) {
 
//   return bindActionCreators({ reverse: reverse }, dispatch);
// }


export default ComposeForm;
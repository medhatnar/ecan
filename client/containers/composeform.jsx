import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTemplate } from '../actions/getTemplate.js';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton'
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';

const options = [
  { key: 'Initial', text: 'Initial', value: '1' },
  { key: 'Follow_Up', text: 'Follow Up', value: '2' },
  { key: 'Close', text: 'Close', value: '3' },
  { key: 'Scheduled', text: 'Scheduled', value: '4' },
  { key: 'Dnd', text: 'Do Not Disturb', value: 'dnd' }
]

const styles = {
  marginRight: 50,
  button: {backgroundColor:'b71c1c'},
  form: {
    padding: -11
  }
}

class ComposeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
                  open: false,
                  template:null
                };
}
  handleChange = (e, { value })  => this.props.getTemplate(value);

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

render() {

  return (
        	 <div>
          <br/>
                 <RaisedButton
                 label="Compose"
                 style={styles.button}
                 onTouchTap={this.handleToggle}
                  />
           <br/>
        <div>
        <Modal open={this.state.open} onClose={this.close} closeIcon='close'>
           <Form style={styles.form}>
              <Form.Group widths='equal'>
                <Form.Input label='To:' placeholder='Input e-mail' />
                <Form.Input label='Subject:' placeholder='E-mail Subject' />
                <Form.Select label='Template' onChange={this.handleChange} options={options} placeholder='Template' />
              </Form.Group>
              <Form.Group inline>
              </Form.Group>
              <Form.TextArea label='Body:' placeholder='Message Here' spellcheck='true' />
              <Form.Checkbox label='Save as Draft' onClick={() => console.log(this.state.template)} />
              <Form.Checkbox label='Delete' onClick={() => this.handleClose()} />
              <Form.Button>Submit</Form.Button>
            </Form>
        </Modal>
      </div>
      </div>
    )
}

}

function mapDispatchToProps(dispatch) {
 
  return bindActionCreators({ getTemplate : getTemplate }, dispatch);
}


export default ComposeForm;
import React from 'react';
import { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';

class MailRow extends Component {
  render() {
    return (

       <TableBody displayRowCheckbox={true}>
      <TableRow selectable={true} selected={false}>
        <TableRowColumn>image</TableRowColumn>
        <TableRowColumn>Speaker Name</TableRowColumn>
        <TableRowColumn>Subject title</TableRowColumn>
        <TableRowColumn>Attachment</TableRowColumn>
        <TableRowColumn>date or time</TableRowColumn>
        <Divider/>
      </TableRow>
      </TableBody>
      
    );
  }
}

export default MailRow;
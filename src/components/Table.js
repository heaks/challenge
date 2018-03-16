import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ContentTable = ({ rows }) => (
  <Table>
    <TableBody
      displayRowCheckbox={false}
      showRowHover={true}
    >
      {rows.map((row, i) =>
        <TableRow key={i}>
          <TableRowColumn>{row}</TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default ContentTable;
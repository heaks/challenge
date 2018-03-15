import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './styles.css';

const App = ({ rows, onSubmit, isDisabled, contentValue, setContentValue }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className="wrapper">
      {console.log('rows:', rows)}
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
      <div>
        <form onSubmit={onSubmit}>
          <TextField
            value={contentValue}
            onChange={(_, value) => setContentValue(value)}
          />
          <RaisedButton
            name="content"
            label="Send"
            type="submit"
            primary={true}
          />
        </form>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;

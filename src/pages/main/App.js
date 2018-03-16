import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import ContentTable from '../../components/Table';
import Form from '../../components/Form';
import './styles.css';

const App = ({ rows, onSubmit, isDisabled, contentValue, setContentValue }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className="wrapper">
      <ContentTable rows={rows}/>
      <Form {...{ onSubmit, isDisabled, contentValue, setContentValue }} />
    </div>
  </MuiThemeProvider>
);

export default App;

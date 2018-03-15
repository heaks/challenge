import React from 'react';
import './styles.css';

const App = ({ rows, onSubmit, isDisabled }) => (
    <div className="wrapper">
      {console.log('rows:', rows)}
      <table className="table" >
        <tbody>
        {rows.map((row, i) =>
            <tr key={i}><td>{row}</td></tr>
        )}
        </tbody>
      </table>
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name="content" />
            <button type="submit" disabled={isDisabled}>Send</button>
        </form>
    </div>
    </div>
);

export default App;

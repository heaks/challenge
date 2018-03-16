import { compose, withState, lifecycle, withHandlers } from 'recompose';
import axios from 'axios';

import App from './App';

const enhancer = compose(
  withState('rows', 'setRows', []),
  withState('isDisabled', 'setDisabled', false),
  withState('contentValue', 'setContentValue', ''),
  withHandlers({
    onSubmit: ({ setRows, setDisabled, contentValue, setContentValue }) => async e => {
      e.preventDefault();
      const content = contentValue.trim();
      if(!content) {
        return
      }
      try {
        const response = await axios.post('http://localhost:3001/', { content });
        const { data } = response;
        setRows(data);
        setContentValue('');
        if(data.length >= 10) {
          setDisabled(true);
        }
      } catch (error) {
        console.log('ERROR:', error);
        setContentValue('');
      }
    }
  }),
  lifecycle({
    async componentDidMount() {
      const { setRows } = this.props;
      const response = await axios.get('http://localhost:3001/');
      const { data }  = response;
      setRows(data);
    }
  })
);

export default enhancer(App);
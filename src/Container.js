import { compose, withState, lifecycle, withHandlers } from 'recompose';
import axios from 'axios';

import App from './App';

const enhancer = compose(
  withState('rows', 'setRows', []),
  withState('isDisabled', 'setDisabled', false),
  withHandlers({
      onSubmit: ({ setRows, setDisabled }) => async e => {
          e.preventDefault();
          const content = e.target.content.value;
          if(!content.trim()) {
            return
          }
          e.target.content.value = '';
          console.log('submitted:', content);
          // const response = await axios.post('http://localhost:3001/', { content });
          // console.log('response:', response);
          axios.post('http://localhost:3001/', { content })
              .then(response => {
                  console.log('response:', response);
                  const { data } = response;
                  setRows(data);
                  if(data.length >= 10) {
                    setDisabled(true);
                  }
              })
              .catch(error => {
                 console.log('error:', error);
              });
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
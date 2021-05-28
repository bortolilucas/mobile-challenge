import React from 'react';
import { Provider } from 'react-redux';
import store from '..';
import LoadingModal from '../../components/LoadingModal';
import { rehydrateRedux } from '../../helpers/storage';

const ReduxProvider = props => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    store.dispatch(rehydrateRedux()).finally(() => setReady(true));
  }, []);

  if (!ready) {
    return <LoadingModal />;
  }
  return <Provider {...props} store={store} />;
};

export default ReduxProvider;

import { useState } from 'react';
import LeadsList from '../components/LeadsList';
import { Provider } from 'react-redux';
import { store } from '../store/index';

const InternalPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  if (!authenticated) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return <Provider store={store}><LeadsList /></Provider>;
};

export default InternalPage;

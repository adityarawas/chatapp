import './App.css';
import Messenger from './components/Messenger/Messenger';
import AccountProvider from './context/AccountProvider';
function App() {
  return (
    <AccountProvider>
      <Messenger />
    </AccountProvider>
  );
}

export default App;

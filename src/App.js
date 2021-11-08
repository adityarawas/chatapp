import { lazy, Suspense } from 'react';
import "./App.css";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";
import TemplateProvider from "./theme/TemplateProvider";
const Messenger = lazy(() => import('./components/Messenger/Messenger'));
function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={'Loading'}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}
export default App;

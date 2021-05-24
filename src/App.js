import './App.css';
import Header from './components/Header';
import TabNav from './components/TabNav';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <TabNav />
      </div>
    </GlobalProvider>

  );
}

export default App;

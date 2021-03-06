import './App.css';

import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
        {/* Widgets */}

    </div>
  );
}

export default App;
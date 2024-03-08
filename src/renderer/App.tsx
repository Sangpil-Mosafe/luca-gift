import { ipcRenderer as ipc } from 'electron'; // Import ipcRenderer from electron
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import lucaOnTheBus from '../../assets/splash-dev.png';

function Hello() {
  return (
    <div>
      <h1>LUCA GIFT IMG FORMATTER</h1>
      <div className="Hello">
        <img
          width="350"
          height="350"
          alt="icon"
          src={lucaOnTheBus}
          style={{
            objectFit: 'cover',
            borderRadius: 8,
          }}
        />
      </div>

      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="books">
            🗜️
          </span>
          Compress
        </button>

        <button
          type="button"
          onClick={() => ipc.invoke('ipc-example')} // Handle onClick event using ipcRenderer
        >
          <span role="img" aria-label="folded hands">
            📄
          </span>
          Reformatting
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

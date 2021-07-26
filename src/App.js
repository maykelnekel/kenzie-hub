import Routes from './routes'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={2700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Routes/>
    </div>
  );
}

export default App;

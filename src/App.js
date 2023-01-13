import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'

function App() {
  return (
    <>
    {/* <Img /> */}
    <Profile />
    </>
  );
}

const Img = ()=>{
  return (<img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className='img-fluid hover-shadow rounded-4'
      alt=''
    />
    );
}

export default App;

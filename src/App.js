
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Home , About, Inputdata} from './pages';
import { Link,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/" className="w-full text-xl font-semibold object-contain ">Medical History</Link>
      <section className="w-full flex justify-end gap-5">
     
      <Link to="/" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Home</Link>
      <Link to="/about-page" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">About</Link>
      <Link to="/" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Login</Link>
      <Link to="/" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Sign Up</Link>
      </section>
      
    </header>
    <main className="sm:p-8 px-4 py-8  w-full bg-white min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-page' element={<About/>}/>        
        <Route path='/input-page' element={<Inputdata/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

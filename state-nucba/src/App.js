import logo from './logo.svg';
import './App.css';
import Car from './components/Car/Car';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


const App = () => {
  return (

  <div className='App'>
      <Main> 
          <Header />
          <Content />  
          <Footer />  
      </Main>
      
  </div>
  
  )
 
}

export default App;
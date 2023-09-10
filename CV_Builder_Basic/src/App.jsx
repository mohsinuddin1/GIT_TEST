import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './PersonalDetail'
import PersonalView from './PersonalView'
import EducationDetails from './EducationDetails'
import EducationView from './EducationView'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    BasicInfo: {
      name: "",
      email: "",
      phno: "",
      address: "",
    },
    EducationInfo: {
      highSchool: "",
      university: "",
      skill: "",
      workExperience: "",
    }
  });
  useEffect(()=>{
    const savedData=localStorage.getItem('formData');
    if(savedData){
      setFormData(JSON.parse(savedData));
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('formData',JSON.stringify(formData));
  },[formData])
 


  const clickInc = () => {
    setCount(count + 1);
  }
  const clickDec = () => {
    setCount(count - 1);
  }
  const handleChangeBasic = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(formData);
    setFormData(prev => ({ ...prev, BasicInfo: { ...prev.BasicInfo, [name]: value } }));
  }
  const handleChangeEducation = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({ ...prev, EducationInfo: { ...prev.EducationInfo, [name]: value } }));
  }
  const Save=()=>{
    localStorage.set(form)
  }


  return (
    <>
      <header className='header'>
        <h1 className='mainTitle'>CV Builder</h1>
      </header>
      <main className='main'>
        <div className='leftPanel'>
          <PersonalDetails details={formData.BasicInfo} handleChangeBasic={handleChangeBasic} />

          <EducationDetails details={formData.EducationInfo} handleChangeEducation={handleChangeEducation} />
        </div>



        <div className='rightPanel'>

          <PersonalView details={formData.BasicInfo} />
          <EducationView details={formData.EducationInfo} />

        

        </div>


      </main>
      <footer className='footer'>Made by Mohsin Uddin</footer>
    </>
  )
}

export default App

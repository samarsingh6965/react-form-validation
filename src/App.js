import './App.css';
import { useState } from 'react';

function App() {
  const [Name, setName] = useState("");
  const [NameError, setNameError] = useState(false);
  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const [Phone, setPhone] = useState("");
  const [PhoneError, setPhoneError] = useState(false);
  const [Age, setAge] = useState("");
  const [AgeError, setAgeError] = useState(false);
  const [Pan, setPan] = useState("");



  const handleName = (e) => {
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true)
    } else {
      setNameError(false)
    }
    setName(name)
  }


  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    setEmail(email)
  }


  const handlePhone = (e) => {
    let phone = e.target.value;
    if (isNaN(phone) || phone.length < 10 || phone.length > 10) {
      setPhoneError(true)
    } else {
      setPhoneError(false)
    }
    setPhone(phone)
  }

  const handleAge = (e) => {
    let panInput = document.getElementById('panNo')
    let age = e.target.value;
    if (isNaN(age) || age.length > 2) {
      setAgeError(true)
    } else if (age > 17) {
      panInput.disabled = false;
    } else {
      setAgeError(false)
      panInput.disabled = true;
    }
    setAge(age)
  }


  const handlePan = (e) => {
    let pan = e.target.value;
    setPan(pan)
  }

  const handleSubmit = () => {
    let popUp = document.getElementById('popUp')
    popUp.classList.add('top-14')
  }

  const handlePopUp = () => {
    let popUp = document.getElementById('popUp')
    popUp.classList.remove('top-14')
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[400px] py-6 border-2 rounded-xl gap-2 flex flex-col items-center mt-4">
          <input type="text" placeholder='Enter Your Name' value={Name} onChange={handleName} className='border rounded-lg border-black w-[350px] h-[35px] ps-2 outline-none' />
          {NameError ? <span className='text-red-500 ml-[-90px]'>Name Must be greater than 3-digits</span> : ""}
          <input type="text" onChange={handleEmail} placeholder='Enter Your Email' value={Email} className='border rounded-lg border-black w-[350px] h-[35px] ps-2 outline-none' />
          {EmailError ? <span className='text-red-500 ml-[-255px]'>Invalid Email</span> : ""}
          <input type="text" onChange={handlePhone} placeholder='Enter Your Phone' value={Phone} className='border rounded-lg border-black w-[350px] h-[35px] ps-2 outline-none' />
          {PhoneError ? <span className='text-red-500 ml-[-230px]'>Invalid Number</span> : ""}
          <input type="text" onChange={handleAge} placeholder='Enter Your Age' value={Age} className='border rounded-lg border-black w-[350px] h-[35px] ps-2 outline-none' />
          {AgeError ? <span className='text-red-500 ml-[-265px]'>Invalid Age</span> : ""}
          <input type="Text" id='panNo' onChange={handlePan} placeholder='Enter Your Pan No.' value={Pan} className='border disabled:hidden rounded-lg border-black w-[350px] h-[35px] ps-2 outline-none' disabled />
          <select name="Gender" id="gender" className='border rounded-lg border-black w-[350px] h-[35px] ps-2 outline-none'>
            <option value="Male" disabled >Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={handleSubmit} className='w-[350px] h-[35px] border border-blue-800 bg-blue-600 rounded-lg'>Save</button>
        </div>
      </div>
      <div id='popUp' className="containmer border-2 w-[50%] py-6 px-4 flex flex-col absolute -top-72 left-1/4 bg-white duration-150">
        <p className='text-xl font-medium bg-green-600 h-10 text-center leading-10 mb-2'>SUCCESS</p>
        <p className='text-xl font-medium ps-2'>Name : {Name}</p>
        <p className='text-xl font-medium ps-2'>Email : {Email}</p>
        <p className='text-xl font-medium ps-2'>Phone : {Phone}</p>
        <p className='text-xl font-medium ps-2'>Age : {Age}</p>
        <p className='text-xl font-medium ps-2'>Pan No. : {Pan}</p>
        <button className='w-full bg-red-700 mt-2 h-10 rounded-xl text-white' onClick={handlePopUp}>CLOSE POPUP</button>
      </div>
    </>
  );
}

export default App;

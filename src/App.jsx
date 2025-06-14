import { useState } from 'react';
import './App.css'
import HomePage from './HomePage.jsx';
import SigninPage from './SigninPage.jsx';
import LoginDetails from './LoginDetails.jsx';
import CreateAccount from './CreateAccount.jsx';

function App() {
  let [currpage, setcurrpage] = useState(false);
  let [loginpage, setloginpage] = useState(false);
  let [createpage, setcreatepage] = useState(false);

  const pages = (a) => {
    console.log(a);
    setcurrpage(a)
  }

  const pages2 = (b) => {
    console.log(b);
    setloginpage(true);
  }

  const pages3 = (c) => {
    console.log(c);
    setcreatepage(true);
  }

  return (
    <>
      {loginpage ? <LoginDetails /> : createpage ? <CreateAccount pages2={pages2} /> : currpage ? <SigninPage pages={pages} pages2={pages2} /> : <HomePage pages={pages} pages3={pages3} />}
    </>
  )
}

export default App


{/* {currpage? <SigninPage pages={pages}/> : <HomePage pages={pages} />}
      {loginpage? <LoginDetails/> : <SigninPage pages2 = {pages2} />} */} {/*This code doesn't work beacuse 1)You were rendering multiple components at the same time.2) signinPage was being rendered twice with different props (pages vs pages2), causing pages2 to not work as expected.*/}
      {/* {loginpage ? <LoginDetails /> : currpage ? <SigninPage pages={pages} pages2={pages2} /> : <HomePage pages={pages} />}
      {createpage ? <CreateAccount/> : <HomePage pages3 = {pages3} />}; */}
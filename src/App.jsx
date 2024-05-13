
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import Hookform from './components/Hookform/Hookform'
// import Refform from './components/RefForm/Refform'
// import Simpleform from './components/Simpleform'
// import Statefulform from './components/StatefulForm/Statefulform'

// import Reuseableform from "./components/Reuseableform/Reuseableform"

function App() {
  const handleSubmitsignup = data =>{
  console.log('sign up', data)
}
const handleupdateprofile = data =>{
  console.log('update', data)
}

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <Simpleform></Simpleform> 
      <Statefulform></Statefulform>
      <Refform></Refform>
      <Hookform></Hookform> */}
      {/* <Reuseableform formtitle={'Sign Up'} handleSubmit={handleSubmitsignup}>
         <div>
          <h3>Sign Up</h3>
          <h5>Please sign up right now</h5>
        </div>
      </Reuseableform>
      <Reuseableform handleSubmit={handleupdateprofile} formtitle={'Profile Update'} btnsubmittext={'Update'}>
        <h3>Update</h3>
        <h5>Please update right now</h5>
      </Reuseableform> */}
  
      <Grandpa></Grandpa>
    
      
    </>
  )
}

export default App

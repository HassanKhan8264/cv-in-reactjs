// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from './profile.jpg';

function Hi(){
  return <div>
    <div className='main'>
    <div className='left'>
      <div className="imgDiv">
    <img className="img" src={img} alt="profile-img"></img>
      </div>
      <div className="nameDiv">Hassan Khan</div>
    </div>
    <div className='right'>
    <h1>Resume</h1>
    <div className='para'>Hi My name is Hassan Khan I'm Front-end-developer I can design and Develop a custom website and redesign an existing Website currently I'm doing Web and Mobile Hybrid application cource From Saylani IT Mass Training Operation in Batch no 8 I'm passionate about programming my goal is to be a professional software developer and work with multinational companies </div>
    <p></p>
      <h1>Front-end-Developer</h1>
      <h3>Personal Info</h3>
    <div className='maininfo'>
      <div className='leftinfo'>
        <ul>
          <li>03132070176</li>
          <li>City: Karachi</li>
          <li>Age 19</li>
          <li>Birth-Day: 21 Nov 2002</li>
        </ul>
      </div>
      <div className='rightinfo'>
      <ul>
          <li>Education: Intermediate</li>
          <li>Emial: hf610061@gmail.com</li>
          <li>Freelance: Available</li>
        </ul>
      </div>
    </div>
    <h1>Skills</h1>
    <div className='skills'>
      HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT, GIT, FIREBASE, NETLIFY
    </div>
    <div className='links'>
      {/* <div className='html'></div>
      <div className='js'></div> */}
    </div>
    </div>
    </div>
  </div>

}
ReactDOM.render(<Hi/>,document.querySelector('#root'))

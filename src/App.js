import './App.css';

function App() {
  return (
    <>
      <div className='bg_img'>
        
        <div className='group'>
        <input type="text" placeholder="Search.."></input>
        <h1 className='city'>Budapest</h1>
          <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='' />
          <h2>Clear</h2>
        </div>
        <h2 className='temp'>5 &#8451;</h2>

        <div className='box_container'>
          <div className='box'>
            <p>Humudity</p>
            <h2>12%</h2>
          </div>
          <div className='box'>
            <p>Wind</p>
            <h2>5 km/h</h2>
          </div>
          <div className='box'>
            <p>Feels Like</p>
            <h2>4 &#8451;</h2>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;

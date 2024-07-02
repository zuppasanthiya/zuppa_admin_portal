import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './css/sb-admin-2.min.css';
import Card from './Components/Card';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
         {/* <Route path='/Card' element={<Card/>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 



// import React from 'react';
// import QRCodeComponent from './qrcode/QRCodeComponent';

// const App = () => {
//   const qrValue = 'https://shop.zuppa.io/'; // The value you want to encode in the QR code

//   return (
//     <div className="App">
//       <h1>QR Code Generator</h1>
//       <QRCodeComponent value={qrValue} />
//     </div>
//   );
// };

// export default App;

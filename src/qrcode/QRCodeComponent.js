import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeComponent = ({ value }) => {
  return (
    <div className="qr-code-container">
      <QRCodeCanvas value={value} size={256} bgColor={"#ffffff"} fgColor={"#000000"} level={"H"} includeMargin={true} />
    </div>
  );
};

export default QRCodeComponent;

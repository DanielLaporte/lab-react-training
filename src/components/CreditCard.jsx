import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  // Oculta todos los dígitos excepto los últimos 4
  const maskedNumber = "●●●● ●●●● ●●●● " + number.slice(-4);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: '300px',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '20px',
        marginTop: '40px',
      }}
    >
      {/* Palabra Visa/MasterCard en la parte superior derecha */}
      <div
        style={{
          fontSize: '20px', 
          position: 'absolute',
          top: '10px',
          right: '35px',
          textTransform: 'uppercase',
          marginTop: '15px',
        }}
      >
        {type === 'Visa' ? 'Visa' : 'MasterCard'}
      </div>

      {/* Números en el centro de la tarjeta */}
      <div
        style={{
          fontSize: '23px',
          letterSpacing: '4px',
          whiteSpace: 'nowrap', // Evita que los números se rompan en varias líneas
          textAlign: 'center',
          marginTop: '45px', // Centra horizontalmente los números
        }}
      >
        {maskedNumber}
      </div>

      {/* Detalles en la parte inferior */}
      <div style={{ 
        
         marginTop: '10px',
         marginRight: '150px',
         marginBottom: '-20px',
         
        }}>

        <p style={{ margin: '10px 0' }}> {/* Espaciado reducido entre párrafos */}
          Expires {expirationMonth.toString().padStart(2, '0')}/
          {expirationYear.toString().slice(-2)} BNP
        </p>        
        
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;

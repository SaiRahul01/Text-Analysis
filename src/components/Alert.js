import React, { useState } from 'react';

function Alert(props) {
    const [alertstyle, setalertstyle] = useState({
        width:'1000px',
    });
  return (
    props.aalert &&
    <div className={`alert alert-${props.aalert.type} alert-dismissible fade show mx-auto`} style={alertstyle} role="alert">
        <strong></strong>{props.aalert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
      
      
      

  );
}

export default Alert;

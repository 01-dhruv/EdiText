import React from 'react'

function Alerts() {
  return (
    <div style={{height : '60px'}}>

    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    </div>
  )
}

export default Alerts
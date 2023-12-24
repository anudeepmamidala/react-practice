import React from 'react'

const Condition = () => {
    let loggedin=false
  return (
    <div>
        { loggedin?
        
            (<p>yes!!</p>) : (<p>Noo!!</p>)
        
        }
        {loggedin || <p>MIODA GUDU</p>}
    </div>
  )
}

export default Condition
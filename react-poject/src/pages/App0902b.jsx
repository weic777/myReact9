import React, { useContext, useState } from 'react'

const App = () => {
    const Context=React.createContext();
    // 
    const Nav=()=>{
        return(
            <div className='nav'>
                <Btn/>
            </div>
        )
    }

    const Btn=()=>{
        const[signedIn,setSignedIn]=useContext(Context)
        return(
            <button onClick={()=>setSignedIn(!signedIn)}>
                {/* 登出 */}
                {signedIn?'登出': '登入'}
            </button>
        )

    }
    const[signedIn,setSignedIn]=useState(false)
  return (
    <div>
        <h1></h1>
        <hr />
        <Context.Provider value={[signedIn,setSignedIn]}>
            <Nav/>
            <h2>
                {signedIn?"Signed In":"Sigmed Out"}
            </h2>
            </Context.Provider>
            
    </div>
  )
}

export default App
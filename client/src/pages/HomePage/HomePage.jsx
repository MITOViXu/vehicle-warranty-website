import React from 'react'
import Hero from '../../components/Hero/Hero'
import Option from '../../components/Option/Option'
const HomePage = ({theme}) => {
  return (
    <div className="" style={{marginTop:"65px"}}>
      <Hero theme={theme}/>
      {/* <Option /> */}
    </div>
  )
}

export default HomePage
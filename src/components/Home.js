import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import modelS from   "../images/model-s.jpg"
import modely from   "../images/model-y.jpg"
import model3 from   "../images/model-3.jpg"
import modelx from   "../images/model-x.jpg"
import solarpanel from   "../images/solar-panel.jpg"
import solarroof from   "../images/solar-roof.jpg"
import accessories from   "../images/accessories.jpg"

function Home() {
  return (
    <Container>
       <Section 
           title="Model S"
           description="Order Online for Touchless Delivery"
           backgroundImg={modelS}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
        <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg={modely}
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      />
       <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg={model3}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
      />
       <Section 
       title="Model X"
       description="Order Online for Touchless Delivery"
       backgroundImg={modelx}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
     /> 
     <Section 
         title="Lowest Cost Solar Panels in America"
         description="Money-back guarantee"
         backgroundImg={solarpanel} 
         leftBtnText="Order now"
         rightBtnText="Learn more"
     />
    <Section 
       title="Solar for New Roofs"
       description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
       backgroundImg={solarroof}
       leftBtnText="Order now"
       rightBtnText="Learn more"
    />   
    <Section 
         title="Accessories"
         description=""
         backgroundImg={accessories} 
         leftBtnText="Shop now"
         rightBtnText=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
   height: 100vh;
`

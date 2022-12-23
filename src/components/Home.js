import React from 'react'
import styled from "styled-components"
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section 
        title="Model S"
        description ="Schedule a Test Drive"
        leftbtnButton ="Buy Now"
        RightbtnButton ="Custom Order"
        BackgroundImage = "model-3.jpg"
      />
      <Section
        title="Model Y"
        description ="Schedule a Test Drive"
        leftbtnButton ="Buy Now"
        RightbtnButton ="Custom Order"
        BackgroundImage ="model-y.jpg"
      />
      <Section
        title="Model S"
        description ="Schedule a Test Drive"
        leftbtnButton ="Buy Now"
        RightbtnButton ="Custom Order"
        BackgroundImage ="model-S.jpg"
      />
      <Section
        title="Model X"
        description ="Schedule a Test Drive"
        leftbtnButton ="Buy Now"
        RightbtnButton ="Custom Order"
        BackgroundImage ="model-x.jpg"
      />
      <Section
        title="Solar Panels"
        description ="Lowest Cost Solar Panels in America"
        leftbtnButton ="Order Now"
        RightbtnButton ="learn More"
        BackgroundImage ="solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        description ="Produce Clean Energy From Your Roof"
        leftbtnButton ="Order Now"
        RightbtnButton ="learn More"
        BackgroundImage ="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftbtnButton ="Shop Now"
        BackgroundImage ="accessories.jpg"
      />
    </Container>
  )
}

const Container = styled.div`
height: 100vh;
`

export default Home

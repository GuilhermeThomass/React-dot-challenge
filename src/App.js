import React, { useState } from 'react'
import Global from './style/global';
import { Section,Dot, Button, Container } from './style/appStyle';

function App() {
  const [list,setList] = useState([]);
  const [undid,setUndid] = useState([]);
  
  const handleClick = (e) =>{
    const newDot = {
      x: e.clientX,
      y: e.clientY
    }
    setList((prev) => [...prev, newDot]);
  }

  const handleUndo = (e) =>{
    e.stopPropagation();

    if(list.length === 0){
      return;
    }

    const lastItem = list[list.length-1];
    setUndid((prev)=>[...prev, lastItem]);

    setList((prev) => {
      const newArray = [...prev].slice(0,-1);
      return newArray
    });
  }
  const handleRedo = (e) =>{
    e.stopPropagation();

    if(undid.length === 0){
      return;
    }

    const lastDot = undid[undid.length-1];

    setUndid((prev) => {
      const newArray = [...prev].slice(0,-1);
      return newArray
    });
    setList((prev) => [...prev, lastDot]);

  }
  return (
    <Section onClick={handleClick}>
      <Container>
        <Button onClick={handleUndo}>Undo</Button>
        <Button onClick={handleRedo}>Redo</Button>
      </Container>
      <Global/>
      {list.map((item) => (
        <Dot style={{left: item.x - 10, top: item.y - 10 }}/>
      ))}
    </Section>

  );
}

export default App;

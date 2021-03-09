import styled from 'styled-components';

export default function ProjectComponents () {
  return (
    <>
      <Container>
        <Scroll></Scroll>
      <Title>
        <Num>1</Num>
        &nbsp;&nbsp;
        {' // Projects ' }
      </Title><br />
      <Num>2</Num><br />
      <MVP>
        <Num>3</Num>
        &nbsp;&nbsp;
        Meditative Musical Drum
        <br />
        <Num>4</Num>
        &nbsp;&nbsp;
        Minimum viable product for phone app to create self-designed meditative music<br />
        <Num>5</Num>
        &nbsp;&nbsp;&nbsp;
        <ProjectLink href="https://imgur.com/a/PLkZOSH" target="_blank">Click here to view!</ProjectLink>
      </MVP>
      <br/><br/><br/>
      <Num>6</Num>
      <br/>
      <FEC>
        <Num>7</Num>
        &nbsp;&nbsp;
        Bitey
        <br />
        <Num>8</Num>
        &nbsp;&nbsp;
        Single page web app for users to view a product from a popular pet supply website<br />
        <Num>9</Num>
        &nbsp;&nbsp;&nbsp;
        <ProjectLink href="https://imgur.com/a/Ir0r0fK" target="_blank">Click here to view!</ProjectLink>
      </FEC>
      <br/><br/><br/>
      <Num>10</Num>
      <SDC>
        <Num>11</Num>
        &nbsp;
        Bullseye
        <br />
        <Num>12</Num>
        &nbsp;
        Legacy project independently scaled and deployed using service-oriented architecture<br />
        <Num>13</Num>
        &nbsp;&nbsp;
      </SDC>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  left: 42%;
  height: 100vh;
  top: 0;
  width: 58%;
`;

const Scroll = styled.div`
  color: #909090;
  position: absolute;
  border: 1px solid #494949;
  height: 100vh;
`;

const Num = styled.span`
  margin-left: 5px;
  color: #909090;
`;

const Title = styled.span`
  position: relative;
  color: white;
`;

const ProjectLink = styled.a`
  color: #d09d81;
`;

const MVP = styled.div`
  position: absolute;
  color: white;
`;

const FEC = styled(MVP)``;
const SDC = styled(MVP)``;
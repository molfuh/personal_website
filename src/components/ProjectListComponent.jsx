import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Resume from '../Resume.pdf';

const Num = styled.li`
  color: #909090;
  display: block;
  margin-left: 2.5em;
  text-overflow: clip;
  white-space: nowrap;
  &:before {
      display: inline-block;
      content: counter(item) "";
      counter-increment: item;
      width: 2em;
      margin-left: -2em;
  }
  @media (max-width: 768px) {
    white-space: break-spaces;
  }
  span {
    color: white;
  }
  `;

  const ProjectLink = styled.a`
  color: #d09d81;
`;

let projectTitles=['INT Magazine','Meditative Musical Drum','Positively Tedious','Resume','title 4','title 5'];
let projectTitlesList=[];
projectTitles.forEach((title,index)=>{
    projectTitlesList.push( <Num key={index}><span>{title}</span></Num>)
})
let projectDescription=['Online magazine highlighting creative themes and topics',
'Minimum viable product for phone app to create self-designed meditative music','Portfolio website for new musician TEDIOUS to showcase important artist information','(Includes hidden surprise behind draggable logo!)','description 4','description 5'];
let projectDescriptionList=[];
projectDescription.forEach((description,index)=>{
    projectDescriptionList.push( <Num key={index}><span>{description}</span></Num>)
})
let projectURL=['https://www.intmagazine.com/',
'https://meditativemusicaldrum.netlify.app/','https://positivelytedious.com/',Resume,'URL 4','URL 5'];
let projectURLList=[];
projectURL.forEach((URL,index)=>{
    projectURLList.push( <Num key={index}><ProjectLink href={URL} target="_blank" rel="noreferrer">Click here to view!</ProjectLink></Num>)
})
function ProjectListComponent() {
  return (
    <>
      <ListContainer>
        <Num>
            <Title>{' // Projects ' }</Title>
        </Num>
        <Num/>
        {projectTitlesList[0]}
        {projectDescriptionList[0]}
        {projectURLList[0]}
        <Num/>
        {projectTitlesList[2]}
        {projectDescriptionList[2]}
        {projectDescriptionList[3]}
        {projectURLList[2]}
        <Num/>
        {projectTitlesList[1]}
        {projectDescriptionList[1]}
        {projectURLList[1]}
        <Num/>
        <Num/>
        {projectTitlesList[3]}
        {projectURLList[3]}
        <Num/>
      </ListContainer>
    </>
  );
}

export default ProjectListComponent;


const Title = styled.span`
  position: relative;
  color: white;
`;

const ListContainer = styled.ol`
counter-reset: item;
margin-left: 0;
padding-left: 0;
margin-top: 0;
`;

import React from 'react';
import SkillComponent from '../components/SkillsComponent/SkillsComponents';
import Interest from '../components/SkillsComponent/Interest';
import Courses from '../components/SkillsComponent/Course';

const Skills = () => {
  return (
    <>
      <SkillComponent />
      <Courses />
      <Interest />
    </>
  );
};

export default Skills;

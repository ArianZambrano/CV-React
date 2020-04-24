import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (
    <div className="Experience">
        <div className="Experience-container">
            {
                props.data.map((exp, index) => (
                    <div className="Experience-item" key = {`Exp-${index}`}>
                        <H2Styled name="Experience" />       
                        <H3Styled>
                            <span>{exp.occupation}</span>
                            <span>{exp.institution}</span>
                            <span>{exp.startDate} - {exp.endDate}</span>
                        </H3Styled>
                        {props.data && <PStyled name="No experience yet" />}
                    </div>
                ))
            }          
        </div>
    </div>
);

export default Experience;
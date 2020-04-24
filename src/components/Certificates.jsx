import React from 'react';
import H2Styled from '../styled/H2Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
            {
                props.data.map((cer, index) => (
                    <div className="Certificates-item"  key = {`Cer-${index}`}>
                       <H2Styled name="Certificates" />
                            <PStyled name={cer.date} />
                            <PStyled name={cer.institution} />
                            <PStyled name={cer.description} />
                            <PStyled name={cer.name} />
                     </div>
                ))
            }        
        </div>
    </div>
);

export default Certificates;
import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid red;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px regba(0,0,0,0.6)
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: red;
`;

const AboutProfession = styled.p`
    margin = .2em 0 0 0;
    letter-spacing: 1.6px;
    font-wight: 300;
    color: red; 
`;

const AboutBio = styled.p`
    color: gray;
    font-size: 1em;
    font-wight: 300;
`;

const AboutAdress = styled.p`
    color: gray;
    font-size: 1em;
    font-wight: 400;
`;

const About = ({ name, profession, adress, email, phone, social, avatar }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name}/>
                </figure>
            </AboutAvatar>
            <AboutName >
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-adress">
                <AboutAdress>{adress}</AboutAdress>
            </div>
            <div className="About-email">
                <AboutBio>{email}</AboutBio>
            </div>
            <div className="About-phone">
                <AboutBio>{phone}</AboutBio>
            </div>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;
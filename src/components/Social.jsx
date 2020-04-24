import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'; 

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: black;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color}
`;

const facebook = {
    color: "#3b5998"
}

const github = {
    color: "#333"
}

const instagram = {
    color: "#0e76a8"
}

const getColor = (name) =>{
    if (name === 'facebook') return facebook;
    if (name === 'github') return github;
    if (name === 'instagram') return instagram;
}

const Social = props => (
    <SocialStyle>
        {
            props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`Social-${index}`}>
                        <SocialAnchor href={item.url} target="_blank">
                            <ThemeProvider theme={getColor(item.name)} />             
                            <SocialIcon className={`fa fa-${item.name}`} />
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl >
        }
    </SocialStyle>
);

export default Social;
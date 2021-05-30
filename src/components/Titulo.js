import React from 'react';
import styled from '@emotion/styled'

const Titulo = ({ titulo }) => {

    const Title = styled.h1`
        text-align: center;
        margin-top: 30px;
        font-size: 50px;
    `;

    return (
        <Title className="lead">{titulo}</Title>
    );
}

export default Titulo;
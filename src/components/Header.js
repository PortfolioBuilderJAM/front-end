import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Top = styled.section`
	height: 15vh;
	background: #9370db;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 30px;
	font-weight: 400;
	color: #ffffff;
`;

const Header = () => {
	return (
		<Top>
			<Link to='/'>
				<Title>Porfolio Builder</Title>
			</Link>
		</Top>
	);
};

export default Header;

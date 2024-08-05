import { type FC } from 'react';
import styled from 'styled-components';

type ButtonType = 'primary' | 'secondary';

interface Props {
	children: string;
	type: 'primary' | 'secondary';
	onClick?: () => void;
}

const ButtonStyled = styled.button<{ $type: ButtonType }>`
	background-color: ${({ $type }) => ($type === `primary` ? `green` : `red`)};
	color: white;
	padding: 10px 20px;
	border-radius: 10px;
	cursor: pointer;
`;

export const Button: FC<Props> = ({ children, type, onClick }) => (
	<ButtonStyled $type={type} onClick={onClick}>
		{children}
	</ButtonStyled>
);

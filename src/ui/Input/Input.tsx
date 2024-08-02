import { type FC } from 'react';
import styled from 'styled-components';

interface Props {
	value?: string | number;
	readOnly?: boolean;
}

const InputStyled = styled.input`
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 8px 16px;

	&:read-only {
		background: #bebbbb;
	}
`;

export const Input: FC<Props> = ({ value, readOnly }) => <InputStyled value={value} readOnly={readOnly} />;

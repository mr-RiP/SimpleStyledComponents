import * as React from "react";
import styled from "styled-components";

export interface IMessageBoxProps {
	text: string;
}

export class MessageBox extends React.Component<IMessageBoxProps, {}> {
	private static frame = styled.div`
		width: 200px;
		height: 100%;
		color: yellow;
		background-color: black;
		border-color: red;
		border-width: 5px;
		padding: 25px;
		margin: 25px;
	`;

	render() {
		const { text } = this.props;

		return (
			<MessageBox.frame>
				<p>{text}</p>
			</MessageBox.frame>
		)
	}
}
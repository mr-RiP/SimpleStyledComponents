import * as React from "react";
import styled from "styled-components";

export interface IMessageBoxProps {
	textLines: string[];
}

export class MessageBox extends React.Component<IMessageBoxProps, {}> {
	private static container = styled.div`
		width: 600px;
		height: 100%;
		color: yellow;
		background-color: black;
		border-color: red;
		border-width: 5px;
		padding: 25px;
		margin: 25px;
	`;

	render() {
		const { textLines } = this.props;

		return (
			<MessageBox.container>
				{textLines.map((line) => <p>{line}</p>)}
			</MessageBox.container>
		)
	}
}
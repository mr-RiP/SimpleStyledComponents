import * as React from "react";
import { MessageBox } from "./MessageBox";

export interface IEntryPointProps {
	text: string;
}

export class EntryPoint extends React.Component<IEntryPointProps, {}> {
	render() {
		const { text } = this.props;

		return (
			<MessageBox text={text} />
		);
	}
}
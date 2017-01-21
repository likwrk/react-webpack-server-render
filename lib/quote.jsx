import React from "react";

export default class Quote extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editItem: null
		}
	}

	handleClick(e) {
		if (e) e.preventDefault();
		store.dispatch({
			type: 'ADD_ITEM',
			item: 'Item1'
		})
	}

	componentDidMount() {
		console.log('component mounted');
	}

	handleKeyup(e, i) {
		switch (e.keyCode) {
			case 13:
				store.dispatch({
					type: 'EDIT_ITEM',
					index: i,
					value: e.target.value
				})
			case 27:
				this.setState({editItem: null})
		}
	}

	handleItemClick(i) {
		this.setState({editItem: i})
	}

	render() {
		let items = this.props.items;
		return(
			<div>
				<button onClick={this.handleClick}>Add item!!!</button>
				<ul>
					{items.map((item, i) => <li key={i}>
						{(i === this.state.editItem)
							? <input autoFocus onKeyUp={e => {this.handleKeyup(e, i)}} type="text" defaultValue={item} />
							: <span onClick={(e) => {this.handleItemClick(i)}}>{item}</span>}
					</li>)}
				</ul>
			</div>
		)
	}
}
import React from 'react';
import Notes from './notes';
import uuid from 'uuid'


export default class App extends React.Component {
	constructor(props) {
			super(props)

			this.state = {
					notes: [
							{
								id: uuid.v4(),
								task: 'Learn stuff'
							},
							{
								id: uuid.v4(),
								task: 'Do laundry'
							}
					]
			}
	}
		
	render() {
		const {notes} = this.state;
		return (
			<div>
				<button onClick={this.addNote}>add new</button>
				<Notes 
					onDelete={this.deleteNote}
					notes={notes}
					onEdit={this.editNote}
					onNoteClick={this.activateNoteEdit} />
			</div>
		)
	}

	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
					id: uuid.v4(),
					task: 'Something new'
			}])
		})
	}

	deleteNote = (id, e) => {
		e.stopPropagation()
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		})
	}

	activateNoteEdit = (id) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id === id ) note.editing = true;
				return note;
			})
		})
	}

	editNote = (id, task) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if (note.id === id ) {
					note.editing = false;
					note.task = task;
				}
				return note;
			})
		})
	}
}
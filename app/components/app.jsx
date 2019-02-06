import React from 'react';
import Notes from './notes';
import uuid from 'uuid'
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {
	
	render() {
		const {notes} = this.props;
		return (
			<div>
				<button
					className='add-note'
					onClick={this.addNote}>add new</button>
				<Notes
					onDelete={this.deleteNote}
					notes={notes}
					onEdit={this.editNote}
					onNoteClick={this.activateNoteEdit} />
			</div>
		)
	}

	addNote = () => {
		this.props.create({
			id: uuid.v4(),
			task: 'Something new'
		})
	}

	deleteNote = (id, e) => {
		e.stopPropagation()
		this.props.delete(id)
	}

	activateNoteEdit = (id) => {
		this.props.update({id, editing:true})
	}

	editNote = (id, task) => {
		this.props.update({id, task, editing:false})
	}
}

export default connect(({notes}) => ({
	notes
}),
	NoteActions
)(App)

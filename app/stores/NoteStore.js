import uuid from 'uuid';


class NoteStore {

  constructor() {
    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ]
  }

}

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = `${new Date().toISOString()} ${todoText}`;
    this.text = todoText;
  }
}

export default Todo;

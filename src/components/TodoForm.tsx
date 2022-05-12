import { Todo } from "./TodoItem";

export interface TodoFormProps {
  text: Todo["text"];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TodoForm({ text, onSubmit, onValueChange }: TodoFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={onValueChange}
        required
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default TodoForm;

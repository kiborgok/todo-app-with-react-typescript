export type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
}>;

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggleDone: () => void;
}

function TodoItem({ todo, onDelete, onToggleDone }: TodoItemProps) {
  return (
    <div key={todo.id}>
      <input
        onClick={onToggleDone}
        type="checkbox"
        checked={todo.done}
      />{" "}
      <span className={todo.done ? "done" : ""}>{todo.text}</span> |{" "}
      <span className="delete" onClick={onDelete}>
        Delete
      </span>
      <br />
      <br />
    </div>
  );
}

export default TodoItem;

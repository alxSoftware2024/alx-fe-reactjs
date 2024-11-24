import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

// Test rendering of TodoList
test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a todo app')).toBeInTheDocument();
});

// Test adding a new todo
test('adds a new todo', () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test toggling a todo
test('toggles a todo completion status', () => {
  render(<TodoList />);

  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);

  expect(todo).toHaveStyle('text-decoration: line-through');
  
  fireEvent.click(todo);
  
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

// Test deleting a todo
test('deletes a todo', () => {
  render(<TodoList />);

  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

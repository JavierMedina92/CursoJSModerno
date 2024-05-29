import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 *  @param {string} elementId
 *  @param {Todo} 
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos );
    }

// Cuando la función App() se llama
( () => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append( app );
    displayTodos();
    })();

}
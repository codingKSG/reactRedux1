// 액션
export const create = (todo) => ({ type: 'CREATE', todo: todo });
export const toggle = (id) => ({ type: 'TOGGLE', id: id });
export const remove = (id) => ({ type: 'REMOVE', id: id });

// 상태
const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

// 액션의 결과를 걸러내는 친구
// reducer (누산기 : 결과를 스택에 채우는 것) updater
const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;

import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

// **** FSA 규칙을 따르는 액션 생성 함수 정의(Flux Standard Action)
// redux-action - createAction : 액션 생성 함수들을 간편하게 만들어 줌. 
// export const changeInput = text => ({ type: CHANGE_INPUT, payload: text });
// export const create = text => ({ type: CREATE, payload: text });
// export const enter = id => ({ type: ENTER, payload: id });
// export const leave = id => ({ type: LEAVE, payload: id });
// **** 위의 액션 함수들을 createAction 으로 액션 만들기 ↓↓↓↓
let id = 3;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => ({text, id : id++}));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

// **** 초기 상태 정의
const initialState = {
    input: '',
    list: [
      {
        id: 0,
        name: '홍길동',
        entered: true,
      },
      {
        id: 1,
        name: '콩쥐',
        entered: false,
      },
      {
        id: 2,
        name: '팥쥐',
        entered: false,
      },
    ],
  };
  
  // **** handleActions 로 리듀서 함수 작성
  export default handleActions(
    {
      [CHANGE_INPUT]: (state, action) => ({
        ...state,
        input: action.payload,
      }),
      [CREATE]: (state, action) => ({
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          name: action.payload.text,
          entered: false,
        }),
      }),
      [ENTER]: (state, action) => ({
        ...state,
        list: state.list.map(item => item.id === action.payload ? { ...item, entered: !item.entered }: item),
      }),
      [LEAVE]: (state, action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      }),
    },
    initialState
  );
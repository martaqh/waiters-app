import { API_URL } from "../config";

//selectors
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllTables = state => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPLOAD_TABLES = createActionName('UPLOAD_TABLES');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

// action creators
export const uploadTables = payload => ({type: UPLOAD_TABLES, payload });
export const addTable = payload => ({type: ADD_TABLE, payload });
export const removeTable = payload => ({type: REMOVE_TABLE, payload });


export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
    .then(res => res.json())
    .then(tables => dispatch(uploadTables(tables)));
  }
};

export const updateServerData = (id, status, people, places, bill) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        status: status,
        people: people,
        places: places,
        bill: bill
      }),
    };
    
    fetch(API_URL + '/tables/' + id, options)
    .then(() => dispatch(fetchTables()))
  }
}

export const addTableToServer = (newTable) => {
  return (dispatch) => {
    console.log('!', newTable)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newTable
      }),
    };
    
    fetch(API_URL + '/tables', options)
    .then(() => dispatch(addTable(newTable)))
  }
}

  export const removeTableFromServer = (tableId) => {
    return (dispatch) =>{
    const options = {
      method: 'DELETE',  
    };
    fetch(API_URL + '/tables/' + tableId, options)
    .then(() => dispatch(removeTable(tableId)))
    }
  }
  
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPLOAD_TABLES:
      return [...action.payload]
    case ADD_TABLE:
      return [...statePart, {...action.payload}];
    case REMOVE_TABLE:
      return statePart.filter(table => table.id !== action.payload)
    default:
      return statePart;
  };
};
export default tablesReducer;
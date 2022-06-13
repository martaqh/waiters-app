//selectors
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllTables = state => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPLOAD_TABLES = createActionName('UPLOAD_TABLES');
//const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const uploadTables = payload => ({type: UPLOAD_TABLES, payload });
//export const updateTable = payload => ({type: UPDATE_TABLE, payload });


export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(uploadTables(tables)));
  }
};

export const updateServerData = (id, status, people, places, bill) => {
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
    
    fetch('http://localhost:3131/tables/' + id, options)
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPLOAD_TABLES:
      return [...action.payload]
    
 /*   case UPDATE_TABLE:
      return [...action.payload] */
    default:
      return statePart;
  };
};
export default tablesReducer;
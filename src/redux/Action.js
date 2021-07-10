
export const ADD_CLIENT = "ADD_CLIENT";

export const DELETE_CLIENT = "DELETE_CLIENT";

export function add_client(state) {
    return {
      type: ADD_CLIENT ,
      payload: state,
    };
  }
  
  export function delete_client(id) {
    return {
      type: DELETE_CLIENT,
      payload: id,
    };
  }

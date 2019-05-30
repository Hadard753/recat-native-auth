export default (state = null, action: {type: string, payload: any}) => {
  switch(action.type) {
      case 'select_card': 
        return action.payload; 
      default: 
        return state;
  }  
};
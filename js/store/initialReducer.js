const initialReducer =  (state=false, action) =>{
	switch(action.type){
		case 'TEST_REDUCER': return true;
		default: return false;
	}
}

module.exports = initialReducer;

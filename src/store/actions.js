import axios from 'axios';
const {REACT_APP_BASE_URL}={REACT_APP_BASE_URL: "http://localhost:5000"};
export const add_task = async(navigate,task,id) =>{
    try {
        const url=`${REACT_APP_BASE_URL}/tasks${id?`/`+id:``}`;
        const response = id?await axios.put(url,task):await axios.post(url,task); 
        if(response.status){
            alert(`Success!`);
            navigate(`/`);
        }else{
            alert(`Failed!`);
        }
    } catch (error) {
       console.error('Error fetching tasks:', error);
    }

}

export const get_task =async(dispatch,id) =>{
    try {
        const url=`${REACT_APP_BASE_URL}/tasks${id?`/`+id:``}`;
        const response = await axios.get(url); 
        dispatch({
            type: id?`GET_TASK`:'TASK_LIST',
            payload: response.data
        })
    } catch (error) {
    console.error('Error fetching tasks:', error);
    }
}
export const delete_task=async(dispatch,id) =>{
    try {
        const url=`${REACT_APP_BASE_URL}/tasks/${id}`;
        const response = await axios.delete(url); 
        if(response.status){
            alert(`Success!`);
            get_task(dispatch);
        }else{
            alert(`Failed!`);
        }
    } catch (error) {
    console.error('Error fetching tasks:', error);
    }

}  
  
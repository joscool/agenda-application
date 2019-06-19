import axios from "../axios/axios"
import moment from "moment"

export const ADD_AGENDUM = 'ADD_AGENDUM';
export const FETCH_AGENDA = 'FETCH_AGENDA';
export const DELETE_AGENDUM = 'DELETE_AGENDUM';


const _addAgendum = (agendum) => {
    return { type: ADD_AGENDUM, agendum };
}

//thunk
export const addAgendum = (agendumData = {}) => {
    return (dispatch) => {
        console.log(agendumData);
        const query = `mutation{
            createAgendum(title:"${agendumData.title}",time:"${agendumData.time}",description:"${agendumData.description}",location:"${agendumData.location}"){
                title
                time
                location
                description
                id
            }
}
`;

        return axios.post('/', { query }).then(result => {
            const data = result.data.data.createAgendum;
            const ms = Number(data.time);
            data.time = moment(ms).format("DD-MM-YYYY HH:mm");
            return dispatch(_addAgendum(data));
        });
    }
}

const _deleteAgendum = (id = 0) => {
    return { type: DELETE_AGENDUM, id };
}

//thunk
export const deleteAgendum = (id = 0) => {
    return dispatch => {
        const query = `mutation{
    deleteAgendum(id: ${ id})
}
`;
        console.log(query);
        return axios.post('/', { query }).then(result => {
            dispatch(_deleteAgendum(id));
        });
    }
}

const _fetchAgenda = agenda => {
    return { type: FETCH_AGENDA, agenda };
}


//thunk
export const fetchAgenda = () => {

    return dispatch => {
        const query = `{
    agenda{
        title
        location
        time
        description
        id
    }
}
`;
        return axios.post("/", { query }).then(results => {
            dispatch(_fetchAgenda(results.data.data.agenda.map(agendum => {
                const ms = Number(agendum.time);
                agendum.time = moment(ms).format("DD-MM-YYYY HH:mm");
                return agendum;
            })));
        });
    }
}






import { ADD_AGENDUM, FETCH_AGENDA, DELETE_AGENDUM } from "../actions/agenda"

const initialAgendaState = [];

export default (state = initialAgendaState, action) => {
    switch (action.type) {
        case ADD_AGENDUM:
            return [...state, action.agendum];
        case DELETE_AGENDUM:
            return state.filter(agenda => agenda.id !== action.id);
        case FETCH_AGENDA:
            return action.agenda;
        default:
            return state;
    }
}

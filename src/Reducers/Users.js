import * as types from '../Constants';

const usersArr = [
    {firstName: "Test", lastName: "User", id: 1, isAdmin: false, skills: ["React", "Koa"]},
    {firstName: "Test", lastName: "User 2", id: 2, isAdmin: false, skills: ["Angular", "Express"]},
    {firstName: "Admin", lastName: "User", id: 3, isAdmin: true, skills: ["React", "Redux"]}
]

let userId = 4;

function user(state, action) {
    switch (action.type) {
        case types.ADD_USER:
            return {
                id: userId++,
                firstName: action.firstName,
                lastName: action.lastName,
                isAdmin: false,
                skills: action.skills
            }
        default: return state
    }
}

function users (state = usersArr, action) {
    switch (action.type) {
        case types.ADD_USER:
            return [...state, user(undefined, action)];
        case types.REMOVE_USER:
            return state.filter(usr => usr.id !== action.userId)
        default: return state
    }
}

export default users;
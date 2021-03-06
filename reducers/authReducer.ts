import { user, users } from "../data/users";

export type AuthActions = {
    type: "Log_IN",
    id: number
} | {
    type: "Log_Out",
} | {
    type: "Create_Account",
    userName: string,
    email: string,
    password: string,
}

export const authReducer = (state: user[] = users, action: AuthActions) => {
    const copyState = [...state]
    switch (action.type) {
        case "Log_IN":
            copyState.map(user => user.id === action.id ? user.auth = true : user)
            return copyState

        case "Log_Out":
            copyState.map(user => user.auth ? user.auth = false : user)
            return copyState

        case "Create_Account":
            fetch("/api/users", {
                method: "POST",
                body: JSON.stringify({ name: action.userName, email: action.email, password: action.password }),
                headers: {
                    "Accept":"Application/json, text/plain, */* ",
                    "Content-type": "Application/json"
                }
            }).then(res => res.json()).then(data => copyState.push(data)).catch(err => console.log(err))
            return copyState

        default:
            return state
    }
}
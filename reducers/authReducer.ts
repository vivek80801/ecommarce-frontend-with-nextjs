import { user, users } from "../data/users";

export type AuthActions = {
    type: "Log_IN",
    id: number
} | {
    type: "Log_Out",
    id: number
}

export const authReducer = (state: user[] = users, action: AuthActions) => {
    const copyState = [...state]
    switch (action.type) {
        case "Log_IN":
            copyState.map(user => user.id === action.id ? user.auth = true : user)
            return copyState

            case "Log_Out":
                
                return copyState

        default:
            return state
    }
}
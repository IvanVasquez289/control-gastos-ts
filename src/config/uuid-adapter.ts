import {v4} from "uuid"

export const uuidAdapter = {
    v4: () => {
        return v4()
    }
}
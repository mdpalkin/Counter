export const initialState = {
    minCount: 0,
    maxCount: 5,
    currentCount: 0,
    alarm: "",
    temporaryMin: 0,
    temporaryMax: 5,
}

export type CounterAppType = typeof initialState

export const counterReducer = (state: CounterAppType = initialState, action: CounterReducerActionType) => {
    switch (action.type) {
        case "SET_MIN_COUNT":
            return {...state, minCount: action.payload.newMinCount}
        case "SET_MAX_COUNT":
            return {...state, maxCount: action.payload.newMaxCount}
        case "SET_CURRENT_COUNT":
            return {...state, currentCount: action.payload.newCurrentCount}
        case "SET_ALARM":
            return {...state, alarm: action.payload.alarm}
        case "SET_TEMPORARY_MIN":
            return {...state, temporaryMin: action.payload.newTemporaryMin}
        case "SET_TEMPORARY_MAX":
            return {...state, temporaryMax: action.payload.newTemporaryMax}
        default:
            return state
    }
}

export type CounterReducerActionType =
    SetMaxCountType | SetMinCountType | SetCurrentCountType
    | SetAlarmType | SetTemporaryMinType | SetTemporaryMaxType

type SetMaxCountType = ReturnType<typeof setMaxCount>
export const setMaxCount = (newMaxCount: number) => {
    return {
        type: "SET_MAX_COUNT",
        payload: { newMaxCount }
    } as const
}

type SetMinCountType = ReturnType<typeof setMinCount>
export const setMinCount = (newMinCount: number) => {
    return {
        type: "SET_MIN_COUNT",
        payload: { newMinCount }
    } as const
}

type SetCurrentCountType = ReturnType<typeof setCurrentCount>
export const setCurrentCount = (newCurrentCount: number) => {
    return {
        type: "SET_CURRENT_COUNT",
        payload: { newCurrentCount }
    } as const
}

type SetAlarmType = ReturnType<typeof setAlarm>
export const setAlarm = (alarm: string) => {
    return {
        type: "SET_ALARM",
        payload: { alarm }
    } as const
}

type SetTemporaryMinType = ReturnType<typeof setTemporaryMin>
export const setTemporaryMin = (newTemporaryMin: number) => {
    return {
        type: "SET_TEMPORARY_MIN",
        payload: { newTemporaryMin }
    } as const
}

type SetTemporaryMaxType = ReturnType<typeof setTemporaryMax>
export const setTemporaryMax = (newTemporaryMax: number) => {
    return {
        type: "SET_TEMPORARY_MAX",
        payload: { newTemporaryMax }
    } as const
}




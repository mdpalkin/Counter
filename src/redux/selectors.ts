import {rootStateType} from "./store";

export const minCountSelector = (state: rootStateType) => state.counter.minCount
export const maxCountSelector = (state: rootStateType) => state.counter.maxCount
export const currentCountSelector = (state: rootStateType) => state.counter.currentCount
export const temporaryMinSelector = (state: rootStateType) => state.counter.temporaryMin
export const temporaryMaxSelector = (state: rootStateType) => state.counter.temporaryMax
export const alarmSelector = (state: rootStateType) => state.counter.alarm
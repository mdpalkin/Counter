import { counterReducer, initialState, setMaxCount, setMinCount, setCurrentCount, setAlarm, setTemporaryMin, setTemporaryMax, setIsButtonDisable } from "./counter-reducer";

describe("counterReducer", () => {
    it("should return initial state", () => {
        expect(counterReducer(undefined, {} as any)).toEqual(initialState);
    });

    it("should handle SET_MIN_COUNT", () => {
        const newMinCount = 2;
        const action = setMinCount(newMinCount);
        const newState = counterReducer(initialState, action);
        expect(newState.minCount).toEqual(newMinCount);
    });

    it("should handle SET_MAX_COUNT", () => {
        const newMaxCount = 10;
        const action = setMaxCount(newMaxCount);
        const newState = counterReducer(initialState, action);
        expect(newState.maxCount).toEqual(newMaxCount);
    });

    it("should handle SET_CURRENT_COUNT", () => {
        const newCurrentCount = 3;
        const action = setCurrentCount(newCurrentCount);
        const newState = counterReducer(initialState, action);
        expect(newState.currentCount).toEqual(newCurrentCount);
    });

    it("should handle SET_ALARM", () => {
        const newAlarm = "Alarm!";
        const action = setAlarm(newAlarm);
        const newState = counterReducer(initialState, action);
        expect(newState.alarm).toEqual(newAlarm);
    });

    it("should handle SET_TEMPORARY_MIN", () => {
        const newTemporaryMin = 1;
        const action = setTemporaryMin(newTemporaryMin);
        const newState = counterReducer(initialState, action);
        expect(newState.temporaryMin).toEqual(newTemporaryMin);
    });

    it("should handle SET_TEMPORARY_MAX", () => {
        const newTemporaryMax = 8;
        const action = setTemporaryMax(newTemporaryMax);
        const newState = counterReducer(initialState, action);
        expect(newState.temporaryMax).toEqual(newTemporaryMax);
    });

    it("should handle SET_IS_BUTTON_DISABLE", () => {
        const isButtonDisable = false;
        const action = setIsButtonDisable(isButtonDisable);
        const newState = counterReducer(initialState, action);
        expect(newState.isBtnDisable).toEqual(isButtonDisable);
    });
});
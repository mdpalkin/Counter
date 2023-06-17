import {
    counterReducer,
    initialState,
    setMaxCount,
    setMinCount,
    setCurrentCount,
    setAlarm,
    setTemporaryMin,
    setTemporaryMax
} from './counter-reducer';

describe('counterReducer', () => {

    it('should handle SET_MIN_COUNT', () => {
        const newMinCount = 1;
        expect(counterReducer(initialState, setMinCount(newMinCount))).toEqual({
            ...initialState,
            minCount: newMinCount
        });
    });

    it('should handle SET_MAX_COUNT', () => {
        const newMaxCount = 10;
        expect(counterReducer(initialState, setMaxCount(newMaxCount))).toEqual({
            ...initialState,
            maxCount: newMaxCount
        });
    });

    it('should handle SET_CURRENT_COUNT', () => {
        const newCurrentCount = 3;
        expect(counterReducer(initialState, setCurrentCount(newCurrentCount))).toEqual({
            ...initialState,
            currentCount: newCurrentCount
        });
    });

    it('should handle SET_ALARM', () => {
        const alarm = 'Time is up!';
        expect(counterReducer(initialState, setAlarm(alarm))).toEqual({
            ...initialState,
            alarm
        });
    });

    it('should handle SET_TEMPORARY_MIN', () => {
        const newTemporaryMin = 2;
        expect(counterReducer(initialState, setTemporaryMin(newTemporaryMin))).toEqual({
            ...initialState,
            temporaryMin: newTemporaryMin
        });
    });

    it('should handle SET_TEMPORARY_MAX', () => {
        const newTemporaryMax = 7;
        expect(counterReducer(initialState, setTemporaryMax(newTemporaryMax))).toEqual({
            ...initialState,
            temporaryMax: newTemporaryMax
        });
    });
});
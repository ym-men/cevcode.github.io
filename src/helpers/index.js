import get from 'lodash/get';
import set from 'lodash/set';

export const addDefault = (object, key, defaultVal) => {
    const item = get(object, key, undefined);
    if (item !== undefined) {
        return item;
    }
    set(object, key, defaultVal);
    return defaultVal;
};

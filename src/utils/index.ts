// 数组转对象
export function arrayToMap<T = any, GetValue extends (item: T) => any = () => T>(
    arr: T[],
    getKey?: (item: T) => string,
    getValue?: GetValue,
) {
    const map: Record<string, ReturnType<GetValue>> = {};
    const _getValue = getValue || ((item: T) => item);
    const _getKey = getKey || (item => item);
    if (!arr) return map;
    arr.forEach(item => {
        map[_getKey(item) as string] = _getValue(item);
    });
    return map;
}

export function isSameObject(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
    keys?: string[],
) {
    if (!obj1 || !obj2) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    const compareKeys = keys || keys1;
    for (let i = 0; i < compareKeys.length; i++) {
        const key1 = compareKeys[i];
        const key2 = compareKeys[i];
        if (key1 !== key2 || obj1[key1] !== obj2[key2]) return false;
    }
    return true;
}
export function shallowEqualKeys(obj1: object, obj2: object, keys?: string[]) {
    if (!obj1 || !obj2) return false;
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        return isSameObject(obj1, obj2, keys);
    }
    return false;
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
export function uuid() {
    return S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4();
}

export default (key, newValue, obj) => {
    let newObj = { ...obj };
    newObj[key] = newValue;
    return newObj;
}
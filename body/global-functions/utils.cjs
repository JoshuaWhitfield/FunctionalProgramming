const callable = (checkElem) => {
    if ((typeof(checkElem) == "function")) return true
    return false
}

module.exports = {
    callable
}

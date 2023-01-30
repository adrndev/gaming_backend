function throwError (msg: String): void {
    console.error('\x1b[31m%s\x1b[0m', `ERROR | ${msg}`)
}

export { throwError }
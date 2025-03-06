module.exports = {
    "*.{ts,tsx}": [
        () => "tsc --noEmit --project ./tsconfig.json",
        // "prettier --write",
        // "eslint . --report-unused-disable-directives",
    ]
}

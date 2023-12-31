const env = process.env;

const CONFIG = Object.keys(env)
    .filter(entry => /^REACT_APP_/.test(entry))
    .reduce((accumulator: { [key: string]: string }, entry: string) => {
        accumulator[entry.replace(/^REACT_APP_/, '')] = env[entry] || '';

        return accumulator;
    }, {});

export default CONFIG;

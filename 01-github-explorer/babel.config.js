module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript', // Tipagem do Typescript
        ['@babel/preset-react',{
            runtime: 'automatic'
        }],
    ]
};
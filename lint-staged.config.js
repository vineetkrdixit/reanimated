module.exports={
    "*/**/*.(ts,tsx,js,jsx)":[
        'yarn lint',
        "yarn lint:fix",
        'yarn prettier',
        'yarn test'
    ]
}
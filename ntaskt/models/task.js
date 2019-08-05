module.exports = app =>{
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "fazer compras"},
                {title: "Consertar Pc"}
            ]);
        }
    };
};
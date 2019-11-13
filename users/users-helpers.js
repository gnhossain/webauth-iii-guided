module.exports = {
    validateUser
};

function validateUser(user){
    let errors = [];

    if (!user.username || user.username.length <2){
        errors.push("Please include a password")
        
    }
    
    return{
        isSucessful: true
    };
}
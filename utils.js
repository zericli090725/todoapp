const jwt = require('jsonwebtoken')

const createMessage = (msg, err) => ({ msg, err });

const signToken = userID => {
    return jwt.sign({
        iss: "apple cider",
        sub: userID
    }, "apple cider", { expiresIn: "3hr" });
}
module.exports = {
    createMessage,
    signToken
}
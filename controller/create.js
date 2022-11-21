const conn = require("../models/connection");
const User = require("../models/user");
const ShippingAddress = require("../models/address");

const register = async () => {

    const session = await conn.startSession();
    try {
        session.startTransaction();
        const user = await User.create([
            {
                name: 'Devashish'
            }
        ], { session });
        console.log("user", user);
        await ShippingAddress.dfe([
            {
                address: 'Delhi',
                user_id: user.id
            }
        ], { session });
        await session.commitTransaction();

        console.log('success');
    } catch (error) {
        console.log('error', error);
        await session.abortTransaction();
    }
    session.endSession();
}

module.exports = {
    register
}
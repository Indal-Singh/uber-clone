const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vehicleType}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType)
    {
        throw new Error("All fileds Are Required");
    }
    const captain = captainModel.create({
        fullname:{
            firstname,lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain;
};

module.exports.getCaptainByEmail = async (email) => {
    const captain = await captainModel.findOne({ email });
    return captain;
}

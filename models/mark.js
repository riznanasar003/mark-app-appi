const mongoose = require ("mongoose")
const schema = mongoose.Schema(
    {
        "sid":{type:String,required:true},
        "sname":{type:String,required:true},
        "scourse":{type:String,required:true},
        "percentage":{type:String,required:true},
    }
)

let markmodel = mongoose.model("marks",schema);
module.exports = {markmodel}
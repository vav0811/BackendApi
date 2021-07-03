var mongoose=require("mongoose");

const studentSchema=new mongoose.Schema(
                {
                    Name:{
                        type:String,
                        required:[true,"Student name is required"],
                        index:true
                    },
                    Class:{
                        type:String,
                        required:[true,"Student Class is required"],
                        index:true
                    },
                    Section:{
                        type:String,
                        required:[true,"Student Section is required"],
                        index:true
                    },
                    Subject:{
                        type:String,
                        required:[true,"Student Subject is required"],
                        index:true
                    }
                

                                    
                },
                {
                    timestamps:true

                }
)
module.exports=new mongoose.model('Student',studentSchema);
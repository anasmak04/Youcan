const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user4Schema = new Schema({
   email:{
      type: String,
      required: true
   },
   lien: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   },


    Type_Cheked: {
       type: String,
       possibleValues: ['مشكلة الدفع','مشكلة تقنية','مشاكل أخرى']
    }
   
},{
   timestamps: true,
  
})
module.exports = mongoose.model('Contact', user4Schema);
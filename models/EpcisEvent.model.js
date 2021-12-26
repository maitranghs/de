const mongoose = require('mongoose')
const { Schema } = mongoose

const EpcisEventSchema = new Schema({
  action: String,
  event_type: String,
  epc_list: [String],
  child_epcs: [String],
  parent_id: String,
  input_epc_list: [String],
  output_epc_list: [String],
  event_time: Date,
  record_time: Date,
  read_point: String,
  biz_location: String,
  biz_step: String,
  disposition: String,
  biz_transaction_list: {
    type: String,
    value: String
  },
  extensions: {
    fieldName: String,
    prefix: String,
    values: [String]
  }
});

const EpcisEvent = mongoose.model('epcis_event', EpcisEventSchema);

exports.createEpcisEvent = (epcisEventData) => {
  epcisEventData.event_time = new Date(epcisEventData.event_time);
  epcisEventData.record_time = new Date();
  const event = new EpcisEvent(epcisEventData);
  return event.save();
};

exports.findByLocationAndTime = (rp, etf, ett) => {
    return EpcisEvent.find({
      read_point: rp, 
      event_time: {
        "$gte": new Date(etf), 
        "$lt": new Date(ett)}}).exec();
}
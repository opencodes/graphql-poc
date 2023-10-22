import mongoose from "mongoose";
import { environment } from "../environment";

mongoose.Promise = global.Promise;

mongoose.connect(environment.clusterUrl, {
  useNewUrlParser: true,
});

const widgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  soldout: {
    type: String,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
  stores: {
    type: Array,
    required: true,
  },
});

const WidgetModel = mongoose.model("widgets", widgetSchema);
export default WidgetModel;

const { default: mongoose } = require("mongoose");

const EngineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const EngineMODEL =
  mongoose.models.Engines || mongoose.model("Engines", EngineSchema);

export default EngineMODEL;

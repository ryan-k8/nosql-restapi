const Patient = require("../../models/patient");
const { objectIdSchema } = require("../../models/validation/schema");
const { ExpressError } = require("../../util/err");

module.exports = async ({ uid, id }) => {
  try {
    const resultId = await objectIdSchema.validateAsync(id);

    const patient = await Patient.findById(resultId);

    if (!patient) {
      return [new ExpressError("no patient found", 404), null];
    }

    if (patient.doctor.toString() !== uid.toString()) {
      return [null, false];
    }

    return [null, true];
  } catch (err) {
    return [err, null];
  }
};

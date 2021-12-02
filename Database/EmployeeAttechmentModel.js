const mongoose = require("mongoose");

const EmployeeAttechmentSchema = mongoose.Schema(
  {
    EmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployeeModel",
    },
    AttachmentName: {
      type: String,
    },
    AttachmentTypeAndUrlURL: {
      data: Buffer,
      contentType: String,
    },
    CreatedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const EmployeeAttechmentModel = mongoose.model(
  "EmployeeAttechmentModel",
  EmployeeAttechmentSchema
);
module.exports = EmployeeAttechmentModel;

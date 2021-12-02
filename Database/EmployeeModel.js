const mongoose = require("mongoose");
const validator = require("validator");

const EmployeeSchema = mongoose.Schema(
  {
    EmployementSubType: {
      type: String,
      trim: true,
      lowercase: true,
    },
    EmployeeCode: {
      type: String,
      trim: true,
      lowercase: true,
    },
    EmployementType: {
      type: String,
      trim: true,
      lowercase: true,
    },
    EmployementFullName: {
      type: String,
      trim: true,
      lowercase: true,
    },
    Designation: {
      type: String,
      trim: true,
      lowercase: true,
    },
    DateOfJoining: {
      type: Date,
    },
    Gender: {
      type: String,
      trim: true,
      lowercase: true,
    },
    Team: {
      type: String,
      trim: true,
      lowercase: true,
    },
    Department: {
      type: String,
      trim: true,
      lowercase: true,
    },
    Branch: {
      type: String,
      trim: true,
      lowercase: true,
    },
    WeeklyOfDay: {
      type: String,
      trim: true,
      lowercase: true,
    },
    Shift: {
      type: String,
      trim: true,
      lowercase: true,
    },
    DateOfBirthOnPapers: {
      type: Date,
    },
    DateOfBirth: {
      type: Date,
    },
    PersonalPhoneNo: {
      type: String,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Mobile Number is inValid");
        }
      },
    },
    PersonalEmailId: {
      type: String,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is inValid");
        }
      },
    },
    PANNumber: {
      type: String,
      minLength: 10,
      maxLength: 10,
      trim: true,
      lowercase: true,
    },
    AadharNumber: {
      type: Number,

      min: 12,
      max: 12,
    },
    PassportNumber: {
      type: String,
      trim: true,
      lowercase: true,
    },
    MaritalStatus: {
      type: String,
      trim: true,
      lowercase: true,
    },
    BloodGroup: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+"],
    },
    Religion: {
      type: String,
      trim: true,
      lowercase: true,
    },
    OfficialPhoneNO: {
      type: Number,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}/.test(v);
        },
        message: "{VALUE} is not a valid 10 digit number!",
      },
    },
    OfficailEmailId: {
      type: String,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new mongoose.Error("please enter valid email...");
        }
      },
    },
    OfficailLetterIssued: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["yes", "no"],
    },
    OfferLetterIssueDate: {
      type: Date,
    },
    EmployeeIdCardIssued: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["yes", "no"],
    },
    EmployeeIdCardIssuedDate: {
      type: Date,
    },
    AppointmentLetterIssued: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["yes", "no"],
    },
    AppointmentLetterIssuedDate: {
      type: Date,
    },
    ConfirmationLatter: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["yes", "no"],
    },
    ConfirmationLatterDate: {
      type: Date,
    },
    TotalYearsOfExperience: {
      type: Number,
      trim: true,
    },
    TotalExperience: {
      type: String,
      trim: true,
      lowercase: true,
    },
    RelavantExperience: {
      type: String,
      trim: true,
      lowercase: true,
    },
    PreviousOrganizationName: {
      type: String,
      trim: true,
      lowercase: true,
    },
    PreviousOrganizationDesignation: {
      type: Boolean,
      trim: true,
      lowercase: true,
    },
    PreviousOrganizationStartDate: {
      type: Date,
    },
    PreviousOrganizationEndDate: {
      type: Date,
    },
    HighestQualification: {
      type: String,
      trim: true,
    },
    QualificationName: {
      type: String,
      trim: true,
    },
    UniversityOrBoardName: {
      type: String,
      trim: true,
    },
    InstitutionName: {
      type: String,
      trim: true,
    },
    PassedOutYear: {
      type: Number,
      min: 4,
      max: 4,
    },
    CvOrResume: {
      type: Boolean,
    },
    InterviewAssesmentSheet: {
      type: Boolean,
    },
    Photograph: {
      type: Boolean,
    },
    TenthMarkSheetCopy: {
      type: Boolean,
    },
    HighestQualificationCopy: {
      type: Boolean,
    },
    PanCardCopy: {
      type: Boolean,
    },
    TemporaryAddressProofCopy: {
      type: Boolean,
    },
    PermanentAddressProofCopy: {
      type: Boolean,
    },
    NOCFromTheCollege: {
      type: Boolean,
    },
    ResignationOrRelievingLetter: {
      type: Boolean,
    },
    Last3MonthsSalarySlips: {
      type: Boolean,
    },
    Last6MonthsBackStatement: {
      type: Boolean,
    },
    DeclarationOnStampPaper: {
      type: Boolean,
    },
    BankName: {
      type: String,
      trim: true,
    },
    BankAccountNo: {
      type: String,
      trim: true,
    },
    BankIFSCCode: {
      type: String,
      trim: true,
    },
    PFNo: {
      type: String,
      trim: true,
    },
    PFUANNo: {
      type: String,
      trim: true,
    },
    ESINo: {
      type: String,
      trim: true,
    },
    AddressType: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["current", "permanent", "mailing"],
    },
    AddressLine1: {
      type: String,
      trim: true,
    },
    AddressLine2: {
      type: String,
      trim: true,
    },
    AreaOrLocation: {
      type: String,
      trim: true,
    },
    Country: {
      type: String,
      trim: true,
    },
    State: {
      type: String,
      trim: true,
    },
    City: {
      type: String,
      trim: true,
    },
    PinCode: {
      type: Number,
      trim: true,
    },
    MothersFullName: {
      type: Number,
      trim: true,
    },
    MothersDOB: {
      type: Date,
    },
    FathersFullName: {
      type: String,
      trim: true,
    },
    FatherDOB: {
      type: Date,
    },
    SiblingsFulllName: {
      type: String,
    },
    SiblingsDOB: {
      type: Date,
    },
    SpounseFullName: {
      type: String,
    },
    SpounseDOB: {
      type: Date,
    },
    NoOfChildren: {
      type: Number,
    },
    NoticePeriodServed: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["yes", "no"],
    },
    DateOfResignation: {
      type: Date,
    },
    ResignationStatus: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["accepted", "not accepted"],
    },
    DateOfAcceptanceOfResignation: {
      type: Date,
    },
    DateOfExit: {
      type: Date,
    },
    EmployeeStatus: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["active", "inactive"],
    },
    TypeOfExit: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["voluntary", "non voluntary"],
    },
    TypeOfExitSubType: {
      type: String,
      trim: true,
      lowercase: true,
      enum: [
        "behavioral issue",
        "absconding",
        "better",
        "opportunity",
        "personal reason",
        "join & left",
        "non",
        "performer",
      ],
    },
    AbscondingSince: {
      type: Date,
    },
    AbscondingEndDate: {
      type: Date,
    },
    AbscondingRemarks: {
      type: String,
    },
    AssetsHandoverStatus: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["yes", "no"],
    },
    FullAndFinalStatus: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);
module.exports = EmployeeModel;

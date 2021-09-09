import Sticky from "react-sticky-el";
import { GetInfo, GetSpacedInfo, GetSummary } from "../GetInput";
import Box from "../StyledComponent/StyledBox";
import usePaparse from "../__Hooks/usePaparse";

const MappedData = ({ context, sticky }) => {
  const URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";

  const [data] = usePaparse(URL);

  const filteredPatient = data.filter((item) =>
    item.Patient.includes(context.patient)
  );

  return (
    Array.isArray(filteredPatient) &&
    filteredPatient.map((item, index) => (
      <ul key={index}>
        <Sticky className="sticky" id={!sticky ? "not-sticky" : "sticky"}>
          <img
            src={
              item.Picture ||
              "https://static.thenounproject.com/png/3201525-200.png"
            }
            alt=""
          />
          <h3>{item.Patient}</h3>
        </Sticky>

        <div className="patient-info" key={index}>
          <GetSummary className={"summary"} item={item.Summary} />

          <Box>
            <GetInfo
              title={"Diagnosis"}
              className={"info"}
              item={item.Diagnosis}
            />

            <GetInfo
              title={"Allergies"}
              className={"info"}
              item={item.Allergies}
            />

            <GetInfo
              title={"Medication"}
              className={"info"}
              item={item.Medication}
            />

            <GetInfo
              title={"DNR [Do Not Resuscitate]"}
              className={"info"}
              item={item.DNR}
            />
          </Box>

          <h3>Personal Information</h3>

          <Box>
            <GetInfo title={"Email"} className={"info"} item={item.Email} />

            <GetInfo
              title={"Date of Birth"}
              className={"info"}
              item={item.DoB}
            />

            <GetInfo
              title={"NHS Number"}
              className={"info"}
              item={item.NHS_Number}
            />

            <GetInfo
              title={"Father's Name"}
              className={"info"}
              item={item.Father}
            />

            <GetInfo
              title={"Mother's Name"}
              className={"info"}
              item={item.Mother}
            />

            <GetInfo title={"GP"} className={"info"} item={item.GP} />

            <GetSpacedInfo
              title={"Next of Kin"}
              className={"info"}
              item={item.NextOfKin}
              item2={item.NoK_Contact}
            />
          </Box>

          <h3>More Info</h3>
          <Box>
            <GetInfo title={"History"} className={"info"} item={item.History} />
          </Box>
        </div>
      </ul>
    ))
  );
};

export default MappedData;

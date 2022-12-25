import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import moment from "moment";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";
import Navbar from "../AllUserComponents/Navbar";
import ReactSearchBox from "react-search-box";
const StartSession = () => {
  const { id } = useParams();
  const [appointment, setAppointments] = useState([]);
  const [prescription, setPrescription] = useState([]);
  const [value, setValue] = useState("");
  const [medId, setMedId] = useState("");

  //Prescription variables
  const [Chief_complaint, setComplaint] = useState([]);
  const [On_evaluation, setEval] = useState([]);
  const [Deduction, setDed] = useState([]);
  const [Advancement, setAdv] = useState([]);

  const [medicines, setMedicines] = useState([]);
  const [pmeds, setPmeds] = useState([]);
  useEffect(() => {
    axiosConfig.get(`/appointments/${id}`).then(
      (rsp) => {
        setAppointments(rsp.data);
        // setDoctor(rsp.data.Name);
        // setPatients(rsp.data.Appointments[0].Patient.Name);
        const data = {
          Id: rsp.data.Id,
          Doctor_Id: rsp.data.Doctor_Id,
          Patient_Id: rsp.data.Patient_Id,
          startedAt: moment().format(),
          endedAt: null,
          status: "In Session",
          revisit_count: rsp.data.revisit_count,
        };
        console.log(data);
        debugger;

        axiosConfig.post(`/appointments/update/${id}`, data).then(
          (rsp) => {
            debugger;
          },
          (err) => {
            debugger;
          }
        );
      },
      (err) => {
        debugger;
      }
    );

    axiosConfig.get("/medicines").then(
      (rsp) => {
        setMedicines(rsp.data);
        debugger;
      },
      (err) => {
        debugger;
      }
    );
  }, []);

  const handlePrescription = (event) => {
    event.preventDefault();

    const prescription = {
      Appointment_Id: appointment.Id,
      Chief_complaint: Chief_complaint,
      On_evaluation: On_evaluation,
      Deduction: Deduction,
      Advancement: Advancement,
    };
    debugger;
  };

  const onChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const onSearch = (searchTerm, id) => {
    setValue(searchTerm);
    setMedId(id);
    console.log(searchTerm, id);
  };

  const onAdd = () => {
    console.log(value, medId);

    setPmeds((current) => [...current, medId]);
    //console.log(pmeds);
  };
  console.log(pmeds);
  //console.log(medId);

  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <form onSubmit={handlePrescription}>
          <center>
            <table>
              <tr>
                <td>
                  <b>Chief Complaint: </b>
                </td>
                <td>
                  <textarea
                    onChange={(e) => {
                      setComplaint(e.target.value);
                    }}
                    value={Chief_complaint}
                    placeholder="What problems did the patient discuss?"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <b>On Evaluation: </b>
                </td>
                <td>
                  <textarea
                    onChange={(e) => {
                      setEval(e.target.value);
                    }}
                    value={On_evaluation}
                    placeholder={"What did you find?"}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Deduction: </b>
                </td>
                <td>
                  <textarea
                    onChange={(e) => {
                      setDed(e.target.value);
                    }}
                    value={Deduction}
                    placeholder={"What are you suspecting?"}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Advancement:</b>
                </td>
                <td>
                  <textarea
                    onChange={(e) => {
                      setAdv(e.target.value);
                    }}
                    value={Advancement}
                    placeholder={"Recommendations"}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Medicines:</b>
                </td>
                <td>
                  <div className="search-container" name="medicine add">
                    <div className="search-inner">
                      <input type="text" value={value} onChange={onChange} />
                      <button onClick={() => onAdd()}> Add Medicine </button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "border: 1px solid gray",
                      }}
                    >
                      {medicines
                        .filter((item) => {
                          const searchTerm = value.toLowerCase();
                          const name = item.Name.toLowerCase();

                          return (
                            searchTerm &&
                            name.startsWith(searchTerm) &&
                            name !== searchTerm
                          );
                        })
                        .map((item) => (
                          <div
                            onClick={() => onSearch(item.Name, item.Id)}
                            className="dropdown-row"
                            key={item.Id}
                          >
                            {item.Name}
                          </div>
                        ))}
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <tr>
              <td colSpan={2}>
                <input type={"submit"} value={"Set Prescription"} />
              </td>
            </tr>
          </center>
        </form>
      </div>

      <div
        style={{
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: "50px",
        }}
      >
        <fieldset>
          <legend>Prescribed Medicines</legend>
          <ol>
            {pmeds.map((item) => {
              <li>{medicines[item].Name}</li>;
            })}
          </ol>
        </fieldset>
      </div>
    </div>
  );
};
export default StartSession;

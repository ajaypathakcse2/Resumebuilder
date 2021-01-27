import InputField from "../../components/InputField";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import FormField from "../../components/FormField";
import "./index.css";
import Testing from "../ResumePreview";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React, { useState } from "react";
import html2Canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Form(props) {
  const [preview, setPreview] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    fname: "",
    lname: "",
    dob: "",
    email: "",
    address: "",
    contact: "",
  });
  const { fname, lname, dob, email, address, contact } = personalInfo;
  const [hobbies, setHobbies] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    marks: "",
    stream: "",
  });
  const { school, degree, marks, stream } = education;
  const [experience, setExperience] = useState({
    company: "",
    designation: "",
    from: "",
    to: "",
  });
  const { company, designation, from, to } = experience;
  const [project, setProject] = useState({ title: "", description: "" });
  const { title, description } = project;
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socialMedium, setSocialMedium] = useState({ site: "", link: "" });
  const { site, link } = socialMedium;
  const [socialMedia, setSocialMedia] = useState([]);
  const [reference, setReference] = useState({
    referenceName: "",
    referenceInfo: "",
  });
  const { referenceName, referenceInfo } = reference;
  const [references, setReferences] = useState([]);
  const onChangePersonalInfo = async (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    console.log("personalInfo", personalInfo);
  };

  const onChangeEducation = async (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  const onChangeExperience = async (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
    console.log("experience", experience);
  };
  const onChangeHobbies = async (e) => {
    setHobbies(e.target.value);
    console.log("hobbies", hobbies);
  };
  const onChangeSkills = async (e) => {
    setSkills(e.target.value);
    console.log("skills", skills);
  };

  const onChangeProject = async (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log("project", project);
  };
  const onChangeSocialMedium = async (e) => {
    setSocialMedium({ ...socialMedium, [e.target.name]: e.target.value });
    console.log("social", socialMedium);
  };
  const onChangeReference = async (e) => {
    setReference({ ...reference, [e.target.name]: e.target.value });
    console.log("social", socialMedium);
  };

  const createPdf = async () => {
    if (!preview) {
      await setPreview(!preview);
    }
    const filename = "resume.pdf";
    html2Canvas(document.querySelector(".resume")).then((canvas) => {
      let pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
      pdf.save(filename);
    });
  };

  const validateOnAdd = (object) => {
    console.log("this is object", object);
    let flag = 0;
    for (var key in object) {
      if (object[key] === undefined || object[key] === "") {
        console.log("this is key value", key, object.key);
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      return false;
    }
    return true;
  };

  const onClickAdd = (objects, object) => {
    if (validateOnAdd(object)) {
      if (object === education) {
        setEducations([...educations, education]);
        setEducation({ school: "", degree: "", marks: "", stream: "" });
      } else if (object === experience) {
        setExperiences([...experiences, experience]);
        setExperience({ company: "", designation: "", from: "", to: "" });
      } else if (object === project) {
        setProjects([...projects, project]);
        setProject({ title: "", description: "" });
      } else if (object === socialMedium) {
        setSocialMedia([...socialMedia, socialMedium]);
        setSocialMedium({ site: "", link: "" });
      } else {
        setReferences([...references, reference]);
        setReference({ referenceName: "", referenceInfo: "" });
      }
    }
  };
  const onClickRemove = (objects, object, field) => {
    let index = objects.findIndex((item) => item.field === object.field);
    if (index >= 0) {
      objects.splice(index, 1);
    }
    if (objects === experiences) {
      setExperiences([...experiences]);
    } else if (objects === educations) {
      setEducations([...educations]);
    } else if (objects === projects) {
      setProjects([...projects]);
    } else if (objects === socialMedia) {
      setSocialMedia([...socialMedia]);
    } else {
      setReferences([...references]);
    }
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const columnStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
  };

  const data = { educations, skills };
  return (
    <div className="formWindow" style={{ width: "100%", ...columnStyle }}>
      <button onClick={createPdf}>pdf</button>

      <div
        className="Form"
        style={{
          display: "flex",
          width: "90%",
          flexDirection: "column",
          fontSize: "small",
          minWidth: 600,
          margin: "auto",
        }}
      >
        <div style={{ ...rowStyle, width: "100%", marginBottom: 10 }}>
          <div
            className="form"
            style={{
              ...columnStyle,
              flex: 0.5,
              padding: 10,
              border: "1px solid #999999",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Personal Info.</h4>
            </div>
            <div style={{ ...rowStyle, width: "95%" }}>
              <div style={{ flex: 0.45 }}>
                <FormField
                  label="First Name"
                  type="input"
                  name="fname"
                  value={fname}
                  onChange={onChangePersonalInfo}
                />
              </div>
              <div style={{ flex: 0.45 }}>
                <FormField
                  label="Last Name"
                  type="input"
                  name="lname"
                  value={lname}
                  onChange={onChangePersonalInfo}
                />
              </div>
            </div>
            <div style={{ ...rowStyle, width: "95%" }}>
              <div style={{ flex: 0.45 }}>
                <FormField
                  label="Date Of Birth"
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={onChangePersonalInfo}
                />
              </div>
              <div style={{ flex: 0.45 }}>
                <FormField
                  label="Contact Number"
                  type="number"
                  name="contact"
                  value={contact}
                  onChange={onChangePersonalInfo}
                />
              </div>
            </div>
            <div style={{ ...rowStyle, width: "95%" }}>
              <div style={{ flex: 1 }}>
                <FormField
                  label="Email"
                  type="input"
                  name="email"
                  value={email}
                  onChange={onChangePersonalInfo}
                />
              </div>
            </div>
            <div style={{ ...rowStyle, width: "95%" }}>
              <FormField
                type="textarea"
                label="Address"
                placeholder="Type your Address"
                name="address"
                value={address}
                onChange={onChangePersonalInfo}
              />
            </div>
          </div>
          <div
            className="form"
            style={{
              ...columnStyle,
              flex: 0.5,
              padding: 10,
              borderTop: "1px solid #999999",
              borderRight: "1px solid #999999",
              borderBottom: "1px solid #999999",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Hobbies And Skills</h4>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Skills</h4>
            </div>

            <div style={{ ...rowStyle, width: "95%" }}>
              <div style={{ flex: 1 }}>
                <FormField
                  label="Skills"
                  type="textarea"
                  placeholder="Enter Skills seperated by commas"
                  value={skills}
                  name="skills"
                  onChange={onChangeSkills}
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Hobbies</h4>
            </div>

            <div style={{ ...rowStyle, width: "95%" }}>
              <div style={{ flex: 1 }}>
                <FormField
                  label="Hobbies"
                  type="textarea"
                  placeholder="Enter Hobbies seperated by commas"
                  value={hobbies}
                  name="hobbies"
                  onChange={onChangeHobbies}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            ...rowStyle,
            width: "100%",
            marginBottom: 10,
            border: "1px solid gray",
          }}
        >
          <div style={{ ...columnStyle, flex: 1 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Education</h4>
            </div>
            <div
              style={{
                ...rowStyle,
                width: "96.5%",
                padding: 10,
                alignItems: "flex-end",
              }}
            >
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="Schoold/College"
                  type="input"
                  name="school"
                  value={school}
                  onChange={onChangeEducation}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="Degree"
                  type="input"
                  name="degree"
                  value={degree}
                  onChange={onChangeEducation}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="Marks"
                  type="number"
                  name="marks"
                  value={marks}
                  onChange={onChangeEducation}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="Stream/Specialization"
                  type="input"
                  value={stream}
                  name="stream"
                  onChange={onChangeEducation}
                />
              </div>
              <div
                style={{ ...rowStyle, width: 40, height: 30, marginBottom: 10 }}
              >
                <Button
                  name="Add"
                  onClick={() => onClickAdd(educations, education)}
                />
              </div>
            </div>
            {educations.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    ...rowStyle,
                    width: "96.5%",
                    padding: 10,
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="input"
                      name="school"
                      value={item.school}
                      onChange={onChangeEducation}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="input"
                      name="degree"
                      value={item.degree}
                      onChange={onChangeEducation}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="number"
                      name="marks"
                      value={item.marks}
                      onChange={onChangeEducation}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="input"
                      value={item.stream}
                      name="stream"
                      onChange={onChangeEducation}
                    />
                  </div>
                  <div style={{ ...rowStyle, padding: "0 1px", height: 30 }}>
                    <Button
                      name="Rem"
                      onClick={() => onClickRemove(educations, item, degree)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            ...rowStyle,
            flex: 1,
            marginBottom: 10,
            border: "1px solid gray",
          }}
        >
          <div style={{ ...columnStyle, flex: 1 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Experience(Jobs/Internships)</h4>
            </div>
            <div
              style={{
                ...rowStyle,
                width: "96.5%",
                padding: 10,
                alignItems: "flex-end",
              }}
            >
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="Company"
                  type="input"
                  name="company"
                  value={company}
                  onChange={onChangeExperience}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="Designation"
                  type="input"
                  name="designation"
                  value={designation}
                  onChange={onChangeExperience}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="From"
                  type="date"
                  name="from"
                  value={from}
                  onChange={onChangeExperience}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.22 }}>
                <FormField
                  label="To"
                  type="date"
                  name="to"
                  value={to}
                  onChange={onChangeExperience}
                />
              </div>
              <div
                style={{ ...rowStyle, width: 40, height: 30, marginBottom: 10 }}
              >
                <Button
                  name="Add"
                  onClick={() => onClickAdd(experiences, experience)}
                />
              </div>
            </div>
            {experiences.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    ...rowStyle,
                    width: "96.5%",
                    padding: 10,
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="input"
                      name="company"
                      value={item.company}
                      onChange={onChangeExperience}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="input"
                      name="designation"
                      value={item.designation}
                      onChange={onChangeExperience}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="date"
                      name="from"
                      value={item.from}
                      onChange={onChangeExperience}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.22 }}>
                    <InputField
                      label=""
                      type="date"
                      value={item.to}
                      name="to"
                      onChange={onChangeExperience}
                    />
                  </div>
                  <div style={{ ...rowStyle, padding: "0 1px", height: 30 }}>
                    <Button
                      name="Rem"
                      onClick={() => onClickRemove(experiences, item, from)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            ...rowStyle,
            flex: 1,
            marginBottom: 10,
            border: "1px solid gray",
          }}
        >
          <div style={{ ...columnStyle, flex: 1 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Projects</h4>
            </div>
            <div
              style={{
                ...rowStyle,
                width: "96.5%",
                padding: 10,
                alignItems: "flex-end",
              }}
            >
              <div style={{ ...rowStyle, flex: 0.23 }}>
                <FormField
                  label="Title"
                  type="input"
                  name="title"
                  value={title}
                  onChange={onChangeProject}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.6 }}>
                <FormField
                  label="Description"
                  type="textarea"
                  name="description"
                  value={description}
                  onChange={onChangeProject}
                />
              </div>
              <div
                style={{ ...rowStyle, width: 40, height: 30, marginBottom: 10 }}
              >
                <Button
                  name="Add"
                  onClick={() => onClickAdd(projects, project)}
                />
              </div>
            </div>
            {projects.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    ...rowStyle,
                    width: "96.5%",
                    padding: 10,
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ ...rowStyle, flex: 0.23 }}>
                    <InputField
                      label=""
                      type="input"
                      name="title"
                      value={item.title}
                      onChange={onChangeProject}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.6 }}>
                    <TextArea
                      label=""
                      type="textarea"
                      name="description"
                      value={item.description}
                      onChange={onChangeProject}
                    />
                  </div>
                  <div style={{ ...rowStyle, padding: "0 1px", height: 30 }}>
                    <Button
                      name="Rem"
                      onClick={() => onClickRemove(projects, item, title)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            ...rowStyle,
            flex: 1,
            marginBottom: 10,
            border: "1px solid gray",
          }}
        >
          <div style={{ ...columnStyle, flex: 1 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>Social</h4>
            </div>
            <div
              style={{
                ...rowStyle,
                width: "96.5%",
                padding: 10,
                alignItems: "flex-end",
              }}
            >
              <div style={{ ...rowStyle, flex: 0.23 }}>
                <FormField
                  label="Social Site"
                  type="input"
                  name="site"
                  value={site}
                  onChange={onChangeSocialMedium}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.6 }}>
                <FormField
                  label="Link"
                  type="input"
                  name="link"
                  value={link}
                  onChange={onChangeSocialMedium}
                />
              </div>
              <div
                style={{ ...rowStyle, width: 40, height: 30, marginBottom: 10 }}
              >
                <Button
                  name="Add"
                  onClick={() => onClickAdd(socialMedia, socialMedium)}
                />
              </div>
            </div>
            {socialMedia.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    ...rowStyle,
                    width: "96.5%",
                    padding: 10,
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ ...rowStyle, flex: 0.23 }}>
                    <InputField
                      label=""
                      type="input"
                      name="site"
                      value={item.site}
                      onChange={onChangeProject}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.6 }}>
                    <InputField
                      label=""
                      type="input"
                      name="link"
                      value={item.link}
                      onChange={onChangeProject}
                    />
                  </div>
                  <div style={{ ...rowStyle, padding: "0 1px", height: 30 }}>
                    <Button
                      name="Rem"
                      onClick={() => onClickRemove(socialMedia, item, site)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            ...rowStyle,
            flex: 1,
            marginBottom: 10,
            border: "1px solid gray",
          }}
        >
          <div style={{ ...columnStyle, flex: 1 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4>References(if any)</h4>
            </div>
            <div
              style={{
                ...rowStyle,
                width: "96.5%",
                padding: 10,
                alignItems: "flex-end",
              }}
            >
              <div style={{ ...rowStyle, flex: 0.23 }}>
                <FormField
                  label="Title"
                  type="input"
                  name="referenceName"
                  value={referenceName}
                  onChange={onChangeReference}
                />
              </div>
              <div style={{ ...rowStyle, flex: 0.6 }}>
                <FormField
                  label="Description"
                  type="textarea"
                  placeholder="also write email of the reference"
                  name="referenceInfo"
                  value={referenceInfo}
                  onChange={onChangeReference}
                />
              </div>
              <div
                style={{ ...rowStyle, width: 40, height: 30, marginBottom: 10 }}
              >
                <Button
                  name="Add"
                  onClick={() => onClickAdd(references, reference)}
                />
              </div>
            </div>
            {references.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    ...rowStyle,
                    width: "96.5%",
                    padding: 10,
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ ...rowStyle, flex: 0.23 }}>
                    <InputField
                      label=""
                      type="input"
                      name="referenceName"
                      value={item.referenceName}
                      onChange={onChangeProject}
                    />
                  </div>
                  <div style={{ ...rowStyle, flex: 0.6 }}>
                    <TextArea
                      label=""
                      type="textarea"
                      name="referenceInfo"
                      value={item.referenceInfo}
                      onChange={onChangeProject}
                    />
                  </div>
                  <div style={{ ...rowStyle, padding: "0 1px", height: 30 }}>
                    <Button
                      name="Rem"
                      onClick={() =>
                        onClickRemove(references, item, referenceName)
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "40%", margin: "auto" }}>
          <Button
            onClick={() => {
              setPreview(!preview);
            }}
            style={{ padding: 20, marginBottom: 40, marginTop: 40 }}
            name="Preview"
          />
        </div>
        <div style={{ width: "40%", margin: "auto" }}>
          <Button
            onClick={createPdf}
            style={{
              padding: 20,
              marginBottom: 40,
              marginTop: 40,
              backgroundColor: "green",
            }}
            name="Download"
          />
        </div>
      </div>

      {preview ? (
        <Testing
          education={education}
          educations={educations}
          skills={skills}
          personalInfo={personalInfo}
          experience={experience}
          experiences={experiences}
          project={project}
          projects={projects}
          reference={reference}
          references={references}
          socialMedium={socialMedium}
          socialMedia={socialMedia}
        />
      ) : null}
    </div>
  );
}

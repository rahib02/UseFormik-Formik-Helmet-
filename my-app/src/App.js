import "./App.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from "formik";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [arr, setarr] = useState([]);
  return (
    <div className="App">
      <Helmet>
        <title>Helmet Formik</title>
        <meta description="Won" content="Two" />
      </Helmet>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          about: "",
          phone: "",
        }}
        onSubmit={(values) => {
          if (!values.name) {
            alert("The name part is empty");
            return;
          } else if (!values.lastname) {
            alert("The lastname part is empty");
            return;
          } else if (!values.email) {
            alert("The email part is empty");
            return;
          } else if (!values.about) {
            alert("The about part is empty");
            return;
          } else if (!values.phone) {
            alert("The phone number part is empty");
            return;
          } else {
            setarr([...arr, values]);
          }
        }}
      >
        {(values) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <Field name="lastname" placeholder="Last Name" />
            <Field name="email" type="email" placeholder="Email" />
            <Field name="about" placeholder="About" />
            <Field name="phone" type="number" placeholder="Phone number" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>About</TableCell>
              <TableCell>Phone number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((x, index) => (
              <TableRow key={index}>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.lastname}</TableCell>
                <TableCell>{x.email}</TableCell>
                <TableCell>{x.about}</TableCell>
                <TableCell>{x.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

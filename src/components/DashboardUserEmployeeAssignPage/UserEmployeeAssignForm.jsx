import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getRole, getToken } from "../../utils/Utils";
import {
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserEmployeeAssignForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [nonUserEmployees, setNonUserEmployees] = useState([]);
  const [nonEmployeeUsers, setNonEmployeeUsers] = useState([]);

  const getEmployees = async () => {
    await axios
      .get(`${apiBaseUrl}/Employee`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEmployees(res.data.$values);
        console.log("emplist", res.data.$values);
      });
  };

  const getUsers = async () => {
    await axios
      .get(`${apiBaseUrl}/User`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data.$values);
        console.log("userlist", res.data.$values);
      });
  };

  const getNonUserEmployees = async () => {
    setNonUserEmployees(employees.filter((employee) => !employee.userId));
    console.log("nonusers", nonUserEmployees);
  };

  const getNonEmployeeUsers = async () => {
    const filteredUserList = users.filter((user) => {
      return !employees.some((employee) => employee.userId === user.id);
    });
    setNonEmployeeUsers(filteredUserList);
  };

  useEffect(() => {
    getEmployees();
    getUsers();
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      getNonUserEmployees();
    }
    if (users.length > 0) {
      getNonEmployeeUsers();
    }
  }, [employees, users]);

  const handleAssignUser = (values) => {
    console.log(values);
    axios
      .post(`${apiBaseUrl}/Employee/assign-user`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Kullanıcıya personel atama işlemi başarılı!");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.includes("duplicate")) {
          toast.error("Bu kullanıcı zaten bir personel ile ilişkilendirilmiş!");
          return;
        }
        toast.error("Kullanıcıya personel atama işlemi başarısız!");
      });
  };

  return (
    <div className=" flex flex-col col-span-full   sm:col-span-12 md:col-span-12 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Kullanıcıya Personel Ata
        </h2>
      </header>

      <div className="flex flex-col grow justify-center ">
        <div className="flex flex-row flex-wrap grow items-center px-5 py-4 pb-2 ">
          <Formik
            className="flex w-full  "
            initialValues={{
              userId: "",
              employeeId: "",
            }}
            onSubmit={(values) => handleAssignUser(values)}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Users Field */}
                <div>
                  <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Kullanıcılar
                  </h1>
                  <RadioGroup
                    name="userId"
                    value={values.userId}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    helperText={touched.userId && errors.userId}
                    error={touched.userId && Boolean(errors.userId)}
                    className="flex flex-col items-center flex-nowrap gap-2 h-96 overflow-y-scroll border p-2 rounded-lg no-scrollbar border-secondary"
                  >
                    {nonEmployeeUsers.map((user) => (
                      <>
                        <FormControlLabel
                          key={user.id}
                          value={user.id}
                          control={<Radio />}
                          label={user.userName}
                          className=" w-full rounded-lg  bg-white"
                        />
                        <Divider flexItem className="bg-secondary" />
                      </>
                    ))}
                  </RadioGroup>
                </div>
                {/* Employees Field */}
                <div>
                  <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Personeller
                  </h1>
                  <RadioGroup
                    name="employeeId"
                    value={values.employeeId}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    helperText={touched.employeeId && errors.employeeId}
                    error={touched.employeeId && Boolean(errors.employeeId)}
                    className="flex flex-col items-center flex-nowrap gap-2 h-96 overflow-y-scroll border p-2 rounded-lg no-scrollbar border-secondary"
                  >
                    {nonUserEmployees.map((employee) => (
                      <>
                        <FormControlLabel
                          key={employee.id}
                          value={employee.id}
                          control={<Radio />}
                          label={employee.firstName + " " + employee.lastName}
                          className=" w-full rounded-lg  bg-white"
                        />
                        <Divider flexItem className="bg-secondary" />
                      </>
                    ))}
                  </RadioGroup>
                </div>

                <Button
                  variant="outlined"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="mt-5 text-base tracking-wide font-semibold bg-primary hover:bg-primaryHover text-gray-100 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Kayıt Et</span>
                </Button>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserEmployeeAssignForm;

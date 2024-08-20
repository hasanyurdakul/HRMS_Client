import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../utils/Utils";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateEmployeeForm() {
  const navigate = useNavigate();
  const [departmentList, setDepartmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/Department`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDepartmentList(res.data["$values"]);
      });
  }, []);

  const handleCreateEmployee = (values) => {
    console.log("userfromstate", user);
    console.log(token);
    console.log(values);
    axios
      .post(`${apiBaseUrl}/Auth/createuser`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200)
          toast.success("Kullanıcı başarıyla kaydedildi.");
        navigate("/dashboard");
        console.log(res);
      })
      .catch(() => {
        toast.error("Bir hata oluştu.");
      });
  };

  return (
    <div className=" flex flex-col col-span-full  sm:col-span-12 xl:col-span-10 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Yeni Personel Ekle
        </h2>
      </header>

      <div className="flex flex-col grow justify-center">
        <div className="flex flex-col flex-wrap  items-center px-5 py-4 pb-2">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              hireDate: "",
              birthDate: "",
              phoneNumber: "",
              remainingLeaveDays: 0,
              educationLevelId: 0,
              genderId: 0,
              jobId: 0,
              departmentId: 0,
              managerEmployeeId: 0,
              isActive: true,
              userId: 0,
              createAddressDTO: {
                streetAddress: "",
                postalCode: "",
                city: "",
                state: "",
                country: "",
              },
              salaryDTO: {
                salaryId: 0,
                employeeId: 0,
                amount: 0,
              },
              createResumeDTO: {
                path: "",
                companyId: 0,
              },
            }}
            onSubmit={(values) => handleCreateEmployee(values)}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <div className="flex flex-col gap-2 w-full">
                {/* departmentId */}
                <Select
                  onChange={handleChange}
                  placeholder="Departman Seçiniz"
                  name="departmentId"
                  onBlur={handleBlur}
                  value={values.departmentId}
                  helperText={touched.departmentId && errors.departmentId}
                  error={touched.departmentId && Boolean(errors.departmentId)}
                  className="w-80 rounded-lg font-medium border" // Burada w-80 ile genişliği sabitliyoruz
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxWidth: "300px", // Menü genişliği için sabit bir maksimum değer
                      },
                    },
                  }}
                >
                  {departmentList.map((department) => (
                    <MenuItem
                      key={department.id}
                      value={department.id}
                      className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                    >
                      {department.name}
                    </MenuItem>
                  ))}
                </Select>
                {/* firstName */}
                <TextField
                  variant="outlined"
                  placeholder="Ad"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  helperText={touched.firstName && errors.firstName}
                  error={touched.firstName && Boolean(errors.firstName)}
                  className="w-full   rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                {/* lastName */}
                <TextField
                  variant="outlined"
                  placeholder="Soyad"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  helperText={touched.lastName && errors.lastName}
                  error={touched.lastName && Boolean(errors.lastName)}
                  className="w-full  rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                {/* email */}
                <TextField
                  variant="outlined"
                  placeholder="Email Adresi"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                  className="w-full  rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
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

export default CreateEmployeeForm;

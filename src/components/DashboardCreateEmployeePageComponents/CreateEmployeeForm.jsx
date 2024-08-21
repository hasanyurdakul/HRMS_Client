import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../utils/Utils";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const createEmployeeFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Ad en az 2 karakter olmalı")
    .max(50, "Ad en fazla 50 karakter olabilir")
    .required("Ad gerekli"),
  lastName: Yup.string()
    .min(2, "Soyad en az 2 karakter olmalı")
    .max(50, "Soyad en fazla 50 karakter olabilir")
    .required("Soyad gerekli"),
  email: Yup.string()
    .email("Geçerli bir email adresi girin")
    .required("Email gerekli"),
  birthDate: Yup.date().required("Doğum tarihi gerekli").nullable(),
  hireDate: Yup.date().required("İşe giriş tarihi gerekli").nullable(),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Telefon numarası yalnızca rakamlardan oluşmalıdır")
    .min(10, "Telefon numarası en az 10 haneli olmalı")
    .max(15, "Telefon numarası en fazla 15 haneli olabilir")
    .required("Telefon numarası gerekli"),
  educationLevelId: Yup.number()
    .min(1, "Eğitim seviyesi seçiniz")
    .required("Eğitim seviyesi gerekli"),
  genderId: Yup.number()
    .min(1, "Cinsiyet seçiniz")
    .required("Cinsiyet gerekli"),
  jobId: Yup.number().min(1, "Meslek seçiniz").required("Meslek gerekli"),
  departmentId: Yup.number()
    .min(1, "Departman seçiniz")
    .required("Departman gerekli"),
  createAddressDTO: Yup.object().shape({
    streetAddress: Yup.string().required("Adres gerekli"),
    postalCode: Yup.string()
      .matches(/^\d+$/, "Posta kodu yalnızca rakamlardan oluşmalıdır")
      .required("Posta kodu gerekli"),
    city: Yup.string().required("Şehir gerekli"),
    state: Yup.string().required("Eyalet gerekli"),
    country: Yup.string().required("Ülke gerekli"),
  }),
  salaryDTO: Yup.object().shape({
    amount: Yup.number().min(0, "Maaş negatif olamaz").required("Maaş gerekli"),
  }),
  createResumeDTO: Yup.object().shape({
    path: Yup.string()
      .url("Geçerli bir URL girin")
      .required("Özgeçmiş gerekli"),
  }),
});

dayjs.extend(utc);
function CreateEmployeeForm() {
  let token = getToken();
  const [departmentList, setDepartmentList] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/Job`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setJobs(res.data.$values));
    axios
      .get(`${apiBaseUrl}/Department`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDepartmentList(res.data["$values"]);
      });
  }, []);

  const handleCreateEmployee = (values) => {
    const formattedValues = {
      ...values,
      birthDate: values.birthDate
        ? dayjs(values.birthDate).local().startOf("day").format()
        : null,
      hireDate: values.hireDate
        ? dayjs(values.hireDate).local().startOf("day").format()
        : null,
    };
    axios
      .post(`${apiBaseUrl}/Employee`, formattedValues, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Personel başarıyla eklendi");
          navigate("/dashboard/employees");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Personel eklenirken bir hata oluştu");
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
            validationSchema={createEmployeeFormValidationSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              hireDate: dayjs().format("YYYY-MM-DD"),
              birthDate: dayjs().format("YYYY-MM-DD"),
              phoneNumber: "",
              remainingLeaveDays: 15,
              educationLevelId: 0,
              genderId: 0,
              jobId: 0,
              departmentId: 0,
              managerEmployeeId: null,
              isActive: true,
              userId: null,
              createAddressDTO: {
                streetAddress: "",
                postalCode: "",
                city: "",
                state: "",
                country: "",
              },
              salaryDTO: {
                employeeId: 1,
                amount: 0,
              },
              createResumeDTO: {
                path: "",
              },
            }}
            onSubmit={(values) => handleCreateEmployee(values)}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
            }) => (
              <div className="flex flex-wrap gap-3 w-full items-end justify-start">
                {/* names and email */}
                <div className="flex flex-col md:flex-row w-full gap-2">
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
                </div>
                {/* dates */}
                <div className="flex flex-col md:flex-row gap-2 w-full">
                  {/* birthDate */}
                  <DatePicker
                    disableFuture
                    className="w-full"
                    label="Birth Date"
                    value={dayjs(values.birthDate)}
                    onChange={(date) => setFieldValue("birthDate", dayjs(date))}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="birthDate"
                        onBlur={handleBlur}
                        error={touched.birthDate && Boolean(errors.birthDate)}
                        helperText={touched.birthDate && errors.birthDate}
                      />
                    )}
                  />
                  {/* hireDate */}
                  <DatePicker
                    disableFuture
                    className="w-full"
                    label="Hire Date"
                    value={dayjs(values.hireDate)}
                    onChange={(date) => setFieldValue("hireDate", dayjs(date))}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="hireDate"
                        onBlur={handleBlur}
                        error={touched.hireDate && Boolean(errors.hireDate)}
                        helperText={touched.hireDate && errors.hireDate}
                      />
                    )}
                  />
                </div>
                {/* phoneNumber */}
                <TextField
                  variant="outlined"
                  placeholder="Telefon Numarası"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  className="w-full  rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                {/* comboboxes */}
                <div className="flex flex-col md:flex-row gap-2 w-full">
                  {/* educationLevelId */}
                  <div className="w-full md:w-1/4">
                    <h1>Eğitim Seviyesi</h1>
                    <Select
                      onChange={handleChange}
                      placeholder="Eğitim Seviyesi Seçiniz"
                      name="educationLevelId"
                      onBlur={handleBlur}
                      value={values.educationLevelId}
                      helperText={
                        touched.educationLevelId && errors.educationLevelId
                      }
                      error={
                        touched.educationLevelId &&
                        Boolean(errors.educationLevelId)
                      }
                      className="w-full " // Burada w-80 ile genişliği sabitliyoruz
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxWidth: "300px", // Menü genişliği için sabit bir maksimum değer
                          },
                        },
                      }}
                    >
                      <MenuItem
                        value={1}
                        className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                      >
                        Lise
                      </MenuItem>
                      <MenuItem
                        value={2}
                        className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                      >
                        Lisans
                      </MenuItem>
                      <MenuItem
                        value={3}
                        className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                      >
                        Yüksek Lisans
                      </MenuItem>
                      <MenuItem
                        value={4}
                        className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                      >
                        Doktora
                      </MenuItem>
                    </Select>
                  </div>

                  {/* genderId */}
                  <div className="w-full md:w-1/4">
                    <h1>Cinsiyet</h1>
                    <Select
                      onChange={handleChange}
                      placeholder="Cinsiyet Seçiniz"
                      name="genderId"
                      onBlur={handleBlur}
                      value={values.genderId}
                      helperText={touched.genderId && errors.genderId}
                      error={touched.genderId && Boolean(errors.genderId)}
                      className="w-full" // Burada w-80 ile genişliği sabitliyoruz
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxWidth: "300px", // Menü genişliği için sabit bir maksimum değer
                          },
                        },
                      }}
                    >
                      <MenuItem
                        value={1}
                        className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                      >
                        Erkek
                      </MenuItem>
                      <MenuItem
                        value={2}
                        className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                      >
                        Kadın
                      </MenuItem>
                    </Select>
                  </div>

                  {/* jobId */}
                  <div className="w-full md:w-1/4">
                    <h1>Meslek</h1>
                    <Select
                      onChange={handleChange}
                      placeholder="Meslek Seçiniz"
                      name="jobId"
                      onBlur={handleBlur}
                      value={values.jobId}
                      helperText={touched.jobId && errors.jobId}
                      error={touched.jobId && Boolean(errors.jobId)}
                      className="w-full" // Burada w-80 ile genişliği sabitliyoruz
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxWidth: "300px", // Menü genişliği için sabit bir maksimum değer
                          },
                        },
                      }}
                    >
                      {jobs.map((job) => (
                        <MenuItem
                          key={job.id}
                          value={job.id}
                          className="truncate" // Metni sarmasını önlemek için truncate sınıfı
                        >
                          {job.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>

                  {/* departmentId */}
                  <div className="w-full md:w-1/4">
                    <h1>Departman</h1>
                    <Select
                      onChange={handleChange}
                      placeholder="Departman Seçiniz"
                      name="departmentId"
                      onBlur={handleBlur}
                      value={values.departmentId}
                      helperText={touched.departmentId && errors.departmentId}
                      error={
                        touched.departmentId && Boolean(errors.departmentId)
                      }
                      className="w-full" // Burada w-80 ile genişliği sabitliyoruz
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
                  </div>
                </div>
                {/* adress first 3 inputs */}
                <div className="flex flex-col md:flex-row gap-2 w-full">
                  <TextField
                    variant="outlined"
                    placeholder="Adres Satırı"
                    name="createAddressDTO.streetAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.createAddressDTO.streetAddress}
                    helperText={
                      touched.createAddressDTO?.streetAddress &&
                      errors.createAddressDTO?.streetAddress
                    }
                    error={
                      touched.createAddressDTO?.streetAddress &&
                      Boolean(errors.createAddressDTO?.streetAddress)
                    }
                    className="w-full md:w-1/3 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Posta Kodu"
                    name="createAddressDTO.postalCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.createAddressDTO.postalCode}
                    helperText={
                      touched.createAddressDTO?.postalCode &&
                      errors.createAddressDTO?.postalCode
                    }
                    error={
                      touched.createAddressDTO?.postalCode &&
                      Boolean(errors.createAddressDTO?.postalCode)
                    }
                    className="w-full md:w-1/3 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Şehir"
                    name="createAddressDTO.city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.createAddressDTO.city}
                    helperText={
                      touched.createAddressDTO?.city &&
                      errors.createAddressDTO?.city
                    }
                    error={
                      touched.createAddressDTO?.city &&
                      Boolean(errors.createAddressDTO?.city)
                    }
                    className="w-full md:w-1/3 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                </div>
                {/* adress last 2 inputs */}
                <div className="flex flex-col md:flex-row gap-2 w-full">
                  <TextField
                    variant="outlined"
                    placeholder="Eyalet"
                    name="createAddressDTO.state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.createAddressDTO.state}
                    helperText={
                      touched.createAddressDTO?.state &&
                      errors.createAddressDTO?.state
                    }
                    error={
                      touched.createAddressDTO?.state &&
                      Boolean(errors.createAddressDTO?.state)
                    }
                    className="w-full md:w-1/3 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Ülke"
                    name="createAddressDTO.country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.createAddressDTO.country}
                    helperText={
                      touched.createAddressDTO?.country &&
                      errors.createAddressDTO?.country
                    }
                    error={
                      touched.createAddressDTO?.country &&
                      Boolean(errors.createAddressDTO?.country)
                    }
                    className="w-full md:w-1/3 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <div className="w-1/3 hidden md:flex"> </div>
                </div>
                {/* salary and resume */}
                <div className="flex flex-col md:flex-row gap-2 w-full items-end">
                  {/* salaryDTO.amount */}
                  <div className="w-full">
                    <h1>Maaş</h1>
                    <TextField
                      variant="outlined"
                      placeholder="Maaş"
                      name="salaryDTO.amount"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.salaryDTO.amount}
                      helperText={
                        touched.salaryDTO?.amount && errors.salaryDTO?.amount
                      }
                      error={
                        touched.salaryDTO?.amount &&
                        Boolean(errors.salaryDTO?.amount)
                      }
                      className="w-full  rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                  </div>
                  {/* createResumeDTO.path */}
                  <div className="w-full">
                    <TextField
                      variant="outlined"
                      placeholder="Özgeçmiş PDF Linki"
                      name="createResumeDTO.path"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.createResumeDTO.path}
                      helperText={
                        touched.createResumeDTO?.path &&
                        errors.createResumeDTO?.path
                      }
                      error={
                        touched.createResumeDTO?.path &&
                        Boolean(errors.createResumeDTO?.path)
                      }
                      className="w-full  rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                  </div>
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

export default CreateEmployeeForm;

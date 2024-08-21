import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../utils/Utils";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const createDepartmentFormValidationSchema = Yup.object().shape({
  description: Yup.string()
    .min(5, "Açıklama alanı en az 5 karakter olmalı")
    .max(300, "Açıklama alanı en fazla 300 karakter olabilir")
    .required("Açıklama alanı zorunludur."),
  name: Yup.string()
    .min(5, "Etkinlik adı en az 5 karakter olmalı")
    .max(50, "Etkinlik adı en fazla 50 karakter olabilir")
    .required("Etkinlik adı zorunludur."),
});
function CreateEventForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();
  const handleCreateLeaveRequest = (values) => {
    console.log(values);
    axios
      .post(`${apiBaseUrl}/Events`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200)
          toast.success("Etkinlik başarıyla oluşturuldu.");
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
          Yeni Etkinlik Oluştur
        </h2>
      </header>

      <div className="flex flex-col grow justify-center">
        <div className="flex flex-col flex-wrap  items-center px-5 py-4 pb-2">
          <Formik
            validationSchema={createDepartmentFormValidationSchema}
            initialValues={{
              startDate: dayjs().format("YYYY-MM-DD"),
              endDate: dayjs().format("YYYY-MM-DD"),
              name: "",
              description: "",
            }}
            onSubmit={(values) => handleCreateLeaveRequest(values)}
          >
            {({
              values,
              handleChange,
              setFieldValue,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col md:flex-row  gap-2">
                  {/* startDate */}
                  <DatePicker
                    disablePast
                    className="w-full"
                    label="Başlangıç Tarihi"
                    value={dayjs(values.startDate)}
                    onChange={(date) => setFieldValue("startDate", dayjs(date))}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="startDate"
                        onBlur={handleBlur}
                        error={touched.startDate && Boolean(errors.startDate)}
                        helperText={touched.startDate && errors.startDate}
                      />
                    )}
                  />
                  {/* endDate */}
                  <DatePicker
                    disablePast
                    className="w-full"
                    label="Bitiş Tarihi"
                    value={dayjs(values.endDate)}
                    onChange={(date) => setFieldValue("endDate", dayjs(date))}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="endDate"
                        onBlur={handleBlur}
                        error={touched.endDate && Boolean(errors.endDate)}
                        helperText={touched.hireDate && errors.hireDate}
                      />
                    )}
                  />
                </div>

                <TextField
                  variant="outlined"
                  placeholder="Etkinlik Adı"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  helperText={touched.name && errors.name}
                  error={touched.name && Boolean(errors.name)}
                  className="w-full  rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
                <TextField
                  variant="outlined"
                  placeholder="Etkinlik Açıklaması"
                  multiline
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  helperText={touched.description && errors.description}
                  error={touched.description && Boolean(errors.description)}
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

export default CreateEventForm;

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../../utils/Utils";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const createJobFormValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Meslek adı en az 2 karakter olmalı")
    .max(50, "Meslek adı en fazla 50 karakter olabilir")
    .required("Meslek adı zorunludur."),
});

function CreateJobForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let token = getToken();

  const handleCreateUser = (values) => {
    console.log(values);
    axios
      .post(`${apiBaseUrl}/Job`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 201) toast.success("Meslek başarıyla oluşturuldu.");
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
          Yeni Meslek Oluştur
        </h2>
      </header>

      <div className="flex flex-col grow justify-center">
        <div className="flex flex-col flex-wrap  items-center px-5 py-4 pb-2">
          <Formik
            validationSchema={createJobFormValidationSchema}
            initialValues={{
              title: "",
            }}
            onSubmit={(values) => handleCreateUser(values)}
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
                <TextField
                  variant="outlined"
                  placeholder="Meslek Adı"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  helperText={touched.title && errors.title}
                  error={touched.title && Boolean(errors.title)}
                  className="w-full   rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
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

export default CreateJobForm;

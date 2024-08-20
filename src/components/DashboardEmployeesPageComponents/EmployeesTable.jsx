import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { getToken } from "../../utils/Utils";

function EmployeesTable() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const token = getToken();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [employees, setEmployees] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);
  const [jobs, setJobs] = React.useState([]);

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
      .then((res) => setDepartments(res.data.$values));
    axios
      .get(`${apiBaseUrl}/Employee`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setEmployees(res.data.$values));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className=" flex flex-col col-span-full  sm:col-span-12 xl:col-span-10 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Tüm Personeller
        </h2>
      </header>

      <div className="px-5 py-4 max-h-full">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer className="max-h-[36rem] md:max-h-[43rem]">
            <Table stickyHeader aria-label="sticky table">
              {/* Table Head  */}
              <TableHead>
                <TableRow>
                  <TableCell align={"left"} style={{ minWidth: 100 }}>
                    <span>Fotoğraf</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Ad</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 150 }}>
                    <span>Soyad</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Departman</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Görev</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Email</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Telefon</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* Table Body */}
              <TableBody>
                {/* Table Row 1 */}
                {employees.map((employee, index) => {
                  const department = departments.find(
                    (dep) => dep.id === employee.departmentId
                  );
                  const job = jobs.find((job) => job.id === employee.jobId);
                  return (
                    <TableRow hover role="checkbox" key={index} tabIndex={-1}>
                      <TableCell align={"left"}>
                        {employee.genderId == 1 ? (
                          <img
                            src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg?w=826&t=st=1723328306~exp=1723328906~hmac=ddf3c6701bc02a74eb336a02cc7bf2023c53a351bd819e549f9506977d85092b"
                            alt="pic"
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <img
                            src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611768.jpg?w=826&t=st=1724167264~exp=1724167864~hmac=c688544942eb113efaa4d6bef3ebf6f24870ae9f536cc17d5ae4aaa86a1ba203"
                            alt="pic"
                            className="w-10 h-10 rounded-full"
                          />
                        )}
                      </TableCell>
                      <TableCell align={"left"}>{employee.firstName}</TableCell>
                      <TableCell align={"left"}>{employee.lastName}</TableCell>
                      <TableCell align={"left"}>
                        {department ? department.name : "Unknown"}
                      </TableCell>
                      <TableCell align={"left"}>
                        {job ? job.title : "Unknown"}
                      </TableCell>
                      <TableCell align={"left"}>{employee.email}</TableCell>
                      <TableCell align={"left"}>
                        {employee.phoneNumber}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={100}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default EmployeesTable;

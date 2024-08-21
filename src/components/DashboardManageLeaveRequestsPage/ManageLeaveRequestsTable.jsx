import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  CheckCircle,
  DoNotDisturb,
  Pending,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/Utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ManageLeaveRequestsTable() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const token = getToken();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filteredLeaveRequests, setFilteredLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [leaveRequestsWithEmployeeNames, setLeaveRequestsWithEmployeeNames] =
    useState([]);

  const getIcon = (requestStatusId) => {
    switch (requestStatusId) {
      case 2:
        return (
          <CheckCircle className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-green-400  dark:bg-black" />
        );

      case 3:
        return (
          <DoNotDisturb className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-red-400  dark:bg-black" />
        );

      case 1:
        return (
          <Pending className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-orange-400  dark:bg-black" />
        );

      default:
        return null;
    }
  };
  const getLeaveTypeName = (leaveTypeId) => {
    switch (leaveTypeId) {
      case 1:
        return "Sick Leave";

      case 2:
        return "Vacation Leave";

      case 3:
        return "Personal Leave";

      default:
        return null;
    }
  };
  useEffect(() => {
    if (leaveRequests.length > 0 && employees.length > 0) {
      const mappedRequests = leaveRequests.map((leaveRequest) => {
        const employee = employees.find(
          (emp) => emp.id === leaveRequest.employeeId
        );
        return {
          ...leaveRequest,
          employeeName: employee
            ? `${employee.firstName} ${employee.lastName}`
            : "Unknown Employee",
        };
      });
      setLeaveRequestsWithEmployeeNames(mappedRequests);
    }
  }, [leaveRequests, employees]);

  useEffect(() => {
    try {
      axios
        .get(`${apiBaseUrl}/Leave`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLeaveRequests(res.data.$values);
        });
      axios
        .get(`${apiBaseUrl}/Employee`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setEmployees(res.data.$values));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getFilteredLeaveRequests(leaveRequests);
    console.log(filteredLeaveRequests);
    console.log(employees);
  }, [leaveRequests]);

  const getFilteredLeaveRequests = (leaveRequests) => {
    if (leaveRequests.length > 0) {
      const filteredLeaves = leaveRequests.filter(
        (leave) => leave.approvedById === 0
      );
      setFilteredLeaveRequests(filteredLeaves);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleApproveLeaveRequest = async (leaveId) => {
    let requestObject = {
      id: leaveId,
      requestStatusId: 2,
    };
    console.log(requestObject);
    await axios
      .put(`${apiBaseUrl}/Leave/UpdateLeaveStatus`, requestObject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("İzin Başarıyla Reddedildi.");
          navigate(0);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRejectLeaveRequest = async (leaveId) => {
    let requestObject = {
      id: leaveId,
      requestStatusId: 3,
    };
    console.log(requestObject);
    await axios
      .put(`${apiBaseUrl}/Leave/UpdateLeaveStatus`, requestObject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("İzin Başarıyla Onaylandı");
          navigate(0);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex flex-col col-span-full  sm:col-span-12 xl:col-span-10 bg-white dark:bg-black shadow-sm rounded-xl bg-cardWaveBottomRight bg-no-repeat bg-bottom">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          İzin İsteklerini Yönet
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
                    <span>Durum</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Talep Eden Personel</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 150 }}>
                    <span>İzin Tipi</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>İzin Başlangıç Tarihi</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>İzin Bitiş Tarihi</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>Talep Tarihi</span>
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: 170 }}>
                    <span>İşlemler</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* Table Body */}
              <TableBody>
                {leaveRequestsWithEmployeeNames.length > 0 &&
                  leaveRequestsWithEmployeeNames
                    .reverse()
                    .map((leave, index) => (
                      <TableRow hover role="checkbox" key={index} tabIndex={-1}>
                        <TableCell align={"left"}>
                          {getIcon(leave.requestStatusId)}
                        </TableCell>
                        <TableCell align={"left"}>
                          {leave.employeeName}
                        </TableCell>
                        <TableCell align={"left"}>
                          {getLeaveTypeName(leave.leaveTypeId)}
                        </TableCell>
                        <TableCell align={"left"}>
                          {leave.startDate
                            ? leave.startDate.split("T")[0].replaceAll("-", "/")
                            : "Unknown"}
                        </TableCell>
                        <TableCell align={"left"}>
                          {leave.endDate
                            ? leave.endDate.split("T")[0].replaceAll("-", "/")
                            : "Unknown"}
                        </TableCell>
                        <TableCell align={"left"}>
                          {leave.requestedDate
                            ? leave.requestedDate
                                .split("T")[0]
                                .replaceAll("-", "/")
                            : "Unknown"}
                        </TableCell>
                        <TableCell align={"left"}>
                          <IconButton
                            onClick={() => handleApproveLeaveRequest(leave.id)}
                            aria-label="onayla"
                            className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-green-400  dark:bg-black"
                          >
                            <ThumbUp />
                          </IconButton>
                          <IconButton
                            onClick={() => handleRejectLeaveRequest(leave.id)}
                            aria-label="reddet"
                            className="w-9 h-9 rounded-full shrink-0 mr-2 sm:mr-3 text-red-400  dark:bg-black"
                          >
                            <ThumbDown />
                          </IconButton>{" "}
                        </TableCell>
                      </TableRow>
                    ))}
                {/* Table Row 1 */}
                {/* {employees.map((employee, index) => {
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
                })} */}
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

export default ManageLeaveRequestsTable;

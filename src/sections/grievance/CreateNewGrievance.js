"use client";
import {
  Autocomplete,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";

import { useFormik, Form, FormikProvider } from "formik";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MotionWrapper from "@/components/MotionWrapper";
import { GrievanceType } from "./GrievancePreData";
import {
  createNewGrievance,
  getStudentsCourse,
} from "@/redux/features/grievanceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { PATH_DASHBOARD } from "@/route/paths";
import { useRouter } from "next/navigation";
import Loader from "@/components/SimpleLoader";
import { useEffect } from "react";

const CreateNewGrievance = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, studentCourses } = useSelector((state) => state.grievance);
  const { enqueueSnackbar } = useSnackbar();
  const [subTypes, setSubTypes] = useState([]);

  const FormSchema = Yup.object().shape({
    grievenceType: Yup.string().required("grievenceType is required"),
    grievenceSubType: Yup.string().required("grievenceSubType is required"),
    courseEnrollmentId: Yup.string().required("Course is required"),
    grievenceDescription: Yup.string().required("Description  is required"),
    priority: Yup.string().required("priority  is required"),
    phone: Yup.string().required("phone  is required"),
  });
  const formik = useFormik({
    initialValues: {
      addNo: "",
      name: "",
      email: "",
      grievenceType: "",
      grievenceSubType: "",
      courseEnrollmentId: "",
      grievenceDescription: "",
      priority: "",
      phone: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      dispatch(createNewGrievance(values)).then((res) => {
        if (res.payload.status === "error") {
          enqueueSnackbar(res.payload.message, { variant: "error" });
        } else if (res.payload.status === "success") {
          router.push(PATH_DASHBOARD.grievance);
          enqueueSnackbar(res.payload.message, {
            variant: "success",
          });
        }
      });
    },
  });
  useEffect(() => {
    dispatch(getStudentsCourse());
  }, []);
  return (
    <Box>
      <MotionWrapper directions={"top"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
            padding: 2,
            borderRadius: 8,
            // position: "relative",
          }}
        >
          <Stack direction={"row"} spacing={4}>
            <Box>
              <MotionWrapper directions={"right"} delay={1}>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk, serif",
                    fontSize: 50,
                    color: "white",
                  }}
                >
                  Raise Your Grievance
                  <br /> to Get Help...
                </Typography>
              </MotionWrapper>
              <MotionWrapper directions={"bottom"} delay={2}>
                <Box sx={{ display: "flex" }}>
                  <AvatarGroup max={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.granitenet.com/wp-content/uploads/2023/11/Benefits-CustomerService-Photo.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://media.istockphoto.com/id/1423369897/photo/call-center-worker.jpg?s=612x612&w=0&k=20&c=KaxWNnsroknjxkXjfJijLhmdomOGFt4T-RwUF0qK3hc="
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA="
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="https://media.istockphoto.com/id/1326217843/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=JnA3x4xdQzEZ46L1i3tfseBFEtsvI6cVjf526y7zxo0="
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="https://media.istockphoto.com/id/883698088/photo/happy-to-help.jpg?s=612x612&w=0&k=20&c=jI24l5jqWn3hJ-3y_r_2yr108G2449THJMwaMZMxf7A="
                    />
                  </AvatarGroup>
                </Box>
              </MotionWrapper>
              <MotionWrapper directions={"left"} delay={1}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Space Grotesk, serif",
                      fontSize: 14,
                      padding: 1,
                      color: "white",
                    }}
                  >
                    Empowering learners begins with exceptional support that
                    inspires trust and confidence.
                  </Typography>
                </Box>
              </MotionWrapper>
            </Box>

            <Box>
              <MotionWrapper directions={"left"} delay={1}>
                <Box
                  sx={{
                    background: `linear-gradient(to right,#F4F6FF 0%,#F4F6FF  10%, #0089d0 100%)`,
                    borderRadius: "500px 50px 500px 50px",
                    padding: 2,
                  }}
                >
                  <Image
                    src="/formPng3.jpg"
                    alt="nill"
                    // layout="responsive"
                    width={450}
                    height={200}
                    quality={100}
                    priority
                    style={{
                      borderTopLeftRadius: "700px",
                      borderTopRightRadius: "100px",
                      borderBottomRightRadius: "700px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </MotionWrapper>
            </Box>
          </Stack>
        </Box>
      </MotionWrapper>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <Box padding={5}>
            <MotionWrapper directions={"left"}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk, serif",
                    fontSize: 20,
                    pb: 1,
                    color: "grey.500",
                  }}
                >
                  Enter your details below...
                </Typography>
              </Box>
            </MotionWrapper>
            <Stack direction={"row"} spacing={2}>
              <MotionWrapper directions={"right"}>
                <TextField
                  name="addNo"
                  variant="filled"
                  value={formik.values.addNo}
                  disabled
                  sx={{
                    "& .MuiFilledInput-root": {
                      borderRadius: "25px",
                      "&:before": {
                        display: "none",
                      },
                      "&:after": {
                        display: "none",
                      },
                    },
                  }}
                  fullWidth
                  label="Admission No"
                />
              </MotionWrapper>
              <MotionWrapper directions={"top"}>
                <TextField
                  fullWidth
                  value={formik.values.name}
                  disabled
                  name="name"
                  label="Student Name"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      borderRadius: "25px",
                      "&:before": {
                        display: "none",
                      },
                      "&:after": {
                        display: "none",
                      },
                    },
                  }}
                />
              </MotionWrapper>
            </Stack>
            <Box pt={2}>
              <MotionWrapper directions={"left"}>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter your email.."
                  label="Email"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      borderRadius: "25px",
                      "&:before": {
                        display: "none",
                      },
                      "&:after": {
                        display: "none",
                      },
                    },
                  }}
                />
              </MotionWrapper>
            </Box>
            <Box pt={2}>
              <Stack direction={"row"} spacing={2}>
                <MotionWrapper directions={"bottom"}>
                  <Autocomplete
                    name="grievenceType"
                    disablePortal
                    options={GrievanceType}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={(e, option) => {
                      if (option?.subTypes) {
                        formik.setFieldValue("grievenceType", option?.id);
                        setSubTypes(option.subTypes);
                      } else {
                        formik.setFieldValue("grievenceType", "");
                        setSubTypes([]);
                      }
                    }}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        variant="filled"
                        sx={{
                          "& .MuiFilledInput-root": {
                            borderRadius: "25px",
                            "&:before": {
                              display: "none",
                            },
                            "&:after": {
                              display: "none",
                            },
                          },
                        }}
                        {...params}
                        fullWidth
                        name="grievenceType"
                        label="Grievance Type"
                        error={Boolean(
                          formik.touched.grievenceType &&
                            formik.errors.grievenceType
                        )}
                        helperText={
                          formik.touched.grievenceType &&
                          formik.errors.grievenceType
                        }
                      />
                    )}
                  />
                </MotionWrapper>
                <MotionWrapper directions={"bottom"}>
                  <Autocomplete
                    disablePortal
                    options={subTypes}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    sx={{ width: "100%" }}
                    onChange={(e, option) => {
                      if (option) {
                        formik.setFieldValue("grievenceSubType", option.id);
                      } else {
                        formik.setFieldValue("grievenceSubType", "");
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        variant="filled"
                        name="grievenceSubType"
                        sx={{
                          "& .MuiFilledInput-root": {
                            borderRadius: "25px",
                            "&:before": {
                              display: "none",
                            },
                            "&:after": {
                              display: "none",
                            },
                          },
                        }}
                        {...params}
                        fullWidth
                        label="Grievance Sub Type"
                        error={Boolean(
                          formik.touched.grievenceSubType &&
                            formik.errors.grievenceSubType
                        )}
                        helperText={
                          formik.touched.grievenceSubType &&
                          formik.errors.grievenceSubType
                        }
                      />
                    )}
                  />
                </MotionWrapper>
              </Stack>
            </Box>
            <Box pt={2}>
              <MotionWrapper directions={"right"}>
                <Autocomplete
                  disablePortal
                  options={studentCourses}
                  getOptionLabel={(option) => option?.courseName}
                  isOptionEqualToValue={(option, value) => {
                    option?.courseId === value.courseId;
                  }}
                  // sx={{ width: 300 }}
                  onChange={(e, option) => {
                    if (option) {
                      formik.setFieldValue(
                        "courseEnrollmentId",
                        option.courseId
                      );
                    } else {
                      formik.setFieldValue("courseEnrollmentId", "");
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      name="courseEnrollmentId"
                      fullWidth
                      variant="filled"
                      sx={{
                        "& .MuiFilledInput-root": {
                          borderRadius: "25px",
                          "&:before": {
                            display: "none",
                          },
                          "&:after": {
                            display: "none",
                          },
                        },
                      }}
                      {...params}
                      label="Course"
                      error={Boolean(
                        formik.touched.courseEnrollmentId &&
                          formik.errors.courseEnrollmentId
                      )}
                      helperText={
                        formik.touched.courseEnrollmentId &&
                        formik.errors.courseEnrollmentId
                      }
                    />
                  )}
                />
              </MotionWrapper>
            </Box>
            <Box pt={2}>
              <MotionWrapper directions={"top"}>
                <TextField
                  name="grievenceDescription"
                  multiline
                  rows={3}
                  value={formik.values.grievenceDescription}
                  onChange={formik.handleChange}
                  fullWidth
                  label="Explain issues.."
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      borderRadius: "25px",
                      "&:before": {
                        display: "none",
                      },
                      "&:after": {
                        display: "none",
                      },
                    },
                  }}
                  error={Boolean(
                    formik.touched.grievenceDescription &&
                      formik.errors.grievenceDescription
                  )}
                  helperText={
                    formik.touched.grievenceDescription &&
                    formik.errors.grievenceDescription
                  }
                />
              </MotionWrapper>
            </Box>
            <Box pt={2}>
              <Stack direction={"row"} spacing={2}>
                <MotionWrapper directions={"bottom"}>
                  <Autocomplete
                    disablePortal
                    options={[
                      { id: 1, name: "LOW" },
                      { id: 2, name: "MEDIUM" },
                      { id: 3, name: "URGENT" },
                    ]}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={(e, option) => {
                      if (option) {
                        formik.setFieldValue("priority", option.id);
                      } else {
                        formik.setFieldValue("priority", "");
                      }
                    }}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        name="priority"
                        fullWidth
                        {...params}
                        label="priority"
                        variant="filled"
                        sx={{
                          "& .MuiFilledInput-root": {
                            borderRadius: "25px",
                            "&:before": {
                              display: "none",
                            },
                            "&:after": {
                              display: "none",
                            },
                          },
                        }}
                        error={Boolean(
                          formik.touched.priority && formik.errors.priority
                        )}
                        helperText={
                          formik.touched.priority && formik.errors.priority
                        }
                      />
                    )}
                  />
                </MotionWrapper>
                <MotionWrapper directions={"right"}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="number"
                    value={formik.values.phone}
                    onChange={(e) => {
                      formik.setFieldValue("phone", e.target.value.toString());
                    }}
                    variant="filled"
                    sx={{
                      "& .MuiFilledInput-root": {
                        borderRadius: "25px",
                        "&:before": {
                          display: "none",
                        },
                        "&:after": {
                          display: "none",
                        },
                      },
                    }}
                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </MotionWrapper>
              </Stack>
              {loading ? (
                <MotionWrapper directions={"bottom"}>
                  <Loader />
                </MotionWrapper>
              ) : (
                <MotionWrapper directions={"bottom"}>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                  >
                    <Button
                      type="submit"
                      sx={{
                        background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
                        color: "white",
                        borderRadius: 3,
                        width: "70%",
                      }}
                    >
                      <Icon
                        icon="iconoir:submit-document"
                        width="24"
                        height="24"
                      />
                      Submit Your Grievance
                    </Button>
                  </Box>
                </MotionWrapper>
              )}
            </Box>
          </Box>
        </Form>
      </FormikProvider>
    </Box>
  );
};

export default CreateNewGrievance;

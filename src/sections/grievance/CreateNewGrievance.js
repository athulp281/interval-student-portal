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
import React from "react";

import { useFormik, Form, FormikProvider } from "formik";
import Image from "next/image";
import { Icon } from "@iconify/react";

const CreateNewGrievance = () => {
  const formik = useFormik({
    initialValues: {},
  });
  return (
    <Box>
      {/* <Box
        sx={{
          position: "relative",
          pt: 20,
          pb: 4,
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)",
            clipPath:
              'path("M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 V1500 H0 Z")',
          },
        }}
      ></Box> */}
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
            {/* <Typography
              sx={{
                fontFamily: "Space Grotesk, serif",
                fontSize: 20,
                padding: 4,
                color: "white",
              }}
            >
              Enter your details below...
            </Typography> */}
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
          </Box>

          <Box>
            <Box
              sx={{
                background: `linear-gradient(to right,#F4F6FF 0%,#F4F6FF  10%, #0089d0 100%)`,
                borderRadius: "500px 50px 500px 50px",
                padding: 2,
              }}
            >
              {/* <img src="/formPng3.jpg" height={300} width={500} alt="nill" /> */}
              <Image
                src="/formPng3.jpg"
                alt="nill"
                // layout="responsive"
                width={450}
                height={200}
                quality={100}
                priority
                style={{
                  // borderRadius: "50px",
                  borderTopLeftRadius: "700px",
                  borderTopRightRadius: "100px",
                  borderBottomRightRadius: "700px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box padding={5}>
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
        <Stack direction={"row"} spacing={2}>
          <TextField
            variant="filled"
            sx={{
              "& .MuiFilledInput-root": {
                borderRadius: "25px",
                "&:before": {
                  display: "none", // Removes the bottom line
                },
                "&:after": {
                  display: "none", // Removes the focused bottom line
                },
              },
            }}
            fullWidth
            label="Admission No"
          />
          <TextField
            fullWidth
            label="Student Name"
            variant="filled"
            sx={{
              "& .MuiFilledInput-root": {
                borderRadius: "25px",
                "&:before": {
                  display: "none", // Removes the bottom line
                },
                "&:after": {
                  display: "none", // Removes the focused bottom line
                },
              },
            }}
          />
        </Stack>
        <Box pt={2}>
          <TextField
            fullWidth
            placeholder="Enter your email.."
            label="Email"
            variant="filled"
            sx={{
              "& .MuiFilledInput-root": {
                borderRadius: "25px",
                "&:before": {
                  display: "none", // Removes the bottom line
                },
                "&:after": {
                  display: "none", // Removes the focused bottom line
                },
              },
            }}
          />
        </Box>
        <Box pt={2}>
          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    borderRadius: "25px",
                    "&:before": {
                      display: "none", // Removes the bottom line
                    },
                    "&:after": {
                      display: "none", // Removes the focused bottom line
                    },
                  },
                }}
                {...params}
                label="Movie"
              />
            )}
          />
        </Box>
        <Box pt={2}>
          <Autocomplete
            disablePortal
            options={top100Films}
            // sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                fullWidth
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    borderRadius: "25px",
                    "&:before": {
                      display: "none", // Removes the bottom line
                    },
                    "&:after": {
                      display: "none", // Removes the focused bottom line
                    },
                  },
                }}
                {...params}
                label="Course"
              />
            )}
          />
        </Box>
        <Box pt={2}>
          <TextField
            multiline
            rows={3}
            fullWidth
            label="Explain issues.."
            variant="filled"
            sx={{
              "& .MuiFilledInput-root": {
                borderRadius: "25px",
                "&:before": {
                  display: "none", // Removes the bottom line
                },
                "&:after": {
                  display: "none", // Removes the focused bottom line
                },
              },
            }}
          />
        </Box>
        <Box pt={2}>
          <Stack direction={"row"} spacing={2}>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="priority"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      borderRadius: "25px",
                      "&:before": {
                        display: "none", // Removes the bottom line
                      },
                      "&:after": {
                        display: "none", // Removes the focused bottom line
                      },
                    },
                  }}
                />
              )}
            />
            <TextField
              fullWidth
              label="Phone"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  borderRadius: "25px",
                  "&:before": {
                    display: "none", // Removes the bottom line
                  },
                  "&:after": {
                    display: "none", // Removes the focused bottom line
                  },
                },
              }}
            />
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <Button
              sx={{
                background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
                color: "white",
                borderRadius: 3,
                width: "70%",
              }}
            >
              <Icon icon="iconoir:submit-document" width="24" height="24" />
              Submit Your Grievance
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const priority = [
  { ids: 1, name: "Low" },
  { ids: 2, name: "Medium" },
  { ids: 3, name: "Urgent" },
];
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
export default CreateNewGrievance;

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  landing: path(ROOTS_AUTH, "/landing"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  grievance: path(ROOTS_DASHBOARD, "/grievance-register"),
  createnewgrievance: path(
    ROOTS_DASHBOARD,
    "/grievance-register/create-new-grievance"
  ),
  dashboard: path(ROOTS_DASHBOARD, "/websitedashboard"),
  analytics: path(ROOTS_DASHBOARD, "/webanalytics"),
  courses: path(ROOTS_DASHBOARD, "/courses"),
};

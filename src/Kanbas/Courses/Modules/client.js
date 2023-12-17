import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

export const updateModule = async (module) => {
  const response = await axios.
  put(`${MODULES_URL}/${module.number}`, module);
  return response.data;
};

export const deleteModule = async (moduleNum) => {
  const response = await axios
  .delete(`${MODULES_URL}/${moduleNum}`);
  return response.data;
};

export const createModule = async (courseNum, module) => {
  const response = await axios.post(
      `${COURSES_URL}/${courseNum}/modules`,
      module
  );
  return response.data;
};

export const findModulesForCourse = async (courseNum) => {
  const response = await axios
  .get(`${COURSES_URL}/${courseNum}/modules`);
  return response.data;
};

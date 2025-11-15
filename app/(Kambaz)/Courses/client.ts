import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
/* eslint-disable @typescript-eslint/no-explicit-any */
const COURSES_API = `${HTTP_SERVER}/api/courses`;
//this implements all of the course related communication between the user interface
//and the server.
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

//the findMyCourseForEnrolled User retrieves the current user's courses using the new fin
//endpoint
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data;
};
//function posts a new course to  the server and returns the responses data which
//should be the brand new course created in the server
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};
//add the deleteCourse client function that deletes an existing courses from the server
//and returns the status response from the server
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

//client function updates an existing course in the server and returns the status response
//from the server
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course
  );
  return data;
};

//crreateModuleForCourse client function posts new modules from the user interface
//to the server as shown belo. Encode the courses's id in the url so the
//server knows what course the module belongs to
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

//implement the findModulesForCourse function which retrieves
//the modules for a given course
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`
  );
  return response.data;
};

//deleteModule function: pass it the ID of the module to be removed, encode it in a URL
//and send it as an HTTP DELETE to the server
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
};

//updateModule function. Pass it the module to be updated
//encode the ID of the module in a URL
//send the module updates in the body of an HTTP PUT request
export const updateModule = async (module: any) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

"use client";
import { useState, useEffect } from "react";
import * as client from "../../client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
/* eslint-disable @typescript-eslint/no-explicit-any */

//moduleName is a state variable that keeps track of the module name edited
//the addModule function creates a new module instance with the ModuleName
//as the name and appends it to the end of the modules state variable
//the setModuleName and addModule funcitons are passed to the ModulesControls
//component which in turn passes them to the Module editor dialogue

/* eslint-disable @next/next/no-assign-module-variable */

/* eslint-disable */

export default function Modules() {
  const { cid } = useParams();
  //converting Modules into a state variable
  //keep this one
  const [moduleName, setModuleName] = useState("");
  //add new redux fars vars here
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  //updateModule function
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) =>
      m._id === module._id ? module : m
    );
    dispatch(setModules(newModules));
  };

  //onRemove removes the module from the server, if succesful, filter the module
  //from the modules array and dispatch the new list of modules to the reducer
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  //the findModulesForCourse client function i used as well as dispatch to get the modules
  //from the server

  //onCreateModuleForCourse event handler uses the new CreateModuleForCourse
  //client function to send the module to the server and then dispatches the
  //created module to the reducer so its added to the reducers module state
  //variable
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}

      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={onCreateModuleForCourse}
      />
      <br />
      <br />
      <br />
      <br />
      {/** testing out the new code */}
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroupItem
            key={module._id ?? `${module.course}-${module.name}`}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {/**this is where the new code goes */}
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem
                    key={lesson._id ?? `${module._id}-${lesson.name}`}
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

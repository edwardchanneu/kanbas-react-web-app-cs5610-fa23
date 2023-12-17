import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseNumber } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseNumber
  // });
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //       (module) => module._id !== moduleId));
  // };
  // const updateModule = () => {
  //   setModules(
  //       modules.map((m) => {
  //         if (m._id === module._id) {
  //           return module;
  //         } else {
  //           return m;
  //         }
  //       })
  //   );
  // };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const stateModule = useSelector((state) => state.modulesReducer.module);
  const module = {...stateModule, course: courseNumber };
  const dispatch = useDispatch();

  const handleUpdateModule = async () => {
    try {
      const status = await client.updateModule(module);
      dispatch(updateModule(module));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteModule = (moduleNum) => {
    client.deleteModule(moduleNum).then((status) => {
      dispatch(deleteModule(moduleNum));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseNumber, module).then(
        (m) => dispatch(addModule(m))
    );
  };

  useEffect(() => {
    client.findModulesForCourse(courseNumber).then(
        (modules) => dispatch(setModules(modules))
    );
  }, [courseNumber]);

  return (
      <ul className="list-group">
        <li className="list-group-item">
          <button className="btn btn-success"
                  onClick={handleAddModule}>
            Add
          </button>
          <button className="btn btn-primary"
                  onClick={handleUpdateModule}>
            Update
          </button>
          <input className="form-control"
                 value={module.name}
                 onChange={(e) =>
                     dispatch(setModule({...module, name: e.target.value }))}
          />
          <textarea className="form-control"
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({...module, description: e.target.value }))}
          />
        </li>
        {
          modules
          .filter((module) => module.course === courseNumber)
          .map((module, index) => (
              <li key={index} className="list-group-item">
                <button className="btn btn-warning"
                        onClick={(event) =>
                            dispatch(setModule(module))} >
                  Edit
                </button>
                <button className="btn btn-danger"
                        onClick={() =>
                            handleDeleteModule(module.number)} >
                  Delete
                </button>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
          ))
        }
        {/*<pre>{JSON.stringify(modules)}</pre>*/}
      </ul>
  );
}

export default ModuleList;

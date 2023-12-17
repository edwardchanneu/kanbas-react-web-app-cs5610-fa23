import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

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

  return (
      <ul className="list-group">
        <li className="list-group-item">
          <button className="btn btn-success"
                  onClick={() => dispatch(addModule({...module, course: courseNumber }))}>
            Add
          </button>
          <button className="btn btn-primary"
                  onClick={() => dispatch(updateModule({...module, course: courseNumber }))}>
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
                            dispatch(deleteModule(module.number))} >
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

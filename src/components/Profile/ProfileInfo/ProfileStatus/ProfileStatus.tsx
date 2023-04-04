import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import s from "./ProfileStatus.module.css";
import TextField from "@mui/material/TextField";
import DoneIcon from "@mui/icons-material/Done";

export const ProfileStatus = (props: any) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  const updateStatus = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const editStatus = () => {
    setEditMode(true);
  };

  const updateStatusOnEnter = (e: any) => {
    if (e.code === "Enter") {
      updateStatus();
    }
  };

  return editMode ? (
    <div className={s.inputContainer}>
      <TextField
        value={status}
        color="secondary"
        onChange={changeStatus}
        onBlur={updateStatus}
        onKeyUp={updateStatusOnEnter}
        className={s.input}
        autoFocus
        id="standard-basic"
        variant="standard"
        label=""
      />
      <DoneIcon className={s.doneBtn} color="primary" />
    </div>
  ) : (
    <div className={s.editContainer}>
      <p className={s.status}>{status ? status : "No status"}</p>
      {props.myProfile && (
        <EditIcon onClick={editStatus} className={s.editBtn} />
      )}
    </div>
  );
};

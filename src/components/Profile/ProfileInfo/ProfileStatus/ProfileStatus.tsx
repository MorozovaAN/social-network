import React, { useEffect, useState } from "react";

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
    <input
      value={status}
      autoFocus={true}
      onChange={changeStatus}
      onBlur={updateStatus}
      onKeyDown={updateStatusOnEnter}
    />
  ) : (
    <p onDoubleClick={editStatus}>
      <b>{status ? status : "no status"}</b>
    </p>
  );
};

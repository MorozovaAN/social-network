import style from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
  return (
    <div className={style.info}>
      <img
        width="100"
        height="100"
        src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"
        alt="avatar"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        blanditiis cupiditate fuga illo iure molestiae nulla, odit optio,
        perferendis qui sint soluta veritatis, voluptatum? Iusto modi natus
        nesciunt numquam sapiente!
      </p>
    </div>
  );
};

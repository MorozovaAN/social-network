import React from "react";

export const Profile = () => {
  return (
    <div className="content">
      <img
        alt="bg-image"
        className="content__image"
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg"
      />
      <div className="content__user-info">
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
    </div>
  );
};

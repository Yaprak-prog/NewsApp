import React from "react";
import newimage from "../assets/News.jpg";

function NavItem({ title, description, url, image }) {
  return (
    <div
      className="card bg-dark text-center text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={image ? image : newimage}
        style={{ width: "280px", height: "100px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "In a phone call that has not been previously reported, Johnson said he was ready to act on foreign aid, even though that would enrage Republicans who did not support"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More...
        </a>
      </div>
    </div>
  );
}

export default NavItem;

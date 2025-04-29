import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";


const PhonesCard = ({ phone, deletable,handleDelete }) => {
  const { name, description, image, id } = phone || {};

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/phone-details/${id}`}>
            <button className="cursor-pointer relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute -top-3 -right-2 text-white hover:text-red-500 hover:bg-gray-200 bg-black p-1 rounded-full "
        >
          <MdDeleteForever />
        </div>
      )}
    </div>
  );
};

export default PhonesCard;

import React, { useEffect, useState } from "react";
import PhonesCard from "../components/PhonesCard";
import { getFavorites, removeFavorite } from "../utils";
import Empty from "../components/ui/Empty";

const Favorite = () => {
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const savedPhone = getFavorites();
    setDisplayPhones(savedPhone);
  }, []);

  const handleDelete = (id) => {
    removeFavorite(id);
    setDisplayPhones(getFavorites());
  };
  if (displayPhones.length === 0) return <Empty />;
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
        {displayPhones.map((phone) => (
          <PhonesCard
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;

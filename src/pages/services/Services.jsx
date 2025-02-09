import React from "react";

import ServiceComponets from "../../components/servicesContent/ServiceComponets";
import Backend from "../../components/backend/Backend";
import Frontend from "../../components/frontend/Frontend";

const Services = () => {
  return (
    <div>
      <ServiceComponets />
      <Backend />
      <Frontend />
    </div>
  );
};

export default Services;

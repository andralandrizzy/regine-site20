import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../Loader";

import {
  ServiceCardWrapper,
  ServiceContainer,
  ServiceHeading,
  ServiceImageWrap,
  ServiceImage,
  ServiceSubHeading,
  ServiceCardTitle,
  ServiceCardDesc,
  ServiceContent,
  LinkR,
  ServiceInfoWrap,
} from "./ServiceElements";
import { listHomeService } from "../../actions/serviceActions";

const ServiceSection = () => {
  const dispatch = useDispatch();
  const servicesHome = useSelector((state) => state.servicesHome);
  const { loading, error, services } = servicesHome;

  useEffect(() => {
    dispatch(listHomeService());
  }, [dispatch]);

  return (
    <>
      <ServiceContainer id="services">
        <ServiceHeading>Our Services</ServiceHeading>
        <ServiceSubHeading>What we offer to our supporters</ServiceSubHeading>
        <ServiceContent>
          {services.map((service) => (
            <ServiceCardWrapper key={service._id}>
              <ServiceImageWrap>
                <ServiceImage src={service.image} alt={service.title} />
              </ServiceImageWrap>
              <ServiceInfoWrap>
                <LinkR to={`/service/${service._id}/details`}>
                  <ServiceCardTitle>{service.title}</ServiceCardTitle>
                </LinkR>
                <ServiceCardDesc>
                  {service.description.substring(0, 150) + "..."}
                </ServiceCardDesc>
              </ServiceInfoWrap>
            </ServiceCardWrapper>
          ))}
        </ServiceContent>
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { listServiceDetails } from "../../actions/serviceActions";
import HeaderContent from "../../components/HeaderContent";
import {
  ServiceDetailsBody,
  ServiceDetailsContainer,
  ServiceDetailsImg,
  ServiceDetailsImgWrap,
  ServiceDetailsText,
  ServiceDetailsWrap,
} from "./ServiceDetailsElements";

const ServiceDetailsScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;
  useEffect(() => {
    dispatch(listServiceDetails(id));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        toast.error(error)
      ) : (
        <>
          <HeaderContent />
          <ServiceDetailsWrap>
            <ServiceDetailsContainer>
              <ServiceDetailsImgWrap>
                <ServiceDetailsImg src={service.image} alt={service.title} />
              </ServiceDetailsImgWrap>
              <ServiceDetailsText>{service.title}</ServiceDetailsText>
              <ServiceDetailsBody>{service.description}</ServiceDetailsBody>
            </ServiceDetailsContainer>
          </ServiceDetailsWrap>
        </>
      )}
    </>
  );
};

export default ServiceDetailsScreen;

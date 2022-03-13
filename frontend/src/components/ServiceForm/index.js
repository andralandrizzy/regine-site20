import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import {
  listServiceDetails,
  updateService,
} from "../../actions/serviceActions";
import { SERVICE_UPDATE_RESET } from "../../constants/serviceConstants";
import { toast } from "react-toastify";
import {
  ServiceFormContent,
  ServiceFormH1,
  ServiceFormH1Wrap,
  ServiceFormWrap,
  ServiceProfileContainer,
} from "./ServiceFormElements";

const ServiceForm = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;

  const serviceUpdate = useSelector((state) => state.serviceUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = serviceUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SERVICE_UPDATE_RESET });
      navigate("/admin/servicelist");
    } else {
      if (!service.title || service._id !== id) {
        dispatch(listServiceDetails(id));
      } else {
        setTitle(service.title);
        setImage(service.image);
        setDescription(service.description);
      }
    }
  }, [dispatch, id, service, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateService({
        _id: id,
        title,
        image,
        description,
      })
    );
  };

  return (
    <>
      <div style={{marginBottom: '87px',}}>{loadingUpdate && <Loader />}</div>
      {errorUpdate && toast.error(errorUpdate)}
      {loading ? (
        <Loader />
      ) : error ? (
        toast.error(error)
      ) : (
        <ServiceProfileContainer>
          <ServiceFormWrap>
            <ServiceFormContent>
              <ServiceFormH1Wrap>
                <ServiceFormH1>Edit Service informations</ServiceFormH1>
              </ServiceFormH1Wrap>
              {error && toast.error(error)}
              {loading ? (
                <Loader />
              ) : (
                <Form onSubmit={submitHandler}>
                <Form.Group controlId="image" className="imageForm">
                  <Form.Control
                      type="file"
                      label="Choose File"
                      onChange={uploadFileHandler}
                      custom='true'
                      className="ServiceFormImageFile"
                      />
                  <Form.Control
                    type="text"
                    placeholder="Enter image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="ServiceFormImagePath"
                  ></Form.Control>
                </Form.Group>
    
              <Form.Group controlId="title">
                <Form.Label className='serviceLabel'>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the service title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="ServiceFormInput"
                ></Form.Control>
              </Form.Group>
    
              <Form.Group controlId="description">
                <Form.Label className='serviceLabel'>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="ServiceFormInput"
                ></Form.Control>
              </Form.Group>
    
              <Button type="submit" className="btn-second">
                Update
              </Button>
            </Form>
              )}
            </ServiceFormContent>
          </ServiceFormWrap>
        </ServiceProfileContainer>
      )}
    </>
  );
};

export default ServiceForm;

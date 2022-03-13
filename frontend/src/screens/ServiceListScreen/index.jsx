import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  listServices,
  deleteService,
  createService,
} from "../../actions/serviceActions";
import { SERVICE_CREATE_RESET } from "../../constants/serviceConstants";
import { Table } from "react-bootstrap";
import {
  TableAboutContainer,
  TableHeading,
  IconPlus,
  HeadingWrap,
  PlusIconLink,
  AboutDeleteBtn,
  AboutEditBtn,
} from "../../components/TableAbout/TableAboutElements";
import {
  DeleteIcon,
  EditIcon,
} from "../../screens/UserListScreen/UserListScreenElements";

const ServiceListScreen = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services } = serviceList;
  const serviceDelete = useSelector((state) => state.serviceDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = serviceDelete;

  const serviceCreate = useSelector((state) => state.serviceCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    service: createdService,
  } = serviceCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: SERVICE_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/service/${createdService._id}/edit`);
    } else {
      dispatch(listServices(""));
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdService,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteService(id));
    }
  };

  const createServiceHandler = () => {
    dispatch(createService());
    toast.success("sample service infos was created.");
  };
  return (
    <>
      <TableAboutContainer>
        <HeadingWrap>
          <TableHeading>Service Content </TableHeading>
          <PlusIconLink onClick={createServiceHandler}>
            <IconPlus />
          </PlusIconLink>
        </HeadingWrap>
        {loadingDelete && <Loader />}
        {errorDelete && toast.error(errorDelete)}
        {loadingCreate && <Loader />}
        {errorCreate && toast.error(errorCreate)}
        {loading ? (
          <Loader />
        ) : error ? (
          toast.error(error)
        ) : (
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th colSpan={2}>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr key={service._id}>
                  <td>{i}</td>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                  <td>
                    <Link to={`/admin/service/${service._id}/edit`}>
                      <AboutEditBtn>
                        <EditIcon />
                      </AboutEditBtn>
                    </Link>
                  </td>
                  <td>
                    <AboutDeleteBtn onClick={() => deleteHandler(service._id)}>
                      <DeleteIcon />
                    </AboutDeleteBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </TableAboutContainer>
    </>
  );
};

export default ServiceListScreen;

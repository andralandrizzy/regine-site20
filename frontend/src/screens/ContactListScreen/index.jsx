import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  listContacts,
  deleteContact,
} from "../../actions/contactActions";
import { Table } from "react-bootstrap";
import {
  TableAboutContainer,
  TableHeading,
  HeadingWrap,
  AboutDeleteBtn,
} from "../../components/TableAbout/TableAboutElements";
import {
  DeleteIcon
} from "../../screens/UserListScreen/UserListScreenElements";

const ContactListScreen = () => {
  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contactList)
  const { loading, error, contacts } = contactList

  const contactDelete = useSelector((state) => state.contactDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = contactDelete;


  useEffect(() => {

      dispatch(listContacts(""))
  }, [
    dispatch,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteContact(id));
      window.location.reload(true);
    }
  };

  return (
    <>
      <TableAboutContainer>
        <HeadingWrap>
          <TableHeading>Contact Content </TableHeading>
        </HeadingWrap>
        {loadingDelete && <Loader />}
        {errorDelete && toast.error(errorDelete)}
        {loading ? (
          <Loader />
        ) : error ? (
          toast.error(error)
        ) : (
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>NAMES</th>
                <th>EMAILS</th>
                <th>SUBJECTS</th>
                <th colSpan={2}>MESSAGES</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => (
                <tr key={contact._id}>
                  <td>{i}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.text_message}</td>
                  <td>
                    <AboutDeleteBtn onClick={() => deleteHandler(contact._id)}>
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

export default ContactListScreen;

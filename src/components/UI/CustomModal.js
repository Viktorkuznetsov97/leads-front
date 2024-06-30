import { IconButton, Modal } from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

const ContentWrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 400px;
  width: 100%;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 15px;

  h3 {
    margin: 0 0 10px;
    text-align: center;
    font-size: 24px;
  }

  .close-btn {
    position: absolute;
    right: -25px;
    top: -25px;
  }
`;

const CustomModal = ({ isOpen, handlerClose, title, children }) => (
  <Modal
    open={isOpen}
    onClose={handlerClose}
    style={{ display: "flex", padding: "15px" }}
  >
    <ContentWrapper>
      <h3>{title}</h3>
      <IconButton size="small" className="close-btn" onClick={handlerClose}>
        <CloseIcon />
      </IconButton>
      {children}
    </ContentWrapper>
  </Modal>
);

export default CustomModal;

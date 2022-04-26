import { useState } from "react";
import env from "react-dotenv";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const LoginModal = ({ handleClose, open }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (username, password) => {
    fetch(`${env.API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 className="title">Login</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            // type="submit"
            onClick={() => {
              loginUser(username, password);
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;

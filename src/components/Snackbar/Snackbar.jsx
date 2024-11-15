import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CustomSnackbar = ({ open, onClose, message, severity }) => (
  <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
  >
    <MuiAlert onClose={onClose} severity={severity} elevation={6} variant="filled">
      {message}
    </MuiAlert>
  </Snackbar>
);

export default CustomSnackbar;

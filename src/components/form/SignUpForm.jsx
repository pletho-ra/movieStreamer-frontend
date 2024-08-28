import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const SignupModal = ({ open, handleClose }) => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // Reset form fields
    reset();
    // Optionally close the modal
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="signup-modal-title"
      aria-describedby="signup-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          maxHeight: "80vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Typography id="signup-modal-title" variant="h6" component="h2">
          Signup
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "username is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="UserName"
                autoComplete="username"
                autoFocus
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                autoFocus
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Number"
                autoComplete="number"
                autoFocus
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="confirm password"
            control={control}
            defaultValue=""
            required
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              width="20%"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "grey.500",
                color: "white",
                "&:hover": {
                  bgcolor: "grey.700",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default SignupModal;

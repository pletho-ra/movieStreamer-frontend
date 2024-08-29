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
          width: "40vw",
          maxHeight: "80vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Typography
          id="signup-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          SignIn to MovieStreamer
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            className="bg-gray-200"
            rules={{ required: "Username is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Username"
                className="bg-gray-200"
                InputLabelProps={{ shrink: true }}
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
                className="bg-gray-200"
                InputLabelProps={{ shrink: true }}
                autoComplete="email"
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
                className="bg-gray-200"
                InputLabelProps={{ shrink: true }}
                autoComplete="number"
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
                className="bg-gray-200"
                type="password"
                InputLabelProps={{ shrink: true }}
                autoComplete="current-password"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{ required: "Confirm Password is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                className="bg-gray-200"
                type="password"
                InputLabelProps={{ shrink: true }}
                autoComplete="current-password"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
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

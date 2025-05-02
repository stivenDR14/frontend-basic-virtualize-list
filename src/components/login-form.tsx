import { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Login,
} from "@mui/icons-material";
import { errorMessages, loginLabels } from "../utils/labels";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError(errorMessages.emailRequired);
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(errorMessages.emailInvalid);
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError(errorMessages.passwordRequired);
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(errorMessages.passwordLessThan6Characters);
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid && onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          gap: 3,
          py: 2,
        }}
      >
        <Login
          color="secondary"
          sx={{
            fontSize: 64,
            mb: 2,
          }}
        />

        <Typography variant="h1" component="h1" gutterBottom color="primary">
          {loginLabels.title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          sx={{ mb: 2 }}
        >
          {loginLabels.subtitle}
        </Typography>

        <TextField
          label={loginLabels.email}
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          slotProps={{
            input: {
              startAdornment: <Email color="primary" />,
            },
          }}
        />

        <TextField
          label={loginLabels.password}
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
          slotProps={{
            input: {
              startAdornment: <Lock color="primary" />,
              endAdornment: (
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          sx={{ mt: 2 }}
        >
          {loginLabels.button}
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;

import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => {
        setSuccess(true);
        form.current?.reset();
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <Grid
      id="contact"
      container
      justifyContent="center"
      sx={{ minHeight: "60vh", mt: "6em", mb: "4em", px: 2 }}
    >
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Contact Me
        </Typography>
        <Box component="form" ref={form} onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Name"
            name="user_name"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="user_email"
            type="email"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            required
            sx={{ mb: 3 }}
          />
          <Button variant="contained" fullWidth type="submit">
            Send
          </Button>
        </Box>
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="error">
          Failed to send message. Try again later.
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Contact;

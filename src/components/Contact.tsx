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
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        console.log("Message sent!");
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
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "#5F5F5F",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.2em", color: "#fff" }}
            >
              Send
            </Typography>
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

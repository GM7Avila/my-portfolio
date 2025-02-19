import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import "../App.css";
import Header from "./Header";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const circleColor =
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.3)";
  return (
    <Box
      sx={{
        width: "100vw",
        px: { xs: "2em", sm: "3em", lg: "4em", xl: "5em" },
      }}
    >
      <Header />
      <Box
        sx={{
          height: "90vh",
          backgroundColor: "transparent",
          margin: "0",
          paddingTop: { xs: "0em", sm: "6em", md: "2em" },
        }}
      >
        {/*Page 1 - define as dimnesões da página*/}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "85%",
            paddingLeft: { md: "1em", lg: "3em", xl: "10em" },
          }}
        >
          {/* Grid 1 - Hello World */}
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: { xs: "2em", sm: "0em" },
            }}
          >
            <Typography
              sx={{
                margin: "0",
                fontSize: { xs: "1.2em", sm: "1.3em", md: "1.8em" },
                paddingLeft: "0.2em",
                paddingBottom: "0.4em",
                paddingTop: { xs: "2em", sm: "0em" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Hello World, I'm
            </Typography>
            <Typography
              sx={{
                margin: "0",
                fontSize: { xs: "3em", sm: "3.5em", md: "5em" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Guilherme
            </Typography>
            <Typography
              sx={{
                margin: "0",
                paddingLeft: { xs: "0.6em", sm: "0em" },
                fontSize: { xs: "2.3em", sm: "3em", md: "4.5em" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              M. Avila <span className="wave">👋</span>{" "}
            </Typography>
          </Grid>

          {/* Grid 2 - Image Box */}
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Container profile art */}
            <Box
              sx={{
                paddingTop: { xs: "2em", sm: "3em" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0",
              }}
            >
              {/* Container para a imagem de perfil */}
              <Box
                className="profile-container"
                sx={{
                  position: "relative",
                  width: { xs: "12em", sm: "12em", md: "20em", lg: "20em" },
                  height: { xs: "12em", sm: "12em", md: "20em", lg: "20em" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1.5em",
                }}
              >
                {/* Círculo superior */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: circleColor,
                    position: "absolute",
                    top: { xs: "-0.75em", md: "-1.1em" },
                    left: { xs: "-0.85em", md: "-1.5em" },
                    zIndex: 0,
                  }}
                />
                {/* Círculo inferior */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: circleColor,
                    position: "absolute",
                    top: { xs: "0.55em", md: "1.1em" },
                    left: { xs: "0.55em", md: "1.3em" },
                    zIndex: 0,
                  }}
                />
                {/* Foto de perfil */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundImage: "url(https://github.com/GM7Avila.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Grid 3 - Description */}
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                paddingTop: { xs: "2em", sm: "0em" },
                paddingRight: { xs: "2em", sm: "5em", md: "2em", lg: "3em" },
                paddingLeft: { xs: "2em", sm: "5em", md: "0em" },
                paddingBottom: { xs: "2em", sm: "0em" },

                fontSize: { xs: "1.1em", md: "1.2em", lg: "1.5em" },
                textAlign: { xs: "center", md: "left" },
                whiteSpace: "pre-line",
                lineHeight: "1.8em",
              }}
            >
              Full Stack Developer, Computer Science Graduate, and dedicated to
              building innovative digital experiences.
            </Typography>
          </Grid>

          {/* Grid 4 - Social Media */}
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={{
              marginTop: { xs: "0em", md: "2.5em" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "0.15em", sm: "1.5em", md: "2em" },
            }}
          >
            <Tooltip
              title={
                <Typography sx={{ fontSize: { xs: "1em", md: "1.5em" } }}>
                  GitHub
                </Typography>
              }
              placement="bottom"
            >
              <a
                href="https://github.com/GM7Avila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  disableRipple
                  sx={{
                    "&:hover svg": {
                      color: "#e974fc",
                    },
                  }}
                >
                  <GitHubIcon
                    sx={{
                      fontSize: { xs: "1.2em", md: "1.6em" },
                      color: "inherit",
                      transition: "color 0.2s ease",
                    }}
                  />
                </IconButton>
              </a>
            </Tooltip>

            <Tooltip
              title={
                <Typography sx={{ fontSize: { xs: "1em", md: "1.5em" } }}>
                  LinkedIn
                </Typography>
              }
              placement="bottom"
            >
              <a
                href="https://www.linkedin.com/in/avila-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  disableRipple
                  sx={{
                    "&:hover svg": {
                      color: "#7d74fc",
                    },
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: { xs: "1.2em", md: "1.6em" },
                      color: "inherit",
                      transition: "color 0.2s ease",
                    }}
                  />
                </IconButton>
              </a>
            </Tooltip>

            <Tooltip
              title={
                <Typography sx={{ fontSize: { xs: "1em", md: "1.5em" } }}>
                  Twitter
                </Typography>
              }
              placement="bottom"
            >
              <a
                href="https://x.com/gavila_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  disableRipple
                  sx={{
                    "&:hover svg": {
                      color: "#74d1fc",
                    },
                  }}
                >
                  <XIcon
                    sx={{
                      fontSize: { xs: "1.2em", md: "1.6em" },
                      color: "inherit",
                      transition: "color 0.2s ease",
                    }}
                  />
                </IconButton>
              </a>
            </Tooltip>

            <Tooltip
              title={
                <Typography sx={{ fontSize: { xs: "1em", md: "1.5em" } }}>
                  Curriculum
                </Typography>
              }
              placement="bottom"
            >
              <IconButton
                disableRipple
                sx={{
                  "&:hover svg": {
                    color: "#74fcb3",
                  },
                }}
              >
                <ContactPageIcon
                  sx={{
                    fontSize: { xs: "1.2em", md: "1.6em" },
                    color: "inherit",
                    transition: "color 0.2s ease",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

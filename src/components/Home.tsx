import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import "../App.css";
import Header from "./Header";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

import {
  SiSpring,
  SiMui,
  SiDotnet,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiPython,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { useState } from "react";

const getTechIcon = (techName: string) => {
  const iconStyle = { fontSize: "1.5em" };

  switch (techName) {
    case "Spring":
      return <SiSpring style={iconStyle} />;
    case "ASP.NET":
      return <SiDotnet style={iconStyle} />;
    case "React":
      return <SiReact style={iconStyle} />;
    case "TypeScript":
      return <SiTypescript style={iconStyle} />;
    case "Material UI":
      return <SiMui style={iconStyle} />;
    case "C#":
      return <TbBrandCSharp style={iconStyle} />;
    case "Java":
      return <FaJava style={iconStyle} />;
    case "TailwindCSS":
      return <SiTailwindcss style={iconStyle} />;
    case "Docker":
      return <SiDocker style={iconStyle} />;
    case "MySQL":
      return <SiMysql style={iconStyle} />;
    case "PostgreSQL":
      return <SiPostgresql style={iconStyle} />;

    case "MongoDB":
      return <SiMongodb style={iconStyle} />;
    case "Git":
      return <SiGit style={iconStyle} />;
    case "Github":
      return <SiGithub style={iconStyle} />;
    case "Linux":
      return <SiLinux style={iconStyle} />;
    case "Python":
      return <SiPython style={iconStyle} />;
    default:
      return <div />;
  }
};

type LanguageType = {
  name: string;
  category: string;
  proficiency: 1 | 2 | 3;
};

const languages: LanguageType[] = [
  { name: "Java", category: "Backend", proficiency: 3 },
  { name: "Spring", category: "Backend", proficiency: 3 },
  { name: "C#", category: "Backend", proficiency: 3 },
  { name: "ASP.NET", category: "Backend", proficiency: 3 },
  { name: "React", category: "Frontend", proficiency: 3 },
  { name: "TypeScript", category: "Frontend", proficiency: 3 },
  { name: "Material UI", category: "Frontend", proficiency: 3 },
  { name: "TailwindCSS", category: "Frontend", proficiency: 2 },
  { name: "MySQL", category: "Database", proficiency: 3 },
  { name: "PostgreSQL", category: "Database", proficiency: 2 },
  { name: "MongoDB", category: "Database", proficiency: 2 },
  { name: "Python", category: "Data Science", proficiency: 3 },
  { name: "Docker", category: "DevOps", proficiency: 2 },
  { name: "Linux", category: "DevOps", proficiency: 2 },
  { name: "Git", category: "DevOps", proficiency: 3 },
  { name: "Github", category: "DevOps", proficiency: 3 },
];

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const circleColor = theme.palette.mode === "dark" ? "#42414c" : "#d4d4d8";

  return (
    /* Moldura */
    <Box
      sx={{
        width: "100vw",
        px: { xs: "2em", sm: "3em", lg: "4em", xl: "8em" },
      }}
    >
      <Header />
      {/*Page 1 */}
      <Grid
        container
        sx={{
          mt: "10vh",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: { md: "1em", lg: "3em", xl: "8em" },
        }}
      >
        {/* Grid 1 - Hello World */}
        <Grid
          size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: { xs: "1em", sm: "0em" },
          }}
        >
          <Typography
            sx={{
              margin: "0",
              fontSize: { xs: "1.2em", sm: "1.3em", md: "1.8em" },
              paddingLeft: "0.2em",
              paddingBottom: "0.4em",
              paddingTop: { xs: "0.5em", sm: "0em" },
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
              paddingTop: { xs: "2em", sm: "3em", xl: "4em" },
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
              {/* Círculo menor Superior */}
              <Box
                sx={{
                  width: "10%",
                  height: "10%",
                  borderRadius: "50%",
                  backgroundColor: circleColor,
                  position: "absolute",
                  top: { xs: "-1em", md: "-1.5em", lg: "-1.8em" },
                  left: { xs: "-1em", lg: "-1.3em" },
                  zIndex: 0,
                  animation: "pulse 2s ease-in-out infinite",
                  transformOrigin: "center center",
                }}
              />
              {/* Círculo menor Inferior */}
              <Box
                sx={{
                  width: "14%",
                  height: "14%",
                  borderRadius: "50%",
                  backgroundColor: circleColor,
                  position: "absolute",
                  bottom: { xs: "-0.5em", md: "-1em", lg: "-1.8em" },
                  right: "-1.3em",
                  zIndex: 0,
                  animation: "pulse 2s ease-in-out infinite",
                  transformOrigin: "center center",
                  animationDelay: "0.5s",
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
            marginBottom: "auto",
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
            Web Developer, Computer Science Graduate, and dedicated to building
            innovative digital experiences.
          </Typography>
        </Grid>

        {/* Grid 4 - Social Media */}
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
          sx={{
            marginTop: { xs: "0em", md: "2.5em" },
            marginBottom: "auto",

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1.5,
          py: 4,
          width: "100%",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: 5, sm: 7 },
              height: { xs: 6, sm: 8 },
              borderRadius: "50%",
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.3)"
                  : "rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.25)",
                bgcolor: (theme) => theme.palette.text.secondary,
              },
            }}
          />
        ))}
      </Box>
      {/*Page 2 - About*/}
      <Grid
        container
        sx={{
          mt: "14vh",
          mb: "5em",
          minHeight: "75vh",
          width: "100%",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6, lg: 6, xl: 6 }}
          sx={{
            mt: { md: "0em", lg: "4em", xl: "4em" },
            display: "flex",
            flexDirection: "column",
            paddingLeft: { md: "1em", lg: "3em", xl: "4em" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.4em", sm: "1.8em" },
              textDecoration: "underline",
            }}
          >
            Background
          </Typography>

          <Box sx={{ alignItems: "center", marginTop: "2.5em" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ fontSize: "1.5em", marginRight: "0.5em" }}>
                🎓
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1.1em", sm: "1.5em" },
                  fontWeight: "bold",
                }}
              >
                Mechatronics Technician
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "1em", sm: "1.25em" },
                color: theme.palette.text.secondary,
              }}
            >
              Escola Técnica Pandiá Calogeras (2017-2019)
            </Typography>
          </Box>

          <Grid sx={{ marginTop: "1em" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ fontSize: "1.5em", marginRight: "0.5em" }}>
                🎓
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1.1em", sm: "1.5em" },
                  fontWeight: "bold",
                }}
              >
                Computer Science Graduate
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "1em", sm: "1.25em" },
                color: theme.palette.text.secondary,
              }}
            >
              Universidade Veiga de Almeida (2022)
            </Typography>
          </Grid>
          <Typography
            sx={{
              fontSize: { xs: "1.4em", sm: "1.8em" },
              marginTop: "2.2em",
              textDecoration: "underline",
            }}
          >
            Experiences{" "}
            <Tooltip placement="top" title="Expand">
              <IconButton
                onClick={() => setExpanded((prev) => !prev)}
                sx={{
                  ml: 1,
                  transform: expanded ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s",
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          </Typography>
          <Grid sx={{ marginTop: "2.5em" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1em", sm: "1.25em" },
                    marginRight: "0.5em",
                  }}
                >
                  💼
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1em", sm: "1.5em" },
                    fontWeight: "bold",
                  }}
                >
                  Backend Java Developer
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 1 }}>
              <Box
                sx={{
                  borderLeft: "1px solid #ccc",
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "1em", sm: "1.25em" },
                  color: theme.palette.text.secondary,
                  fontWeight: "bold",
                }}
              >
                Rmax (2022-2023)
              </Typography>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", mb: 5 }}>
                <Box
                  sx={{
                    borderLeft: "1px solid #ccc",
                    mr: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "0.85em", sm: "1em" },
                    mt: 1,
                    mb: 2,
                    paddingRight: "10em",
                    color: "text.secondary",
                  }}
                >
                  Experience in developing{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      backgroundColor: circleColor,
                    }}
                  >
                    RESTful APIs
                  </span>
                  using the{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      backgroundColor: circleColor,
                    }}
                  >
                    Spring Framework
                  </span>
                  , with a focus on security, JWT authentication, user services,
                  and best coding practices.
                </Typography>
              </Box>
            </Collapse>
          </Grid>
          <Grid sx={{ marginTop: "2em" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: "1em", sm: "1.25em" },
                  marginRight: "0.5em",
                }}
              >
                💼
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.9em", sm: "1.5em" },
                  fontWeight: "bold",
                }}
              >
                Full Stack Dev. & Data Scientist
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Box
                sx={{
                  borderLeft: "1px solid #ccc",
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "1em", sm: "1.25em" },
                  color: theme.palette.text.secondary,
                  fontWeight: "bold",
                }}
              >
                FuzzyLab (2024)
              </Typography>
            </Box>
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ display: "flex", mb: 5 }}>
              <Box
                sx={{
                  borderLeft: "1px solid #ccc",
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.85em", sm: "1em" },
                  mt: 1,
                  mb: 2,
                  paddingRight: "10em",
                  color: "text.secondary",
                }}
              >
                Experience in Web Development with{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: circleColor,
                  }}
                >
                  React and Django REST Framework
                </span>{" "}
                . Skilled in implementing{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: circleColor,
                  }}
                >
                  Machine Learning
                </span>{" "}
                algorithms,{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: circleColor,
                  }}
                >
                  Data Analysis
                </span>
                , and developing web systems applied to Artificial Intelligence
                Engineering.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

        <Grid
          container
          size={{ xs: 12, md: 6, lg: 6, xl: 6 }}
          spacing={1}
          position={"sticky"}
          sx={{
            mt: { xs: "3em", lg: "0" },
            display: "flex",
            px: 2,
            justifyContent: "center",
          }}
        >
          {languages.map((tech, index) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 3, lg: 3 }}
              key={index}
              sx={{
                minWidth: { xs: 100, sm: 140 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  p: { xs: 0.5, sm: 1.5 },
                  minHeight: { xs: 125, sm: 130, xl: 80 },
                  maxHeight: { xs: 150, sm: 160, xl: 190 },
                  width: "100%",
                  borderRadius: 2,
                  boxShadow:
                    "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow:
                      "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                  },
                  bgcolor: theme.palette.cardBackground,
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: 24, sm: 25 },
                    color:
                      theme.palette.mode === "dark"
                        ? "primary.light"
                        : "primary.dark",
                    mb: 0.5,
                  }}
                >
                  {getTechIcon(tech.name)}
                </Box>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

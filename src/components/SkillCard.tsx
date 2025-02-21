// Adicione no início do arquivo
import { useState } from "react";

const SkillCard = ({ tech, theme }: { tech: LanguageType; theme: any }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        p: { xs: 0.5, sm: 1.5 },
        minHeight: { xs: 125, sm: 130, xl: 80 },
        width: "100%",
        borderRadius: 2,
        boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "rgba(3, 102, 214, 0.5) 0px 0px 0px 3px",
        },
        bgcolor: theme.palette.cardBackground,
      }}
    >
      {/* Efeito de brilho */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered
            ? `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)`
            : "none",
          pointerEvents: "none",
          transition: "background 0.3s ease",
        }}
      />

      <Box
        sx={{
          fontSize: { xs: 24, sm: 25 },
          color:
            theme.palette.mode === "dark" ? "primary.light" : "primary.dark",
          mb: 0.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        {getTechIcon(tech.name)}
      </Box>

      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {tech.name}
      </Typography>
    </Box>
  );
};

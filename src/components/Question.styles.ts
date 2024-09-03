import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  body: {
    margin: 0,
    padding: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#333",
  },
  progressContainer: {
    width: "80%",
    maxWidth: "600px",
    marginBottom: "20px",
  },
  progressBar: {
    height: "8px",
    backgroundColor: "#ddd",
    borderRadius: "4px",
    position: "relative",
    marginBottom: "10px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#ff69b4",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },
  pagination: {
    color: "#fff",
    fontSize: "18px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  questionInfo: {
    marginBottom: "20px",
  },
  questionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  highlight: {
    color: "#ff69b4",
  },
  optionsContainer: {
    width: "80%",
    maxWidth: "600px",
    marginBottom: "20px",
  },
  option: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px 20px",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionSelected: {
    backgroundColor: "#ffebee",
    borderColor: "#ff69b4",
  },
  nextButton: {
    backgroundColor: "#ff69b4",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "80%",
    maxWidth: "600px",
    marginTop: "20px",
    border: "none",
  },
  nextButtonHover: {
    backgroundColor: "#ff4081",
  },
};
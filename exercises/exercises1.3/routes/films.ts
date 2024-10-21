import { Router } from "express";
import { Film } from "../types";

const router = Router();

const films: Film[] = [
  {
    id: 1,
    title: "Harry Potter",
    director: "Henry",
    duration: 150,
  },
  {
    id: 2,
    title: "Inception",
    director: "Mark",
    duration: 130,
  },

  {
    id: 3,
    title: "Le seigneur des anneaux",
    director: "Albert",
    duration: 160,
  },
];

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;

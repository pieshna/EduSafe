import { Router } from "express";

const router = Router();

router.get("/maestro");

router.get("/maestro/count");

router.get("/maestro/:id");

router.post("/maestro");

router.put("/maestro/:id");

router.delete("/maestro/:id");

export default router;

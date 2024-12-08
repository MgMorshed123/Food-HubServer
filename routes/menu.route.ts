import express from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { addMenu, editMenu } from "../controller/menu.controller";
import upload from "../middlewares/multer";

const router = express.Router();

router.route("/").post(isAuthenticated, upload.single("image"), addMenu);
router.route("/:id").put(isAuthenticated, upload.single("image"), editMenu);

export default router;

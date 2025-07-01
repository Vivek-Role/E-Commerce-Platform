import express from "express";
import {
  createUserUsingCredentials,
  credentialsLogin,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
  sendotp,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/auth/login", credentialsLogin);
router.post("/auth/signup", createUserUsingCredentials);
router.post("/auth/sendOtp", sendotp);
router.post("/auth/forgot-password", forgotPassword);
router.post("/auth/reset-password/:token", resetPassword);

router.post("/logout", logoutCurrentUser);


router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

// ADMIN ROUTES 👇
router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteUserById)
  .get(authenticate, authorizeAdmin, getUserById)
  .put(authenticate, authorizeAdmin, updateUserById);

router.route("/").get(authenticate, authorizeAdmin, getAllUsers);

export default router;

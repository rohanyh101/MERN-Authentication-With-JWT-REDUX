import express from "express";
const router = express.Router();
// the extension for importing our custom js files is necessary since we are using esmodules,
// by decalring "type" as module in pkg.json file, otherwise it will throw an error saying "module not found..." 
import { authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    // the protect module here, is doing check if the tocken present for the user, if not (expired) or invalid token, give error,
    // before even routing to the next page.... 
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;
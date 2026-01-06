import { Router } from 'express';
import * as contentController from '../controllers/content.controller';

const router = Router();

router.post('/generate-week', contentController.generateWeek);
router.get("/weekly-plan/:userId", contentController.getWeeklyPlan);
router.get("/history/:userId", contentController.getHistory);
router.patch("/toggle-complete", contentController.toggleComplete);
router.patch("/edit-post", contentController.editPost);

export default router;

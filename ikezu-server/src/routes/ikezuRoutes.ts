import {Router} from 'express';
import {start} from '../controllers/ikezuController';
import {translate} from '../controllers/ikezuController';

const router = Router();

router.get('/', start);
router.post('/translate', translate);

export default router;
import * as express from 'express';
import { UserController } from './controller/UserController';
export class ApiRouting {
        public static ConfigureRouters(app: express.Router) {
                app.use(UserController.route, new UserController().router);
        }
}

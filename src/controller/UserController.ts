import { Router, Request, Response, NextFunction } from 'express';
import { Api } from '../helper';
/**
 * @class
 * @name UserController
 */

export class UserController {

    public static route = '/api/user';
    public router: Router = Router();
    constructor() {
        this.router.post('/Sign-up', this.RegisterUser);
        this.router.get('/', this.test);
    }


    public async RegisterUser(req: Request, res: Response, next: NextFunction) {
        console.log("stepped");
        return Api.ok(req, res, "Sorry no relevant result found");
              
        }


    public async test(req: Request, res: Response, next: NextFunction) {
        return Api.ok(req, res, 'Parse API works fine');
    }

}
declare namespace Express {
  export interface Request {
    user?: import('../../components/user').IUser
    hobby?: import('../../components/hobby').IHobby
    log?: import('pino').Logger
  }
}

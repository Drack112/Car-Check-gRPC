import 'dotenv/config';

type Config = {
  PORT: string;
};

export default (): Config => ({
  PORT: process.env.PORT,
});

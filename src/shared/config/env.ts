import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, NotEquals, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  dbURL: string;

  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jwt_secret')
  jwtSecret: string;
}

export const env: Env = plainToInstance(Env, {
  dbURL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
});

const envErrors = validateSync(env);
if (envErrors.length > 0) throw new Error(JSON.stringify(envErrors, null, 2));

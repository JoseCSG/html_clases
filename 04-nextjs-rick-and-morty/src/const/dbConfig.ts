interface DbConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  url: string;
}

export const dbConfig: DbConfig = {
  port: process.env.DB_PORT ? Number(process.env.DBPort) : 5432,
  host: process.env.DB_SERVER as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  url: process.env.POSTGRES_URL as string,
};

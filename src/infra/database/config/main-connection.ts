// import 'dotenv/config';
import { resolve } from 'path';
import { DataSourceOptions } from 'typeorm';

const dir = resolve(__dirname, '..');
export const dataSourceOptions: DataSourceOptions = {
  type: 'mssql',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  entities: [`${dir}/entities/*.{ts,js}`],
  migrations: [`${dir}/migrations/*.{ts,js}`],

  logging: false,
  options: {
    encrypt: false,
  },
};

// export default dataSourceOptions;

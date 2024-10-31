import dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    dialect: 'postgres',
    url: "postgresql://postgres:pFoqHcsoxIknbzulkdMqrYOfZmmYdMgr@autorack.proxy.rlwy.net:46776/railway",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};

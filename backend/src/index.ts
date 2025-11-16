import seedRunner from "../scripts/seed-runner";

export default {
  async bootstrap({ strapi }) {
    if (process.env.SEED === "true") {
      console.log("🌱 Starting database seed...");
      await seedRunner(strapi);    // <-- FIXED
      console.log("🌱 Seed completed!");
      process.exit(0);
    }
  }
};
import fs from "fs";
import path from "path";

export default async function seedServicesEN(strapi: any) {
    try {
        console.log("→ Seeding EN Services...");

        const root = process.cwd();
        const filePath = path.join(root, "scripts", "services-en.json");

        const enData = JSON.parse(fs.readFileSync(filePath, "utf8"));

        // Prevent duplicate seeding
        const existing = await strapi.entityService.findMany("api::service.service", {
            filters: { locale: "en" },
        });

        if (existing.length > 0) {
            console.log("⚠️ English services already exist — skipping");
            return;
        }

        for (let i = 0; i < enData.length; i++) {
            const item = enData[i];

            console.log("Seeding EN:", item.title);

            await strapi.entityService.create("api::service.service", {
                data: {
                    ...item,
                    locale: "en",     // Force English
                },
            });
        }

        console.log("✅ English services seeded successfully!");
    } catch (error) {
        console.error("❌ Error seeding EN services:", error);
    }
}

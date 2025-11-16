import seedMultiLang from "./seed-services";


export default async function seedServices(strapi: any) {
    return seedMultiLang(strapi);
}

export async function getServices(locale = "en") {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services?locale=${locale}&populate=*`,
        { cache: "no-store" }
    );

    const data = await res.json();
    return data.data;
}

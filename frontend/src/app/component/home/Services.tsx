"use client";


import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import { servicesData } from "@/app/dummy/homepage";

export default function Services() {
    return (
        <section className="container mx-auto px-4 py-12">
            <SectionTitle title="Our Services" subtitle="Explore what we offer" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {servicesData.map((service) => (
                    <Link
                        href={`/services/${service.slug}`}
                        key={service.slug}
                        className="border p-6 rounded-lg hover:shadow-md transition"
                    >
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

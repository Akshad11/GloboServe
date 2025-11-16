export interface ServiceSection {
    title: string;
    description: string;
    pointText: string;
    points: string[];
}

export interface ServiceData {
    title: string;
    intro: string;
    sections: ServiceSection[];
    conclusion: string;
}
export interface BlogShort {
    id: string
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    author?: string;
    tags?: string[];
}
export interface BlogFull {
    id: string
    slug: string;
    title: string;
    subtitle?: string;
    author?: string;
    date: string;
    tags?: string[];
    coverImage: string;
    gallery?: string[];
    sections: BlogSection[];

    conclusion?: string;

    seo?: {
        metaTitle: string;
        metaDescription: string;
        keywords?: string[];
    };
}

export interface BlogSection {
    title?: string;
    subtitle?: string;
    text?: string;
    points?: string[];
    quote?: string;
    image?: string;
}

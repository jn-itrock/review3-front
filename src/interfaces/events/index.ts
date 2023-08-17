

export interface HomeEvent {
    _id: string;
    lensId?: string | null;
    title: string;
    description: string;
    image: string;
    totalReviews: number;
    totalStarts: number;
    deletedAt?: string | null;
    reviews: [ReviewsEvents];
}

export interface ReviewsEvents {
    userId: string;
    description: string;
    stars: number;
    _id?: string | null;
    data?: string | null;
}
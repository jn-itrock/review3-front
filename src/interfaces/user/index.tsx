export interface IUser {
    avatar: string
    username: string
    date: string
}

export interface IEvent {
    id: string;
    logo: string,
    points: number,
    likes: number
    name: string
    rate: string
    country: string
    date: string
    reviews: IReview[]
    reviewsCount: number
}

export interface IReview{
    userId: IUser
    stars: number
    description: string
    _id: string;
    date: string;
    likes?: number | null
}
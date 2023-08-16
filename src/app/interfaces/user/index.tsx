export interface IUser {
    avatar: string
    username: string
    date: string
}

export interface IEvent {
    name: string
    rate: string
    country: string
    date: string
    reviews: IReview[]
    reviewsCount: string
}

export interface IReview{
    user: IUser
    rate: string
    description: string
    likes: string
}
export interface IUser {
    avatar: string
    username: string
    date: string
}

export interface IEvent {
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
    user: IUser
    rate: number
    description: string
    likes:  number
}
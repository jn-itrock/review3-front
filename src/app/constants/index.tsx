import { IEvent, IReview } from "../interfaces/user/index"

export const reviewsData: IReview[] = [{
    user: {
        avatar: "/avatars/avatar1.png",
        username: "Username_345",
        date: "month, 12th"
    },
    rate: "4.5",
    description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: "120"
},{
    user: {
        avatar: "/avatars/avatar1.png",
        username: "Username_345",
        date: "month, 12th"
    },
    rate: "4.5",
    description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: "120"
},{
    user: {
        avatar: "/avatars/avatar1.png",
        username: "Username_345",
        date: "month, 12th"
    },
    rate: "4.5",
    description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: "120"
},{
    user: {
        avatar: "/avatars/avatar1.png",
        username: "Username_345",
        date: "month, 12th"
    },
    rate: "4.5",
    description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: "120"
},{
    user: {
        avatar: "/avatars/avatar1.png",
        username: "Username_345",
        date: "month, 12th"
    },
    rate: "4.5",
    description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: "120"
},]

export const event: IEvent = {
    name: "Event Name",
    rate: "4.5",
    country: "Argentina",
    date: "08/16/23",
    reviews: reviewsData,
    reviewsCount: "1500",
}
import HomeClient from "./client";

export default async function Home() {

  // const data: Response = await fetch("http://192.168.0.115:3000/event");
const data: Response | null = null

  return <HomeClient data={data} />
}

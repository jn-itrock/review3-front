import HomeClient from "./client";

export default async function Home() {

  // Ejecuta la peticion en la page HOC y envia la informacion por props al child component
  const getData = Promise.resolve(1);


  return <HomeClient getData={getData} />
}

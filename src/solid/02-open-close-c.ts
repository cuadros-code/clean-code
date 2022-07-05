// import axios from "axios";

// Centralizar las clases donde tenemos dependencias 
// ya que al cambiar la implementacion del llamado solo se 
// realizara un cambio en un archivo y no muchos en diferentes archivos


// Adapter Class
export class HttpClient {

  // async get( url: string ) {
  //   const { data, status } = await axios.get(url);
  //   return { data, status };
  // }

  async get( url: string ) {
    const res = await fetch(url, { method: 'GET' })
    const data = await res.json()
    return { data, status: res.status };
  }

}
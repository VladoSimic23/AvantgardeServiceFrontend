import {createClient} from "@sanity/client";
const apiUrl = import.meta.env.VITE_APP_API_SANITY;

"n6wo2hxf"
export default createClient({
  projectId: "n6wo2hxf", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2023-09-03",
  useCdn: true
});

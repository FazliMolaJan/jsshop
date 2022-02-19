import jsshopapi from "../../JSON/jsshopapi.json";
export default async function handler(req, res) {
  await jsshopapi ? res.status(200).json(jsshopapi) : res.status(400).send();
}

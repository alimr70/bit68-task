export default async function handler(req, res) {
  const { type } = req.query
  try {
    const response = await fetch(`https://api-task.bit68.com/en/api/${type}/`)
    const data = await response.json()
    let results = [...data.results]
    while (data.next) {
      const newResponse = await fetch(data.next)
      const newData = await newResponse.json()
      results = [...results, ...newData.results]
      data.next = newData.next
    }
    return res.json(results)
  } catch (error) {
    throw new Error(error)
  }
}
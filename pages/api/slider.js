export default async function handler(req, res) {
  try {
    const response = await fetch('https://api-task.bit68.com/en/api/slider_image/')
    const data = await response.json()
    return res.json(data.results)
  } catch (error) {
    throw new Error('Something went wrong with slider!')
  }
}
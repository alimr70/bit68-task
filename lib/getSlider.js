export default async function getSlider() {
  try {
    const response = await fetch('https://api-task.bit68.com/en/api/slider_image/')
    const data = await response.json()
    return data.results
  } catch (error) {
    throw new Error(error)
  }
}
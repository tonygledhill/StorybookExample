export const getBackgroundColour = () => {
  const colour = window.localStorage.getItem('dashboard.backgroundColour')
  return colour ? JSON.parse(colour) : '{"backgroundColour": "#ffffff"}'
}

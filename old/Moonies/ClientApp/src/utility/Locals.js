function getPreColorsScheme()
{
  if(!window.matchMedia)return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function getInitialMode()
{
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userprefersDark = getPreColorsScheme();

  if(isReturningUser){//if the mode was saved -> dark/light
      return savedMode;
  }
  else if(userprefersDark){//if preferred color  scheme is dark -> dark
    return true;
  }
  else{//otherwise -> light
    return false;
  }
}
export {getPreColorsScheme, getInitialMode}
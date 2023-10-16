export async function logMovies() {
    const response = await fetch("http://127.0.0.1:8000/API/proyectos/");
    const movies = await response.json();
    return(movies)
  }


export async function logSkills() {
  const response = await fetch("http://127.0.0.1:8000/API/skills/");
  const skills = await response.json();
  return(skills)
}


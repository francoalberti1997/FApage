import React from 'react'
import img1 from "../projects/program1.jpg"
import img2 from "../projects/program2.png"
import "../projects/projects.css"
import {logMovies, logSkills} from "../projects/api_projects"
import { useState, useEffect } from 'react';
import Programacion from '../programacion/Programacion'
import mine from "../programacion/mine_fondo.png"
import Proyecto from '../Proyectos/Proyecto'



const Projects = () => {

    // PROYECTOS
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
    fetchData().then(data => {
    setMovieData(data);
    });
    }, []);

    async function fetchData() {
    try {
    const movies = await logMovies();
    return movies.map(movie => {
        const { titulo, subtitulo, descripcion, imagen } = movie;
        return { titulo, subtitulo, descripcion, imagen };
    });
    } catch (error) {
    console.error(error);
    }
    }

// SKILLS
const [skillsData, setSkillsData] = useState([]);

useEffect(() => {
  fetchSkills().then(data => {
    setSkillsData(data);
  });
}, []);

async function fetchSkills() {
  try {
    const skills = await logSkills();
    return skills.map(habilidad => {
      const { titulo, imagen } = habilidad;
      return { titulo, imagen };
    });
  } catch (error) {
    console.error(error);
  }
}

    return (
    <div className='project'>
        <div className="skills">
          <h1 className='shadow-lg'>
            Skills
          </h1>
          <section className='flex justify-center items-center gap-8 flex-wrap'>  
          {skillsData.map((skill, index) => (
              <Proyecto {...skill} index={index}/>
            )
            )
            }
          </section>
        </div>
        {/* Cargar todo esto desde una API */}
        <div className='demo' id='proyectos'>
        <h1>PROYECTOS</h1>

        {movieData.map((movie, index) => (
        <div className="dbox" key={index}>  
            <img src={movie.imagen} alt="" />
            <p>{movie.titulo}</p>
        </div>
        )
        )
        } 

        </div>
    </div>
  )
}

export default Projects

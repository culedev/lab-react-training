import {useState} from 'react'
import profiles from "../data/berlin.json"

const FaceBook = () => {

    const profileDiv = {
        display: "flex",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
    }

  return (
    <div>
        {profiles.map((eachProfile, i)=> {
            const isTeacher = eachProfile.isStudent === true ? "Student" : "Teacher"

          return <div key={eachProfile+i} style={profileDiv}>
                    <img src={eachProfile.img} alt="" width={"200px"}/>
                    <div>
                        <h3>First name: {eachProfile.firstName}</h3>
                        <h3>Last name: {eachProfile.lastName}</h3>
                        <h3>Country: {eachProfile.country}</h3>
                        <h3>Type: {isTeacher}</h3>
                    </div>
                </div>
        })}
    </div>
  )
}

export default FaceBook
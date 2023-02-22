import React from 'react'
import githubLogo from '../../assets/github.png'


const Footer = () => {
  return (
    <div>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            backgroundColor:"black",
            marginTop:"2rem",
            padding:"1.6rem"
        }}>
            <img style={{
                width:"10%",
                height:"10%",
                cursor:"pointer"

            }} onClick={()=> window.open("https://github.com/Shashankbk7", "_blank",)
            } src={githubLogo} alt="Github logo" />
            <h1 style={{
                color:"white"
            }}>Click on the icon to view my profile</h1>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'


const MappingContainer = (props:any) => {
  return (
    <div style={{
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
    }}>{props.children}</div>
  )
}

export default MappingContainer
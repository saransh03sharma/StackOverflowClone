import React from 'react'

const Avatar = ({children,borderRadius,backgroundColor,px,py,color,fontSize,cursor}) => {
  
  const style={
    borderRadius,
    backgroundColor,
    color:color || 'black',
    textAlign:"center",
    fontSize,
    padding:`${py} ${px}`,
    cursor:null || cursor,
    marginRight:'1px',
    
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar

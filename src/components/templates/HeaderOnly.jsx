
export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <div style={{height:"50px", backgroundColor:"pink"}}></div> 
      {children}
    </>
  )
}

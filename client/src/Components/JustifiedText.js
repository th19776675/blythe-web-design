const JustifiedText = (props) => {
  return (
    <div style=
    {{
      // backgroundColor: "grey",
      textAlign: "justify",
      display: "block",
      height: props.fontSize,
      fontSize: props.fontSize,
      letterSpacing: props.letterSpacing,
      width: props.width,
      fontFamily: props.fontFamily,
      // overflowY: "hidden"
    }}>
      {props.children}
      <span style=
      {{
        width: "100%",
        display: "inline-block",
      }}></span>
    </div>
  )
}

export default JustifiedText
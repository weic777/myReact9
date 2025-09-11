import "../css/pictures.css"

const Picture = ({data}) => {
    console.log(data);
  return (
    <div className="picture">
        <p>{data.photographer}</p>
        <div className="imgContainer">
            <img src={data.src.large} alt="" />
        </div>
        <p>
            Download Image:
            <a href={data.src.large} target="_blank">Click Here</a>
        </p>

        </div>
  )
}

export default Picture
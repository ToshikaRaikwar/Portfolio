import { Col } from "react-bootstrap"

export const ProjectCard=({title,description,imgUrl
})=>{
   return(
    <Col sr={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl}/>
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>
                    {description}
                </span>
            </div>
        </div>
    </Col>
   ) 
}
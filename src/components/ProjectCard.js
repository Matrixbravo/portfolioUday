import { Col } from "react-bootstrap"

export const ProjectCard = ({title, descrition, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{descrition}</span>
                </div>
            </div>
        </Col>
    )
}
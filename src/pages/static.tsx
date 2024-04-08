import { GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

<<<<<<< HEAD
interface ApiResponse {
    name: string
    timestamp: Date
}
 
export const getStaticProps: GetStaticProps = async () => {

        const staticData:  ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json());
        
        return {
            props: {
                staticData
            },
            revalidate: 10
        }
    } 



const Static: NextPage = (props: {
    children?: ReactNode
    staticData?: ApiResponse
    
=======
interface ApiResponse{
    name: string
    timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
    const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
    
   return {
    props: {
        staticData
    },
    revalidate: 10
   }
}

const Static: NextPage = (props: {
    children?: ReactNode 
    staticData?: ApiResponse   
>>>>>>> 8d4fa4fb474b0c21764b9b25e91a4bce773fab84
}) => {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(() => {
        fetchData()
    }, [])

<<<<<<< HEAD
    const fetchData = async () => {      
            const data = await fetch("/api/hello").then(res => res.json())
            setClientSideData(data)         
    }
   

    return (
        <Container tag="main">
            <h1 className="my-5">
                Como funcionam as renderizações do Next.js
            </h1>

            <Row>
                <Col>
                    <h3>
                        Gerado estaticamente durante o build:+
=======
    const  fetchData = async () => {
        const data = await fetch("/api/hello/").then(res => res.json())
        setClientSideData(data)
    }
    return (
        <Container tag="main">
            <h1 className="my-5">
                Como funciona as renderizações de Next.js
            </h1>

            <Row>
                
                 <Col>
                    <h3>
                        Gerado estaticamente durante o build:
>>>>>>> 8d4fa4fb474b0c21764b9b25e91a4bce773fab84
                    </h3>
                    <h2>
                        {props.staticData?.timestamp.toString()}
                    </h2>
<<<<<<< HEAD
                </Col>

                <Col>
                    <h3>
                        Gerado no cliente:
                    </h3>
                    <h2>
                        {clientSideData?. timestamp.toString()}
                    </h2>
                </Col>
            </Row>

        </Container>
    ) 
=======
                 
                 </Col>

                 <Col>
                   <h3>
                    Gerado no cliente:
                   </h3>
                   <h2>
                    {clientSideData?.timestamp.toString()}
                   </h2>
                 </Col>
               

            </Row>
        </Container>
    )
>>>>>>> 8d4fa4fb474b0c21764b9b25e91a4bce773fab84
}
export default Static
import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

<<<<<<< HEAD
interface ApiResponse {
    name: string
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {    
        const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
        
        return {
            props: {
                serverSideData
            }
        }
    } 



const Dynamic: NextPage = (props: {
    children?: ReactNode
    serverSideData?: ApiResponse
}) => {
     const [clientSideData, setClientSideDAta] = useState<ApiResponse>()

     useEffect(() => {  
        fetchData()
     }, [])

     const fetchData = async () => {
        const data = await fetch("/api/hello").then(res => res.json())
        setClientSideDAta(data)
     }


    return (
        <Container tag="main">
            <h1 className="my-5">
                Como funcionam as renderizações do Next.js
            </h1>

            <Row>
                <Col>
=======
interface ApiResponse{
    name: string
    timestamp: Date
}
export const getServerSideProps: GetServerSideProps = async () => {
    const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
    
    return {
        props: {
            serverSideData
        }
    }
}

const Dynamic: NextPage = (props: {
    children?: ReactNode 
    serverSideData?: ApiResponse
}) => {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(() => {
        fetchData()
    }, [])

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
>>>>>>> 8d4fa4fb474b0c21764b9b25e91a4bce773fab84
                    <h3>
                        Gerado no servidor:
                    </h3>
                    <h2>
                        {props.serverSideData?.timestamp.toString()}
                    </h2>
<<<<<<< HEAD
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
export default Dynamic
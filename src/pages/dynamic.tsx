import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
    name: string
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
        console.log("Dados do servidor:", serverSideData); 
        return {
            props: {
                serverSideData
            }
        }
    } catch (error) {
        console.error("Erro ao buscar dados do servidor:", error);
        return {
            props: {
                serverSideData: null 
            }
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

    const fetchData = async () => {
        try {
            const data = await fetch("/api/hello").then(res => res.json())
            console.log("Dados do cliente:", data); 
            setClientSideData(data)
        } catch (error) {
            console.error("Erro ao buscar dados do cliente:", error);
        }
    }
    console.log("Props de servidor:", props.serverSideData);

    return (
        <Container tag="main">
            <h1>
                Como funcionam as renderizações do Next.js
            </h1>

            <Row>
                <Col>
                    <h3>
                        Gerado no servidor:
                    </h3>
                    <h2>
                        {props.serverSideData ? props.serverSideData.timestamp.toString() : 'Carregando...'}
                    </h2>
                </Col>

                <Col>
                    <h3>
                        Gerado no cliente:
                    </h3>
                    <h2>
                        {clientSideData ? clientSideData.timestamp.toString() : 'Carregando...'}
                    </h2>
                </Col>
            </Row>

        </Container>
    ) 
}
export default Dynamic
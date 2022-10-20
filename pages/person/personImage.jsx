import Image from "next/image";
import Link from "next/link";
import { Button } from 'ui-storybook-web';
import Layout from "../layout/layout";

export default function personImage() {

    return(
        <Layout title="Imagen Persona">
            <Image src={"/img/1.png"}
                   width={600}
                   height={600}
                   alt="Mi imagen"
           />
            <br/>
            <Button
                size="large"
                typeButton="secondary"
            >
                <Link href="/demo-itau/pages">
                    <a>Volver Inicio</a>
                </Link>
            </Button>

            <br/>

            <Button
                size="large"
                typeButton="secondary"
            >
                <Link href="/person">
                    <a>Volver a Persona</a>
                </Link>
            </Button>
        </Layout>
    )
}
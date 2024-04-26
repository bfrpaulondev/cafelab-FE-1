import CreateCustomerForm from "./components/shared/CreateCustomerForm.jsx";
import SidebarWithHeader from "./components/shared/SideBar.jsx";
import {Stack, Text} from "@chakra-ui/react";
import ContactUsForm from "./components/shared/ContactUsForm.jsx";

const Contacts = () => {

    return (

        <SidebarWithHeader>
            <Text className="headline mt-5" fontSize={"3xl"}>Entre em contacto</Text>
            <Stack m={4} justify="flex-start" align="center" spacing="24px">
            <div className="grid">
                <div className="grid__item medium-up--four-fifths medium-up--push-one-tenth">
                    <div className="rte rte--contact">
                        <p><strong>WhatsApp</strong>&nbsp;</p>
                        <p>(+351) 214 420 636</p>
                        <p><strong>Email</strong></p>
                        <p>cafelabpt@gmail.com</p>
                        <p><strong>Redes Sociais - Mensagem Direta</strong></p>
                        <p><a href="https://www.instagram.com/cafelablisbon/" target="_blank" title="Instagram" rel="noopener noreferrer"
                              aria-describedby="a11y-new-window-external-message">Instagram</a></p>
                        <p><a href="https://www.facebook.com/cafelablisbon/" target="_blank" title="Facebook" rel="noopener noreferrer"
                              aria-describedby="a11y-new-window-external-message">Facebook</a></p>
                    </div>
                </div>
            </div>
                <ContactUsForm />
            </Stack>
        </SidebarWithHeader>
    );
}

export default Contacts;
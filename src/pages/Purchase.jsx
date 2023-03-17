import { useNavigate } from "react-router-dom"
import { PurchaseBack, PurchasePage, PurchaseTextOne, PurchaseTextTwo } from "../styles/StyledPurchase"


export const Purchase = () => {
    const backToHome = useNavigate()

    return(
        <PurchasePage>
            <PurchaseTextOne>Ops, parece que a demanda pelo item está em alta ;-;</PurchaseTextOne>
            <PurchaseTextTwo>Por favor, retorne em outro momento até que mais unidades do mesmo estejam em estoque.</PurchaseTextTwo>
            <PurchaseBack onClick={() => backToHome('/')}>Voltar para a home</PurchaseBack>
        </PurchasePage>
    )
}
import { useNavigate } from "react-router-dom"
import { ReserveButton } from "../styles/StyledReserve"


export const Reserve = () => {
    const goToPurchase = useNavigate()

    return(
        <>
            <ReserveButton onClick={() => goToPurchase('/purchase')}>Reserve aqui!</ReserveButton>
        </>
    )
}